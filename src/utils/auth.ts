/** @format */

import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
  secret: "MAKKAUHIJAU",
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: {
          label: "username",
          type: "username",
          placeholder: "username",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.username || !credentials.password) {
          return null;
        }

        // const dbUser = await prisma.user.findFirst({
        //   where: { email: credentials.email },
        // });

        //Verify Password here
        //We are going to use a simple === operator
        //In production DB, passwords should be encrypted using something like bcrypt...
        // if (dbUser && dbUser.password === credentials.password) {
        //   const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
        //   return dbUserWithoutPassword as User;
        // }

        if (
          credentials.username === "Azzam" &&
          credentials.password === "123456"
        ) {
          const userData = {
            email: "user@rmail.com",
            name: "User",
            id: "123456",
          };

          return userData as User;
        }

        return null;
      },
    }),
  ],
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) redirect("/signin");
}

export function loginIsRequiredClient() {
  if (typeof window !== "undefined") {
    const session = useSession();
    const router = useRouter();
    if (!session) {
      router.push("/signin");
    } else {
      router.push("/");
    }
  }
}

export async function denialSignIn() {
  const session = await getServerSession(authConfig);
  if (session) redirect("/");
}
