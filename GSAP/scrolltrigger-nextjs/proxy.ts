import { NextResponse, NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname === "/") {
    const pathToRedirect = new URL("/basics", request.url);

    return NextResponse.redirect(pathToRedirect);
  } else {
    return NextResponse.next();
  }
}
