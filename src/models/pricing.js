import { model, Schema, Document } from "mongoose";

const PricingSchema = new Schema(
  {
    planCategory: String,
    planPrice: String,
    category: String,
    planPackages: [],
    author: {},
  },
  { timestamps: { createdAt: "created_at" } }
);

const Pricing = model("pricing", PricingSchema);
export default Pricing;
