import type { MDXComponents as TMDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Alert from "@/ui/components/Alert";

function useMDXComponents(components: TMDXComponents): TMDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="!text-2xl font-semibold md:!text-3xl lg:!text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="!text-xl font-semibold md:!text-2xl lg:!text-3xl">
        {children}
      </h2>
    ),
    img: ({ alt, title, ...props }) => (
      <figure>
        <div className="relative block aspect-video w-full">
          <Image
            alt={alt}
            className="rounded-xl object-cover shadow-sm data-[loading=true]:skeleton"
            onLoad={(e) =>
              e.currentTarget.setAttribute("data-loading", "false")
            }
            data-loading="true"
            priority
            fill
            {...(props as ImageProps)}
          />
        </div>
        {title && (
          <figcaption
            className="*:text-muted text-center text-sm md:text-base"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
      </figure>
    ),
    blockquote: ({ children }) => <Alert>{children}</Alert>,
    ...components,
  };
}

export default useMDXComponents;
