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
    selectRequirments: String,
    writeMessage: String,
    file: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const ContactUs = model("contactus", ContactUsSchema);

const MakeaCallSchema = new Schema(
  {
    fullName: String,
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    writeMessage: String,
    date: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const MakeaCall = model("makecall", MakeaCallSchema);
export { ContactUs, MakeaCall };
