import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liav Edry | Web Developer</title>
      </Head>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col space-y-2 w-full md:items-center md:gap-x-8 md:flex-row">
          <div className="relative w-24 h-24 shrink-0">
            <Image className="rounded-full object-cover" src="/profile.jpeg" alt="profile" fill />
          </div>
          <div className="flex flex-col grow max-w-lg">
            <h1 className="text-2xl font-medium text-content">Hey, I&apos;m Liav 👋</h1>
            <h2 className="text-base font-normal">
              Lifelong learner with a passion for building beautiful and functional web experiences
              using TypeScript, React, and Node.js
            </h2>

            <a
              href="http://mailto:liavedry@gmail.com"
              className="btn btn-md mt-4 btn-primary btn-block  rounded-2xl text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Get in touch
            </a>
          </div>
        </div>

        {/* <Link href="/api/hello" className="link mt-2">
        Testing Backend
      </Link> */}
      </div>
    </div>
  );
}
