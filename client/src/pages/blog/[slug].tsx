import { MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import { makeStore, wrapper } from "@/redux/store";
import {
  getAllPosts,
  getPostBySlug,
  getRunningQueriesThunk,
} from "@/redux/services/postsApi";
import { TPost } from "@/types";
import BlogView from "@/ui/components/BlogView";
import { serializeMarkdown } from "@/utils";

export default function BlogPostBySlug({
  mdxSource,
  post,
}: {
  mdxSource: MDXRemoteSerializeResult;
  post: TPost;
}) {
  return (
    <>
      <Head>
        <title>Liav Edry | {mdxSource.frontmatter?.title as string} </title>
      </Head>
      <BlogView post={post} mdxSource={mdxSource} />
    </>
  );
}

export async function getStaticPaths() {
  const store = makeStore();
  const { data } = await store.dispatch(getAllPosts.initiate(""));

  return {
    paths: data?.map((p) => `/blog/${p.slug}`) || [],
    fallback: true,
  };
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }: { params: { slug: string } }) => {
      const slug = params?.slug;

      const { data } = await store.dispatch(getPostBySlug.initiate(slug));
      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      const mdxSource = await serializeMarkdown(data?.content, true);

      return {
        props: {
          post: data,
          mdxSource,
        },
      };
    }
);
