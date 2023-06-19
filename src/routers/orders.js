import { Router } from "express";
import Orders from "../models/orders.js";
import { receivedEmail, welcomeEmail } from "../services/emailService.js";

const router = Router();

router.post("/createorders", async (req, res) => {
  try {
    const {
      fullName,
      emailAddress,

      selectRequirments,
      writeMessage,
      planname,
      planprice,
      phoneNumber,
    } = req.body;
    const randomCode = async () => {
      return Math.floor(100000 + Math.random() * 900000);
    };
    const orderNumber = await randomCode();
    const createOrders = await Orders.create({
      fullName: fullName,
      emailAddress: emailAddress,

      selectRequirments: selectRequirments,
      writeMessage: writeMessage,
      planname: planname,
      planprice: planprice,
      orderNumber: orderNumber,
      phoneNumber: phoneNumber,
    });

    if (createOrders) {
      await welcomeEmail(
        emailAddress,
        fullName,

        orderNumber,
        planprice,
        phoneNumber,
        planname
      );
      await receivedEmail(
        "verticalsolspvtltd@gmail.com",
        emailAddress,
        fullName,

        orderNumber,
        planprice,
        phoneNumber,
        planname
      );
      return res.status(200).send({
        success: true,
        message:
          "Message sent successfully our respondent will contact you soon",
      });
    } else {
      return res.status(200).send({
        success: false,
        message: "Error happened",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});

router.get("/getorders", async (req, res) => {
  try {
    const orders = await Orders.find({});
    const reversedArray = [...orders].reverse();
    return res.status(200).send({
      success: true,
      data: reversedArray,
      message: "Message sent successfully our respondent will contact you soon",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
export default router;
