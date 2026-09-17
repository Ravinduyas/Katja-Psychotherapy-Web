import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPost, formatPostDate } from "@/lib/blog";
import { ArrowLeft, CalendarDays, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} | Katja Křížková`,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      type: "article",
      ...(post.meta.image ? { images: [{ url: post.meta.image }] } : {}),
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="px-6 md:px-10 py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-10"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all articles
        </Link>

        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest mb-5">
          <CalendarDays className="h-3.5 w-3.5 text-primary" />
          {formatPostDate(post.meta.date)}
          <span className="mx-1">·</span>
          <span>Katja Křížková</span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl leading-tight mb-8">{post.meta.title}</h1>

        {post.meta.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {post.meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-4 py-2 rounded-full bg-accent/30 text-accent-foreground border border-accent/40"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {post.meta.image && (
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.meta.image} alt={post.meta.title} className="w-full object-cover" />
          </div>
        )}

        <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.html }} />

        {/* CTA */}
        <div className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/60 text-center">
          <h2 className="font-display text-3xl mb-4">
            Ready to start your <span className="italic">own journey?</span>
          </h2>
          <p className="text-muted-foreground font-light mb-8 max-w-md mx-auto">
            A confidential conversation is all it takes to begin.
          </p>
          <Link href="/#contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12">
              <Calendar className="mr-2 h-4 w-4" /> Book a Session
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
