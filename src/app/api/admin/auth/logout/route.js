"use server";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  console.log("Received logout request");

  const cookieStore = await cookies();
  cookieStore.delete("admin_token");

  return NextResponse.json(
    { message: "Logged out successfully" },
    { status: 200 }
  );
}
