import { Router } from "express";
import Blogs from "../models/blogs.js";
import multer from "multer";
//import { s3uploadImage, unlinkFile, upload } from "../utilities/aws.js";
import { deleteImage, s3ImageUpload, s3Upload } from "../utilities/aws.js";
import {
  getUserIdFromToken,
  verifyAuthToken,
} from "../services/authentication.js";
import Admin from "../models/admin.js";

const router = Router();

router.post("/addblog", verifyAuthToken(), async (req, res) => {
  try {
    const {
      blogThumbnail,
      blogTag,
      blogDescription,
      description,
      blogCategorie,
    } = req.body;
    const u_id = await getUserIdFromToken(req);
    if (u_id) {
      const author = await Admin.findOne({ _id: u_id });
      const result = await s3ImageUpload(blogThumbnail);
      const addBlog = await Blogs.create({
        author: {
          fullName: author.fullName,
          profilePic: author.profilePic,
        },
        blogTag: blogTag,
        blogThumbnail: result,
        blogDescription: blogDescription,
        description: description,
        blogCategorie: blogCategorie,
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
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
router.post("/editblog", verifyAuthToken(), async (req, res) => {
  try {
    const {
      blogId,
      blogThumbnail,
      blogTag,
      blogDescription,
      description,
      blogCategorie,
    } = req.body;
    const blog = await Blogs.findOne({ _id: blogId });
    if (blog) {
      // const result = await s3ImageUpload(blogThumbnail);
      const addBlog = await blog.updateOne({
        blogTag: blogTag,
        // blogThumbnail: result,
        blogDescription: blogDescription,
        description: description,
        blogCategorie: blogCategorie,
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
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
router.post("/deleteblog", verifyAuthToken(), async (req, res) => {
  try {
    const { blogId } = req.body;
    const blog = await Blogs.findOne({ _id: blogId });
    if (blog) {
      const deleteBlog = await blog.deleteOne({ _id: blogId });
      const deleteImageAws = await deleteImage(blog.blogThumbnail);
      if (deleteBlog) {
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
router.post("/addeditorpic", async (req, res) => {
  try {
    const { editorImage, editorImageNew } = req.body;
    const addEditorPic = await s3ImageUpload(editorImage);
    return res.status(200).send({
      success: true,
      message: "Picture added successfully",
      data: addEditorPic,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
router.get("/getblogs", async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    res.status(200).json({ data: blogs });
  } catch (error) {}
});

export default router;
