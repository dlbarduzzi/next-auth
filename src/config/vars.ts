export const vars = {
  // publicRoutes allows anyone (authenticated and non-authenticated users) to
  // access the route.
  publicRoutes: ["/"],
  // authRoutes redirect users to the /settings route if they are authenticated and
  // to the /login route if they are not authenticated.
  authRoutes: ["/login", "/register", "/error"],
  // apiAuthPrefix routes should ALWAYS be accessible by anyone.
  apiAuthPrefix: "/api/auth",
  // defaultAuthenticatedRedirect is where users are redirected to when authenticated.
  defaultAuthenticatedRedirect: "/settings",
  // defaultNotUnauthenticatedRedirect is where users are redirected to when
  // not authenticated.
  defaultUnauthenticatedRedirect: "/login",
}
