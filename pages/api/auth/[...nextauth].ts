import NextAuth from "next-auth";

import GitHubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      session.user = (await prisma.user.findUnique({
        where: { email: session.user?.email as string },
        include: { documents: true },
      })) as any;

      return session;
    },
  },
  secret: process.env.SECRET as string,
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(options);
