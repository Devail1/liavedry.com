import type { MDXComponents as TMDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Alert from "@/ui/components/Alert";

function useMDXComponents(components: TMDXComponents): TMDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="!text-xl font-semibold md:!text-2xl lg:!text-3xl">
        {children}
      </h2>
    ),
    img: (props) => (
      <figure>
        <div className="relative block aspect-video w-full">
          <Image
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
        {props.title && (
          <figcaption
            className="*:text-muted text-center text-sm md:text-base"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
        )}
      </figure>
    ),
    blockquote: ({ children }) => <Alert>{children}</Alert>,
    ...components,
  };
}

export default useMDXComponents;
