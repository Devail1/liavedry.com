import { getAllPosts, getPostBySlug, getRunningQueriesThunk } from "@/redux/services/postsApi";
import { makeStore, wrapper } from "@/redux/store";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function Post({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className="prose lg:prose-xl prose-img:rounded-xl prose-img:my-0 prose-a:text-blue-400">
      {source && <MDXRemote {...source} />}
    </div>
  );
}

export async function getStaticPaths() {
  const store = makeStore();
  const result = await store.dispatch(getAllPosts.initiate(""));

  return {
    paths: result.data?.map((p) => `/post/${p.title}`) || [],
    fallback: true,
  };
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }: { params: { name: string } }) => {
      const name = params?.name;
      const { data } = await store.dispatch(getPostBySlug.initiate(name));
      await Promise.all(store.dispatch(getRunningQueriesThunk()));
      const mdxSource = await serialize(data.content);

      return {
        props: { source: mdxSource },
      };
    }
);
