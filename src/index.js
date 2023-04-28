import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import contactus from "./routers/contactus.js";
import { connectDB } from "./middleware/db.js";

dotenv.config();
const server = express();
connectDB();

server.use(cors());
server.use(express.json({ limit: "50mb", extended: true }));
server.use(
  express.urlencoded({ limit: "50mb", parameterLimit: 1000000, extended: true })
);
server.use("/api/contact", contactus);

server.listen(process.env.SERVER_PORT, () => {
  console.log("Server listening on port " + `${process.env.SERVER_PORT}`);
});

export default server;
