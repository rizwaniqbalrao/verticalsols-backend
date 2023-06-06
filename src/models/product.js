import { model, Schema, Document } from "mongoose";

const ProductSchema = new Schema(
  {
    productCategorie: String,
    productThumbnail: String,
    productDescription: String,
    description: String, 
    productTitle: String,
    productprice : String,
    author: {},
  },
  { timestamps: { createdAt: "created_at" } }
);

const Product = model("product", ProductSchema);
export default Product;
