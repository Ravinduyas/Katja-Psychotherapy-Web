import type { Metadata } from "next";
import heroSunset from "@/assets/hero-walk.jpg";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Psychotherapy Services | Anxiety, Trauma & Relationship Therapy",
  description:
    "Professional integrative psychotherapy for anxiety, depression, trauma, and relationship challenges. Start your healing journey today with Katja Křížková.",
  authors: [{ name: "Katja Křížková" }],
  openGraph: {
    title: "Integrative Psychotherapy & Mental Health Support",
    description:
      "Helping you heal, grow, and reconnect with yourself — through professional, compassionate therapy.",
    type: "website",
    images: [{ url: heroSunset.src }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Katja Křížková — Integrative Psychotherapy",
  description:
    "Integrative psychotherapy for anxiety, trauma, depression, and relationship support.",
  serviceType: "Psychotherapy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
