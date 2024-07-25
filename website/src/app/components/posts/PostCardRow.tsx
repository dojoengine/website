import { Post } from "@/app/types";
import { PostCard } from "./PostCard";

export const PostCardRow = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};
