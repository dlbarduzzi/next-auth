import type { NextAuthConfig } from "next-auth"

import bcrypt from "bcryptjs"

import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

import { env } from "@/config/env"
import { loginSchema } from "@/schemas/login"
import { getUserByEmail, getUserHashedPassword } from "@/lib/data/user"

export default {
  providers: [
    GitHub({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
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
