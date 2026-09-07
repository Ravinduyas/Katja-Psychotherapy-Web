"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Heart, Users, UsersRound, Mail, Phone, MapPin,
  Sparkles, Compass, Shield, Sprout, ArrowRight, Calendar,
  GraduationCap, Briefcase, Award, ChevronDown, ChevronUp
} from "lucide-react";
import heroSunset from "@/assets/hero-main.jpeg";
import railwaySea from "@/assets/railway-sea.jpeg";
import lagoonPalms from "@/assets/lagoon-palms.jpeg";
import treeLand from "@/assets/tree-land.jpeg";
import sunsetBeach from "@/assets/sunset-beach.jpeg";
import therapist from "@/assets/therapist.jpeg";

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-24 px-6 md:px-10 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-5">{children}</p>
  );
}

function ExpandableList({ items, initial = 2 }: { items: string[]; initial?: number }) {
  const [open, setOpen] = useState(false);
  const visible = open ? items : items.slice(0, initial);
  return (
    <>
      <ul className="space-y-3 text-foreground/80 font-light leading-relaxed">
        {visible.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {items.length > initial && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-4 text-sm text-primary hover:underline"
        >
          {open ? "…less" : "…more"}
        </button>
      )}
    </>
  );
}

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <a href="#top" className="flex flex-col leading-tight">
            <span className="font-display text-2xl md:text-[1.7rem] text-white font-semibold tracking-wide drop-shadow">
              Katja <span className="italic font-medium">Křížková</span>
            </span>
            <span className="text-[0.7rem] md:text-xs uppercase tracking-[0.25em] text-white/85 font-medium mt-0.5 drop-shadow">
              Integrative Psychotherapy
            </span>
          </a>
          <div className="hidden md:flex items-center gap-9 text-[0.95rem] text-white/90 drop-shadow">
            <a href="#top" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Booking</a>
            <a href="#approach" className="hover:text-white transition">Resources</a>
          </div>
          <a href="#contact">
            <Button className="rounded-full bg-[oklch(0.62_0.09_205)] hover:bg-[oklch(0.55_0.10_210)] text-white font-semibold px-6 shadow-md">
              Book Session
            </Button>
          </a>
        </nav>
      </header>

      {/* 1. HERO */}
      <section id="top" className="relative min-h-screen flex items-center my-[15vh] rounded-3xl overflow-hidden mx-4 md:mx-8">
        <img
          src={heroSunset.src}
          alt="Sunset over the ocean — symbolizing emotional warmth and healing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full">
          <div className="max-w-2xl text-white">
            <Eyebrow>
              <span className="text-primary-foreground/90">Integrative Psychotherapy</span>
            </Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Integrative Psychotherapy <span className="italic">&</span> Mental Health Support
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-xl font-light">
              Helping you heal, grow, and reconnect with yourself — through professional, compassionate therapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                  <Calendar className="mr-2 h-4 w-4" /> Book a Session
                </Button>
              </a>
              <a href="#emotional">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 bg-white/10 border-white/50 text-white hover:bg-white hover:text-foreground backdrop-blur-sm">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.3em] uppercase">
          Scroll
        </div>
      </section>

      {/* QUOTE / INTRO */}
      <section className="py-8 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="h-7 w-7 text-primary mx-auto mb-6" />
          <p className="font-display text-2xl md:text-4xl leading-relaxed text-foreground/85 italic font-light">
            "Psychotherapy doesn't tell you what to do. It helps you organize your thoughts and feelings, understand your background, and learn to trust your own judgment."
          </p>
        </div>
      </section>

      {/* 2. EMOTIONAL CONNECTION */}
      <section id="emotional" className="relative py-32 px-6 md:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-deep)]">
              <img src={railwaySea.src} alt="Railway leading into the sea — a metaphor for life's crossroads" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
          </div>
          <div>
            <Eyebrow>You are not alone</Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8">
              Feeling stuck, lost, or <span className="italic text-primary">overwhelmed?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
              There are moments in life when everything feels uncertain — when you are standing at a crossroads, unsure which direction to take. You may be experiencing:
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Anxiety or constant worry that limits your everyday life",
                "Relationship or partnership problems",
                "A life crisis — personal, relational, or work-related",
                "Low mood with no objective reason",
                "Low self-esteem or self-doubt",
                "Conflicts with others — taking everything very personally",
                "Jealousy that is harming the relationship you want",
                "A need to come to terms with your past",
                "Loss of meaning or motivation",
                "A wish to grow and get to know yourself better",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-display text-2xl md:text-3xl italic text-primary">
              You don't have to go through this alone.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PSYCHOTHERAPY */}
      <Section className="bg-[var(--sand)]/40">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <Eyebrow>Mental Health Therapy</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
              What is <span className="italic">Psychotherapy?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              Psychotherapy is a professional and confidential process that helps you understand your thoughts, emotions, and behaviors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
              It is not about being told what to do — it is about discovering clarity, building self-awareness, and creating meaningful change in your life.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Emotional healing", "Anxiety treatment", "Depression support", "Self-awareness", "Integrative approach"].map((tag) => (
                <span key={tag} className="text-xs px-4 py-2 rounded-full bg-accent/30 text-accent-foreground border border-accent/40">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
              <img src={lagoonPalms.src} alt="Calm lagoon with palms — symbolizing peace and clarity" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* 4. SERVICES */}
      <section id="services" className="relative py-28 px-6 md:px-10 bg-[var(--sand)]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>Therapy Services</Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
              A path tailored <span className="italic">to you</span>
            </h2>
            <p className="text-muted-foreground font-light">
              Compassionate, confidential therapy across formats — find the support that fits your life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Heart,
                title: "Individual Psychotherapy",
                body: "Individual sessions provide you with a dedicated space to understand your personal challenges and suffering.",
                note: "Ideal for long-term growth and healing longstanding patterns of emotional pain.",
              },
              {
                icon: Users,
                title: "Couple Therapy",
                body: "I help partners connect their emotions and behaviors to better understand how they influence each other.",
                note: "Requires commitment from both partners. 48-hour cancellation policy applies to the couple.",
              },
              {
                icon: Sparkles,
                title: "Integrative Approach",
                body: "A combined method using elements of different therapies tailored to the specific client.",
                note: "Focuses on mindfulness, uncovering 'cast off' parts of yourself, and undoing maladaptive behaviors.",
              },
            ].map(({ icon: Icon, title, body, note }) => (
              <Card key={title} className="p-10 border-border/40 bg-card rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-deep)] transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-accent/30 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-primary mb-4">{title}</h3>
                <p className="text-foreground/75 font-light leading-relaxed mb-5">{body}</p>
                <p className="text-sm italic text-muted-foreground/80 font-light leading-relaxed">{note}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. APPROACH */}
      <section id="approach" className="relative py-32 px-6 md:px-10 overflow-hidden">
        <img src={treeLand.src} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Eyebrow>Integrative Approach</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8">
            Every person is unique — <span className="italic">and so is their healing.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 font-light">
            Integrative psychotherapy combines different therapeutic techniques to suit your individual needs. It allows flexibility, depth, and a truly personalized experience.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Shield, label: "Trauma therapy" },
              { icon: Sprout, label: "Self-development" },
              { icon: Compass, label: "Behavioral understanding" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border shadow-sm">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PHILOSOPHY */}
      <Section className="bg-gradient-to-b from-[var(--sand)]/30 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
            A safe space <span className="italic">for growth</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>Your past experiences, emotions, and behaviors are all connected.</p>
            <p>Therapy helps you understand these connections — allowing you to move forward with clarity, confidence, and self-trust.</p>
            <p className="font-display text-2xl text-foreground italic">
              "A strong, trusting relationship between therapist and client is at the heart of meaningful change."
            </p>
          </div>
        </div>
      </Section>

      {/* 7. ABOUT THERAPIST */}
      <section id="about" className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-deep)]">
                <img src={therapist.src} alt="Katja Křížková, Certified Integrative Psychotherapist" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 px-5 py-3 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-widest shadow-lg">
                Certified Therapist
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <Eyebrow>Meet your therapist</Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
              Katja <span className="italic">Křížková</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5 font-light">
              Katja Křížková is a European Certified Integrative Psychotherapist with a degree in Psychology from George Mason University (USA).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5 font-light">
              As a TCK she has lived in Africa (5 years), the United States (17 years), Asia (5 years), and Europe (29 years), bringing deep cross-cultural understanding and a compassionate approach to therapy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
              She is fluent in English and Czech, understands Slovak at an advanced level, and has been practicing yoga for the past twenty years.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Trauma therapy", "Crisis intervention", "Dream work", "Integrative psychotherapy", "TCK & intercultural support", "LGBTQ+ support"].map((s) => (
                <div key={s} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">{s}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                onClick={() => setShowMore((v) => !v)}
                className="rounded-full border-primary/40 text-primary hover:bg-primary/10"
                aria-expanded={showMore}
                aria-controls="therapist-details"
              >
                {showMore ? "Show less" : "Why choose me"}
                {showMore ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {showMore && (
          <div
            id="therapist-details"
            className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-6"
          >
            <Card className="p-8 bg-card border-border/60 rounded-2xl shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-lg bg-accent/30 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-primary">Education</h3>
              </div>
              <ExpandableList
                items={[
                  "University and Post Graduate studies — George Mason University, Virginia (Psychology)",
                  "Postgraduate studies Gestalt Plus (February 2020 – December 2022)",
                  "Instep Institute — Complete educational program in Integrative Psychotherapy (September 2012 – May 2018)",
                  "\"D\" Občanské sdružení Liberec — Complete educational program in Crisis Intervention (September 2014 – February 2015)",
                  "Complete educational program in Dream Work — Ivana Veltrubská (September 2016 – May 2017)",
                ]}
              />
            </Card>

            <Card className="p-8 bg-card border-border/60 rounded-2xl shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-lg bg-accent/30 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-primary">Professional Employment</h3>
              </div>
              <ExpandableList
                items={[
                  "Psychotherapy Center Ineo (March 2021 – currently)",
                  "Psychoterapeutické centrum LAVKA — psychotherapist (April 2014 – March 2021)",
                  "Private English teacher (September 2008 – currently)",
                  "Olika — Fundraising FZŠ Umělecká (September 2009 – May 2010)",
                  "Hochtief, a.s. — Auditor lidských zdrojů (January 2009 – May 2009)",
                  "Languages At Work, s.r.o. — Founder, partner, CEO (June 1993 – December 2007); founding member of the Czech Association of Language Schools",
                ]}
              />
            </Card>

            <Card className="p-8 bg-card border-border/60 rounded-2xl shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-lg bg-accent/30 flex items-center justify-center">
                  <UsersRound className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-primary">Memberships</h3>
              </div>
              <ul className="space-y-3 text-foreground/80 font-light leading-relaxed">
                <li>Czech Association for Psychotherapy (ČAP) — working group member</li>
                <li>European Association for Integrative Psychotherapy (EAIP)</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border/60 rounded-2xl shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-lg bg-accent/30 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-primary">Highlights</h3>
              </div>
              <ul className="space-y-3 text-foreground/80 font-light leading-relaxed">
                <li>Certified psychotherapist</li>
                <li>Trauma therapy specialist</li>
                <li>International experience (USA, Europe, Asia, Africa)</li>
              </ul>
            </Card>

            <Card className="p-8 md:col-span-2 bg-card border-border/60 rounded-2xl shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-lg bg-accent/30 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-primary">Courses &amp; Seminars</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-foreground/80 font-light leading-relaxed">
                <li>Ethics in Psychotherapy (12/2025)</li>
                <li>Field Perspectives and Contemporary Clinical Issues — Gianni Francese (2/2025)</li>
                <li>Healing the Body's Response to Attachment Trauma — Peter Levine, PhD &amp; Diane Heller, Dr. (7/2024)</li>
                <li>Gestalt Therapy in Action: Phenomenology and Aesthetics of Clinical Practice (9/2023)</li>
                <li>Play in Therapy — Gideon Zehavi, MA, RDT/BCT (2019)</li>
                <li>Neurobiology &amp; Gestalt Therapy (2017)</li>
                <li>Trauma in Biosynthesis (2017)</li>
                <li>Self In Relation — Peter Philippson (2017)</li>
                <li>Ceremonies and Rituals — Jiří Drahota (2017)</li>
                <li>A New Therapy for Each Patient — John Norcross (2016)</li>
                <li>Gestalt Psychotherapy and Dance Movement Therapy (2016)</li>
                <li>Family Gestalt Therapy — Jan Knop (2016)</li>
                <li>Psychosomatika 1 &amp; 2 — Majka Pečená (2016)</li>
                <li>Psychotherapy Management — Martin Jára (2015)</li>
                <li>Dreaming Alive — Martin Jára (2014)</li>
                <li>Transaction Analysis — Pražská vysoká škola psychosociálních studií (2014)</li>
              </ul>
              <div className="mt-6 pt-5 border-t border-border/60">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Conferences &amp; Symposiums</p>
                <p className="text-foreground/70 font-light leading-relaxed text-sm">
                  6th Czech &amp; 3rd Slovak Conference of Gestalt Psychotherapy (2019) · 5th Czech Conference of Psychotherapy (2017) · Moving Self in Psychotherapy (2015) · International Psychotherapy Symposium (2015) · 4th Czech &amp; 2nd Czech-Slovak Gestalt Psychotherapy Conference (2014) · 11th Conference of the European Association for Gestalt Therapy (2013)
                </p>
              </div>
            </Card>

            <Card className="p-8 md:col-span-2 bg-gradient-to-br from-primary/10 to-accent/10 border-border/60 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-display text-2xl text-primary">My Approach</h3>
              </div>
              <p className="text-foreground/85 font-light leading-relaxed text-lg mb-4">
                Our childhood and life experiences shape our behavior and our world. Once we connect our emotions, our behavior — what we do knowingly and unknowingly — and our physical reactions, we can begin to understand why we feel lost, confused, angry, sad, or otherwise imbalanced.
              </p>
              <p className="text-foreground/85 font-light leading-relaxed text-lg">
                I strive to remove the barriers that prevent people from living as fully and richly as possible. Whether it's depression, anxiety, intercultural issues and TCK support, LGBTQ issues, coping with loss, or moving beyond traumatic events — a trusting relationship between therapist and client is at the heart of therapy, and an initial assessment period of a few sessions helps us both feel the match is a good one.
              </p>
            </Card>
          </div>
        )}
      </section>

      {/* 8. BENEFITS */}
      <Section className="bg-[var(--sand)]/40">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow>Benefits</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            How therapy can <span className="italic">help you</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            "Reduce anxiety and stress",
            "Improve relationships",
            "Build confidence and self-esteem",
            "Heal emotional wounds",
            "Gain clarity and direction",
          ].map((b, i) => (
            <Card key={b} className="p-6 border-border/60 bg-card text-center hover:-translate-y-1 transition-transform">
              <div className="font-display text-3xl text-primary/40 mb-2">0{i + 1}</div>
              <p className="font-light">{b}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 9. PROCESS */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow>The Process</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            How it <span className="italic">works</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {[
            { n: "01", t: "Initial consultation", d: "A first conversation to explore what brings you and how I can help." },
            { n: "02", t: "Assessment sessions", d: "Together we understand your needs, goals, and the path ahead." },
            { n: "03", t: "Personalized plan", d: "A therapy plan crafted around you — your pace, your goals." },
            { n: "04", t: "Ongoing support", d: "Continued sessions and care as you grow, heal, and transform." },
          ].map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-background border-2 border-primary text-primary font-display text-xl flex items-center justify-center mb-5 relative z-10">
                {s.n}
              </div>
              <h3 className="font-display text-xl mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. CTA */}
      <section id="contact" className="relative py-32 px-6 md:px-10 overflow-hidden">
        <img src={sunsetBeach.src} alt="Sunset on the beach" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <Eyebrow><span className="text-white/80">Begin today</span></Eyebrow>
          <h2 className="font-display text-5xl md:text-7xl leading-tight mb-8">
            Start your healing <span className="italic">journey today</span>
          </h2>
          <p className="text-lg text-white/85 mb-10 font-light max-w-xl mx-auto">
            Take the first step. A confidential conversation is all it takes to begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:katjakrizkova@gmail.com">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 shadow-[var(--shadow-deep)]">
                <Calendar className="mr-2 h-4 w-4" /> Book a Session
              </Button>
            </a>
            <a href="#footer">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 bg-white/10 border-white/50 text-white hover:bg-white hover:text-foreground backdrop-blur-sm">
                Contact Now
              </Button>
            </a>
          </div>
          <div className="mt-12 text-xs text-white/70 max-w-2xl mx-auto leading-relaxed border-t border-white/20 pt-6 text-left space-y-3">
            <p className="text-center">
              <strong className="font-medium uppercase tracking-widest">Cancellation policy</strong>
            </p>
            <p>
              <strong className="font-medium">Individual sessions:</strong> please cancel at least 48 hours in advance. I will confirm your cancellation by reply. Without 48 hours' notice, the full session fee is due. If I cancel with less than two days' notice, I will offer a replacement session at the earliest possible date.
            </p>
            <p>
              <strong className="font-medium">Couple sessions:</strong> the same 48-hour rule applies. I do not consult individuals outside the framework of the couple's work. Without timely notice, the couple is responsible for the full fee.
            </p>
            <p>
              <strong className="font-medium">Group psychotherapy:</strong> if a member misses two consecutive sessions, the third and any following sessions remain payable for the duration of the group.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-foreground text-background py-16 px-6 md:px-10">
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
              <li><a href="#services" className="hover:text-background">Services</a></li>
              <li><a href="#approach" className="hover:text-background">Approach</a></li>
              <li><a href="#about" className="hover:text-background">About Katja</a></li>
              <li><a href="#contact" className="hover:text-background">Book a session</a></li>
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
