import React from "react";
import { PostCardRow } from "../components/posts/PostCardRow";
import { Container } from "../components/Container";
import { Text } from "../components/Text";
import { Post } from "../types";
import { getAllPosts } from "../hooks";

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
  const posts = await getAllPosts();

  return (
    <Container>
      <div>
        <Text className="mb-8 " textStyle="headline2">
          Sensei Blog
        </Text>
      </div>
      <PostCardRow posts={posts} />
    </Container>
  );
}
