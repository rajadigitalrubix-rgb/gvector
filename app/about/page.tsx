'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Users, Award, BarChart3, Shield, Target, CheckCircle, DollarSign, Map, Key, Factory, ShoppingBag, ShoppingCart, Globe, Warehouse, Radio, Landmark, Tv, Monitor, Trophy, Home, Building2 } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import usePageMeta from "@/hooks/use-page-meta";

/* ═══════════════════════════════════════════
   1 · VISION  (Split layout — text + stats)
   ═══════════════════════════════════════════ */
const VisionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const stats = [
    { value: "30+", label: "Years Experience" },
    { value: "12", label: "Dev Partners" },
    { value: "Zero", label: "Confidentiality Breaches" },
  ];

  return (
    <section className="py-10 md:py-16 bg-white border-b border-gray-100">
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#C5993E]" />
              <span className="font-jost text-[16px] font-bold uppercase tracking-[0.25em] text-[#C5993E]">Everything About Us</span>
            </div>

            <h2 className="font-playfair text-[28px] sm:text-[32px] md:text-[42px] text-[#2D2D2D] leading-[1.1] mb-6">
              Meet the Firm. Meet the<br /><span className="text-[#C5993E]">Vision.</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="font-jost text-[15px] sm:text-[17px] text-gray-700 leading-[1.65]">
                G-Vector Realtech Private Limited was founded by Vivek Arora — an accomplished professional with more than 30 years of extensive experience spanning Product, Sales, Supply Chain, Realty Consulting, and senior leadership. Vivek founded the firm after identifying a clear gap in the Indian marketplace: the absence of a real estate advisory firm that operated with institutional rigor while maintaining the agility of a boutique practice.
              </p>
              <p className="font-jost text-[15px] sm:text-[17px] text-gray-700 leading-[1.65]">
                Today's clients — whether institutional investors, multinational corporates, or family offices — do not need more brokers. They need advisors who understand their P&L, share their risk tolerance, and bring market intelligence that is genuinely proprietary. G-Vector Realtech was built to be exactly that firm.
              </p>
            </div>

            <Link href="/contact" className="btn-dark">
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right — Stats + Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Stats */}
            <div className="bg-[#ECEAE6] border border-gray-300 p-6">
              <div className="grid grid-cols-3 gap-[1px]">
                {stats.map((s) => (
                  <div key={s.label} className="text-center py-3">
                    <p className="font-playfair text-[24px] text-[#C5993E] leading-none mb-1">{s.value}</p>
                    <p className="font-jost text-[11px] text-gray-500 uppercase tracking-[0.1em] font-bold leading-tight px-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Points */}
            <div className="border border-gray-300 border-t-0">
              {[
                "Institutional-grade real estate advisory",
                "Investment, land, leasing & industrial services",
                "Corporate real estate & occupier strategy",
                "Enterprise IT, cloud & cybersecurity",
                "Data-backed strategy & documented integrity",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 px-6 py-4 border-b border-gray-300 last:border-b-0">
                  <CheckCircle className="w-4 h-4 text-[#C5993E] shrink-0" />
                  <p className="font-jost text-[15px] sm:text-[17px] text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   2 · LEADERSHIP  (Dark image section)
   ═══════════════════════════════════════════ */
const LeadershipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative">
      <div className="relative min-h-[420px]">
        <img
          src="/images/gemini-watermark-removed (1).png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-black/40 lg:bg-transparent"
          style={{ background: "linear-gradient(to bottom, rgba(20,20,20,0.2) 0%, rgba(20,20,20,0.85) 100%)" }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ background: "linear-gradient(to right, rgba(20,20,20,0.97) 0%, rgba(20,20,20,0.92) 40%, rgba(20,20,20,0.6) 60%, rgba(20,20,20,0.2) 100%)" }}
        />

        <div ref={ref} className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-10 py-12 md:py-16">
          <div className="max-w-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-[2px] bg-[#C5993E]" />
                <span className="font-jost text-[16px] font-bold uppercase tracking-[0.25em] text-[#C5993E]">Forward from Director</span>
              </div>

              <h2 className="font-playfair text-[32px] md:text-[42px] text-white leading-[1.1] mb-6">
                A WORD FROM OUR <span className="text-[#C5993E]">FOUNDER</span>
              </h2>

              <div className="space-y-4 mb-8">
                <p className="font-jost text-[17px] text-white/70 leading-[1.8]">
                  Led by <strong className="text-white font-semibold">Vivek Arora</strong>, Director & Founder, G-Vector Realtech is built on the principle of Documented Integrity. Vivek's background in multi-sector supply chains and high-value sales has instilled a culture where every claim is backed by data, every strategy is backed by a plan, and every plan is backed by a team that will not rest until the outcome is delivered.
                </p>
                <p className="font-jost text-[17px] text-white/55 leading-[1.8]">
                  Our clients and investors choose to walk this journey with us because of one fundamental reason: TRUST. Trust is the scarcest commodity in today's property world. We do not ask for it. We earn it — through documented advice, transparent processes, and returns that speak for themselves.
                </p>
              </div>

              {/* Signature values strip */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6">
                {["Trust-First", "Data-Driven", "Accountable"].map((v, i) => (
                  <div key={v} className="flex items-center gap-2">
                    {i > 0 && <div className="w-1 h-1 bg-[#C5993E] rounded-full hidden sm:block" />}
                    <span className="font-jost text-[14px] md:text-[17px] font-bold uppercase tracking-[0.2em] text-[#C5993E]">{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   3 · VALUES  (Premium institutional layout)
   ═══════════════════════════════════════════ */
const ValuesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const featuredValue = {
    icon: Shield,
    title: "Client Interests Always First",
    desc: "In every recommendation, negotiation, and deliverable — our client's business interest is the only interest that matters. We are fiduciaries, not facilitators.",
  };

  const gridValues = [
    { icon: Target, title: "Outstanding Work Ethic", desc: "Consistent excellence — genuine business foresight, rigorous analysis, and results that are measurable and repeatable." },
    { icon: BarChart3, title: "Ethics, Integrity & Confidentiality", desc: "Every engagement is governed by absolute discretion. Your data, strategy, and capital are protected at all times." },
    { icon: Award, title: "Best-in-Class Talent", desc: "Professionals who are intellectually curious, obsessively detail-oriented, and genuinely invested in client outcomes." },
    { icon: Users, title: "Collaboration is the Engine", desc: "Deep collaboration across internal teams, clients, and strategic partners who extend our service capabilities." },
  ];

  return (
    <section className="py-10 md:py-12 bg-[#ECEAE6]">
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#C5993E]" />
            <span className="font-jost text-[16px] font-bold uppercase tracking-[0.25em] text-[#C5993E]">Core Values</span>
            <span className="w-10 h-[2px] bg-[#C5993E]" />
          </div>
          <h2 className="font-playfair text-[32px] md:text-[42px] text-[#2D2D2D] relative inline-block">
            THE <span className="text-[#C5993E]">G-VECTOR</span> WAY
            <div className="absolute -bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5993E] to-transparent" />
          </h2>
        </motion.div>

        {/* Main Layout: Featured Left + 2x2 Grid Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5">
          {/* Featured Value — Large dark card */}
          <motion.div
            className="bg-[#ECEAE6] border border-gray-300 relative overflow-hidden flex flex-col justify-between min-h-[280px] group"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Gold top accent */}
            <div className="h-[3px] bg-gradient-to-r from-[#C5993E] via-[#D4A94E] to-[#C5993E]" />
            
            {/* Subtle background number */}
            <div className="absolute -right-6 -bottom-12 font-playfair font-bold text-[280px] text-[#C5993E]/25 leading-none select-none pointer-events-none drop-shadow-sm">01</div>

            <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 border border-[#C5993E]/50 flex items-center justify-center">
                    <featuredValue.icon className="w-5 h-5 text-[#C5993E]" />
                  </div>
                  <span className="font-jost text-[12px] sm:text-[16px] font-bold uppercase tracking-[0.2em] text-[#C5993E]/60">Our Foundation</span>
                </div>
                <h3 className="font-playfair text-[28px] md:text-[38px] text-[#2D2D2D] leading-[1.1] mb-5 font-bold">
                  {featuredValue.title}
                </h3>
                <p className="font-jost text-[15px] md:text-[15.5px] text-gray-700 leading-relaxed max-w-[400px]">
                  {featuredValue.desc}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-[2px] bg-[#C5993E]" />
                <span className="font-jost text-[14px] font-bold uppercase tracking-[0.2em] text-[#C5993E]/40">Since 2007</span>
              </div>
            </div>
          </motion.div>

          {/* Grid — Refined white cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {gridValues.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-white border border-gray-300/70 p-6 group hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-[#2D2D2D] flex items-center justify-center shrink-0">
                    <v.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 border border-[#C5993E]/30 shrink-0">
                    <span className="font-playfair text-[18px] font-bold text-[#C5993E]">0{i + 2}</span>
                  </div>
                </div>
                <h3 className="font-playfair text-[20px] md:text-[22px] text-[#2D2D2D] leading-[1.3] mb-3 font-bold">
                  {v.title}
                </h3>
                <p className="font-jost text-[15px] text-gray-700 leading-relaxed mt-auto">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   4 · EXPERTISE  (Team capabilities)
   ═══════════════════════════════════════════ */
const ExpertiseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const team = [
    {
      icon: BarChart3,
      title: "Chartered Surveyors & Valuers",
      desc: "Precision real estate valuation meeting institutional-grade standards — every property assessment backed by rigorous methodology and documented data.",
    },
    {
      icon: Award,
      title: "Certified IT Architects",
      desc: "Cloud and security infrastructure designed to scale with your business — zero-compromise resilience and performance across every location and workload.",
    },
    {
      icon: Users,
      title: "Operations Specialists",
      desc: "PMO discipline ensuring every milestone is met — from boardroom vision to on-ground delivery, no deadline is missed and no variable goes untracked.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FAFAF8] border-y border-gray-200/50">
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">
          {/* Left — Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#C5993E]" />
              <span className="font-jost text-[16px] font-bold uppercase tracking-[0.25em] text-[#C5993E]">Capabilities</span>
            </div>
            <h2 className="font-playfair text-[32px] md:text-[38px] text-[#2D2D2D] leading-[1.1] mb-4">
              OUR <span className="text-[#C5993E]">EXPERTISE</span>
            </h2>
            <p className="font-jost text-[16px] text-gray-700 leading-[1.7]">
              A multi-disciplinary team engineered for complex, high-stakes delivery across real estate, IT, and corporate consulting.
            </p>
          </motion.div>

          <div className="space-y-4">
            {team.map((t, i) => (
              <motion.div
                key={t.title}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-5 bg-white border border-gray-300 group transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <div className="w-10 h-10 bg-[#2D2D2D] flex items-center justify-center shrink-0">
                  <t.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-[18px] text-[#2D2D2D] mb-2 font-bold">{t.title}</h3>
                  <p className="font-jost text-[15px] sm:text-[17px] text-gray-700 leading-[1.6]">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════════
   6 · SECTORS  (Premium compact layout)
   ═══════════════════════════════════════════ */
const SectorsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const sectors = [
    { icon: ShoppingCart, title: "Retail & Multiplexes", desc: "Consumer-facing real estate — high-street retail, malls, and entertainment destinations." },
    { icon: Globe, title: "Multinational Corporates", desc: "Flagship HQ spaces to distributed regional office hubs across India for global enterprises." },
    { icon: Warehouse, title: "Industrial & Land", desc: "Industrial plots, warehousing hubs, SEZ properties, and strategic land parcels." },
    { icon: Radio, title: "Telecom Companies", desc: "Office spaces, data centers, and facilities meeting infrastructure and connectivity demands." },
    { icon: Landmark, title: "Public Sector Undertakings", desc: "Compliant, value-driven real estate — navigating procurement and regulatory frameworks." },
    { icon: Tv, title: "Media Agencies", desc: "Creative, collaborative workspaces that reflect culture and support fast-paced operations." },
    { icon: Monitor, title: "IT Companies", desc: "Scalable, infrastructure-ready office solutions across India's premier tech corridors." },
  ];

  return (
    <section className="py-8 md:py-10 bg-white border-b border-gray-200/50">
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12 items-start">
          {/* Left — Sticky header */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-[2px] bg-[#C5993E]" />
              <span className="font-jost text-[16px] font-bold uppercase tracking-[0.25em] text-[#C5993E]">Sectors We Serve</span>
            </div>
            <h2 className="font-playfair text-[32px] md:text-[38px] text-[#2D2D2D] leading-[1.1] mb-3">
              Industries We <span className="text-[#C5993E]">Work With</span>
            </h2>
            <p className="font-jost text-[16px] text-gray-700 leading-[1.6] mb-4">
              Seven sectors. One firm. Institutional depth across every engagement.
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#C5993E] to-transparent" />
          </motion.div>

          {/* Right — Elite Institutional horizontal rows */}
          <div className="flex flex-col border-t border-gray-200">
            {sectors.map((s, i) => (
              <div
                key={s.title}
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 min-h-[56px] py-3 border-b border-gray-100 group transition-all duration-300 relative pl-0 hover:pl-2"
              >
                {/* Elite Gold Indicator Bar (Visible on Hover) */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C5993E] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                {/* Number + Category Column */}
                <div className="flex items-center gap-6 md:w-[360px] shrink-0">
                  {/* Elegant Numbering */}
                  <span className="font-playfair text-[20px] font-bold text-[#C5993E]/30 group-hover:text-[#C5993E] transition-colors w-10">
                    0{i + 1}
                  </span>
                  
                  {/* Refined Icon */}
                  <div className="shrink-0 text-[#2D2D2D] group-hover:text-[#C5993E] transition-colors duration-300">
                    <s.icon className="w-4.5 h-4.5" />
                  </div>
                  
                  <h3 className="font-playfair text-[18px] md:text-[19px] text-[#2D2D2D] font-bold tracking-tight group-hover:text-[#C5993E] transition-colors">
                    {s.title}
                  </h3>
                </div>
                
                {/* Description Column */}
                <p className="font-jost text-[16px] text-gray-500 leading-snug flex-1 md:pl-8 border-l border-transparent transition-all">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   7 · PARTNERSHIPS  (Premium marquee layout)
   ═══════════════════════════════════════════ */
const PartnershipsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const partners = [
    "SARE Homes", "SS Group", "Godrej Properties", "Tapasya",
    "DLF", "Spaze", "Tulip", "Vatika",
    "Ireo", "M3M", "Tata Housing", "Supertech"
  ];

  return (
    <section className="py-12 md:py-20 bg-[#ECEAE6] border-t border-gray-300">
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#C5993E]" />
            <span className="font-jost text-[16px] font-bold uppercase tracking-[0.25em] text-[#C5993E]">Key Partnerships</span>
            <span className="w-10 h-[2px] bg-[#C5993E]" />
          </div>
          <h2 className="font-playfair text-[32px] md:text-[42px] text-[#2D2D2D]">
            Our Trusted Developer <span className="text-[#C5993E]">Partners</span>
          </h2>
        </motion.div>

        {/* Partner names — flowing text layout with generous spacing */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-7 max-w-[1100px] mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {partners.map((p, i) => (
            <div key={p} className="flex items-center gap-4 md:gap-8">
              <span className="font-playfair text-[17px] md:text-[24px] text-[#2D2D2D] whitespace-nowrap">
                {p}
              </span>
              {i < partners.length - 1 && (
                <span className="w-[4px] h-[4px] bg-[#C5993E]/50 rounded-full shrink-0" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Godrej authorization — elegant strip */}
        <motion.div
          className="bg-[#2D2D2D] py-4 px-6 text-center mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="font-jost text-[12px] sm:text-[17px] text-white/80 uppercase tracking-[0.15em] sm:tracking-[0.25em]">
            G-Vector Realtech is an Authorised Channel Partner of <strong className="text-[#C5993E]">Godrej Properties Ltd.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   8 · AWARDS  (Compact premium strip)
   ═══════════════════════════════════════════ */
const AwardsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const awards = [
    { year: "2015", title: "Gold Performance Award — Tapasya" },
    { year: "2010–2014", title: "SARE Homes Excellence Award (4 Consecutive Years)" },
    { year: "2015", title: "Legend of SARE — Sustained Leadership" },
    { year: "2014", title: "Property Consultant of the Year — BCI (National)" },
    { year: "2013–2015", title: "Lead Realty Partner — SS Group" },
    { year: "2015", title: "Certificate of Excellence — Supertech" },
    { year: "2012", title: "Global Vision Award — 21st Century Super Leader" },
  ];

  const memberships = [
    "ACRI Life Member",
    "REDCO-Haryana Member",
    "NAR India Member",
  ];

  return (
    <section className="py-12 md:py-20 bg-white border-b border-gray-100">
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          
          {/* Left — Header + Memberships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#C5993E]" />
              <span className="font-jost text-[17px] font-bold uppercase tracking-[0.25em] text-[#C5993E]">Awards & Recognition</span>
            </div>
            <h2 className="font-playfair text-[34px] md:text-[46px] text-[#2D2D2D] leading-[1.1] mb-5">
              Recognition That<br /><span className="text-[#C5993E]">Speaks for Itself</span>
            </h2>
            <p className="font-jost text-[16px] text-gray-700 leading-[1.8] mb-8">
              Performance-based validations from India's most credible real estate institutions — not participation trophies.
            </p>

            {/* Memberships — Compact badges */}
            <div className="flex flex-wrap gap-3">
              {memberships.map((m) => (
                <div key={m} className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2.5 hover:border-[#C5993E]/40 transition-colors duration-300">
                  <Trophy className="w-3.5 h-3.5 text-[#C5993E]" />
                  <span className="font-jost text-[16px] font-bold uppercase tracking-[0.15em] text-[#2D2D2D]">{m}</span>
                </div>
              ))}
            </div>

            {/* Future Vision — Inline */}
            <div className="mt-10 pt-8 border-t border-gray-300">
              <p className="font-jost text-[16px] text-gray-700 leading-[1.8]">
                <strong className="text-[#C5993E] font-semibold">Going Forward:</strong> G-Vector Realtech aims to scale its advisory practice to serve Institutional Investors, Developers, and Corporate Houses at a national level — expanding across Asset Management, Land Services, and Investment Advisory.
              </p>
            </div>
          </motion.div>

          {/* Right — Awards Table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="border-t border-gray-300">
              {awards.map((a, i) => (
                <motion.div
                  key={a.title}
                  className="flex items-center gap-5 py-4 border-b border-gray-300 group hover:bg-white hover:pl-2 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                >
                  <Trophy className="w-3.5 h-3.5 text-[#C5993E] shrink-0" />
                  <span className="font-jost text-[17px] font-bold text-[#C5993E] uppercase tracking-wider w-[95px] shrink-0">{a.year}</span>
                  <span className="font-jost text-[16px] text-[#2D2D2D] group-hover:text-[#C5993E] transition-colors">{a.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   9 · GROUP COMPANIES  (Premium split layout)
   ═══════════════════════════════════════════ */
const GroupCompaniesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-12 md:py-20 bg-[#FAFAF8] border-b border-gray-200/50">
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-20 items-start">
          
          {/* Left — Sticky Header */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#C5993E]" />
              <span className="font-jost text-[16px] font-bold uppercase tracking-[0.25em] text-[#C5993E]">Group Companies</span>
            </div>
            <h2 className="font-playfair text-[32px] md:text-[42px] text-[#2D2D2D] leading-[1.1] mb-4">
              Our Group of <span className="text-[#C5993E]">Companies</span>
            </h2>
            <p className="font-jost text-[16px] text-gray-700 leading-[1.7]">
              Two entities. One philosophy. Institutional depth across every vertical.
            </p>
          </motion.div>

          {/* Right — Company entries */}
          <div>
            {/* G-Vector Realtech */}
            <motion.div
              className="pb-10 mb-10 border-b border-gray-300"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-[#2D2D2D] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-[24px] text-[#2D2D2D] leading-none">G-Vector Realtech</h3>
                </div>
              </div>
              <p className="font-jost text-[16px] text-[#C5993E] uppercase tracking-[0.2em] font-bold mb-4">
                G-Vector Realtech Private Limited · CIN: U74120DL2007PTC169007
              </p>
              <p className="font-jost text-[17px] text-gray-700 leading-[1.8]">
                The flagship entity and strategic engine of the group — offering institutional-grade advisory across Investment Services, Corporate Real Estate, Land Services, Leasing, Industrial, Retail, Enterprise IT, and Corporate Consulting.
              </p>
            </motion.div>

            {/* Homeseek Realtors */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-[#C5993E] flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-[24px] text-[#2D2D2D] leading-none">Homeseek Realtors</h3>
                </div>
              </div>
              <p className="font-jost text-[16px] text-[#C5993E] uppercase tracking-[0.2em] font-bold mb-4">
                Residential Division of the G-Vector Group
              </p>
              <p className="font-jost text-[17px] text-gray-700 leading-[1.8]">
                The dedicated residential arm of the G-Vector Group. Homeseek Realtors serves individual buyers, NRIs, and families in finding their ideal homes — guided by the same trust-first, data-backed philosophy that defines every G-Vector engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
const AboutPage = () => {
  usePageMeta({
    title: "About G-Vector Realtech | Meet the Firm. Meet the Vision.",
    description: "G-Vector Realtech is built on Documented Integrity. Led by Vivek Arora with 30+ years of experience, we operate at the intersection of Physical Assets and Digital Infrastructure.",
    canonical: "/about",
  });

  return (
    <>
      <PageHero
        title="About G-Vector Realtech"
        subtitle="Built on Documented Integrity — every claim backed by data, every outcome measurable, every strategy verifiable."
        image="/images/Gemini_Generated_Image_9xq1pe9xq1pe9xq1 (1).png"
      />
      <VisionSection />
      <LeadershipSection />
      <ValuesSection />
      <ExpertiseSection />
      <SectorsSection />
      <PartnershipsSection />
      <AwardsSection />
      <GroupCompaniesSection />
      <CTABanner />
    </>
  );
};

export default AboutPage;
