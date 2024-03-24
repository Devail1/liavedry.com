import {
  getAllPosts,
  getPostBySlug,
  getRunningQueriesThunk,
} from "@/redux/services/postsApi";
import { makeStore, wrapper } from "@/redux/store";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import MdxComponents from "@/mdx-components";
import { Suspense } from "react";

export default function Post({
  source,
  title,
  date,
}: {
  source: MDXRemoteSerializeResult;
  title: string;
  date: string;
}) {
  return (
    <>
      <Head>
        <title>Liav Edry | {title} </title>
      </Head>
      <Suspense fallback={<>Loading...</>}>
        <article className="prose lg:prose-xl prose-img:rounded-xl prose-img:my-0 prose-a:text-blue-400">
          <p className="text-xl">{date}</p>
          <MDXRemote {...source} components={MdxComponents} />
        </article>
      </Suspense>
    </>
  );
}

export async function getStaticPaths() {
  const store = makeStore();
  const { data } = await store.dispatch(getAllPosts.initiate(""));

  return {
    paths: data?.map((p) => `/blog/${p.title}`) || [],
    fallback: true,
  };
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }: { params: { title: string } }) => {
      const title = params?.title;

      const { data } = await store.dispatch(getPostBySlug.initiate(title));
      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      const formattedTitle = data?.title
        ?.replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      const formattedDate = new Date(data?.createdAt).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      );

      const mdxSource = await serialize(data?.content, {
        scope: { title: formattedTitle, date: formattedDate },
      });

      return {
        props: {
          source: mdxSource,
          title: formattedTitle,
          date: formattedDate,
        },
      };
    },
);
