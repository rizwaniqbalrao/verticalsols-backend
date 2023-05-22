import { model, Schema } from "mongoose";

const BlogsSchema = new Schema(
  {
    description: String,
    blogTitle: String,
    blogThumbnail: String,
    blogDescription: String,
    blogCategorie: String,
    titleHyphens: String,
    author: {},
  },
  { timestamps: { createdAt: "created_at" } }
);

const Blogs = model("blogs", BlogsSchema);

export default Blogs;
