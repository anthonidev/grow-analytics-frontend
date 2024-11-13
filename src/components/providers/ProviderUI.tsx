"use client";

import { useAppSelector } from "@/context/hooks";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme as tme } from "antd";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ProviderUI({ children }: { children: React.ReactNode }) {
  const { defaultAlgorithm, darkAlgorithm } = tme;
  const { themeDark } = useAppSelector((state) => state.config);

  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      <AntdRegistry>
        <ConfigProvider
          theme={{
            algorithm: themeDark ? darkAlgorithm : defaultAlgorithm,
          }}
        >
          {children}
        </ConfigProvider>
      </AntdRegistry>
    </NextThemesProvider>
  );
}
