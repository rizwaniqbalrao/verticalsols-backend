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
      blogTitle,
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
        blogTitle: blogTitle,
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
    console.log("blog==>>>>>>", blog);
    if (blog) {
      if (blogThumbnail) {
        const result = await s3ImageUpload(blogThumbnail);
        await blog.updateOne({ blogThumbnail: result });
        return res.status(200).send({
          success: true,
          message: "Pic Update Successfully",
        });
      }
      const addBlog = await blog.updateOne({
        blogTag: blogTag,
        blogDescription: blogDescription,
        description: description,
        blogThumbnail: blog.blogThumbnail,
        blogCategorie: blogCategorie,
      });
      if (addBlog) {
        return res.status(200).send({
          success: true,
          message: "Blog Update Successfully",
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
    const { editorImage } = req.body;
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
router.post("/addcomment", async (req, res) => {
  try {
    const { blogId, userName, emailAddress, comment } = req.body;
    const blog = await Blogs.findOne({ _id: blogId });
    if (blog) {
    }
  } catch (error) {}
});
router.post("/singleblog", async (req, res) => {
  try {
    const { blogId } = req.body;
    console.log("blogId==>>>>", blogId);
    const blog = await Blogs.findOne({ _id: blogId });
    if (blog) {
      return res.status(200).send({
        success: true,
        message: "Blog added successfully",
        data: blog,
      });
    } else {
      return res.status(202).send({
        success: false,
        message: "Blog not found",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
router.post("/recentblogs", async (req, res) => {
  try {
    const blog = await Blogs.find({});
    if (blog) {
      const recentBlogs = blog.slice(-3);
      return res.status(200).send({
        success: true,
        message: "Blog not found",
        data: recentBlogs,
      });
    } else {
      return res.status(202).send({
        success: false,
        message: "Blog not found",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
router.post("/filtertags", async (req, res) => {
  try {
    const { blogCategory } = req.body;
    const blog = await Blogs.find({});
    if (blog) {
      const filterTags = blog.filter((value) => {
        let category = value.blogCategorie === "API";
        console.log(category == true);
      });
      console.log("filterTags==>>>>>", filterTags);
      return res.status(200).send({
        success: true,
        message: "Blog not found",
        data: filterTags,
      });
    } else {
      return res.status(202).send({
        success: false,
        message: "Blog not found",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});

export default router;
