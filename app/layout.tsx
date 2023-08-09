import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { TopNav } from "./components/TopNav";
import { Background } from "./components/Background";

const ibm_plex_mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Dojo",
  description: "Dojo publication",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibm_plex_mono.className} bg-dojo-blue text-dojo-blue-light`}>
        <TopNav />
        {children}
        <Background />
      </body>
    </html>
  );
}
