import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";

export const isServer = (): boolean => typeof window === "undefined";

export const formatDate = (date: string, locale = "en-US"): string =>
  new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const getInitialTheme = (): "light" | "dark" => {
  if (isServer()) {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const titleToSlug = (title: string) =>
  title
    .toLowerCase() // Convert the title to lowercase
    .replace(/[^\w\s-]/g, "") // Remove non-word characters (except hyphens and spaces)
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace consecutive hyphens with a single hyphen
    .trim(); // Trim any leading or trailing hyphens

export const serializeMarkdown = (content: string) =>
  serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight as any],
      development: process.env.NODE_ENV === "development",
    },
  });
