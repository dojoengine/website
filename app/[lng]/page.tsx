import Image from "next/image";

import { getSortedArticlesData } from "../hooks/articles";
import DojoIcon from "@/public/images/dojo.svg";
import { ArticleCard } from "../components/ArticleCard";
import { CopyBlock } from "../components/CopyBlock";

import { useTranslation } from "../i18n";
import { ChevronDown } from "../icons/ChevronDown";
import { ScrollButton } from "../components/ScrollButton";
import { Code } from "../components/CodeBlock";
import { Cartridge } from "../icons/Cartridge";
import { Starknet } from "../icons/Starknet";
import { Game7 } from "../icons/Game7";
import { Mask } from "../icons/Mask";
import { Starkware } from "../icons/Starkware";
import Link from "next/link";

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
          <div className="w-full md:w-1/3 flex justify-center mr-0 md:mr-9 mb-9 md:mb-0  bg-dojo-blue-800">
            <Image width={250} height={150} priority alt="" src={DojoIcon} className="" />
          </div>
          <div className="w-full flex flex-col items-center md:items-start md:w-2/3 max-w-xl self-center text-sm p-2 md:p-9 bg-dojo-blue-800">
            <div className="text-center md:text-left">
              <b>Dojo</b> {t("intro")}
            </div>
            <div className="flex my-8 justify-center md:justify-start w-full xs:w-auto">
              <CopyBlock lng={lng} />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center relative">{/*   <ScrollButton /> */}</div>
      </div>

      {/* <div id="code" className="sm:landing-container flex container flex-wrap">
        <div className="sm:w-1/2  self-center p-20">
          <h2>Architect Your World</h2>
          <p>
            Start by editing example Rust or C# module. Click “Go Luck” to publish your SpacetimeDB module instantly.
          </p>
        </div>
        <div className="sm:w-1/2 self-center bg-dojo-blue-900 px-1 py-3 rounded-2xl shadow-2xl shadow-dojo-blue-700">
          <Code />
        </div>
      </div> */}

      {/* <div className="w-full landing-container ">
        <div className="py-10 px-6 sm:py:-10 md:py-20 w-full max-w-4xl mx-auto">
          <h2 className="mb-8 text-left">{t("articles")}</h2>
          <div className="flex flex-col space-y-3 mx-auto">
            {articles.map((a: any, index: any) => {
              return <ArticleCard key={index} article={a} lng={lng} />;
            })}
          </div>
        </div>
      </div> */}

      <div className="my-24">
        <h2 className="text-bold text-center font-agrandir text-4xl">Partners</h2>
        <div className="flex flex-wrap items-center justify-center gap-12 my-6">
          <Link href="https://starknet.io" className="hover:text-starknet" target="_blank">
            <Starknet />
          </Link>
          <Link href="https://cartridge.gg" className="hover:text-cartridge" target="_blank">
            <Cartridge />
          </Link>
          {/* <Link href="https://game7.io" className="hover:text-game7" target="_blank">
            <Game7 />
          </Link>
          <Link href="https://mask.io" className="hover:text-mask" target="_blank">
            <Mask />
          </Link> */}
          <Link href="https://starkware.co" className="hover:text-starkware" target="_blank">
            <Starkware />
          </Link>
        </div>
      </div>


      
    </main>
  );
}
