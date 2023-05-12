import { model, Schema, Document } from "mongoose";

const ProjectSchema = new Schema(
  {
    projectCategory: String,
    projectPicture: String,
    projectDescription: String,
    author: {},
  },
  { timestamps: { createdAt: "created_at" } }
);

const Project = model("project", ProjectSchema);
export default Project;
