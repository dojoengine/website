import Image from "next/image";
import { getSortedArticlesData } from "./hooks/articles";
import DojoIcon from "@/public/dojo-mark-full-dark.svg";
import { ArticleCard } from "./components/ArticleCard";
import { CopyBlock } from "./components/CopyBlock";

async function getData() {
  return {
    articles: getSortedArticlesData(),
  };
}

export default async function Home() {
  const { articles } = await getData();

  return (
    <main className="container mx-auto flex flex-col items-center px-3 pt-9 md:px-12 md:pt-24 mt-3 md:mt-24">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 flex justify-center pr-0 md:pr-9 mb-9 md:mb-0">
          <Image width={250} height={150} priority alt="" src={DojoIcon} />
        </div>

        <div className="w-full md:w-2/3 max-w-xl self-center text-sm p-2 md:p-9">
          <b>Dojo</b> is a provable game engine and toolchain for building onchain games and autonomous worlds with
          Cairo.
          <div className="flex my-8">
            <CopyBlock />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-2xl px-6 py:-10 md:py-20 mx-auto">
          <h3 className="mb-8">Articles</h3>
          <div className="flex flex-col w-full space-y-3">
            {articles.map((a: any, index: any) => {
              return <ArticleCard key={index} article={a} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
