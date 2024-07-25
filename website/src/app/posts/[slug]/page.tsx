import React from "react";
import qs from "qs";
import { Serialize } from "@/app/components/RichText";
import Image from "next/image";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { getPosts } from "@/app/hooks";

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
    <div className="mt-28 px-4 py-8">
      <div className="container mx-auto mb-8 w-1/2">
        <h1 className="mb-10  text-3xl font-bold">{title}</h1>

        <div className="my-8 flex justify-start gap-3">
          <Image
            src={process.env.NEXT_PUBLIC_PAYLOAD_CMS + author.avatar.url!}
            width={200}
            height={200}
            alt={author.name}
            className=" h-16 w-16 rounded-full border "
          />
          <div className=" text-left">
            <p className="text-lg font-semibold">
              {author.name}
              {" - "}
              {new Date(createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-sm text-gray-500">@{author.github}</p>
            <p className="text-sm text-gray-500">@{author.twitter}</p>
          </div>
        </div>
      </div>

      <Image
        src={process.env.NEXT_PUBLIC_PAYLOAD_CMS + coverImage.url!}
        width={coverImage.width!}
        height={coverImage.height!}
        alt={"alt"}
        className="max-h-96 w-full object-cover"
      />
      <div className="prose lg:prose-xl prose-default container mx-auto my-20">
        {Serialize({ nodes: content.root.children as any })}
      </div>

      <div className="container mx-auto w-1/2 border-t py-8">
        <Link href={`/posts`}>
          <Button variant={"outline"}>back to posts</Button>
        </Link>
      </div>
    </div>
  );
}
