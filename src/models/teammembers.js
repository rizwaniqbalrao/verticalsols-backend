import { model, Schema } from "mongoose";

const TeamMembersSchema = new Schema(
  {
    teamId: String,
    name: String,
    designation: String,
    picture: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const TeamMembers = model("teammembers", TeamMembersSchema);

export default TeamMembers;
