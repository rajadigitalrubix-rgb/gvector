'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const CTABanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative">
      {/* Premium gold shimmer line */}
      <div className="gold-shimmer-line h-[2px]" />
      <div className="relative min-h-[220px] lg:min-h-[260px]">
        <img src="/images/Gemini_Generated_Image_9xq1pe9xq1pe9xq1 (1).png" alt="G-Vector Call to Action Background" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-rgba(197,153,62,0.03)" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent, rgba(197,153,62,0.03))'}} />

        <div ref={ref} className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-10 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            className="max-w-[600px]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-playfair text-[28px] md:text-[36px] text-white leading-[1.1] mb-3">
              READY TO ENGINEER YOUR NEXT <span className="text-[#C5993E]">OUTCOME?</span>
            </h2>
            <p className="font-jost text-[15px] text-white/50 leading-[1.75]">
              Whether you are an investor, a corporate, a developer, or an institution — every conversation with G-Vector starts with listening.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-start lg:items-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link href="/contact" className="btn-gold w-full sm:w-auto flex items-center justify-center">
              Schedule a Strategy Session <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a 
              href="tel:+919810091101" 
              className="group flex items-center justify-center gap-3 w-full sm:w-auto h-[48px] md:h-[52px] px-8 bg-white/5 backdrop-blur-md border border-white/15 hover:border-[#C5993E] hover:bg-white/10 text-white font-jost text-[13px] md:text-[14px] font-bold tracking-[0.1em] transition-all duration-400"
            >
              <Phone className="w-4 h-4 text-[#C5993E] group-hover:scale-110 transition-transform duration-300" /> 
              +91 98100 91101
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
