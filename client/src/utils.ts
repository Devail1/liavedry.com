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
