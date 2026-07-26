import type { Metadata } from "next";
import { Geist } from "next/font/google";
import GoogleMapsProvider from "./components/GoogleMapsProvider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taxiiggy-web.vercel.app"),

  title: {
    default: "TAXI IGGY | Premium taxi prijevoz Zagreb",
    template: "%s | TAXI IGGY",
  },

  description:
    "Pouzdan taxi prijevoz u Zagrebu. Transferi do Zračne luke Franjo Tuđman, poslovni prijevoz, vjenčanja, hotelski transferi i vožnje po dogovoru.",

  keywords: [
    "taxi Zagreb",
    "taxi Dubrava",
    "airport transfer Zagreb",
    "taxi aerodrom",
    "Taxi Iggy",
    "prijevoz Zagreb",
    "taxi usluge",
    "vjenčanja",
    "hotel transfer",
  ],

  authors: [
    {
      name: "TAXI IGGY",
    },
  ],

  creator: "TAXI IGGY",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://taxiiggy-web.vercel.app",
    siteName: "TAXI IGGY",
    title: "TAXI IGGY | Premium taxi prijevoz Zagreb",
    description:
      "Pouzdan taxi prijevoz u Zagrebu. Aerodromski transferi, poslovne vožnje, vjenčanja i posebne prilike.",
  },

  twitter: {
    card: "summary_large_image",
    title: "TAXI IGGY | Premium taxi prijevoz Zagreb",
    description:
      "Pouzdan taxi prijevoz u Zagrebu i okolici.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className={geist.className}>
        <GoogleMapsProvider>
          {children}
        </GoogleMapsProvider>
      </body>
    </html>
  );
}