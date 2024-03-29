import { Suspense } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import useMDXComponents from "@/mdx-components";
import { makeStore, wrapper } from "@/redux/store";
import {
  getAllPosts,
  getPostBySlug,
  getRunningQueriesThunk,
} from "@/redux/services/postsApi";
import { formatDate, formatTitle } from "@/utils";

export default function BlogPostBySlug({
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
        <article className="prose pb-8 pt-2 lg:prose-xl prose-a:font-normal prose-a:text-blue-400">
          <h1 className="prose !mb-0 text-2xl font-semibold md:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="prose mt-1 md:!mt-2">{date}</p>
          <MDXRemote {...source} components={useMDXComponents} />
        </article>
      </Suspense>
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

      const formattedTitle = formatTitle(data.title);
      const formattedDate = formatDate(data?.createdAt);

      const mdxSource = await serialize(data?.content);

      return {
        props: {
          source: mdxSource,
          title: formattedTitle,
          date: formattedDate,
        },
      };
    }
);
