import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string; // ISO date from frontmatter
  excerpt: string;
  image?: string;
  tags: string[];
}

export interface Post {
  meta: PostMeta;
  html: string;
}

function readPostFile(fileName: string): { meta: PostMeta; content: string } {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      excerpt: data.excerpt ?? content.trim().split("\n")[0].slice(0, 180),
      image: data.image,
      tags: Array.isArray(data.tags) ? data.tags : [],
    },
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readPostFile(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const safeSlug = path.basename(slug);
  const filePath = path.join(BLOG_DIR, `${safeSlug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const { meta, content } = readPostFile(`${safeSlug}.md`);
  const html = marked.parse(content, { async: false });
  return { meta, html };
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
