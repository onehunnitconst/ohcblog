import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
        <p className="text-muted-foreground">
          Thoughts on software development, architecture, and technology.
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
