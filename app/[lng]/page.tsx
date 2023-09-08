import Image from "next/image";

import { getSortedArticlesData } from "../hooks/articles";
import DojoIcon from "@/public/dojo-mark-full-dark.svg";
import { ArticleCard } from "../components/ArticleCard";
import { CopyBlock } from "../components/CopyBlock";

import { useTranslation } from "../i18n";
import { ChevronDown } from "../icons/ChevronDown";
import { ScrollButton } from "../components/ScrollButton";
import { Code } from "../components/CodeBlock";

async function getData() {
  return {
    articles: getSortedArticlesData(),
  };
}

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  const { articles } = await getData();

  // this is not a react hook despite the name
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = await useTranslation(lng, "common");

  return (
    <main className="container mx-auto">
      <div className="landing-container items-center justify-around flex flex-col">
        <div className="flex flex-wrap container justify-around">
          <div className="w-full md:w-1/3 flex justify-center mr-0 md:mr-9 mb-9 md:mb-0  bg-dojo-blue">
            <Image width={250} height={150} priority alt="" src={DojoIcon} className="" />
          </div>
          <div className="w-full flex flex-col items-center md:items-start md:w-2/3 max-w-xl self-center text-sm p-2 md:p-9 bg-dojo-blue">
            <div className="text-center md:text-left">
              <b>Dojo</b> {t("intro")}
            </div>
            <div className="flex my-8 justify-center md:justify-start w-full xs:w-auto">
              <CopyBlock lng={lng} />
            </div>
          </div>
        </div>
        <div className="mb-8 w-full flex justify-center relative">
          <div className="w-full border-t h-1 absolute top-5 border-dojo-blue-300/20"></div>
          <ScrollButton />
        </div>
      </div>

      <div id="code" className="landing-container flex container">
        <div className="w-1/2  self-center p-20">
          <h2>Architect Your World</h2>
          <p>Start by editing example Rust or C# module. Click “Go Luck” to publish your SpacetimeDB module instantly.</p>
        </div>
        <div className=" w-1/2 self-center bg-dojo-blue-700 px-1 py-3 rounded-2xl shadow-2xl shadow-dojo-blue-200">
          <Code />
        </div>

      </div>
      <div className="w-full landing-container ">
        <div className=" px-6 py:-10 md:py-20 mx-auto w-full">
          <h3 className="mb-8 text-center">{t("articles")}</h3>
          <div className="flex flex-col w-2/3 space-y-3 mx-auto">
            {articles.map((a: any, index: any) => {
              return <ArticleCard key={index} article={a} lng={lng} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
