import React from "react";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
export const getUserSession = async () => {
  return await getServerSession(authOptions);
};

export default async function getCurrentUser() {
  const session = await getUserSession();
  if (!session?.user?.email) return null;

  let currentUser = await prisma.user.findUnique({
    where: {
      email: session.user?.email,
    },
  });
  if (!currentUser) return null;
  return session.user;
}
