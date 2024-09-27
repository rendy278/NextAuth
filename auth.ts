import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { SignInSchema } from "./lib/zod";
import { compareSync } from "bcrypt-ts";
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedField = SignInSchema.safeParse(credentials);

        if (!validatedField.success) {
          return null;
        }
        const { email, password } = validatedField.data;
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user || !user.password) {
          throw new Error("No user Found");
        }
        const passwordMatch = compareSync(password, user.password);
        if (!passwordMatch) return null;
        return user;
      },
    }),
  ],
});
