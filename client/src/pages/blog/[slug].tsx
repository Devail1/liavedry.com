import rehypeHighlight from "rehype-highlight";
import { Suspense, useRef, useState } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import useMDXComponents from "@/ui/components/mdx-components";
import { makeStore, wrapper } from "@/redux/store";
import {
  getAllPosts,
  getPostBySlug,
  getRunningQueriesThunk,
} from "@/redux/services/postsApi";
import { formatDate } from "@/utils";
import { selectIsLoggedIn } from "@/redux/features/authSlice";
import { useSelector } from "react-redux";
import type { MDXEditorMethods } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import PostActions from "@/ui/components/PostActions";

const Editor = dynamic(() => import("@/ui/components/Editor"), { ssr: false });

export default function BlogPostBySlug({
  markdownSource,
  source,
  title,
  date,
}: {
  markdownSource: string;
  source: MDXRemoteSerializeResult;
  title: string;
  date: string;
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isEditMode, setIsEditMode] = useState(false);
  const ref = useRef<MDXEditorMethods>(null);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
  };

  return (
    <>
      <Head>
        <title>Liav Edry | {title} </title>
      </Head>
      <Suspense fallback={<>Loading...</>}>
        {isLoggedIn && (
          <PostActions
            editorRef={ref}
            isEditing={isEditMode}
            onEdit={handleEditClick}
            onCancel={handleCancelClick}
          />
        )}
        {isEditMode ? (
          <Editor ref={ref} markdown={markdownSource} />
        ) : (
          <article className="prose pb-8 lg:prose-xl prose-a:font-normal prose-a:text-blue-400 prose-img:my-0">
            <h1 className="prose !mb-0 text-2xl font-semibold md:text-3xl lg:text-4xl">
              {title}
            </h1>
            <p className="prose mt-1 md:!mt-2">{date}</p>
            <MDXRemote {...source} components={useMDXComponents} />
          </article>
        )}
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

      const formattedDate = formatDate(data?.createdAt);

      const mdxSource = await serialize(data?.content, {
        mdxOptions: {
          rehypePlugins: [rehypeHighlight as any],
        },
      });

      const markdownSource = `# ${data?.title}\n\n${data?.content}`;

      return {
        props: {
          markdownSource,
          source: mdxSource,
          date: formattedDate,
          title: data.title,
        },
      };
    }
);
