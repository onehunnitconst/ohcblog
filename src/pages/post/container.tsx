'use client';

import { Post } from '@/types';
import PostPageView from './view';

interface Props {
  post: Post;
}

export default function PostPageContainer({ post }: Props) {
  return <PostPageView post={post} />;
}
