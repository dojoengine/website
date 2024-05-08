import type { Metadata } from "next";
import Navigation from "./Navigation";
import "../global.css";
import localFont from "next/font/local";

const agrandirVariable = localFont({
  src: "./fonts/Agrandir-Heavy.ttf",
  display: "swap",
});

const IBMPlexSans = localFont({
  src: "./fonts/IBMPlexSans-Bold.otf",
  display: "swap",
});

const circular = localFont({
  src: "./fonts/CircularLL-Book.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Provable game engine for onchain games and autonomous worlds",
  description:
    "Dojo is a provable game engine and toolchain for building onchain games and autonomous worlds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${agrandirVariable.className} `}>
      <body className="overflow-x-hidden  bg-[#021531] text-text-white">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
