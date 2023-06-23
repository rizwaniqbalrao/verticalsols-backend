import { model, Schema, Document } from "mongoose";

const ProductPricingSchema = new Schema(
  {
    fullName: String,
    emailAddress: String,
    projectRequirmentReady: String,
    peopleWorking: String,
    appName: String,
    writeMessage: String,
    author: {},
  },
  { timestamps: { createdAt: "created_at" } }
);

const ProductPricing = model("productpricing", ProductPricingSchema);
export default ProductPricing;
