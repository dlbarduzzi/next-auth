import type { DefaultSession } from "next-auth"

import NextAuth from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter"

import authConfig from "@/lib/auth.config"

import { db } from "@/lib/db"
import { getUserById } from "@/lib/data/user"

type UserRole = "user" | "admin"

type ExtendedUser = DefaultSession["user"] & {
  role: UserRole
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    },
  },
  callbacks: {
    async session({ token, session }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }

      if (session.user && token.role) {
        session.user.role = token.role as UserRole
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token
      }

      const user = await getUserById(token.sub)

      if (!user) {
        return token
      }

      token.role = user.role

      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})
