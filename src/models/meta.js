import { model, Schema, Document } from "mongoose";

const MetaSchema = new Schema(
  {
    metaTitle: String,
    metaDescription: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const Meta = model("meta", MetaSchema);
export default Meta;
