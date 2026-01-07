import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MarkdownRenderer } from "@/components/blog/markdown-renderer";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PostPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);
    return {
        title: `${post.title} | DevBlog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
    };
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    return (
        <article className="prose prose-zinc dark:prose-invert max-w-none">
            <div className="mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 no-underline"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to posts
                </Link>
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <time dateTime={post.date}>
                        {format(new Date(post.date), "MMMM d, yyyy")}
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
