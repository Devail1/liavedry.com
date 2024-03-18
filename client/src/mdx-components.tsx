/* eslint-disable import/prefer-default-export */
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="!text-3xl md:!text-4xl font-bold !mb-6">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="!text-xl md:!text-2xl font-semibold !mt-6 !mb-8">{children}</h2>
    ),
    img: (props: ImageProps) => (
      <div className="relative w-full aspect-[16/9]">
        <Image objectFit="cover" fill {...props} />
      </div>
    ),
    ...components,
  };
}
