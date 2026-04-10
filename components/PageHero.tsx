'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PageHeroProps {
  eyebrow?: string;
  headline?: string;
  title?: string;
  subtitle?: string;
  image?: string;
}

const PageHero = ({ eyebrow, headline, title, subtitle, image }: PageHeroProps) => {
  const displayHeadline = headline || title || "";
  const displayEyebrow = eyebrow || "G-Vector Realtech";
  const heroImage = image || "/images/Gemini_Generated_Image_9xq1pe9xq1pe9xq1 (1).png";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="pt-32 pb-0 bg-[#ECEAE6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="relative rounded-2xl overflow-hidden min-h-[340px] lg:min-h-[380px]"
        >
          {/* Full BG image inside rounded container */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={headline || title || "G-Vector Realtech Institutional Advisory"}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover object-right-bottom"
            />
          </div>

          {/* Layer 1: Dark left for text, clear right for image */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.75) 35%, rgba(26,26,26,0.15) 65%, transparent 100%)",
            }}
          />

          {/* Layer 2: Subtle bottom vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(0deg, rgba(26,26,26,0.4) 0%, transparent 30%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] min-h-[340px] lg:min-h-[380px]">
            <div className="px-8 sm:px-12 lg:px-16 pt-12 pb-12 lg:pt-14 lg:pb-14 flex flex-col justify-center">
              {/* Eyebrow */}
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="w-10 h-[2px] bg-[#C5993E]" />
                <span className="font-jost text-[11px] font-bold uppercase tracking-[0.3em] text-[#C5993E]">
                  {displayEyebrow}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="font-playfair text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-white leading-[1.15] max-w-[580px] mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {displayHeadline}
              </motion.h1>

              {/* Subtitle */}
              {subtitle && (
                <>
                  <div className="w-10 h-[1px] bg-[#C5993E]/30 mb-4" />
                  <motion.p
                    className="font-jost text-[14px] sm:text-[15px] text-white/70 leading-[1.75] max-w-[460px]"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 }}
                  >
                    {subtitle}
                  </motion.p>
                </>
              )}
            </div>

            {/* Right — empty, shows the clear image */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
