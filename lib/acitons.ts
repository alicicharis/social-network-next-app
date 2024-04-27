"use server";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "eu-west-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY || "",
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
  },
});

export const uploadToS3 = async () => {
  // const file = fs.createReadStream('path/to/file')

  const uploadCommand = new PutObjectCommand({
    Bucket: "social_network_images",
    Key: "path/to/file",
    //   Body: file,
    ContentType: "image/jpeg",
  });

  await s3Client.send(uploadCommand);
};
