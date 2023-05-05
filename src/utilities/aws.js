import dotenv from "dotenv";
import fs from "fs";
import S3 from "aws-sdk/clients/s3.js";
import util from "util";
import multer from "multer";

const unlinkFile = util.promisify(fs.unlink);

const bucketName = process.env.AWS_S3_BUCKET;
const region = process.env.AWS_S3_REGION;
const accessKeyId = process.env.AWS_S3_ACCESS_KEY;
const secretAccessKey = process.env.AWS_S3_KEY_SECRET;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const s3uploadImage = (file) => {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
    ContentType: "image/png",
  };
  return s3.upload(uploadParams).promise();
};

const upload = multer({ dest: "uploads/" });

export { s3uploadImage, unlinkFile, upload };
