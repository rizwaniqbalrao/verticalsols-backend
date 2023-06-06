import { model, Schema, Document } from "mongoose";

const PortfolioSchema = new Schema(
  {
    portfolioCategorie: String,
    portfolioThumbnail: String,
    portfolioDescription: String,
    description: String, 
    portfolioTitle: String,
    author: {},
  },
  { timestamps: { createdAt: "created_at" } }
);

const Portfolio = model("portfolio", PortfolioSchema);
export default Portfolio;
