import MainLayout from '@/layout/main-layout';
import { getAllPosts } from '@/lib/mdx';
import MainPageContainer from '@/features/main/container';

export default function Home() {
  const posts = getAllPosts();

  return <MainPageContainer posts={posts} />;
}
