import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

const CustomComponents = (components: MDXComponents) => ({
  h1: ({ children }) => <h1 className="!text-2xl md:!text-3xl lg:!text-4xl font-bold">{children}</h1>,
  h2: ({ children }) => <h2 className="!text-xl md:!text-2xl lg:!text-3xl font-semibold">{children}</h2>,
  img: (props) => (
    <span className="relative block w-full aspect-[16/9]">
      <Image priority fill className="object-cover shadow-sm" {...(props as ImageProps)} />
    </span>
  ),
  ...components,
});

export default CustomComponents;
