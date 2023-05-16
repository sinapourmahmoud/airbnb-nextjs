import { NextRequest } from "next/server";
import prisma from "@/libs/prismadb";
import bcrypt from "bcrypt";
export async function POST(req: NextRequest) {
  let body = await req.json();
  let { email, password, name } = body;
  try {
    let hashedPassword = await bcrypt.hash(password, 12);
    let currentUser = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name,
      },
    });
    return new Response(JSON.stringify({ message: currentUser }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "error" }), {
      status: 401,
    });
  }
}
