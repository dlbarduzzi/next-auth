import NextAuth from "next-auth"
import authConfig from "@/lib/auth.config"

const { auth } = NextAuth(authConfig)

// publicRoutes allows anyone (authenticated and non-authenticated users) to
// access the route.
const publicRoutes = ["/"]

// authRoutes redirect users to the /settings route if they are authenticated and
// to the /login route if they are not authenticated.
const authRoutes = ["/login", "/register"]

// apiAuthPrefix routes should ALWAYS be accessible by anyone.
const apiAuthPrefix = "/api/auth"

// defaultAuthenticatedRedirect is where users are redirected to when authenticated.
export const defaultAuthenticatedRedirect = "/settings"

// defaultNotUnauthenticatedRedirect is where users are redirected to when
// not authenticated.
const defaultUnauthenticatedRedirect = "/login"

export default auth(req => {
  const pathname = req.nextUrl.pathname
  const isAuthenticated = !!req.auth

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
