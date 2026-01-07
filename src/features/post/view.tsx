import { MarkdownRenderer } from '@/components/blog/markdown-renderer';
import { Badge } from '@/components/ui/badge';
import { Post } from '@/types';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
  post: Post;
}

export default function PostPageView({ post }: Props) {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 no-underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          돌아가기
        </Link>
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'yyyy년 M월 d일')}
          </time>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          {post.title}
        </h1>
        {post.tags && (
          <div className="flex gap-2 mb-8 not-prose">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <MarkdownRenderer source={post.content} />
    </article>
  );
}
