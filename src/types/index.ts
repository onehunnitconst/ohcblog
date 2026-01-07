export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags?: string[];
  content: string;
  readingTime?: string;
};
