import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import jwt_decode from "jwt-decode";
dotenv.config();
import Admin from "../models/admin.js";

const generateAccessToken = async (_payload) => {
  const payload = { id: _payload.id };
  return jwt.sign({ payload }, process.env.JWT_SECRET, { expiresIn: "60d" });
};

const verifyAuthToken = () => {
  return async (req, res, next) => {
    // console.log("req==========", req.headers["authorization"]);
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(403).send({ message: "Token not found" });
    } else {
      const tokenBody = token.slice(7);
      const decoded = jwt_decode(tokenBody);
      const u_id = decoded.payload.id;
      const user = await Admin.findOne({ _id: u_id });
      jwt.verify(tokenBody, process.env.JWT_SECRET, (error) => {
        if (error) {
          return res
            .status(401)
            .send({ message: "Access denied, expire token" });
        }
        next();
      });
    }
  };
};

const getUserIdFromToken = async (req) => {
  try {
    const token = req.header("authorization");
    const tokenBody = token.slice(7);
    const decoded = jwt_decode(tokenBody);
    const u_id = decoded.payload.id;
    return u_id;
  } catch (error) {
    return false;
  }
};

export { generateAccessToken, verifyAuthToken, getUserIdFromToken };
