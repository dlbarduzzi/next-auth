"use server"

import type { RegisterSchema } from "@/schemas/register"

import bcrypt from "bcrypt"

import { db } from "@/lib/db"
import { getUserByEmail } from "@/lib/data/user"
import { registerSchema } from "@/schemas/register"

type ErrorResponse = {
  ok: false
  error: string
}

type SuccessResponse = {
  ok: true
  message: string
}

type Response = ErrorResponse | SuccessResponse

export async function register(data: RegisterSchema): Promise<Response> {
  try {
    const fields = registerSchema.safeParse(data)

    if (!fields.success) {
      console.log(fields.error)
      return { ok: false, error: "Internal server error." }
    }

    const { email, password } = fields.data

    const user = await getUserByEmail(email)

    if (user) {
      return { ok: false, error: "Email already taken." }
    }

    const newUser = await db.user.create({ data: { email } })
    const hashedPassword = await bcrypt.hash(password, 12)

    await db.hashedPassword.create({
      data: {
        hashedPassword,
        userId: newUser.id,
      },
    })

    return { ok: true, message: "User created." }
  } catch (error) {
    console.log(error)
    return { ok: false, error: "Internal server error." }
  }
}
