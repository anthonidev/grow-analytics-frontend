import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { ProviderAuth } from "@/components/providers/ProviderAuth";
import { ProviderToast } from "@/components/providers/ProviderToast";
import { ProviderRedux } from "@/components/providers/ProviderRedux";
import { ProviderUI } from "@/components/providers/ProviderUI";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Grow analytics",
  description: "Prueba técnica para Grow analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProviderRedux>
          <ProviderUI>
            <ProviderAuth>
              {children}
              <ProviderToast />
            </ProviderAuth>
          </ProviderUI>
        </ProviderRedux>
      </body>
    </html>
  );
}
