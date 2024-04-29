"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { env } from "@/env";
import SubmitButton from "./SubmitButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { signInFormSchema, SignInFormSchema } from "@/lib/zod-schema";

const SignIn = () => {
  const router = useRouter();

  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitHandler = async (values: SignInFormSchema) => {
    const validateRes = await fetch(
      env.NEXT_PUBLIC_HOSTNAME + "/api/auth/validate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const { valid } = await validateRes.json();

    if (!valid) {
      form.setError("email", { message: "Invalid email!" });
      form.setError("password", {
        message: "Password must be at least 6 characters long!",
      });

      return;
    }

    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (res?.error) {
      form.setError("email", { message: "Invalid credentials!" });
      form.setError("password", { message: "Invalid credentials!" });
    }

    router.refresh();
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className="space-y-4 max-w-lg w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton>Sign in</SubmitButton>
        </form>
      </Form>
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link href="/signup" className="text-primary">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default SignIn;
