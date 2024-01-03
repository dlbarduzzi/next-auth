"use server"

import { AuthError } from "next-auth"
import type { LoginSchema } from "@/schemas/login"

import { signIn } from "@/lib/auth"
import { loginSchema } from "@/schemas/login"

import { defaultAuthenticatedRedirect } from "@/middleware"

type ErrorResponse = {
  ok: false
  error: string
}

type SuccessResponse = {
  ok: true
  message: string
}

type Response = ErrorResponse | SuccessResponse

export async function login(data: LoginSchema): Promise<Response> {
  try {
    const fields = loginSchema.safeParse(data)

    if (!fields.success) {
      console.log(fields.error)
      return { ok: false, error: "Internal server error." }
    }

    const { email, password } = fields.data

    await signIn("credentials", {
      email,
      password,
      redirectTo: defaultAuthenticatedRedirect,
    })

    return { ok: true, message: "User authenticated." }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { ok: false, error: "Invalid credentials." }
        default:
          return { ok: false, error: "Internal server error." }
      }
    } else {
      console.log(error)
    }

    throw error
  }
}
