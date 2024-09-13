import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
  providers: [
    Credentials({
      id: "credentials",
      type: "credentials",
      async authorize(credentials) {
        const { email, password } = credentials;

        if (email === "test@gmail.com" && password === "1234") {
          return { id: "1", email };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
  },
} satisfies NextAuthConfig;
