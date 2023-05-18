import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import contactus from "./routers/contactus.js";
import admin from "./routers/admin.js";
import blogs from "./routers/blogs.js";
import teammembers from "./routers/teammembers.js";
import pricingplan from "./routers/pricing.js";
import portfolio from "./routers/portfolio.js";
import { connectDB } from "./middleware/db.js";
import Admin from "./models/admin.js";
import { hashPassword } from "./utilities/passwordUtils.js";
import { generateAccessToken } from "./services/authentication.js";

dotenv.config();
const server = express();
connectDB();

const autoCreate = async () => {
  try {
    const admin = await Admin.findOne({
      emailAddress: "admin@verticalsols.com",
    });
    if (!admin) {
      const registerAdmin = await Admin.create({
        emailAddress: "admin@verticalsols.com",
        password: await hashPassword("admin"),
        role: "superadmin",
      });
      const token = await generateAccessToken(registerAdmin);
      await Admin.updateOne({ auth_token: token });
    }
    console.log("admin@verticalsols.com Created Successfully");
  } catch (error) {
    console.log(error.message);
  }
};
autoCreate();

server.use(cors());
server.options("*", cors());
server.use(express.json({ limit: "50mb", extended: true }));
server.use(
  express.urlencoded({ limit: "50mb", parameterLimit: 1000000, extended: true })
);
server.use("/api/contact", contactus);
server.use("/api/admin", admin);
server.use("/api/blogs", blogs);
server.use("/api/team", teammembers);
server.use("/api/pricing", pricingplan);
server.use("/api/portfolio", portfolio);

const port = process.env.PORT || 5003;
server.listen(port, () => {
  console.log("Server listening on port " + `${port}`);
});

export default server;
