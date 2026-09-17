import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Katja Křížková — Integrative Psychotherapy",
  description:
    "Articles on psychotherapy, emotional wellbeing, relationships, and personal growth by Katja Křížková, European Certified Integrative Psychotherapist.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-display text-2xl md:text-[1.7rem] text-foreground font-semibold tracking-wide">
              Katja <span className="italic font-medium">Křížková</span>
            </span>
            <span className="text-[0.7rem] md:text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mt-0.5">
              Integrative Psychotherapy
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-9 text-[0.95rem] text-foreground/80">
            <Link href="/" className="hover:text-foreground transition">Home</Link>
            <Link href="/#about" className="hover:text-foreground transition">About</Link>
            <Link href="/#services" className="hover:text-foreground transition">Services</Link>
            <Link href="/blog" className="text-primary font-medium">Blog</Link>
            <Link href="/#contact" className="hover:text-foreground transition">Booking</Link>
          </div>
          <Link
            href="/#contact"
            className="rounded-full bg-[oklch(0.62_0.09_205)] hover:bg-[oklch(0.55_0.10_210)] text-white font-semibold px-6 py-2.5 text-sm shadow-md transition"
          >
            Book Session
          </Link>
        </nav>
      </header>

      <main className="flex-1 pt-24">{children}</main>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-16 px-6 md:px-10 mt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl mb-3">Katja Křížková</h3>
            <p className="text-background/60 text-sm font-light leading-relaxed">
              Integrative Psychotherapy & Mental Health Support. A safe space for healing, growth, and reconnection.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] mb-4 text-background/50">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /><span>katjakrizkova@gmail.com</span></li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /><span>+420 603 892 568</span></li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /><span>Online & in person</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] mb-4 text-background/50">Explore</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/#services" className="hover:text-background">Services</Link></li>
              <li><Link href="/#approach" className="hover:text-background">Approach</Link></li>
              <li><Link href="/#about" className="hover:text-background">About Katja</Link></li>
              <li><Link href="/blog" className="hover:text-background">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-background">Book a session</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-background/10 text-xs text-background/50 flex flex-col sm:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Katja Křížková. All rights reserved.</p>
          <p>Crafted with care for your healing journey.</p>
        </div>
      </footer>
    </div>
  );
}
