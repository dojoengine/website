import type { Metadata } from "next";
import Navigation from "./Navigation";
import "../global.css";

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
    <html lang="en">
      <body className="overflow-x-hidden bg-[#021531] text-text-white">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
