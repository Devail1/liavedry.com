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
  let res;
  try {
    res = await store.dispatch(getAllPosts.initiate(""));
  } catch (error) {
    console.log("error in getStaticPaths", error);
  }

  return {
    paths: res?.data?.map((p) => `/post/${p.title}`) || [],
    fallback: true,
  };
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }: { params: { name: string } }) => {
      let res;
      const name = params?.name;

      try {
        res = await store.dispatch(getPostBySlug.initiate(name));
      } catch (error) {
        console.log("error in getStaticProps", error);
      }
      try {
        await Promise.all(store.dispatch(getRunningQueriesThunk()));
      } catch (error) {
        console.log("error in getStaticProps with getRunningQueriesThunk", error);
      }
      const mdxSource = await serialize(res?.data?.content);

      return {
        props: { source: mdxSource },
      };
    }
);
