import dotenv from "dotenv";
dotenv.config();
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

const welcomeEmail = async (email) => {
  const msg = {
    to: email,
    from: "info@verticalsols.com",
    subject: "Welcome",
    text: `Your query recieved at vertical souls`,
    html: `<h1>Hello Wolrd</h1>`,
  };
  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { welcomeEmail };
