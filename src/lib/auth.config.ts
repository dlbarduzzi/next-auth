import type { NextAuthConfig } from "next-auth"

import bcrypt from "bcryptjs"
import Credentials from "next-auth/providers/credentials"

import { loginSchema } from "@/schemas/login"
import { getUserByEmail, getUserHashedPassword } from "@/lib/data/user"

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const fields = loginSchema.safeParse(credentials)

        if (!fields.success) {
          console.log("AUTHORIZE ERROR - ", fields.error)
          return null
        }

        const { email, password } = fields.data

        const user = await getUserByEmail(email)
        if (!user) return null

        const hashedPassword = await getUserHashedPassword(user.id)
        if (!hashedPassword) return null

        const match = await bcrypt.compare(password, hashedPassword.hashedPassword)
        if (!match) return null

        return user
      },
    }),
  ],
} satisfies NextAuthConfig
