import { Router } from "express";
import {
  getUserIdFromToken,
  verifyAuthToken,
} from "../services/authentication.js";
import Pricing from "../models/pricing.js";
import Admin from "../models/admin.js";
import { deleteImage, s3ImageUpload } from "../utilities/aws.js";
import Product from "../models/product.js";

const router = Router();

router.post("/addproduct", async (req, res) => {
  console.log("data getting", req.body);
  try {
    const {
      productCategorie,
      productThumbnail,
      productDescription,
      productTitle,
      productPrice,
      description,
    } = req.body;

    const u_id = await getUserIdFromToken(req);
    const author = await Admin.findOne({ _id: u_id });
    if (author) {
      console.log("author fond", author);
      const result = await s3ImageUpload(productThumbnail);
      console.log("no buukket issue");
      const addproduct = await Product.create({
        productTitle: productTitle,
        productCategorie: productCategorie,
        productThumbnail: result,
        productDescription: productDescription,
        productprice: productPrice,
        description: description,
      });
      return res.status(200).json({
        status: true,
        message: "Successfully Added a Product",
      });
    }
    return res.status(200).json({
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
router.post("/editProduct", verifyAuthToken(), async (req, res) => {
  try {
    const {
      productId,
      productTitle,
      productCategorie,
      productThumbnail,
      productDescription,
      productprice,
    } = req.body;
    const product = await Product.findOne({ _id: productId });

    if (product) {
      if (productThumbnail) {
        const result = await s3ImageUpload(productThumbnail);
        await product.updateOne({ blogThumbnail: result });
        return res.status(200).send({
          success: true,
          message: "Product Update Successfully",
        });
      }
      const editProduct = await product.updateOne({
        productTitle: productTitle,
        productCategorie: productCategorie,
        productThumbnail: product.productThumbnail,
        productDescription: productDescription,
        productprice: productprice,
      });
      if (editProduct) {
        return res.status(200).send({
          success: true,
          message: "Product Update Successfully",
        });
      } else {
        return res.status(200).send({
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
router.post("/deleteproduct", verifyAuthToken(), async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await Product.findOne({ _id: productId });
    if (product) {
      const deleteproduct = await product.deleteOne({ _id: productId });
      const deleteImageAws = await deleteImage(product.productThumbnail);
      if (deleteproduct) {
        return res.status(200).send({
          success: true,
          message: "Product Deleted Successfully",
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
router.get("/getproduct", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({ data: product });
    console.log("data get ==>", product);
  } catch (error) {}
});
router.post("/getsingleproduct", async (req, res) => {
  try {
    const { productCategorie, productId } = req.body;
    const product = await Product.find({
      productCategorie: productCategorie,
    });
    res.status(200).json({ status: true, data: product });
  } catch (error) {
    res.status(202).json({ status: false, message: error.message });
  }
});
router.post("/getproductdetails", async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await Product.findOne({
      _id: productId,
    });
    if (product) {
      return res.status(200).json({
        success: true,
        message: "product Find Successfully",
        data: product,
      });
    }
  } catch (error) {
    res.status(202).json({ status: false, message: error.message });
  }
});

router.post("/getrecentproduct", async (req, res) => {
  try {
    const product = await Product.find({});
    const recentproduct = product.slice(0, 31);
    if (product) {
      return res.status(200).json({
        success: true,
        message: "product Find Successfully",
        data: recentproduct,
      });
    }
  } catch (error) {
    res.status(202).json({ status: false, message: error.message });
  }
});

export default router;
