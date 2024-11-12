"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ProviderUI({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <AntdRegistry>{children}</AntdRegistry>
    </NextThemesProvider>
  );
}
