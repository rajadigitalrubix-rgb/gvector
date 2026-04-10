'use client';

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Building2, Server, Briefcase, ChevronLeft, ChevronRight,
  Shield, Cloud, BarChart3, Target, CheckCircle, TrendingUp, MapPin,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import TrustedBy from "@/components/TrustedBy";
import usePageMeta from "@/hooks/use-page-meta";

/* ═══════════════════════════════════════════
   1 · HERO  (Clean corporate — like DLF/CBRE)
   ═══════════════════════════════════════════ */
const heroSlides = [
  {
    headline: "Precision Engineering for the Indian\nReal Estate & Technology Landscape",
    subtitle: "From the high-stakes corridors of Golf Course Road to enterprise-level rollouts across Pan-India — we deliver the strategy, due diligence, and execution that turns complexity into capital.",
    image: "/images/Gemini_Generated_Image_9xq1pe9xq1pe9xq1 (1).png",
  },
  {
    headline: "Intelligent Real Estate\nSolutions",
    subtitle: "G-Vector Realtech — your trusted real estate partner. Institutional-grade advisory, enterprise IT services, and corporate consulting — all under one roof.",
    image: "/images/Gemini_Generated_Image_6e5t8c6e5t8c6e5t (1).png",
  },
  {
    headline: "Strategy. Execution.\nResults.",
    subtitle: "Every claim is backed by data. Every outcome is measurable. We don't ask to be trusted — we earn it.",
    image: "/images/gemini-watermark-removed (1).png",
  },
  {
    headline: "Institutional-Grade Advisory\n& Market Intelligence",
    subtitle: "We look beyond the transaction to architect long-term value. Leveraging deep market literacy to unlock unparalleled yield across commercial, industrial, and retail asset classes.",
    image: "/images/gemini-watermark-removed.png",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[650px] overflow-hidden">
      {/* Background images — CSS crossfade */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={slide.image} alt={slide.headline.replace('\n', ' ')} loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "low"} decoding="async" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlays — dark on left for text, lighter on right to show image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />

      {/* Gold left accent */}
      <div className="absolute left-0 top-[15%] bottom-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C5993E]/60 to-transparent z-20 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-center pt-[80px]">
        <div className="max-w-[650px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 md:w-12 h-[2px] bg-[#C5993E]" />
            <p className="font-jost text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#C5993E]" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}>
              G-Vector · Institutional Advisory
            </p>
          </div>

          {/* Headline */}
          <h1
            key={current}
            className="font-playfair text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] text-white leading-[1.1] whitespace-pre-line mb-6"
          >
            {heroSlides[current].headline}
          </h1>

          {/* Gold divider */}
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#C5993E] to-transparent mb-6" />

          {/* Subtitle */}
          <p className="font-jost text-[16px] sm:text-[17px] text-white/90 leading-[1.75] max-w-[500px] mb-8">
            {heroSlides[current].subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/contact" className="btn-gold !mb-0">
              Schedule a Strategy Session <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="btn-outline !mb-0">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom — minimal scroll hint + slide indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex items-end justify-between max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Slide counter */}
        <div className="flex items-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              aria-label={`View slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-500 ${
                i === current
                  ? "w-8 h-[2px] bg-[#C5993E]"
                  : "w-4 h-[1px] bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
          <span className="font-jost text-[12px] text-white/50 ml-2">
            {String(current + 1).padStart(2, "0")}/{String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex flex-col items-center gap-2">
          <span className="font-jost text-[10px] text-white/45 uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   2 · STATS BAR  (clean dark grid — no image)
   ═══════════════════════════════════════════ */
const StatsBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const stats = [
    { num: "30+",       label: "Years of Experience" },
    { num: "Tier-1",  label: "Institutional Partners" },
    { num: "7",         label: "Sectors Served" },
    { num: "Pan-India", label: "Delivery Model" },
    { num: "Multiple",  label: "National Awards" },
    { num: "Zero",      label: "Confidentiality Breaches" },
  ];

  return (
    <section className="bg-[#F0EDE8] py-8 relative">
      {/* Subtle top gold shimmer line */}
      <div className="absolute top-0 left-0 right-0 gold-shimmer-line h-[2px]" />

      <div ref={ref} className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6 sm:gap-x-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-left relative group px-2 sm:px-0"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Gold separator — hidden on mobile & tablet */}
              {i > 0 && <div className="hidden lg:block absolute -left-5 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-[#C5993E]/30 to-transparent" />}
              <div className="font-playfair text-[30px] md:text-[34px] lg:text-[36px] xl:text-[42px] text-[#2D2D2D] leading-none mb-3 group-hover:text-[#C5993E] transition-colors duration-500 whitespace-nowrap">{s.num}</div>
              <p className="font-jost text-[9px] sm:text-[10px] text-gray-700 uppercase tracking-[0.1em] font-medium leading-tight">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium bottom divider */}
      <div className="mt-8 premium-divider" />
    </section>
  );
};

