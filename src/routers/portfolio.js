import { Router } from "express";
import {
  getUserIdFromToken,
  verifyAuthToken,
} from "../services/authentication.js";
import Pricing from "../models/pricing.js";
import Admin from "../models/admin.js";
import { deleteImage, s3ImageUpload } from "../utilities/aws.js";
import Portfolio from "../models/portfolio.js";

const router = Router();

router.post("/addportfolio", verifyAuthToken(), async (req, res) => {
  try {
    const {
      portfolioCategorie,
      portfolioThumbnail,
      portfolioDescription,
      portfolioTitle,
      description,
    } = req.body;
    const u_id = await getUserIdFromToken(req);
    const author = await Admin.findOne({ _id: u_id });
    if (author) {
      const result = await s3ImageUpload(portfolioThumbnail);
      const addPortfolio = await Portfolio.create({
        author: {
          fullName: author.fullName,
          emailAddress: author.emailAddress,
        },
        portfolioTitle: portfolioTitle,
        portfolioCategorie: portfolioCategorie,
        portfolioThumbnail: result,
        portfolioDescription: portfolioDescription,
        description: description,
      });
      return res.status(200).json({
        status: true,
        message: "Successfully Added a Portfolio",
      });
    }
    return res.status(202).json({
      status: false,
      message: "User Not Found",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
router.post("/editportfolio", verifyAuthToken(), async (req, res) => {
  try {
    const {
      portfolioId,
      portfolioTitle,
      portfolioCategorie,
      portfolioThumbnail,
      portfolioDescription,
    } = req.body;
    const portfolio = await Portfolio.findOne({ _id: portfolioId });

    if (portfolio) {
      if (portfolioThumbnail) {
        const result = await s3ImageUpload(portfolioThumbnail);
        await portfolio.updateOne({ blogThumbnail: result });
        return res.status(200).send({
          success: true,
          message: "Portfolio Update Successfully",
        });
      }
      const editPortfolio = await portfolio.updateOne({
        portfolioTitle: portfolioTitle,
        portfolioCategory: portfolioCategorie,
        portfolioThumbnail: portfolio.portfolioThumbnail,
        portfolioDescription: portfolioDescription,
      });
      if (editPortfolio) {
        return res.status(200).send({
          success: true,
          message: "Portfolio Update Successfully",
        });
      } else {
        return res.status(204).send({
          success: false,
          message: "Error happened",
        });
      }
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
router.post("/deleteportfolio", verifyAuthToken(), async (req, res) => {
  try {
    const { portfolioId } = req.body;
    const portfolio = await Portfolio.findOne({ _id: portfolioId });
    if (portfolio) {
      const deletePortfolio = await portfolio.deleteOne({ _id: portfolioId });
      const deleteImageAws = await deleteImage(portfolio.portfolioThumbnail);
      if (deletePortfolio) {
        return res.status(200).send({
          success: true,
          message: "Portfolio Deleted Successfully",
        });
      }
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
router.get("/getportfolio", async (req, res) => {
  try {
    const portfolio = await Portfolio.find({});
    res.status(200).json({ data: portfolio });
  } catch (error) {}
});
router.post("/getsingleportfolio", async (req, res) => {
  try {
    const { portfolioCategorie, portfolioId } = req.body;
    const portfolio = await Portfolio.find({
      portfolioCategorie: portfolioCategorie,
    });
    res.status(200).json({ status: true, data: portfolio });
  } catch (error) {
    res.status(202).json({ status: false, message: error.message });
  }
});
router.post("/getportfoliodetails", async (req, res) => {
  try {
    const { portfolioId } = req.body;
    const portfolio = await Portfolio.findOne({
      _id: portfolioId,
    });
    if (portfolio) {
      return res.status(200).json({
        success: true,
        message: "Portfolio Find Successfully",
        data: portfolio,
      });
    }
  } catch (error) {
    res.status(202).json({ status: false, message: error.message });
  }
});

router.post("/getrecentportfolios", async (req, res) => {
  try {
    const portfolio = await Portfolio.find({});
    const recentPortfolios = portfolio.slice(0, 31);
    if (portfolio) {
      return res.status(200).json({
        success: true,
        message: "Portfolio Find Successfully",
        data: recentPortfolios,
      });
    }
  } catch (error) {
    res.status(202).json({ status: false, message: error.message });
  }
});

export default router;
