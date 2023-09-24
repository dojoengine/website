import Link from "next/link";
import { getAllArticleIds, getArticleData } from "@/app/hooks/articles";
import { ArticleBanner } from "@/app/components/articles/ArticleBanner";
import { ArticleTitle } from "@/app/components/articles/ArticleTitle";
import { ArticleInfos } from "@/app/components/articles/ArticleInfos";
import { ArticleContent } from "@/app/components/articles/ArticleContent";
import { ArticleNav } from "@/app/components/articles/ArticleNav";
import { ArticleFooter} from "@/app/components/articles/ArticleFooter";
import { Article } from "@/app/types";

async function getData({ id }: any) {
  return {
    article: await getArticleData(id) as Article,
  };
}

export default async function Article({ params }: { params: { id: string; lng: string } }) {
  const { article } = await getData({ id: params.id });

  // console.log(article);

  return (
    <div>
      <article className="article-container mx-auto px-6 pb-6 prose prose-lg">
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
