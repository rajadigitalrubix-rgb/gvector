'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, ArrowRight, Building2, Train, Briefcase } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import usePageMeta from "@/hooks/use-page-meta";

/* ═══════════════════════════════════════════
   OFFICE SECTIONS — alternating layout
   ═══════════════════════════════════════════ */
const offices = [
  {
    name: "Corporate Office",
    city: "Gurgaon",
    corridor: "Golf Course Road",
    address: "FF 112, 112A, The Clarion Centrum Plaza, Golf Course Road, Gurgaon, Haryana – 122002",
    highlights: [
      { icon: Train, text: "Adjacent to Sector-54 Rapid Metro Station" },
      { icon: Briefcase, text: 'Golf Course Road — the "Wall Street of Gurgaon"' },
      { icon: Building2, text: "Center of every major transaction in the region" },
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0!2d77.0913!3d28.4594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzMzLjgiTiA3N8KwMDUnMjguNyJF!5e0!3m2!1sen!2sin!4v1",
  },
  {
    name: "Registered Office",
    city: "New Delhi",
    corridor: "Saket, South Delhi",
    address: "D-1, Lower Ground Floor, Salcon Rasvilas, Saket (South Delhi), New Delhi – 110017, India",
    highlights: [
      { icon: Building2, text: "Heart of South Delhi's premium business district" },
      { icon: Briefcase, text: "Proximity to legal hubs and institutional regulators" },
      { icon: MapPin, text: "Strategic access to government and financial corridors" },
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0!2d77.2168!3d28.5274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzM4LjYiTiA3N8KwMTMnMDAuNSJF!5e0!3m2!1sen!2sin!4v1",
  },
];

const OfficeSection = ({ office, index }: { office: typeof offices[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isReversed = index % 2 !== 0;

  return (
    <section className={index % 2 === 0 ? "bg-white" : "bg-[#ECEAE6]"}>
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Map side */}
          <motion.div
            className={`overflow-hidden ${isReversed ? "lg:order-2" : ""}`}
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[320px] bg-gray-100 border border-gray-300">
              <iframe
                src={office.mapUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title={office.name}
              />
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            className={isReversed ? "lg:order-1" : ""}
            initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#C5993E]" />
              <span className="font-jost text-[16px] font-bold uppercase tracking-[0.2em] text-[#C5993E]">{office.name}</span>
            </div>

            <h3 className="font-playfair text-[32px] md:text-[40px] text-[#2D2D2D] leading-[1.1] mb-1">
              {office.city}
            </h3>
            <p className="font-jost text-[17px] text-[#C5993E] font-semibold mb-5">{office.corridor}</p>

            <p className="font-jost text-[16px] text-gray-700 leading-[1.7] mb-6">
              {office.address}
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {office.highlights.map((h) => (
                <div key={h.text} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-[#2D2D2D] flex items-center justify-center shrink-0">
                    <h.icon className="w-3.5 h-3.5 text-[#C5993E]" />
                  </div>
                  <p className="font-jost text-[17px] text-gray-700 leading-[1.5] pt-1">{h.text}</p>
                </div>
              ))}
            </div>

            <a
              href={index === 0 ? "https://maps.app.goo.gl/dHTheUr9Y6tEucrX8" : `https://www.google.com/maps/search/${encodeURIComponent(office.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost text-[16px] font-bold uppercase tracking-[0.15em] text-[#C5993E] hover:text-[#2D2D2D] transition-colors inline-flex items-center gap-2"
            >
              Open in Google Maps <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   COVERAGE SECTION
   ═══════════════════════════════════════════ */
const CoverageSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const cities = ["Gurgaon", "New Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata"];

  return (
    <section className="bg-white py-16">
        <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#C5993E]" />
              <span className="font-jost text-[16px] font-bold uppercase tracking-[0.25em] text-[#C5993E]">National Coverage</span>
              <span className="w-10 h-[2px] bg-[#C5993E]" />
            </div>
            <h2 className="font-playfair text-[32px] md:text-[42px] text-[#2D2D2D]">
              PAN-INDIA <span className="text-[#C5993E]">DELIVERY</span>
            </h2>
          </motion.div>

          {/* Decorative gold line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5993E]/30 to-transparent mb-8" />

          {/* Cities — gold text */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-3 max-w-[1000px] mx-auto">
            {cities.map((city, i) => (
              <motion.div
                key={city}
                className="flex items-center gap-4 md:gap-6"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
              >
                <p className="font-playfair text-[22px] md:text-[28px] text-[#C5993E] hover:text-[#2D2D2D] transition-colors duration-300 cursor-default">{city}</p>
                {i < cities.length - 1 && (
                  <span className="w-[6px] h-[1px] bg-[#C5993E]/40 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom gold line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5993E]/30 to-transparent mt-8" />
        </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   CONTACT STRIP
   ═══════════════════════════════════════════ */
const ContactStrip = () => (
  <section className="py-14 bg-[#ECEAE6]">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
      <p className="font-jost text-[17px] font-bold uppercase tracking-[0.25em] text-gray-500 text-center mb-6">Get in Touch</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <a
          href="tel:+919810091101"
          className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-[#C5993E] hover:bg-[#C5993E] transition-all duration-300 group"
        >
          <Phone className="w-4 h-4 text-[#C5993E] group-hover:text-white transition-colors" />
          <span className="font-jost text-[16px] text-[#2D2D2D] font-semibold group-hover:text-white transition-colors">+91 98100 91101</span>
        </a>
        <a
          href="https://wa.me/919810091101"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-[#C5993E] hover:bg-[#C5993E] transition-all duration-300 group"
        >
          <svg className="w-4 h-4 text-[#C5993E] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.647-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.115 0-4.142-.674-5.834-1.94l-.418-.312-2.756.9.9-2.756-.312-.418A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
          <span className="font-jost text-[16px] text-[#2D2D2D] font-semibold group-hover:text-white transition-colors">WhatsApp</span>
        </a>
        <Link href="/contact" className="btn-gold">
          Schedule a Strategy Session <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
const PresencePage = () => {
  usePageMeta({
    title: "Our Presence | G-Vector Realtech | Gurgaon & Delhi NCR",
    description: "G-Vector Realtech's strategic offices in Golf Course Road, Gurgaon and Saket, South Delhi — positioned at the heart of India's business corridors.",
    keywords: "G-Vector Office Locations, Golf Course Road Gurgaon, Saket South Delhi, Real Estate Consulting Office",
    canonical: "/presence",
  });

  return (
    <>
      <PageHero
        title="Our Geographic Footprint"
        subtitle="Two strategic addresses. One national reach."
        image="/images/gemini-watermark-removed.png"
      />
      {offices.map((office, i) => (
        <OfficeSection key={office.name} office={office} index={i} />
      ))}
      <CoverageSection />
      <ContactStrip />
      <CTABanner />
    </>
  );
};

export default PresencePage;
