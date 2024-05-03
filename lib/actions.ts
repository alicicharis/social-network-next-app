"use server";
// import { revalidatePath } from "next/cache";
import { signUpFormSchema, PostSchema } from "./zod-schema";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrpyt from "bcrypt";
import { S3, PutObjectCommand } from "@aws-sdk/client-s3";
import { env } from "@/env";

type Error = {
  username?: string;
  email?: string;
};

export type FormState = {
  message: string;
  error?: Error;
  fields?: Record<string, string>;
  issues?: string[];
};

export const signUp = async (
  prevState: FormState,
  data: FormData
): Promise<FormState> => {
  const formData = Object.fromEntries(data);
  const parsed = signUpFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  try {
    const hashed = await bcrpyt.hash(parsed.data.password, 10);
    await db.insert(users).values({
      id: Math.random().toString(),
      password: hashed,
      email: parsed.data.email,
      name: parsed.data.username,
    });
  } catch (err) {
    const nameCheck = await db.query.users.findFirst({
      where: eq(users.name, parsed.data.username),
    });

    if (nameCheck?.name) {
      return {
        message: "",
        fields: parsed.data,
        error: {
          username: "Username already taken!",
        },
      };
    }

    const emailCheck = await db.query.users.findFirst({
      where: eq(users.email, parsed.data.email),
    });

    if (emailCheck?.email) {
      return {
        message: "",
        fields: parsed.data,
        error: {
          email: "Email already taken!",
        },
      };
    }
  }

  // revalidate path after adding data like todos...
  //   revalidatePath('/');
  return { message: "User registered!" };
};

export const formSubmitHandler = async (prevState: any, formData: any) => {
  const file = formData.get("my-file");

  const fileName = file?.name;
  const fileType = file?.type;

  const binaryFile = await file.arrayBuffer();
  const fileBuffer = Buffer.from(binaryFile);

  const s3Client = new S3({
    region: "eu-west-1",
    credentials: {
      accessKeyId: env.S3_BUCKET_ACCESS_KEY,
      secretAccessKey: env.S3_BUCKET_SECRET_ACCESS_KEY,
    },
  });

  const params = {
    Bucket: env.S3_BUCKET_NAME,
    Key: fileName,
    Body: fileBuffer,
    ContentType: fileType,
  };

  try {
    await s3Client.send(new PutObjectCommand(params));

    return { status: "success" };
  } catch (err) {
    console.log("ERROR: ", err);
    return { status: "failed" };
  }
};

export interface IImage {
  id: number;
  file: string;
  preview: string;
}

export const mutationFunction = (data: string): any => {
  const parsedData: PostSchema = JSON.parse(data);

  console.log("Parsed: ", parsedData);

  return true;
};
