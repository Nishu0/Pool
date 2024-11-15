import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TmaSDKProvider } from "@/components/tma";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pool Bets",
  description: "A Fun way of Betting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TmaSDKProvider>{children}</TmaSDKProvider>
      </body>
    </html>
  );
}