/* ═══════════════════════════════════════════
   2.5 · PHILOSOPHY
   ═══════════════════════════════════════════ */
const PhilosophySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white pb-6 md:pb-10 relative">
      <div ref={ref} className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#C5993E]" />
            <span className="font-jost text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5993E]">The &ldquo;Why&rdquo;</span>
            <span className="w-8 h-[2px] bg-[#C5993E]" />
          </div>
          <h2 className="font-playfair text-[32px] md:text-[38px] text-[#2D2D2D] leading-[1.2] mb-6 md:mb-8">
            The <span className="text-[#C5993E]">G-Vector</span> Philosophy
          </h2>
          
          {/* Decorative quotation mark */}
          <div className="relative">
            <span className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 font-playfair text-[60px] md:text-[80px] text-[#C5993E]/[0.08] leading-none select-none pointer-events-none">&ldquo;</span>
            <div className="max-w-full mx-auto text-center space-y-4 md:space-y-6 pt-4">
              <p className="font-jost text-[15px] md:text-[18px] lg:text-[20px] text-gray-700 leading-[1.6] md:leading-[1.7]">
                In a market defined by rapid urbanization and digital disruption, <strong>&ldquo;gut feeling&rdquo; is no longer a viable business strategy.</strong> At G-Vector Realtech, we operate at the precise intersection of <strong>Physical Assets</strong> and <strong>Digital Infrastructure.</strong>
              </p>
              <p className="font-jost text-[15px] md:text-[18px] lg:text-[20px] text-gray-700 leading-[1.6] md:leading-[1.7]">
                Based in the corporate heart of <strong>Gurugram (Gurgaon)</strong>, we have witnessed the transformation of the <strong>National Capital Region (NCR)</strong> into a global business powerhouse. We have taken the lessons learned from this micro-market—the need for unbreachable legal rigor, the importance of transit connectivity (exemplified by the <strong>Rapid Metro</strong> corridor), and the demand for <strong>24/7 IT resilience</strong>—and scaled them into a robust <strong>Pan-India delivery model.</strong>
              </p>
              <p className="font-jost text-[15px] md:text-[18px] lg:text-[20px] text-gray-700 leading-[1.6] md:leading-[1.7]">
                This is why the firm structure breaks the traditional mold. We don&apos;t just employ brokers; we employ chartered surveyors, IT systems architects, and PMO specialists. This is the DNA of G-Vector Realtech. <strong className="text-[#2D2D2D]">We don&apos;t ask to be trusted-we provide the math that proves we should be trusted.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Premium bottom divider */}
      <div className="mt-8 md:mt-12 premium-divider opacity-40" />
    </section>
  );
};

/* ═══════════════════════════════════════════
   3 · THREE PILLARS  (premium dark layout)
   ═══════════════════════════════════════════ */
