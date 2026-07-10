import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TAXI IGGY | Premium prijevoz Zagreb",
  description:
    "Pouzdan i profesionalan taxi prijevoz u Zagrebu. Transferi do zračne luke, poslovna putovanja, vjenčanja i posebne prilike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
