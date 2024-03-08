import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`, {
      headers: {
        Cookie: request.headers.get("cookie") ?? "",
        "X-Xsrf-Token": request.cookies.get("XSRF-TOKEN")?.value ?? "",
        // referer: request.headers.get("referer") ?? "",
        referer: process.env.NEXT_PUBLIC_FRONTEND_URL ?? "",
        // さらに、必ずリクエストへAccept: application/jsonヘッダを付け、送信してください。
        Accept: "application/json",
      },
      credentials: "include",
    });

    console.log(request.nextUrl.pathname);
    if (!res.ok && request.nextUrl.pathname !== "/login") {
      console.log("未認証");
      // TODO: リダイレクトした時ミドルウェアを無効にしたい
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (res.ok && request.nextUrl.pathname == "/login") {
      console.log("認証済");
      // TODO: リダイレクトした時ミドルウェアを無効にしたい
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    throw error;
  }
}

export const config = {
  //   matcher: ["/login", "/register"],
  //   matcher: ["/"],
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
