import { Router } from "express";
import TeamMembers from "../models/teammembers.js";
import { verifyAuthToken } from "../services/authentication.js";
import { deleteImage, s3ImageUpload } from "../utilities/aws.js";
const router = Router();

router.post("/addmember", verifyAuthToken(), async (req, res) => {
  try {
    const { name, designation, picture } = req.body;
    const s3Image = await s3ImageUpload(picture);
    const addTeamMembers = await TeamMembers.create({
      name: name,
      picture: s3Image,
      designation: designation,
    });
    if (addTeamMembers) {
      return res.status(200).send({
        success: true,
        message: "Member Added Successfully",
      });
    } else {
      return res.status(204).send({
        success: false,
        message: "Error happened",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});

router.post("/deletemember", verifyAuthToken(), async (req, res) => {
  try {
    const { teamId } = req.body;
    const teamMember = await TeamMembers.findOne({ _id: teamId });
    if (teamMember) {
      const deleteMember = await teamMember.deleteOne({ _id: teamId });
      const deleteImageAws = await deleteImage(teamMember.picture);
      if (deleteMember) {
        return res.status(200).send({
          success: true,
          message: "Blog Deleted Successfully",
        });
      }
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
router.get("/getmembers", async (req, res) => {
  try {
    const blogs = await TeamMembers.find({});
    res.status(200).json({ data: blogs });
  } catch (error) {}
});
export default router;
