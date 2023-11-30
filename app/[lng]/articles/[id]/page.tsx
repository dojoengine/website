import Link from "next/link";
import { getAllArticleIds, getArticleData } from "@/app/hooks/articles";
import { ArticleBanner } from "@/app/components/articles/ArticleBanner";
import { ArticleTitle } from "@/app/components/articles/ArticleTitle";
import { ArticleInfos } from "@/app/components/articles/ArticleInfos";
import { ArticleContent } from "@/app/components/articles/ArticleContent";
import { ArticleNav } from "@/app/components/articles/ArticleNav";
import { ArticleFooter } from "@/app/components/articles/ArticleFooter";
import { Article } from "@/app/types";
import { useTranslation } from "@/app/i18n";
import { Metadata, ResolvingMetadata } from "next";

import dojoSocial from "@/public/dojo-social.png";
import favIcon from "@/app/favicon.ico";
import fav16Icon from "@/public/favicon-16x16.png";
import fav32Icon from "@/public/favicon-16x16.png";
import appleIcon from "@/public/apple-touch-icon.png";
import android192Icon from "@/public/android-chrome-192x192.png";
import android512Icon from "@/public/android-chrome-512x512.png";

async function getData({ id }: any) {
  return {
    article: (await getArticleData(id)) as Article,
  };
}

export async function generateMetadata({
  params: { id, lng },
}: {
  params: { id: string; lng: string };
}): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = await useTranslation(lng, "common");

  const { article } = await getData({ id });

  return {
    title: `${t("head_blog_title")}-${article.title}`,
    description: article.subtitle,
    keywords: article.tags.join(","),
    openGraph: {
      title: article.title,
      images: [
        {
          url: article.cover,
          // width: 660,
          // height: 380,
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

export default async function Article({ params }: { params: { id: string; lng: string } }) {
  const { article } = await getData({ id: params.id });

  return (
    <div>
      <article className="article-container container-min-h mx-auto px-6 pb-6 prose prose-lg">
        <ArticleBanner article={article} />
        <ArticleTitle article={article} />

        <div className="flex flex-col align-center max-w-5xl mx-auto lg:flex-row gap-12">
          <ArticleInfos article={article} />
          <ArticleContent article={article} />
          <ArticleNav article={article} />
        </div>

        <ArticleFooter article={article} />

        {/* <div className="mt-6">
          <Link href={"/articles"}>back</Link>
        </div> */}
      </article>
    </div>
  );
}
