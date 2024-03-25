import Head from "next/head";
import Image from "next/image";
import { getAllPosts, getRunningQueriesThunk } from "@/redux/services/postsApi";
import { wrapper } from "@/redux/store";
import PostsList from "@/components/PostsList";

export default function Home({ posts }: { posts: any }) {
  return (
    <div>
      <Head>
        <title>Liav Edry | Web Developer</title>
      </Head>
      <div className="flex flex-col gap-4 pt-2">
        <div className="flex flex-col space-y-2 w-full md:items-center md:gap-x-8 md:flex-row">
          <div className="relative w-24 h-24 shrink-0">
            <Image
              className="rounded-full object-cover"
              src="/profile.jpeg"
              alt="profile"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col grow max-w-lg">
            <h1 className="text-2xl leading-10 font-medium text-title">Hey, I&apos;m Liav 👋</h1>
            <h2 className="text-lg leading-6 font-normal text-subtitle">
              Lifelong learner, building digital experiences.
            </h2>

            <a
              href="http://mailto:liavedry@gmail.com"
              className="btn btn-md mt-4 btn-primary btn-block rounded-2xl text-white"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Get in touch
            </a>
          </div>
        </div>
        <div className="my-6 md:my-8 w-full ">
          <h3 className="text-2xl md:mb-2 font-medium text-title">Recent Posts</h3>
          <PostsList posts={posts} />
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
