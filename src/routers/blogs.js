import { Router } from "express";
import Blogs from "../models/blogs.js";
import multer from "multer";
import { s3uploadImage, unlinkFile, upload } from "../utilities/aws.js";
import {
  getUserIdFromToken,
  verifyAuthToken,
} from "../services/authentication.js";

const router = Router();

router.post(
  "/addblog",
  upload.single("image"),
  verifyAuthToken(),
  async (req, res) => {
    try {
      const { blogTag, blogDescription, description } = req.body;
      const file = req.file;
      const result = await s3uploadImage(file);
      console.log("result===>>>>>", result);
      await unlinkFile(file.path);
      const locationPath = result.Key;
      const u_id = await getUserIdFromToken(req);
      const addBlog = await Blogs.create({
        userId: u_id,
        blogTag: blogTag,
        blogImage: locationPath,
        blogDescription: blogDescription,
        description: description,
      });
      if (addBlog) {
        return res.status(200).send({
          success: true,
          message: "Blog Added Successfully",
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
  }
);

router.get("/getblogs", async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    res.status(200).json({ data: blogs });
  } catch (error) {}
});

export default router;
