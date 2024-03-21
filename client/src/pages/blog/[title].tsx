import { getAllPosts, getPostBySlug, getRunningQueriesThunk } from "@/redux/services/postsApi";
import { makeStore, wrapper } from "@/redux/store";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";

export default function Post({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <>
      <Head>
        <title>Liav Edry | Blog</title>
      </Head>
      <div className="prose lg:prose-xl prose-img:rounded-xl prose-img:my-0 prose-a:text-blue-400">
        {source && <MDXRemote {...source} />}
      </div>
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

      const mdxSource = await serialize(data?.content);

      return {
        props: { source: mdxSource, title: data?.title },
      };
    }
);
