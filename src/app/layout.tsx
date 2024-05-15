import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "../global.css";
import localFont from "next/font/local";

const agrandirVariable = localFont({
  src: "./fonts/Agrandir Narrow Bold.otf",
  variable: "--font-agrandir",
  display: "swap",
  weight: "400",
});

const agrandirBody = localFont({
  src: "./fonts/Agrandir-C3-Regular.otf",
  variable: "--font-agrandirBody",
  display: "swap",
  weight: "400",
});

const IBMPlexSans = localFont({
  src: "./fonts/IBMPlexSans-Bold.otf",
  variable: "--font-IBMPlexSans",
  display: "swap",
});

const circular = localFont({
  src: "./fonts/CircularLL-Book.ttf",
  variable: "--font-circular",
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
    <html
      lang="en"
      className={`${IBMPlexSans.variable} ${agrandirVariable.variable} ${circular.variable} ${agrandirBody.variable} `}
    >
      <body className="overflow-x-hidden  bg-[#021531] text-white">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
