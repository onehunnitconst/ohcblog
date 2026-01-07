'use client';

import { Post } from '@/types';
import MainPageView from './view';

type Props = {
  posts: Post[];
}

export default function MainPageContainer({ posts }: Props) {
  return <MainPageView posts={posts} />;
}
