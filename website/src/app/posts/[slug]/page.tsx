import React from "react";

import { Serialize } from "@/app/components/RichText";
import Image from "next/image";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { getPosts } from "@/app/hooks";
import { Github, Twitter } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  const { author, title, coverImage } = await getPosts({ slug });

  return {
    title: title,
    description: `Article by ${author.name}`,
    openGraph: {
      images: [process.env.NEXT_PUBLIC_PAYLOAD_CMS + coverImage.url!],
    },
  };
}

export async function generateStaticParams() {
  const posts = await fetch(
    process.env.NEXT_PUBLIC_PAYLOAD_CMS + "/api/posts",
    {
      credentials: "include",
    },
  ).then((res) => res.json());

  return posts.docs.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { author, title, createdAt, coverImage, content } = await getPosts({
    slug,
  });

  return (
    <div className="mt-28 px-4 py-8 ">
      <Image
        src={process.env.NEXT_PUBLIC_PAYLOAD_CMS + coverImage.url!}
        width={coverImage.width!}
        height={coverImage.height!}
        alt={"alt"}
        className="max-h-[50vh] w-full rounded-2xl border border-white/10 object-cover"
      />

      <div className="prose prose-default  mx-auto mb-16 mt-24 lg:prose-xl">
        <h1 className="text-3xl font-bold sm:text-5xl">{title}</h1>
        <div className="my-4 flex justify-start gap-3 ">
          <Image
            src={process.env.NEXT_PUBLIC_PAYLOAD_CMS + author.avatar.url!}
            width={200}
            height={200}
            alt={author.name}
            className="h-12 w-12 rounded-full shadow-2xl sm:h-20 sm:w-20 "
          />
          <div className=" not-prose self-center text-left">
            <p className="font-semibold text-gray-400 sm:text-lg">
              {author.name}
              {" - "}
              {new Date(createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="my-1 flex gap-2 sm:my-3">
              {" "}
              <a href={`https://github.com/${author.github}`}>
                <Github className="stroke-gray-400" size={16} />
              </a>
              <a href={`https://twitter.com/${author.twitter}`}>
                <Twitter className="stroke-gray-400" size={16} />
              </a>
            </div>
          </div>
        </div>
        {Serialize({ nodes: content.root.children as any })}

        <div className="not-prose border-t pt-20">
          <Link href={`/posts`}>
            <Button withArrow variant={"outline"}>
              back to posts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
