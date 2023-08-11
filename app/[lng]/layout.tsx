import "../globals.css";
import type { Metadata, ResolvingMetadata } from "next";
import Head from "next/head";
import { IBM_Plex_Mono } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { TopNav } from "../components/TopNav";
import { Background } from "../components/Background";
import { useTranslation } from "../i18n";

import dojoSocial from "@/public/dojo-social.png";

import favIcon from "@/app/favicon.ico";
import fav16Icon from "@/public/favicon-16x16.png";
import fav32Icon from "@/public/favicon-16x16.png";
import appleIcon from "@/public/apple-touch-icon.png";
import android192Icon from "@/public/android-chrome-192x192.png";
import android512Icon from "@/public/android-chrome-512x512.png";

const ibm_plex_mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });

export async function generateMetadata(
  { params: { lng } }: { params: { lng: string } },
  parent?: ResolvingMetadata
): Promise<Metadata> {
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
      <body className={`${ibm_plex_mono.className} bg-dojo-blue text-dojo-blue-400`}>
        <TopNav lng={lng} />
        {children}
        <Background />
      </body>
    </html>
  );
}
