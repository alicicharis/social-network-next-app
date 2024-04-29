"use server";
// import { revalidatePath } from "next/cache";
import { signUpFormSchema } from "./zod-schema";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrpyt from "bcrypt";

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
