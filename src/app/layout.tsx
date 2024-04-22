import type { Metadata } from "next";
import { Providers } from "./providers";
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
      <body style={{ backgroundColor: "#021531", overflowX: "hidden" }}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
