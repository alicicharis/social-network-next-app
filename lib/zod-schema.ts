import { z } from "zod";

export const signInFormSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address!" })
    .min(5, { message: "Email is required!" })
    .max(50),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters long!" })
    .max(50),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;

export const signUpFormSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(2, { message: "Username must be at least 2 characters long" })
      .max(50),
    email: z
      .string()
      .trim()
      .email({ message: "Invalid email address!" })
      .min(5, { message: "Email is required!" })
      .max(50),
    password: z
      .string()
      .trim()
      .min(6, { message: "Password must be at least 6 characters long!" })
      .max(50),
    confirmPassword: z.string().min(6).max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export const postSchema = z.object({
  text: z.string().min(1),
  images: z.any().optional(),
});

export type PostSchema = z.infer<typeof postSchema>;
