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
      <div className="flex flex-col gap-4 pt-4">
        <div className="flex w-full flex-col space-y-2 md:flex-row md:items-center md:gap-x-8">
          <div className="relative h-24 w-24 shrink-0">
            <Image
              className="rounded-full object-cover"
              src="/profile.jpeg"
              alt="profile"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex max-w-lg grow flex-col">
            <h1 className="text-greeting text-2xl font-medium leading-10">
              Hey, I&apos;m Liav 👋
            </h1>
            <h2 className="text-description text-lg font-normal leading-6">
              Lifelong learner, building digital experiences.
            </h2>

            <a
              href="mailto:livedry@gmail.com?subject=Inquiry - [Your Name]&body=Hi there,%0AI came across your website and was impressed by your work. I'm a [your job title/expertise], interested in [briefly state your interest].%0AId love to connect.%0AThanks,%0A[Your Name]"
              className="btn btn-primary btn-md btn-block mt-4 rounded-full text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-none stroke-current stroke-2"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Get in touch
            </a>
          </div>
        </div>
        <div className="my-6 w-full md:my-8 ">
          <h3 className="text-xl font-medium md:mb-2 md:text-3xl">Writing</h3>
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
