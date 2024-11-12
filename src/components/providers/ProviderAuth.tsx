"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

interface AuthContextProps {
  children: React.ReactNode;
}

export const ProviderAuth = ({ children }: AuthContextProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
