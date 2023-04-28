import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const db =
  "mongodb+srv://osamabalghari:TefYCd5ESlHBcnYT@cluster0.j8pyx.mongodb.net/?retryWrites=true&w=majority";

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
