import Link from "next/link";

export const ArticleCard = ({ article }: { article: any }) => {
  return (
    <Link
      className="flex flex-col w-full space-y-3 bg-white text-black border-dojo-red p-6 border-4"
      href={"articles/" + article.id}
    >
      <h2 className="uppercase text-xl font-bold">{article.title}</h2>

      <p>{article.subtitle}</p>
    </Link>
  );
};
