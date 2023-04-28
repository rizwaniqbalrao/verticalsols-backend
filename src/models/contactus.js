import { model, Schema, Document } from "mongoose";

const ContactUsSchema = new Schema(
  {
    fullName: String,
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    listType: String,
    selectRequirments: String,
    writeMessage: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const ContactUs = model("contactus", ContactUsSchema);
export default ContactUs;
