import { model, Schema } from "mongoose";

const AdminSchema = new Schema(
  {
    fullName: String,
    emailAddress: String,
    password: String,
    auth_token: String,
    profilePic: String,
    role: String,
    adminId: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const Admin = model("admin", AdminSchema);

export default Admin;
