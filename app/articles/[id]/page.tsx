import { getAllArticleIds, getArticleData } from '@/app/hooks/articles';
import Link from 'next/link';

export async function getData({ id }: any) {
  return {
    article: await getArticleData(id)
  };
}

export default async function Article({ params }: { params: { id: string } }) {
  const { article } = await getData({ id: params.id })

  return (
    <div>
      <article className="container px-6 pb-6 mx-auto prose prose-lg">
        <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
      </article>
      <Link href={"/articles"}>back</Link>
    </div>
  );
};
