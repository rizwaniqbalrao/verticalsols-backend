import { Router } from "express";
import Admin from "../models/admin.js";
import { comparePassword, hashPassword } from "../utilities/passwordUtils.js";
import {
  generateAccessToken,
  getUserIdFromToken,
  verifyAuthToken,
} from "../services/authentication.js";
//import { s3ImageUpload, unlinkFile, upload } from "../utilities/aws.js";
import { s3ImageUpload } from "../utilities/aws.js";
const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { emailAddress, password } = req.body;
    const adminEmail = emailAddress.toLowerCase();
    const adminData = await Admin.findOne({ emailAddress: adminEmail });
    if (adminData) {
      const checkPassword = await comparePassword(
        password,
        adminData?.password
      );
      if (adminData && checkPassword) {
        return res.status(200).send({
          status: true,
          message: "Admin logged in successfully",
          data: adminData,
        });
      }
    }
    return res.status(203).send({
      status: false,
      message: "Wrong email or password",
    });
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: error.message,
    });
  }
});
router.post("/addsubadmin", verifyAuthToken(), async (req, res) => {
  try {
    const { profilePic, fullName, emailAddress, password, role } = req.body;

    const user = await Admin.findOne({
      emailAddress: emailAddress.toLowerCase(),
    });
    if (!user) {
      const result = await s3ImageUpload(profilePic);
      const subAdmin = await Admin.create({
        fullName: fullName,
        emailAddress: emailAddress.toLowerCase(),
        password: await hashPassword(password),
        profilePic: result,
        role: role,
      });
      if (subAdmin) {
        const token = await generateAccessToken(subAdmin);
        await subAdmin.updateOne({ auth_token: token });
        return res.status(200).send({
          status: true,
          message: "User Created Successfully",
          data: subAdmin,
        });
      }
    }
    return res.status(203).send({
      status: false,
      message: "User Already Registered",
    });
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: error.message,
    });
  }
});

export default router;
