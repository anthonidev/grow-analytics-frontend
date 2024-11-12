import { getSession } from "next-auth/react";
import nextAuthOptions from "@/server/auth";
import { getServerSession } from "next-auth";

export const getTokenBearer = async () => {
  const session = await getSession();
  if (!session) {
    throw new Error("Sesión no encontrada");
  }
  const { backendToken } = session;
  if (!backendToken.accessToken) {
    throw new Error("Token no encontrado");
  }
  return backendToken.accessToken;
};

export const getServerTokenBearer = async () => {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    throw new Error("Sesión no encontrada");
  }

  const { backendToken } = session;
  if (!backendToken.accessToken) {
    throw new Error("Token no encontrado");
  }
  return backendToken.accessToken;
};
