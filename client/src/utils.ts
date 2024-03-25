export const formatDate = (date: string, locale = "en-US"): string =>
  new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const formatTitle = (title: string): string =>
  title.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
