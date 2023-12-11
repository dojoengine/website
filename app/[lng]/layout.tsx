import "../globals.css";
import type { Metadata, ResolvingMetadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { TopNav } from "../components/TopNav";
import { useTranslation } from "../i18n";

import localFont from "next/font/local";
import { Footer } from "../components/Footer";

import dojoSocial from "@/public/dojo-social.png";
import favIcon from "@/app/favicon.ico";
import fav16Icon from "@/public/favicon-16x16.png";
import fav32Icon from "@/public/favicon-16x16.png";
import appleIcon from "@/public/apple-touch-icon.png";
import android192Icon from "@/public/android-chrome-192x192.png";
import android512Icon from "@/public/android-chrome-512x512.png";

import { Analytics } from '@vercel/analytics/react';

// const ibm_plex_mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });
// ${ibm_plex_mono.className}

const agrandir = localFont({
  src: [
    {
      path: "../../public/fonts/Agrandir-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Agrandir-TextBold.otf",
      weight: "700",
    },
  ],
  variable: "--font-agrandir",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Inter-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-inter",
});

export async function generateMetadata(
  { params: { lng } }: { params: { lng: string } },
  parent?: ResolvingMetadata
): Promise<Metadata | undefined> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = await useTranslation(lng, "common");

  return {
    title: t("head_home_title"),
    description: t("head_home_desc"),
    keywords: t("head_home_keywords"),
    openGraph: {
      title: t("head_home_title"),
      images: [
        {
          url: dojoSocial.src,
          width: 660,
          height: 380,
          alt: "Dojo",
        },
      ],

      locale: `${lng}`,
      type: "website",
    },

    icons: {
      icon: [{ url: favIcon.src }, { url: fav16Icon.src }, { url: fav32Icon.src }],
      apple: { url: appleIcon.src },
      other: [{ url: android192Icon.src }, { url: android512Icon.src }],
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={` ${agrandir.variable} ${inter.variable} bg-dojo-blue-800 text-dojo-blue-400`}>
        <TopNav lng={lng} />
        {children}
        <Footer lng={lng} />
        <Analytics />
      </body>
    </html>
  );
}
