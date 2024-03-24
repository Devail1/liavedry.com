export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

export const formatTitle = (title: string): string =>
  title.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
