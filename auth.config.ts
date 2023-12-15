import { getUser } from "@/lib/fetches/user.fetches";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { z } from "zod";
import bcrypt from "bcrypt"

export default {
  providers: [
    GitHub,
    Credentials({
      async authorize(
        credentials: Partial<Record<"email" | "password", string>>,
        request: Request
      ) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (user && "password" in user) {
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );

            if (passwordsMatch) {
              return user;
            }
          }
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
} as NextAuthConfig;
