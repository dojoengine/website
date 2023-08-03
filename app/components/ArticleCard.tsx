import Link from "next/link";

export const ArticleCard = ({ article }: { article: any }) => {
    return (

        <Link className="flex flex-col w-full space-y-3 border-dojo-blue-light rounded p-3 border" href={"articles/" + article.id}>
            {article.title}
        </Link>

    );
}