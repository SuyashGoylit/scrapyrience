import type { Metadata } from "next";
import { Caveat, Patrick_Hand, Special_Elite, Spectral } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Doodles from "@/components/Doodles";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: "400",
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400",
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "scrapyrience — Sejal ♥ Suyash explore Bangalore",
  description:
    "A scrapbook of our favourite cafés, parks, restaurants, breweries and adventures across Bangalore.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${patrickHand.variable} ${specialElite.variable} ${spectral.variable}`}
    >
      <body>
        <Doodles />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
