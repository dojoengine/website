import { getSortedArticlesData } from "@/app/hooks/articles";
import { ArticleCard } from "../../components/ArticleCard";
import { useTranslation } from "@/app/i18n";

async function getData() {
  return {
    articles: getSortedArticlesData(),
  };
}

export default async function Articles({ params: { lng } }: { params: { lng: string } }) {
  const { articles } = await getData();

   // this is not a react hook despite the name
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = await useTranslation(lng, "common");

  return (
    <div className="container container-min-h px-6 mx-auto mt-10 md:mt-20  mb-20 md:mb-40">
      <h2 className="mb-8 text-white">{t("blog_posts")}</h2>
      <div className="flex flex-col w-full space-y-3">
        {articles?.map((a: any, index: any) => {
          return <ArticleCard key={index} article={a} lng={lng} />;
        })}
      </div>
    </div>
  );
}
