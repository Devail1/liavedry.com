import Head from "next/head";
import Image from "next/image";
import { getAllPosts, getRunningQueriesThunk } from "@/redux/services/postsApi";
import { wrapper } from "@/redux/store";
import Experience from "@/ui/sections/Experience";
import Posts from "@/ui/sections/Posts";
import Projects from "@/ui/sections/Projects";
import { experiences, projects } from "@/constants";
import Greeting from "@/ui/components/Greeting";

export default function Home({ posts }: { posts: any }) {
  return (
    <div>
      <Head>
        <title>Liav Edry | Web Developer</title>
      </Head>
      <div className="flex flex-col gap-4 space-y-8 md:space-y-12">
        <Greeting />
        <div className="w-full space-y-8 md:my-8 md:space-y-12 ">
          <Posts posts={posts} />
          <Projects projects={projects} />
          <Experience experiences={experiences} />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const { data } = await store.dispatch(getAllPosts.initiate(""));
  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {
      posts: data,
    },
  };
});
