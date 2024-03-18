"use server"
import * as zod from "zod"

import { loginSchema } from "@/schemas/auth/loginSchema"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"

export const login = async (values: zod.infer<typeof loginSchema>) => {
    try {
        const validateField = loginSchema.safeParse(values)
    
        if (!validateField.success) {
            return {
                error: validateField.error.flatten().fieldErrors
            }
        }
    
        const { email, password } = validateField.data

        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
            redirect: true
        })
    } catch (error) {
        console.error("error tedx : ", error);
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {
                        error: 'invalid credential'
                    }
                default:
                    return {
                        error: 'unknown error'
                    }
            }
        }
    }
}
