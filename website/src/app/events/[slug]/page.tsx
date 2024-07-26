import React from "react";

import { Serialize } from "@/app/components/RichText";
import Image from "next/image";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { getEvent, getPosts } from "@/app/hooks";
import { Github, Twitter } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import { Badge } from "@/app/components/Badge";
import { formatDateRange } from "@/app/components/lib/utils";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  const { title, coverImage, excerpt } = await getEvent({ slug });

  return {
    title: title,
    description: `${excerpt}`,
    openGraph: {
      images: [process.env.NEXT_PUBLIC_PAYLOAD_CMS + coverImage.url!],
    },
  };
}

export async function generateStaticParams() {
  const events = await fetch(
    process.env.NEXT_PUBLIC_PAYLOAD_CMS + "/api/events",
    {
      credentials: "include",
    },
  ).then((res) => res.json());

  return events.docs.map((event: any) => ({
    slug: event.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { title, createdAt, coverImage, content, dateFrom, dateTo } =
    await getEvent({
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
        <div className="not-prose mb-8">
          <Badge
            size="large"
            text={formatDateRange(dateFrom, dateTo)}
            color="yellow"
          />
        </div>

        <h1 className="text-3xl font-bold sm:text-5xl">{title}</h1>

        {Serialize({ nodes: content.root.children as any })}

        <div className="not-prose border-t pt-20">
          <Link href={`/events`}>
            <Button withArrow variant={"outline"}>
              back to events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
