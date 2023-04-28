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
const port = process.env.SERVER_PORT || 5003;
server.listen(port, () => {
  console.log("Server listening on port " + `${port}`);
});

export default server;
