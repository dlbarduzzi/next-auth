import { z } from "zod"

export const registerSchema = z.object({
  email: z.string().min(1, "Email is required").email("Not a valid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(72, "Password must be at most 72 characters long"),
})

export type RegisterSchema = z.infer<typeof registerSchema>
