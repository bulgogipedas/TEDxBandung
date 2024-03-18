import * as zod from "zod"

export const registerSchema = zod.object({
    email: zod.string().email().min(1, "email required"),
    password: zod.string().min(1, "password required")
        .refine(val => val.length >= 8, "password must be at least 8 characters")
        .refine(value => /[A-Z]/.test(value), {
            message: "Password must contain at least one capital letter",
            path: []
        })
        .refine(value => /[0-9]/.test(value), {
            message: "Password must contain at least one number",
            path: []
        })
        .refine(value => /[!@#$%^&*]/.test(value), {
            message: "Password must contain at least one special character",
            path: []
        })
})
