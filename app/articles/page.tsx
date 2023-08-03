import { getSortedArticlesData } from '@/app/hooks/articles';
import { ArticleCard } from '../components/ArticleCard';

export async function getData() {
  return {
    articles: getSortedArticlesData()
  };
}

export default async function Articles() {
  const { articles } = await getData()
  
  return (
      <div className="max-w-2xl px-6 mx-auto my-20 md:my-40">
        <h3 className="mb-8">Building Autonomous Worlds</h3>
        <div className="flex flex-col w-full space-y-3">
          {articles?.map((a: any, index: any) => {
            return <ArticleCard key={index} article={a}/>
          })}
        </div>
      </div>
  );
};
