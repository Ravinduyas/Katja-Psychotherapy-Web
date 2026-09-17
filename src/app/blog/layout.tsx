import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Blog | Katja Křížková — Integrative Psychotherapy",
  description:
    "Articles on psychotherapy, emotional wellbeing, relationships, and personal growth by Katja Křížková, European Certified Integrative Psychotherapist.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader active="Blog" />
      <main className="flex-1 pt-28">{children}</main>
      <SiteFooter className="mt-24" />
    </div>
  );
}
