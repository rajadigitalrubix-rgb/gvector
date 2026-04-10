'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleCanvas from "@/components/ParticleCanvas";

const NotFound = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--dark-gradient)" }}>
    <div className="absolute inset-0 opacity-20">
      <ParticleCanvas />
    </div>
    <div className="relative z-10 text-center px-4">
      <motion.h1
        className="font-playfair text-[6rem] md:text-[8rem] font-semibold gold-text leading-none mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        404
      </motion.h1>
      <motion.p
        className="font-playfair italic text-champagne text-xl md:text-2xl mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Page Not Found
      </motion.p>
      <motion.p
        className="font-jost text-warm-gray text-sm max-w-md mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us guide you back to G-Vector Realtech.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Link href="/" className="btn-gold">
          Return Home
        </Link>
      </motion.div>
    </div>
  </section>
);

export default NotFound;
