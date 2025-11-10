import { NextResponse } from "next/server";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();
  const token_value = cookieStore.get("admin_token")?.value;

  if (pathname.startsWith("/admin/login")) {
    if (token_value) {
      console.log("testing --> ", token_value);

      try {
        await verifyToken(token_value);
        return redirect("/admin/dashboard");
      } catch {
        return NextResponse.next();
      }
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
