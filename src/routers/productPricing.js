import { Router } from "express";
import {
  getUserIdFromToken,
  verifyAuthToken,
} from "../services/authentication.js";
// import Pricing from "../models/pricing.js";
import ProductPricing from "../models/productPricing.js";
import {
  productPricingwelcomeEmail,
  productPricingreceivedEmail,
} from "../services/emailService.js";
import Admin from "../models/admin.js";

const router = Router();

router.post("/getproductprice", async (req, res) => {
  try {
    const {
      fullName,
      emailAddress,
      projectRequirmentReady,
      peopleWorking,
      appName,
      writeMessage,
    } = req.body;

    const addProductPrice = await ProductPricing.create({
      fullName: fullName,
      emailAddress: emailAddress,
      projectRequirmentReady: projectRequirmentReady,
      peopleWorking: peopleWorking,
      appName: appName,
      writeMessage: writeMessage,
    });
    if (addProductPrice) {
      console.log("emailtesting >>>>>>", emailAddress, fullName, appName);
      await productPricingwelcomeEmail(emailAddress, fullName, appName);

      // await productPricingreceivedEmail(
      //   "verticalsolspvtltd@gmail.com",
      //   emailAddress,
      //   fullName,
      //   projectRequirmentReady,
      //   peopleWorking,
      //   appName,
      //   writeMessage
      // );
      return res.status(200).json({
        status: true,
        message: "Order Placed Successfully",
        data: addProductPrice,
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});

export default router;
