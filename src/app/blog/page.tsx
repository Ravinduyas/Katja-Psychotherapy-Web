import Link from "next/link";
import { getAllPosts, formatPostDate } from "@/lib/blog";
import { Card } from "@/components/ui/card";
import { CalendarDays, ArrowRight, Sparkles } from "lucide-react";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">Blog</p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
            Thoughts on <span className="italic">healing & growth</span>
          </h1>
          <p className="text-muted-foreground font-light text-lg">
            Articles on psychotherapy, emotional wellbeing, relationships, and the journey of getting to know yourself.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-24">
            <Sparkles className="h-8 w-8 text-primary mx-auto mb-6" />
            <p className="font-display text-2xl italic text-muted-foreground">
              New articles are on their way. Please check back soon.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden border-border/40 bg-card rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-deep)] transition-shadow p-0">
                  {post.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest">
                      <CalendarDays className="h-3.5 w-3.5 text-primary" />
                      {formatPostDate(post.date)}
                    </div>
                    <h2 className="font-display text-2xl text-primary leading-snug group-hover:underline decoration-primary/40 underline-offset-4">
                      {post.title}
                    </h2>
                    <p className="text-foreground/70 font-light leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm text-primary font-medium">
                      Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
