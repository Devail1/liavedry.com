import { ReactNode } from "react";
import MDXContent from "../../mock/mdx-content.mdx";
import Head from "next/head";

export default function MDXPage({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Liav Edry | Blog</title>
      </Head>
      <div className="prose lg:prose-xl prose-img:rounded-xl prose-img:my-0 prose-a:text-blue-400">
        <MDXContent />
        {children}
      </div>
    </>
  );
}
