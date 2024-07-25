import Image from "next/image";
import Link from "next/link";
import { Post } from "@/app/types";
import { Text } from "../Text";
import { Badge } from "../Badge";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="duration-250 shadow-3xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#1A1479] to-[#021531] p-3 transition-all   hover:from-secondary/80 hover:to-tertiary/15">
        <Image
          src={process.env.NEXT_PUBLIC_PAYLOAD_CMS + post.coverImage.url!}
          width={250}
          height={250}
          alt="alt"
          className="w-full  rounded-2xl"
        />
        <div className="mt-4 p-3">
          <div className="flex justify-between text-xs uppercase">
            {post.tags.map((a) => (
              <Badge size="small" text={a.title} color="red" />
            ))}

            <div className="self-center">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
          <Text className="mb-4 mt-4" textStyle="headline3">
            {post.title}
          </Text>

          <p className="my-3">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};
