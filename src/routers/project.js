import { Router } from "express";
import {
  getUserIdFromToken,
  verifyAuthToken,
} from "../services/authentication.js";
import Pricing from "../models/pricing.js";
import Admin from "../models/admin.js";
import Project from "../models/projects.js";
import { s3ImageUpload } from "../utilities/aws.js";

const router = Router();

router.post("/addproject", verifyAuthToken(), async (req, res) => {
  try {
    const { projectCategory, projectPicture, projectDescription } = req.body;
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
        const result = await s3ImageUpload(projectPicture);
        const addPricePlan = await Project.create({
          author: {
            fullName: author.fullName,
            emailAddress: author.emailAddress,
          },
          projectCategory: projectCategory,
          projectPicture: result,
          projectDescription: projectDescription,
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

export default router;
