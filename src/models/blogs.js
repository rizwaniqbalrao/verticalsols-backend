import { model, Schema } from "mongoose";

const BlogsSchema = new Schema(
  {
    description: String,
    blogTag: String,
    blogImage: String,
    blogDescription: String,
    userId: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const Blogs = model("blogs", BlogsSchema);

export default Blogs;
