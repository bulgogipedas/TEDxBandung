"use server"
import * as zod from "zod"

import { loginSchema } from "@/schemas/auth/loginSchema"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export const login = async (values: zod.infer<typeof loginSchema>) => {
    const validateField = loginSchema.safeParse(values)

    if(!validateField.success) {
        return {
            error: validateField.error.flatten().fieldErrors
        }
    }

    const { email, password } = validateField.data

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
            redirect: true
        })
    } catch (error) {
        console.error(error);
    }
}
