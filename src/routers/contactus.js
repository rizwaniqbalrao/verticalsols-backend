import { Router } from "express";
import { ContactUs, MakeaCall } from "../models/contactus.js";
import { receivedEmail, welcomeEmail } from "../services/emailService.js";
import { s3ImageUpload, s3Upload, uploadFile } from "../utilities/aws.js";

const router = Router();

router.post("/contactus", async (req, res) => {
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
      await welcomeEmail(emailAddress, fullName);
      await receivedEmail("info@verticalsols.com", emailAddress, fullName);
      return res.status(200).send({
        success: true,
        message:
          "Message sent successfully our respondent will contact you soon",
      });
    } else {
      return res.status(204).send({
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
      //  await welcomeEmail(emailAddress, fullName);
      //await receivedEmail("info@verticalsols.com", emailAddress, fullName);
      return res.status(200).send({
        success: true,
        message:
          "Message sent successfully our respondent will contact you soon",
      });
    } else {
      return res.status(204).send({
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
    return res.status(200).send({
      success: true,
      data: getQuote,
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
