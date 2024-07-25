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

export async function getContributors(repoName: string, page = 1) {
  let request = await fetch(
    `https://api.github.com/repos/${repoName}/contributors?per_page=100&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  let contributorsList = await request.json();
  return contributorsList;
}

export async function getAllContributors(repoName: string) {
  let contributors: { avatar_url: string }[] = [];
  let page = 1;

  while (true) {
    const list = await getContributors(repoName, page);
    if (list.length === 0) {
      break;
    }
    contributors = contributors.concat(list);
    page++;
  }

  return contributors;
}
