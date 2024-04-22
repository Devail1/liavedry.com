import React from "react";
import Link from "next/link";
import { TPost } from "@/types";
import { formatDate } from "@/utils";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@/redux/features/authSlice";

function Posts({ posts }: { posts: TPost[] }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <h3 className="text-2xl font-medium md:mb-2 md:text-3xl">Writing</h3>
      {posts?.map((post) => {
        const shouldRender = isLoggedIn || post.published;
        return (
          shouldRender && (
            <div className="py-2" key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <p className="text-sm font-semibold md:text-base">
                  {post.title}
                </p>
              </Link>
              <p className="text-muted text-xs">
                {formatDate(post.createdAt, "en-GB")}
              </p>
            </div>
          )
        );
      })}
    </div>
  );
}

export default Posts;
