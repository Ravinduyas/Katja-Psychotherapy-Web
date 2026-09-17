import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

export default function SiteFooter({ className = "" }: { className?: string }) {
  return (
    <footer id="footer" className={`bg-foreground text-background py-16 px-6 md:px-10 ${className}`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoWhite.src} alt="" className="h-10 w-auto mb-4 opacity-80" />
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
  );
}
