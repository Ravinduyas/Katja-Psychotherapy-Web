import Link from "next/link";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

const NAV_LINKS = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Booking" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <Link href="/#top" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoWhite.src} alt="Katja Křížková logo" className="h-9 w-auto drop-shadow" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-2xl md:text-[1.7rem] text-white font-semibold tracking-wide drop-shadow">
              Katja <span className="italic font-medium">Křížková</span>
            </span>
            <span className="text-[0.7rem] md:text-xs uppercase tracking-[0.25em] text-white/85 font-medium mt-0.5 drop-shadow">
              Integrative Psychotherapy
            </span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-9 text-[0.95rem] text-white/90 drop-shadow">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              aria-current={active === label ? "page" : undefined}
              className={active === label ? "text-white font-semibold" : "hover:text-white transition"}
            >
              {label}
            </Link>
          ))}
        </div>
        <Link href="/#contact">
          <Button className="rounded-full bg-[oklch(0.62_0.09_205)] hover:bg-[oklch(0.55_0.10_210)] text-white font-semibold px-6 shadow-md">
            Book Session
          </Button>
        </Link>
      </nav>
    </header>
  );
}
