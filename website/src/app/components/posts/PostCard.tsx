import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import { Post } from "@/app/types";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="duration-250 shadow-3xl rounded-4xl  border-white/10 bg-gradient-to-b from-[#1A1479] to-[#021531] p-6 transition-all   hover:from-secondary/80 hover:to-tertiary/15">
        <Image
          src={process.env.NEXT_PUBLIC_PAYLOAD_CMS + post.coverImage.url!}
          width={250}
          height={250}
          alt="alt"
          className="w-full  rounded-2xl"
        />
        <div className="mt-4">
          <h2 className="text-2xl">{post.title}</h2>
          <p className="my-3">{post.excerpt}</p>

          <Button variant={"outline"}>View</Button>
        </div>
      </div>
    </Link>
  );
};
