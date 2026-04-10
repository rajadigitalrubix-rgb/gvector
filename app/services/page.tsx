'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DollarSign, Map, Key, Factory, ShoppingBag, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import usePageMeta from "@/hooks/use-page-meta";

const services = [
  {
    icon: DollarSign,
    title: "Investment Services",
    short: "Strategic investment advisory built on underwriting integrity — not guesswork.",
    full: "We provide end-to-end investment advisory from identifying high-potential opportunities and conducting institutional-grade due diligence, to deal structuring and long-term portfolio management. Our strategies are built on rigorous micro-market analysis, stress-tested projections, and a deep understanding of each investor's risk appetite and return objectives."
  },
  {
    icon: Map,
    title: "Land Services",
    short: "Expert guidance on land acquisition, disposition, and strategic land banking across India.",
    full: "We assist clients across the full spectrum of land transactions — identifying and valuing raw land parcels, agricultural conversions, and strategic land banks. We navigate zoning approvals, legal clearances, and joint development agreements on behalf of developers, corporates, and landowners seeking maximum value realization."
  },
  {
    icon: Building2,
    title: "Corporate Real Estate Services",
    short: "Helping businesses find, occupy, and optimize commercial space that supports their growth strategy.",
    full: "Our corporate real estate practice serves businesses from their first office to their 50th location. We handle site selection, occupier strategy, transaction management, lease negotiation, and portfolio consolidation. Deep experience in the NCR corridor — Golf Course Road, Cyber City, Udyog Vihar, and beyond."
  },
  {
    icon: Key,
    title: "Leasing Services",
    short: "Connecting the right tenants with the right properties through market-intelligent leasing solutions.",
    full: "We manage both landlord and tenant representation across commercial, retail, and industrial leasing. Our team leverages strong developer relationships, real-time market data, and a deep understanding of lease structures to negotiate terms that genuinely protect our clients' interests at every stage."
  },
  {
    icon: Factory,
    title: "Industrial Services",
    short: "Specialized real estate solutions for industrial, logistics, and warehousing requirements.",
    full: "We support manufacturers, logistics operators, and e-commerce enterprises in acquiring, leasing, or developing industrial and warehousing spaces. From large industrial parks and SEZs to standalone fulfillment centers — we understand the operational and regulatory requirements that define industrial real estate."
  },
  {
    icon: ShoppingBag,
    title: "Retail Services",
    short: "Positioning retailers and mall developers for maximum commercial impact and sustained footfall.",
    full: "Our retail services team works with national and international retailers, F&B brands, multiplex operators, and mall developers to secure strategic retail locations. We combine catchment analysis, footfall modeling, and brand-fit advisory to ensure every retail placement is built for long-term commercial success."
  }
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref}>
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#ECEAE6]'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10 py-10 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-20 items-center">
              
              {/* Left — Number + Title */}
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-[#2D2D2D] flex items-center justify-center">
                    <s.icon className="w-4.5 h-4.5 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="font-playfair text-[48px] md:text-[64px] leading-none text-gray-300">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-playfair text-[26px] md:text-[38px] leading-[1.15] mb-3 md:mb-4 text-[#2D2D2D] font-bold">
                  {s.title}
                </h3>
                <p className="font-jost text-[15px] md:text-[17px] text-[#C5993E] leading-[1.65] font-semibold">
                  {s.short}
                </p>
              </div>

              {/* Right — Description */}
              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <p className="font-jost text-[15px] md:text-[16px] leading-[1.8] md:leading-[2] text-[#3A3A3A]">
                  {s.full}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

const ServicesPage = () => {
  usePageMeta({
    title: "Services | G-Vector Realtech | Real Estate & IT",
    description: "Explore G-Vector Realtech's core services spanning Investment, Land, Leasing, Industrial, Retail, and Corporate Real Estate.",
    keywords: "Investment Services, Land Services, Leasing Services, Corporate Real Estate India, Industrial Real Estate",
    canonical: "/services",
  });

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="End-to-end institutional advisory designed for measurable capital growth and uncompromised risk management."
        image="/images/gemini-watermark-removed (1).png"
      />
      <ServicesSection />
      <CTABanner />
    </>
  );
};

export default ServicesPage;
