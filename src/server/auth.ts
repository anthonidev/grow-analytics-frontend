import { AUTH_BACKEND_URL } from "@/lib/Constants";
import jwt from "jsonwebtoken";
import { NextAuthOptions } from "next-auth";

import Credentials from "next-auth/providers/credentials";
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace JwtUtils {
  export const isJwtExpired = (token: string) => {
    const currentTime = Math.round(Date.now() / 1000 + 60);
    const decoded = jwt.decode(token);
    if (
      decoded !== null &&
      decoded !== undefined &&
      typeof decoded === "object"
    ) {
      if (decoded["exp"]) {
        const adjustedExpiry = decoded["exp"];

        if (adjustedExpiry < currentTime) {
          return true;
        }

        return false;
      }
    }
    return true;
  };
}

const nextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;
        const res = await fetch(AUTH_BACKEND_URL + "/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            correo: email,
            contrasena: password,
          }),
        });

        if (res.status === 401) {
          throw new Error("Contraseña o usuario incorrecto");
        }

        const user = await res.json();
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      if (JwtUtils.isJwtExpired(token.backendToken.accessToken as string)) {
        try {
          const response = await fetch(
            `${AUTH_BACKEND_URL}/auth/refresh`,

            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: `Refresh ${token.backendToken.refreshToken}`,
              },
            }
          );
          console.log("REFRESH", token.backendToken.refreshToken);
          const { accessToken, refreshToken } = await response.json();

          const user = {
            ...token.user,
            backendToken: {
              accessToken,
              refreshToken,
            },
          };

          if (accessToken && refreshToken) {
            token = {
              ...token,
              user,
              backendToken: {
                accessToken,
                refreshToken,
                expiresIn: 60 * 60,
              },
              iat: Math.floor(Date.now() / 1000),
              exp: Math.floor(Date.now() / 1000 + 2 * 60 * 60),
            };

            return token;
          }
        } catch (error: unknown) {
          console.error("Error refreshing token", error);
          return {
            ...token,
            exp: 0,
          };
        }
      }

      return Promise.resolve(token);
    },
    async session({ token, session }) {
      session.user = token.user;
      session.backendToken = token.backendToken;

      return session;
    },
  },
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/login",
  },
} satisfies NextAuthOptions;

export default nextAuthOptions;
