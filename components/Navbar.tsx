'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ArrowRight, Home } from "lucide-react";

const navLinks = [
  { label: "Home",          href: "/" },
  { label: "About Us",      href: "/about" },
  { label: "Services",      href: "/services" },
  { label: "Case Studies",  href: "/case-studies" },
  { label: "Our Presence",  href: "/presence" },
  { label: "Contact Us",    href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-[#FAFAF8] shadow-[0_4px_35px_rgba(0,0,0,0.12)] border-[#C5993E]/30" 
            : "bg-white border-gray-100"
        }`}
      >
        {/* Top gold accent line */}
        <div className="h-[3px] bg-gradient-to-r from-[#C5993E] via-[#D4A94E] to-[#C5993E]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/images/Screenshot_2026-04-06_at_1.35.36_AM-removebg-preview.png"
              alt="G-Vector Realtech"
              className="h-[42px] md:h-[50px] lg:h-[62px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative h-full flex items-center px-5 font-jost text-[15px] tracking-[0.04em] transition-colors duration-200 border-b-[3px] ${
                    isActive
                      ? "text-[#C5993E] border-[#C5993E] font-bold"
                      : "text-[#111111] border-transparent hover:text-[#C5993E] hover:border-[#C5993E]/50 font-semibold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden lg:flex btn-nav-cta"
          >
            Schedule a Strategy Session
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#2D2D2D]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — slide down */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              className="absolute top-0 left-0 right-0 bg-white"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
            >
              <div className="h-[3px] bg-gradient-to-r from-[#C5993E] via-[#D4A94E] to-[#C5993E]" />

              {/* Header */}
              <div className="px-6 h-[70px] flex items-center justify-between border-b border-gray-300">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src="/images/Screenshot_2026-04-06_at_1.35.36_AM-removebg-preview.png"
                    alt="G-Vector Realtech Institutional Advisory Firm Logo"
                    loading="lazy"
                    className="h-[40px] w-auto object-contain"
                  />
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="text-[#2D2D2D]" aria-label="Close mobile menu">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <div className="px-6 py-6">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-4 border-b border-gray-100 font-jost text-[16px] transition-colors ${
                          isActive ? "text-[#C5993E] font-bold" : "text-[#111111] font-semibold hover:text-[#C5993E]"
                        }`}
                      >
                        {link.label}
                        <ChevronRight className="w-4 h-4 opacity-30" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="px-6 pb-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  Schedule a Strategy Session <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
