import { getAllArticleIds, getArticleData } from "@/app/hooks/articles";
import Link from "next/link";

async function getData({ id }: any) {
  return {
    article: await getArticleData(id),
  };
}

export default async function Article({ params }: { params: { id: string; lng: string } }) {
  const { article } = await getData({ id: params.id });

  return (
    <div>
      <article className="max-w-5xl px-6 pb-6 mx-auto mt-6 md:mt-12 prose prose-lg">
        <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} className="article-container" />
        <div className="mt-6">
          <Link href={"/articles"}>back</Link>
        </div>
      </article>
    </div>
  );
}
