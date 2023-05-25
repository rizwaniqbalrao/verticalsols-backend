import { model, Schema, mongoose } from "mongoose";

const BlogsSchema = new Schema(
  {
    description: String,
    blogTitle: String,
    blogThumbnail: String,
    blogDescription: String,
    blogCategorie: String,
    titleHyphens: String,
    blogHyphens: String,
    authorId: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Blogs = model("blogs", BlogsSchema);

export default Blogs;
