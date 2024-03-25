import React from "react";
import Link from "next/link";
import { formatDate, formatTitle } from "@/utils";

type TPost = {
  id: number;
  slug: string;
  published: boolean;
  title: string;
  createdAt: string;
};
function PostsList({ posts }: { posts: TPost[] }) {
  return (
    <div>
      {posts?.map(
        (post) =>
          post.published && (
            <div className="py-2" key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <p className="text-sm md:text-base font-semibold">{formatTitle(post.title)}</p>
              </Link>
              <p className="text-xs text-muted">{formatDate(post.createdAt, "en-GB")}</p>
            </div>
          )
      )}
    </div>
  );
}

export default PostsList;
