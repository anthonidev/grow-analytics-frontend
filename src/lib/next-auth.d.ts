// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      usuario: number;
      nombre: string;
      correo: string;
      id: number;
      tipo_usuario: string;
      apell_paterno: string;
      apell_materno: string;
    };

    backendToken: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
  interface SessionOptions {
    jwt: boolean;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      usuario: number;
      nombre: string;
      correo: string;
      id: number;
      tipo_usuario: string;
      apell_paterno: string;
      apell_materno: string;
    };

    backendToken: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}
