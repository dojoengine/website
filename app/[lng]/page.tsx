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
      <div className="landing-container items-center justify-around flex flex-col px-6 ">
        <div className="flex flex-wrap container justify-around mt-16 md:mt-40">
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
          <div className="w-full flex justify-center relative">
            <ScrollButton />
          </div>
      </div>

      <div id="code" className="container grid-cols-1 md:grid-cols-2 grid gap-6 px-6 my-24 md:my-40">
        <div className="w-full self-center text-center md:text-left">
          <h2 className="text-white">{t("home_code_title")}</h2>
          <p className="mb-6">{t("home_code_desc")}</p>
          <Link
            href="https://book.dojoengine.org/cairo/overview.html"
            target="_blank"
            className="inline-block bg-dojo-blue-400 hover:bg-dojo-blue-300 fill-dojo-blue-800 text-dojo-blue-800 font-bold rounded p-2 px-6"
          >
            Docs
          </Link>
        </div>
        <div className="w-full self-center bg-dojo-blue-900 px-1 py-3 rounded-2xl shadow-2xl shadow-dojo-blue-200">
          <Code />
        </div>
      </div>

      <div className="w-full px-6 my-24 md:my-40">
        <div className="w-full mx-auto">
          <h2 className="mb-8 text-center md:text-left text-white">{t("blog_posts")}</h2>
          <div className="flex flex-col space-y-6 mx-auto">
            {articles.slice(0, 3).map((a: any, index: any) => {
              return <ArticleCard key={index} article={a} lng={lng} />;
            })}
          </div>
          {articles.length > 3 && (
            <Link
              className="block mt-6 text-center font-bold p-3 bg-dojo-blue-700 rounded-xl w-full shadow-lg shadow-dojo-blue-800  hover:shadow-dojo-blue-900"
              href={`/${lng}/articles`}
            >
              SEE ALL
            </Link>
          )}
        </div>
      </div>

      <div className="my-24 md:my-40">
        <h2 className="text-bold text-center  font-agrandir mb-6 text-white">Partners</h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 my-6 px-6">
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
