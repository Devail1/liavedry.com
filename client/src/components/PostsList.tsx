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
                <p className="text-sm font-semibold md:text-base">
                  {formatTitle(post.title)}
                </p>
              </Link>
              <p className="text-muted text-xs">
                {formatDate(post.createdAt, "en-GB")}
              </p>
            </div>
          )
      )}
    </div>
  );
}

export default PostsList;
