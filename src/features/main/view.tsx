import { PostCard } from '@/components/blog/post-card';
import { Post } from '@/types';

type Props = {
  posts: Post[];
};

export default function MainPageView({ posts }: Props) {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">최근 게시물</h2>
        <p className="text-muted-foreground">
          최근 게시물을 확인할 수 있습니다.
        </p>
      </div>
      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
