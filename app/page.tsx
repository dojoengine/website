import Image from 'next/image'
import { getSortedArticlesData } from './hooks/articles';
import DojoIcon from '@/public/dojo-mark-full-dark.svg'
import { ArticleCard } from './components/ArticleCard';
import { CopyBlock } from './components/CopyBlock';

export async function getData() {
  return {
    articles: getSortedArticlesData()
  };
}

export default async function Home() {
  const { articles } = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className='flex flex-wrap'>
        <div className='sm:w-1/3 flex justify-center'>
          <Image width={250} height={150} priority alt='' src={DojoIcon} />
        </div>

        <div className='self-center text-xl p-8 sm:w-2/3'>
          Dojo is a provable game engine and toolchain for <br /> building onchain games and autonomous worlds with Cairo.
          <div className='my-8'>
            <CopyBlock/>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-2xl px-6 py-20 mx-auto">
          <h3 className="mb-8">Articles</h3>
          <div className="flex flex-col w-full space-y-3">
            {articles.map((a: any, index: any) => {
              return <ArticleCard key={index} article={a}/>;
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
