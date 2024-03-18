/**
 * An array of routes that are accessible to public
 * These routes are not protected
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/example/pokemon/ssr",
    "/example/pokemon/ssr/parallel",
    "/example/pokemon/ssr/sequential",
    "/example/pokemon/csr",
]

/**
 * An array of routes that are not accessible to public
 * These routes will redirect logged in users to about
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register"
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API
 * authentication purpose
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * default login redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/about"
