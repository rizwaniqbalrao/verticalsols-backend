import { model, Schema, Document } from "mongoose";

const NewsLetterSchema = new Schema(
  {
    emailAddress: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const NewsLetter = model("newsletter", NewsLetterSchema);
export default NewsLetter;
