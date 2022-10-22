import { NextResponse, NextRequest } from "next/server";
export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (url.pathname === "/") {
    url.pathname = "/home";
    return NextResponse.rewrite(url);
  }
}
