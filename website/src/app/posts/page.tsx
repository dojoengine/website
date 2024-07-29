import React from "react";
import { PostCardRow } from "../components/posts/PostCardRow";
import { Container } from "../components/Container";
import { Text } from "../components/Text";
import { getAllPosts } from "../hooks";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getAllPosts();
  return {
    title: `${posts.length} Dojo Writings`,
    description: `The latest about Dojo and the world of onchain games.`,
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
    posts: {
      slug: post.slug,
    },
  }));
}

export default async function PostsPage() {
  return (
    <Container>
      <Text className="my-8 " textStyle="headline2">
        Hato: Writings
      </Text>

      <PostCardRow posts={await getAllPosts()} />
    </Container>
  );
}
