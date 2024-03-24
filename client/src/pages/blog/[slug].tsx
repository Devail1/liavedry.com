import { Suspense } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import MdxComponents from '@/mdx-components';
import { makeStore, wrapper } from '@/redux/store';
import { getAllPosts, getPostBySlug, getRunningQueriesThunk } from '@/redux/services/postsApi';
import { formatDate, formatTitle } from '@/utils';

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
  const { data } = await store.dispatch(getAllPosts.initiate(''));

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

      const formattedTitle = formatTitle(slug as string);
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
