import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

//const db = "mongodb://0.0.0.0:27017/verticalsols";;
const db = process.env.BACKEND_URI;
export async function connectDB() {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
