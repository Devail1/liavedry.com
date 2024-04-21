import React from "react";
import Link from "next/link";
import { TPost } from "@/types";
import { formatDate } from "@/utils";

function Posts({ posts }: { posts: TPost[] }) {
  return (
    <div>
      <h3 className="text-2xl font-medium md:mb-2 md:text-3xl">Writing</h3>
      {posts?.map((post) =>
        post.published ? (
          <div className="py-2" key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <p className="text-sm font-semibold md:text-base">{post.title}</p>
            </Link>
            <p className="text-muted text-xs">
              {formatDate(post.createdAt, "en-GB")}
            </p>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Posts;
