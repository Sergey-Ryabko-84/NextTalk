import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const userName = req.cookies.get("userName")?.value || "";

  if (!userName && !req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (userName && req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
