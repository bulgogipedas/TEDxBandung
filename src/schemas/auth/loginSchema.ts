import * as zod from "zod"

export const loginSchema = zod.object({
    email: zod.string().email().min(1, "email required"),
    password: zod.string().min(1, "password required")
})
