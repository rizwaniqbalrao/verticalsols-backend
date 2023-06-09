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
    const { fullName, emailAddress, password, role } = req.body;
    const user = await Admin.findOne({
      emailAddress: emailAddress.toLowerCase(),
    });
    if (!user) {
      const u_id = await getUserIdFromToken(req);
      const subAdmin = await Admin.create({
        fullName: fullName,
        emailAddress: emailAddress.toLowerCase(),
        password: await hashPassword(password),
        profilePic: "",
        role: role,
        adminId: u_id,
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
    return res.status(200).send({
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

router.post("/getsubadmin", verifyAuthToken(), async (req, res) => {
  try {
    const u_id = await getUserIdFromToken(req);
    if (u_id) {
      const subAdmin = await Admin.find({ adminId: u_id });
      return res.status(200).json({
        status: true,
        data: subAdmin,
        message: "User Find Successfully",
      });
    }
    return res.status(200).json({ status: false, message: "User not Found" });
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: error.message,
    });
  }
});
router.post("/editprofile", verifyAuthToken(), async (req, res) => {
  try {
    const { fullName, password, profilePic } = req.body;
    const u_id = await getUserIdFromToken(req);
    const user = await Admin.findOne({ _id: u_id });
    if (user) {
      if (password) {
        const bcryptPassword = await hashPassword(password);
        const editUser = await user.updateOne({
          fullName: fullName,
          password: bcryptPassword,
          profilePic: profilePic
            ? await s3ImageUpload(profilePic)
            : user.profilePic,
        });
        return res.status(200).json({
          status: true,
          message: "Profile Updated Successfully",
          data: user,
        });
      }
      const editUser = await user.updateOne({
        fullName: fullName,
        profilePic: profilePic
          ? await s3ImageUpload(profilePic)
          : user.profilePic,
      });
      return res.status(200).json({
        status: true,
        message: "Profile Updated Successfully",
        data: user,
      });
    }
    return res.status(200).json({ status: false, message: "User not Found" });
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: error.message,
    });
  }
});

router.post("/singleuser", verifyAuthToken(), async (req, res) => {
  try {
    const u_id = await getUserIdFromToken(req);
    const user = await Admin.findOne({ _id: u_id });
    if (user) {
      return res
        .status(200)
        .json({ status: true, message: "User Found Successfully", data: user });
    }
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: error.message,
    });
  }
});

router.post("/alluser", verifyAuthToken(), async (req, res) => {
  try {
    const u_id = await getUserIdFromToken(req);
    if (u_id) {
      const users = await Admin.find({ adminId: u_id });
      return res.status(200).json({
        status: true,
        message: "Users Found Successfully",
        data: users,
      });
    }
    return res.status(200).json({
      status: false,
      message: "Users Not Found",
    });
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: error.message,
    });
  }
});
export default router;
