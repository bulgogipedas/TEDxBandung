import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"

export default {
  providers: [Credentials({
    async authorize(credentials) {
      const { email, password } = credentials

      if (email === "test@gmail.com" && password === "1234") {
        return { id: "1", email }
      }
      return null
    }
  })],
  session: { strategy: 'jwt' }
} satisfies NextAuthConfig
