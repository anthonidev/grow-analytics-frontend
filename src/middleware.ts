import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith("/login");

    // If user is already authenticated and tries to access the login page, redirect to '/'
    if (isAuth && isAuthPage) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Rest of the existing logic
    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      return null;
    }
    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
      );
    }
  },

  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/:path*", "/"],
};
