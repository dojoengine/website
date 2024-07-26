import React from "react";
import { PostCardRow } from "../components/posts/PostCardRow";
import { Container } from "../components/Container";
import { Text } from "../components/Text";
import { getAllEvents, getAllPosts } from "../hooks";
import { Metadata } from "next";
import { EventRow } from "../components/events/EventRow";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getAllPosts();
  return {
    title: `${posts.length} Dojo Events`,
    description: `The latest about events at the Dojo`,
  };
}

export async function generateStaticParams() {
  const posts = await fetch(
    process.env.NEXT_PUBLIC_PAYLOAD_CMS + "/api/events",
    {
      credentials: "include",
    },
  ).then((res) => res.json());

  return posts.docs.map((post: any) => ({
    posts: {
      slug: post.slug,
    },
  }));
}

export default async function PostsPage() {
  return (
    <Container>
      <EventRow events={await getAllEvents()} />
    </Container>
  );
}