const pillars = [
  {
    icon: Building2,
    num: "01",
    title: "Strategic Real Estate Advisory",
    desc: "We don't just find office space — we architect occupier strategies and provide Underwriting Integrity for corporates who view real estate as a dynamic driver of enterprise value.",
    points: [
      "Micro-Market Literacy: Deep-dive analysis into Gurgaon's Sectors 54–65 and NCR to project rent escalations with unprecedented leverage.",
      "Asset Repositioning: Transforming distressed assets into high-yield Grade-A properties through Highest and Best Use studies.",
      "National Reach: Managing and advising on real estate portfolios across India's primary markets, eliminating the friction of regional brokers.",
    ],
  },
  {
    icon: Server,
    num: "02",
    title: "Enterprise IT & Managed Services",
    desc: "Technology is the nervous system of modern real estate. A Grade-A property is effectively useless if its digital infrastructure cannot support secure data flow.",
    points: [
      "Cloud Governance: Secure, scalable cloud architectures for distributed workforces — aligned directly with your physical footprint.",
      "Cybersecurity: Defending corporate IP against evolving global threats using Zero-Trust Architecture and structured training.",
      "Infrastructure Modernization: Retrofitting legacy offices with IoT capabilities — automated access control and energy management.",
    ],
  },
  {
    icon: Briefcase,
    num: "03",
    title: "Corporate Consulting & PMO",
    desc: "Strategy is useless without a Project Management Office that can deliver it. Our experts embed directly into your operations to guarantee execution.",
    points: [
      "Operating Rhythm: Establishing disciplined weekly cadences using RAID logs so no project variable goes untracked.",
      "Stakeholder Alignment: Closing the gap between Boardroom Vision and On-Ground Reality — every team member aligned and moving forward.",
      "Supply Chain Integration: Re-engineering SOPs for warehouse, fulfillment, and logistics operations to severely reduce overhead.",
    ],
  },
];

const PillarsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="pt-10 pb-16 md:pt-12 md:pb-20 bg-[#FAFAF8]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C5993E]" />
            <span className="font-jost text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5993E]">Our Pillars</span>
            <span className="w-8 h-[2px] bg-[#C5993E]" />
          </div>
          <h2 className="font-playfair text-[32px] md:text-[38px] text-[#2D2D2D] leading-[1.1]">
            The Three Pillars of <span className="text-[#C5993E]">Execution</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white border border-gray-300/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 ease-premium group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            >
              {/* Gold top accent */}
              <div className="h-[3px] bg-gradient-to-r from-[#C5993E] via-[#D4A94E] to-[#C5993E] opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="p-6">
                {/* Icon + Title inline */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#2D2D2D] flex items-center justify-center shrink-0 group-hover:bg-[#C5993E] transition-all duration-500">
                    <p.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-playfair text-[19px] text-[#111] leading-[1.3] pt-1 group-hover:text-[#C5993E] transition-colors duration-400">
                    {p.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-jost text-[13.5px] text-[#444] leading-[1.7] mb-5">{p.desc}</p>

                {/* Capabilities */}
                <div className="space-y-2.5 pt-4 border-t border-gray-300">
                  {p.points.map((pt) => {
                    const [label, ...rest] = pt.split(": ");
                    const detail = rest.join(": ");
                    return (
                      <div key={pt} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 bg-[#C5993E] rounded-full mt-[7px] shrink-0" />
                        <span className="font-jost text-[12.5px] text-[#333] leading-[1.6]">
                          <strong className="font-semibold text-[#2D2D2D]">{label}:</strong> {detail}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   4 · ABOUT SECTION  (full-width image + text overlay — DLF style)
   ═══════════════════════════════════════════ */
const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative">
      {/* Subtle gold top line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C5993E]/40 to-transparent" />

      {/* Full-width background image */}
      <div className="relative min-h-[400px] md:min-h-[460px] lg:min-h-[480px] flex flex-col justify-end lg:block">
        <img
          src="/images/gemini-watermark-removed (1).png"
          alt="Gurugram Global Business District Horizon"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Smooth gradient overlay — adaptive for mobile bottom stack and desktop side overlay */}
        <div
          className="absolute inset-0 bg-black/40 lg:bg-transparent"
          style={{
            background: "linear-gradient(to bottom, rgba(20,20,20,0.2) 0%, rgba(20,20,20,0.8) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: "linear-gradient(to right, rgba(20,20,20,0.97) 0%, rgba(20,20,20,0.92) 35%, rgba(20,20,20,0.6) 55%, rgba(20,20,20,0.15) 75%, transparent 100%)"
          }}
        />

        {/* Content */}
        <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14">
          <motion.div
            className="max-w-[580px]"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#C5993E]" />
              <span className="font-jost text-[12px] font-bold uppercase tracking-[0.25em] text-[#C5993E]">About G-Vector</span>
            </div>

            <h2 className="font-playfair text-[36px] md:text-[44px] text-white leading-[1.1] mb-7">
              Meet the Firm. Meet the <span className="text-[#C5993E]">Vision.</span>
            </h2>

            {/* Content with gold side accent */}
            <div className="border-l-2 border-[#C5993E]/40 pl-6 mb-6">
              <p className="font-jost text-[15px] md:text-[16px] text-white/90 leading-[1.85] mb-4">
                G-Vector Realtech Private Limited was founded by Vivek Arora — an accomplished professional with more than 30 years of extensive experience spanning Product, Sales, Supply Chain, Realty Consulting, and senior leadership. We operate at the intersection of Physical Assets and Digital Infrastructure.
              </p>

              <p className="font-jost text-[15px] md:text-[16px] text-white/90 leading-[1.85]">
                Led by <strong className="text-white font-semibold">Vivek Arora</strong>, our firm is built on Documented Integrity — every claim backed by data, every outcome measurable, every strategy verifiable.
              </p>
            </div>

            {/* Key metrics — with separators */}
            <div className="flex items-center justify-between sm:justify-start gap-0 mb-10 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide">
              {[
                { val: "30+", label: "Years Exp" },
                { val: "Tier-1",  label: "Partners" },
                { val: "Zero", label: "Breaches" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center shrink-0">
                  {i > 0 && <div className="w-[1px] h-8 bg-[#C5993E]/30 mx-4 sm:mx-6" />}
                  <div>
                    <div className="font-playfair text-[24px] md:text-[30px] text-[#C5993E] leading-none mb-1">{s.val}</div>
                    <p className="font-jost text-[8px] md:text-[10px] text-white/60 uppercase tracking-[0.1em] font-bold leading-tight">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-gold">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   5 · CASE STUDY PREVIEWS  (clean card grid)
   ═══════════════════════════════════════════ */
const caseStudies = [
  {
    title: "Golf Course Road High-Stakes Relocation",
    category: "Corporate Real Estate",
    metric: "22% Cost Reduction",
    benchmark: "Compared to previous 3-year average",
    client: "Global Fintech HQ",
  },
  {
    title: "Pan-India IT Consolidation",
    category: "Enterprise IT",
    metric: "40% IT Overhead Cut",
    benchmark: "vs. market benchmark",
    client: "National 3PL Provider",
  },
  {
    title: "Dead Capital to Dynamic Yield",
    category: "Asset Repositioning",
    metric: "3.5x Value Increase",
    benchmark: "Compared to market average",
    client: "Family Office",
  },
];

const CaseStudySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-12 md:py-16 bg-[#ECEAE6]">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <div className="section-eyebrow mb-4">Case Studies</div>
            <h2 className="font-playfair text-[32px] md:text-[42px] text-[#2D2D2D]">
              PROVEN <span className="text-[#C5993E]">RESULTS</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
            <Link href="/case-studies" className="btn-dark">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              className="bg-white border border-gray-300 overflow-hidden group hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 ease-premium"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            >
              {/* Top bar */}
              <div className="h-[4px] bg-[#2D2D2D] group-hover:bg-gradient-to-r group-hover:from-[#C5993E] group-hover:via-[#D4A94E] group-hover:to-[#C5993E] transition-all duration-500" />
              <div className="p-7">
                <span className="inline-block font-jost text-[10px] font-bold uppercase tracking-[0.15em] text-[#C5993E] border border-[#C5993E]/30 px-3 py-1 mb-5 group-hover:bg-[#C5993E]/5 transition-colors duration-300">
                  {cs.category}
                </span>
                <h3 className="font-playfair text-[22px] text-[#2D2D2D] leading-[1.25] mb-2 group-hover:text-[#C5993E] transition-colors duration-400">
                  {cs.title}
                </h3>
                <p className="font-jost text-[13px] text-gray-500 mb-5">Client: {cs.client}</p>
                <div className="pt-5 border-t border-gray-200">
                    <p className="font-jost text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Key Metric</p>
                    <p className="stat-number text-[20px] text-[#C5993E]">{cs.metric}</p>
                    <p className="font-jost text-[10px] text-gray-400 mt-1 italic">{cs.benchmark}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   6 · LOCATIONS  (Light bg · Dark cards · Premium)
   ═══════════════════════════════════════════ */
const LocationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const offices = [
  {
    name: "Corporate Office",
    city: "Gurgaon",
    corridor: "Golf Course Road",
    address: "FF 112, 112A, The Clarion Centrum Plaza, Golf Course Road, Gurgaon, Haryana – 122002",
    detail: "Adjacent to Sector-54 Rapid Metro Station — the Wall Street of Gurgaon",
  },
  {
    name: "Registered Office",
    city: "New Delhi",
    corridor: "Saket, South Delhi",
    address: "D-1, Lower Ground Floor, Salcon Rasvilas, Saket (South Delhi), New Delhi – 110017, India",
    detail: "Heart of South Delhi's premium business district",
  },
];

const cities = ["Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata"];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 md:w-10 h-[2px] bg-[#C5993E]" />
            <span className="font-jost text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#C5993E]">Our Presence</span>
            <span className="w-8 md:w-10 h-[2px] bg-[#C5993E]" />
          </div>
          <h2 className="font-playfair text-[32px] md:text-[42px] text-[#2D2D2D]">
            STRATEGIC <span className="text-[#C5993E]">LOCATIONS</span>
          </h2>
        </motion.div>

        {/* Office Cards — premium white cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {offices.map((o, i) => (
            <motion.div
              key={o.name}
              className="bg-white border border-gray-300 overflow-hidden group hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 ease-premium"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            >
              {/* Gold top accent */}
              <div className="h-[3px] bg-gradient-to-r from-[#C5993E] via-[#D4A94E] to-[#C5993E] opacity-80" />
              <div className="p-5 lg:p-6">
                {/* Badge + City */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-[#2D2D2D] flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="block font-jost text-[9px] md:text-[10px] font-bold text-[#C5993E] uppercase tracking-[0.15em]">{o.name}</span>
                    <h3 className="font-playfair text-[20px] md:text-[28px] text-[#2D2D2D] leading-none">{o.city}</h3>
                  </div>
                </div>
                <p className="font-jost text-[11px] md:text-[12px] text-[#C5993E] font-semibold mb-3 pl-12">{o.corridor}</p>
                {/* Address */}
                <div className="pt-3 border-t border-gray-200">
                  <p className="font-jost text-[13px] text-gray-700 leading-[1.6] mb-2">{o.address}</p>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#C5993E] rounded-full mt-1.5" />
                    <p className="font-jost text-[12px] text-gray-700 font-medium">{o.detail}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pan-India Coverage — inline */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span className="font-jost text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mr-1">Also serving:</span>
            {cities.map((c, i) => (
              <span key={c} className="font-jost text-[13px] text-[#2D2D2D] font-medium">
                {c}{i < cities.length - 1 && <span className="text-[#C5993E] mx-1">·</span>}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/presence" className="btn-dark">
            Explore Our Presence <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
const Index = () => {
  usePageMeta({
  title: "G-Vector Realtech | Real Estate Consulting & IT Services | Gurgaon & Delhi NCR",
  description: "G-Vector Realtech is a pan-India consulting firm specializing in institutional-grade real estate advisory and enterprise IT services. Based in Gurgaon, serving India.",
  keywords: "Real Estate Consulting Gurgaon, Golf Course Road Property Advisory, IT Managed Services India, Vivek Arora G-Vector, Master Brokerage India, Corporate Consulting Delhi NCR",
  canonical: "/",
});

  return (
    <main>
      <HeroSlider />
      <StatsBar />
      <PhilosophySection />
      <PillarsSection />
      <AboutSection />
      <TrustedBy />
      <CaseStudySection />
      <LocationsSection />
      <CTABanner />
    </main>
  );
};

export default Index;
