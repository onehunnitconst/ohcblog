import Link from "next/link";
import { format } from "date-fns";
import { Post } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <Link href={`/posts/${post.slug}`}>
            <Card className="hover:bg-muted/50 transition-colors border-none shadow-none ring-1 ring-border/50">
                <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                        <time className="text-sm text-muted-foreground">
                            {format(new Date(post.date), "MMMM d, yyyy")}
                        </time>
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">
                        {post.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>
                    {post.tags && (
                        <div className="flex gap-2 mt-4">
                            {post.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </Link>
    );
}
