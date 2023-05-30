import { Router } from "express";
import { ContactUs, MakeaCall } from "../models/contactus.js";
import {
  getQuoteEmail,
  receivedEmail,
  welcomeEmail,
  getQoutereceivedEmail,
  newsLetterEmail,
} from "../services/emailService.js";
import { uploadFile } from "../utilities/aws.js";
import moment from "moment";
import NewsLetter from "../models/newsletter.js";

const router = Router();

router.post("/contactus", async (req, res) => {
  console.log(req.body);
  try {
    const {
      fullName,
      emailAddress,
      phoneNumber,
      selectRequirments,
      writeMessage,
      file,
      date,
      contactType,
    } = req.body;

    const result = file ? await uploadFile(file) : "";
    const createContactUs = await ContactUs.create({
      contactType: contactType,
      fullName: fullName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      selectRequirments: selectRequirments,
      writeMessage: writeMessage,
      file: result,
      date: date,
    });

    if (createContactUs) {
      await getQuoteEmail(emailAddress, fullName);
      await getQoutereceivedEmail(
        "verticalsolspvtltd@gmail.com",
        emailAddress,
        fullName,
        selectRequirments,
        date
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
router.post("/makeacall", async (req, res) => {
  try {
    const { fullName, emailAddress, phoneNumber, writeMessage, date } =
      req.body;
    const createMakeCall = await MakeaCall.create({
      fullName: fullName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      date: date,
      writeMessage: writeMessage,
    });

    if (createMakeCall) {
      await getQuoteEmail(emailAddress, fullName);
      const momentDate = moment(date).format("YYYY-MM-DD HH:mm");
      await getQoutereceivedEmail(
        "verticalsolspvtltd@gmail.com",
        emailAddress,
        fullName,
        "",
        momentDate
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

router.get("/getmakecall", async () => {
  try {
    const getMakeCall = await MakeaCall.find({});
    return res.status(200).send({
      success: true,
      data: getMakeCall,
      message: "Message sent successfully our respondent will contact you soon",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});
router.get("/getquote", async (req, res) => {
  try {
    const getQuote = await ContactUs.find({});
    const reversedArray = [...getQuote].reverse();
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

router.post("/newsletter", async (req, res) => {
  try {
    const { emailAddress } = req.body;
    const subscriber = await NewsLetter.findOne({ emailAddress: emailAddress });
    if (!subscriber) {
      const newsLetter = await NewsLetter.create({
        emailAddress: emailAddress,
      });
      if (newsLetter) {
        await newsLetterEmail(emailAddress);
        return res.status(200).send({
          success: true,
          message: "Successfully Subscribe our Newsletter",
        });
      }
    } else {
      return res.status(200).send({
        success: false,
        message: "You Already Subscribe our Newsletter",
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
