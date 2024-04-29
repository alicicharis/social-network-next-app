"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpFormSchema, SignUpFormSchema } from "@/lib/zod-schema";
import { signUp } from "@/lib/actions";
import SubmitButton from "./SubmitButton";
import ErrorMessage from "./ErrorMessage";
import { signIn } from "next-auth/react";

const SignUp = () => {
  const router = useRouter();

  const [state, formAction] = useFormState(signUp, {
    message: "",
    error: {
      username: "",
      email: "",
    },
  });

  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      ...(state?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  console.log("Form state: ", state.message);
  if (state.message === "User registered") {
    // handle signIn user
    // const res = await signIn("credentials", {
    //   email: values.email,
    //   password: values.password,
    //   redirect: false,
    // });

    // if (res?.error) {
    //   form.setError("email", { message: "Invalid credentials!" });
    //   form.setError("password", { message: "Invalid credentials!" });
    // }

    router.refresh();
  }

  return (
    <>
      <Form {...form}>
        <form
          ref={formRef}
          action={formAction}
          onSubmit={(evt) => {
            evt.preventDefault();
            form.handleSubmit(() => {
              formAction(new FormData(formRef.current!));
            })(evt);
          }}
          className="space-y-4 max-w-lg w-full"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
                {state.error?.username && (
                  <ErrorMessage>{state.error.username}</ErrorMessage>
                )}
              </FormItem>
            )}
          />
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
                {state.error?.email && (
                  <ErrorMessage>{state.error.email}</ErrorMessage>
                )}
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm password"
                    {...field}
                    type="password"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton>Sign up</SubmitButton>
        </form>
      </Form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link href="/signin" className="text-primary">
          Sign in
        </Link>
      </p>
    </>
  );
};

export default SignUp;
