const formatDate = (date: string, locale = "en-US"): string =>
  new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default formatDate;
