import { db } from "@/db";
import { users } from "@/db/schema";
import { env } from "@/env";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { AuthOptions, DefaultSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authConfig = {
  adapter: DrizzleAdapter(db) as Adapter,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      //   clientId: env.GOOGLE_CLIENT_ID,
      //   clientSecret: env.GOOGLE_CLIENT_SECRET,
      clientId: "",
      clientSecret: "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const dbUser = await db.query.users.findFirst({
          where: (users, { eq }) => eq(users.email, credentials?.email!),
        });

        if (dbUser && credentials?.password) {
          const validPassword = await bcrypt.compare(
            credentials?.password,
            dbUser?.password
          );

          if (!validPassword) return null;

          return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, token.email!),
      });

      if (!dbUser) {
        throw new Error("no user with email found");
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
  },
} satisfies AuthOptions;
