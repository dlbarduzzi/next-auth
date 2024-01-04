import NextAuth from "next-auth"
import authConfig from "@/lib/auth.config"

import { vars } from "./config/vars"

const { auth } = NextAuth(authConfig)

export default auth(req => {
  const pathname = req.nextUrl.pathname
  const isAuthenticated = !!req.auth

  const {
    authRoutes,
    publicRoutes,
    apiAuthPrefix,
    defaultAuthenticatedRedirect,
    defaultUnauthenticatedRedirect,
  } = vars

  if (pathname.startsWith(apiAuthPrefix)) {
    return null
  }

  if (authRoutes.includes(pathname)) {
    if (isAuthenticated) {
      return Response.redirect(new URL(defaultAuthenticatedRedirect, req.nextUrl))
    } else {
      return null
    }
  }

  if (!publicRoutes.includes(pathname) && !isAuthenticated) {
    return Response.redirect(new URL(defaultUnauthenticatedRedirect, req.nextUrl))
  }

  return null
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
