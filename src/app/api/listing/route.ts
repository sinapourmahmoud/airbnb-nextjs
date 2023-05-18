import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import getCurrentUser from "@/actions/getUser";
export async function POST(req: NextRequest) {
  let currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  let body = await req.json();
  let {
    category,
    locationValue,
    guestCount,
    roomCount,
    imageSrc,
    bathroomCount,
    description,
    title,
    price,
  } = body;
  try {
    let addListing = await prisma.listing.create({
      data: {
        category,
        locationValue: locationValue.label,
        guestCount,
        roomCount,
        imageSrc,
        bathroomCount,
        description,
        title,
        price: parseInt(price, 10),
        userId: currentUser.id,
      },
    });
    return new Response(JSON.stringify({ message: "ok" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "error" }), {
      status: 400,
    });
  }
}
