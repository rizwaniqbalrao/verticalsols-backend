import { Router } from "express";
import {
  getUserIdFromToken,
  verifyAuthToken,
} from "../services/authentication.js";
import Pricing from "../models/pricing.js";
import Admin from "../models/admin.js";

const router = Router();

router.post("/addpriceplan", verifyAuthToken(), async (req, res) => {
  try {
    const { category, planCategory, planPackages, planPrice, priceDiscount } =
      req.body;
    const u_id = await getUserIdFromToken(req);
    const author = await Admin.findOne({ _id: u_id });
    const checkPricing = await Pricing.findOne({
      category: category,
      planCategory: planCategory,
    });
    if (checkPricing) {
      return res.status(202).json({
        status: false,
        message: `${planCategory} Category of ${category} Already Added`,
      });
    } else {
      if (author) {
        const addPricePlan = await Pricing.create({
          author: {
            fullName: author.fullName,
            emailAddress: author.emailAddress,
          },
          planCategory: planCategory,
          planPackages: planPackages,
          planPrice: planPrice,
          category: category,
          priceDiscount: priceDiscount,
        });
        return res.status(200).json({
          status: true,
          message: "Successfully Added a pricing plan",
          data: addPricePlan,
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
router.post("/updatepricing", verifyAuthToken(), async (req, res) => {
  try {
    const { priceId } = req.body;
    const u_id = await getUserIdFromToken(req);
    const author = await Admin.findOne({ _id: u_id });
    if (author) {
      const pricing = await Pricing.findOne({ _id: priceId });
      if (pricing) {
        const updatePricing = await pricing.updateOne({
          planCategory: planCategory,
          planPackages: planPackages,
          planPrice: planPrice,
        });
      }
      return res.status(200).json({
        status: true,
        message: "Successfully Added a pricing plan",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
router.post("/getpricing", async (req, res) => {
  try {
    const { category } = req.body;
    const pricing = await Pricing.find({ category: category });

    res.status(200).json({ status: true, data: pricing });
  } catch (error) {
    console.log(error);
  }
});
router.get("/getallpricing", verifyAuthToken(), async (req, res) => {
  try {
    const pricing = await Pricing.find({});
    res.status(200).json({ status: true, data: pricing });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
export default router;
