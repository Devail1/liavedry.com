import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Alert from "./components/Alert";

const CustomComponents = (components: MDXComponents) => ({
  h2: ({ children }) => (
    <h2 className="!text-xl font-semibold md:!text-2xl lg:!text-3xl">
      {children}
    </h2>
  ),
  blockquote: ({ children }) => <Alert>{children}</Alert>,
  img: (props) => (
    <span className="relative block aspect-[16/9] w-full">
      <Image
        className="object-cover shadow-sm data-[loading=true]:skeleton"
        onLoad={(e) => e.currentTarget.setAttribute("data-loading", "false")}
        data-loading="true"
        priority
        fill
        {...(props as ImageProps)}
      />
    </span>
  ),
  ...components,
});

export default CustomComponents;
