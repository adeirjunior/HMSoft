import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";

export default {
  providers: [
    GitHub,
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (
        credentials: Partial<Record<"username" | "password", unknown>>,
        request: Request
      ) => {
        // Your authorization logic here
        const response = await fetch(request);
        if (!response.ok) return null;
        return (await response.json()) ?? null;
      },
    }),
  ],
} as NextAuthConfig;
