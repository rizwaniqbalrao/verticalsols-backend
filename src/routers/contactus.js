import { Router } from "express";
import ContactUs from "../models/contactus.js";
import { welcomeEmail } from "../services/emailService.js";

const router = Router();

router.post("/contactus", async (req, res) => {
  try {
    const {
      fullName,
      emailAddress,
      phoneNumber,
      selectRequirments,
      writeMessage,
    } = req.body;
    const createContactUs = await ContactUs.create({
      fullName: fullName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      selectRequirments: selectRequirments,
      writeMessage: writeMessage,
    });
    if (createContactUs) {
      await welcomeEmail(emailAddress);
      return res.status(200).send({
        success: true,
        message:
          "Message sent successfully our respondent will contact you soon",
      });
    } else {
      return res.status(204).send({
        meta: { success: false, message: "Error happened" },
      });
    }
  } catch (error) {
    return res.status(400).send({
      meta: { success: false, message: error.message },
    });
  }
});
router.post("/getappointment", async (req, res) => {
  try {
    const { fullName, emailAddress, writeMessage } = req.body;
    const createClothing = await ContactUs.create({
      fullName: fullName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      selectRequirments: selectRequirments,
      writeMessage: writeMessage,
    });
    if (createClothing) {
      return res.status(200).send({
        meta: { success: true },
        data: createClothing,
      });
    }
    return res.status(204).send({
      meta: { success: false },
    });
  } catch (error) {
    return res.status(400).send({
      meta: { success: false },
    });
  }
});
export default router;
