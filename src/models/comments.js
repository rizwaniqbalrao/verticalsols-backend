import { model, Schema, Document } from "mongoose";

const CommentsSchema = new Schema(
  {
    blogId: String,
    userName: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const Comments = model("comments", CommentsSchema);
export default Comments;
