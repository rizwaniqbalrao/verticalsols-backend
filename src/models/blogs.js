import { model, Schema } from "mongoose";

const BlogsSchema = new Schema(
  {
    description: String,
    blogTag: String,
    blogThumbnail: String,
    blogDescription: String,
    blogCategorie: String,
    author: {},
  },
  { timestamps: { createdAt: "created_at" } }
);

const Blogs = model("blogs", BlogsSchema);

export default Blogs;
