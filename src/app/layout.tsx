import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { ProviderAuth } from "@/components/providers/ProviderAuth";
import { ProviderToast } from "@/components/providers/ProviderToast";

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
        <ProviderAuth>
          {children}
          <ProviderToast />
        </ProviderAuth>
      </body>
    </html>
  );
}
