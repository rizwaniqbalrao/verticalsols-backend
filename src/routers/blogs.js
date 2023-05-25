import { Router } from "express";
import Blogs from "../models/blogs.js";
import { MongoClient, ObjectId } from "mongodb";
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
      const titleHyphens = blogTitle.replace(/\s/g, "-");
      const blog = await Blogs.findOne({ titleHyphens: titleHyphens });

      if (!blog) {
        const blogHyphens = blogCategorie.replace(/\s/g, "-");
        const authorId = new ObjectId(u_id);
        const addBlog = await Blogs.create({
          // author: {
          //   emailAddress: author.emailAddress,
          //   fullName: author.fullName,
          //   profilePic: author.profilePic,
          // },
          author: authorId,
          blogTitle: blogTitle,
          blogThumbnail: result,
          blogDescription: blogDescription,
          description: description,
          blogCategorie: blogCategorie,
          titleHyphens: titleHyphens,
          blogHyphens: blogHyphens,
        });
        if (addBlog) {
          return res.status(200).send({
            success: true,
            message: "Blog Added Successfully",
          });
        } else {
          return res.status(200).send({
            success: false,
            message: "Error happened",
          });
        }
      }
      return res.status(200).send({
        success: false,
        message: "Title Already Exits Please Choose a new One",
      });
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
      blogTitle,
    } = req.body;
    const blog = await Blogs.findOne({ _id: blogId });

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
        blogTitle: blogTitle,
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
        return res.status(200).send({
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
      return res.status(200).send({
        success: false,
        message: "Blog Not Found",
      });
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
    const blog = await Blogs.aggregate([
      {
        $lookup: {
          from: "admins",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
      },
    ]);
    if (blog) {
      const populatedBlogs = blog.map((blogs) => {
        const authorObject = blogs.author[0];
        return {
          ...blogs,
          author: {
            fullName: authorObject.fullName,
            profilePic: authorObject.profilePic,
            emailAddress: authorObject.emailAddress,
          },
        };
      });
      const reversedBlogs = [...populatedBlogs].reverse();
      res.status(200).json({
        status: true,
        message: "Blogs Found Successfully",
        data: reversedBlogs,
      });
    }
    res.status(200).json({ status: false, message: "Blog Not Found" });
  } catch (error) {}
});
router.post("/getblogsadmin", verifyAuthToken(), async (req, res) => {
  try {
    const u_id = await getUserIdFromToken(req);
    const blogs = await Blogs.find({ author: new ObjectId(u_id) });
    if (blogs) {
      res.status(200).json({
        data: blogs,
        status: true,
        message: "Blogs Find Successfully",
      });
    }
    res.status(200).json({
      data: blogs,
      status: false,
      message: "Blogs Not Found",
    });
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
    const { titleHyphens } = req.body;
    const blog = await Blogs.findOne({ titleHyphens: titleHyphens });
    if (blog) {
      const newBlog = await Blogs.aggregate([
        {
          $match: { _id: blog._id },
        },
        {
          $lookup: {
            from: "admins",
            localField: "author",
            foreignField: "_id",
            as: "author",
          },
        },
      ]);
      const populatedBlogs = newBlog.map((blogs) => {
        const authorObject = blogs.author[0];
        return {
          ...blogs,
          author: {
            fullName: authorObject.fullName,
            profilePic: authorObject.profilePic,
            emailAddress: authorObject.emailAddress,
          },
        };
      });
      console.log(populatedBlogs);
      return res.status(200).send({
        success: true,
        message: "Blog added successfully",
        data: populatedBlogs,
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
    const blog = await Blogs.find({});
    if (blog) {
      const filterTags = blog.map((value) => {
        return value.blogHyphens;
      });
      const uniqueNames = [];
      const encounteredNames = {};
      filterTags.forEach((item) => {
        if (!encounteredNames[item]) {
          uniqueNames.push(item);
          encounteredNames[item] = true;
        }
      });

      return res.status(200).send({
        success: true,
        message: "Blog not found",
        data: uniqueNames,
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

router.post("/filterblogs", async (req, res) => {
  try {
    const { blogCategorie } = req.body;
    const blog = await Blogs.find({ blogHyphens: blogCategorie });
    if (blog) {
      return res.status(200).send({
        success: true,
        message: "Blog Find successfully",
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
export default router;
