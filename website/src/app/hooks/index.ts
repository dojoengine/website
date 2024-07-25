import QueryString from "qs";
import { Post } from "../types";

export const getAllPosts = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_PAYLOAD_CMS + `/api/posts`,
  );

  const post = await response.json();

  return post.docs as Post[];
};

export const getPosts = async ({ slug }: { slug: string }) => {
  const stringifiedQuery = QueryString.stringify(
    {
      where: {
        slug: {
          equals: slug,
        },
      },
    },
    { addQueryPrefix: true },
  );

  const response = await fetch(
    process.env.NEXT_PUBLIC_PAYLOAD_CMS +
      `/api/posts${stringifiedQuery}&depth=2`,
  );

  const post = await response.json();

  return post.docs[0] as Post;
};
