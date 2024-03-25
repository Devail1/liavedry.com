import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { ImgHTMLAttributes } from "react";

const CustomComponents = (components: MDXComponents) => ({
  h2: ({ children }) => (
    <h2 className="!text-xl md:!text-2xl lg:!text-3xl font-semibold">{children}</h2>
  ),
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="relative block w-full aspect-[16/9]">
      <Image priority fill className="object-cover shadow-sm" {...(props as ImageProps)} />
    </span>
  ),
  ...components,
});

export default CustomComponents;
