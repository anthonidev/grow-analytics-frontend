import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const isAuth = !!token;
    const path = req.nextUrl.pathname;
    const isAuthPage =
      path.startsWith("/login") || path.startsWith("/register");

    // Si el usuario ya está autenticado y trata de acceder a /login o /register, redirigir a '/'
    if (isAuth && isAuthPage) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Permitir el acceso a las páginas de autenticación sin redirigir
    if (isAuthPage) {
      return null;
    }

    // Redirigir a /login si el usuario no está autenticado y trata de acceder a otras rutas protegidas
    if (!isAuth) {
      let from = path;
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
        return true; // Deja que el middleware maneje la autorización
      },
    },
  }
);

// Configuración para que el matcher excluya /login y /register
export const config = {
  matcher: ["/((?!login|register).*)"], // Aplica a todas las rutas excepto /login y /register
};
