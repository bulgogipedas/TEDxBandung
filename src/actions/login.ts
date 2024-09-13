"use server";
import { AuthError } from "next-auth";
import * as zod from "zod";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { loginSchema } from "@/schemas/auth/loginSchema";

export const login = async (values: zod.infer<typeof loginSchema>) => {
  try {
    const validateField = loginSchema.safeParse(values);

    if (!validateField.success) {
      return {
        error: validateField.error.flatten().fieldErrors,
      };
    }

    const { email, password } = validateField.data;

    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
      redirect: true,
    });
  } catch (error) {
    console.error("error tedx : ", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "invalid credential",
          };
        default:
          return {
            error: "unknown error",
          };
      }
    }
  }
};
