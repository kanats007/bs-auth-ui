import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  try {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`, {
    //       headers: {
    //         Cookie: request.headers.get("cookie") ?? "",
    //         "X-Xsrf-Token": request.cookies.get("XSRF-TOKEN")?.value ?? "",
    //         referer: request.headers.get("referer") ?? "",
    //         // さらに、必ずリクエストへAccept: application/jsonヘッダを付け、送信してください。
    //         Accept: "application/json",
    //       },
    //       credentials: "include",
    //     });

    //     if (res.ok) {
    //       console.log("ログイン済み");
    //       return NextResponse.redirect(new URL("/", request.url));
    //     }
    // console.log(request.nextUrl.pathname);

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
