import { Post } from "@/app/types";
import { PostCard } from "./PostCard";

export const PostCardRow = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};
