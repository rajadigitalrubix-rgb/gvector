'use client';

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2824]">
      <div className="gold-shimmer-line h-[2px]" />

          <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 pt-10 lg:pt-16 pb-8 lg:pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 sm:gap-x-10">

          {/* Logo & About */}
          <div className="col-span-2 lg:col-span-1 lg:pr-8">
            <Link href="/" className="inline-block mb-4 lg:mb-6">
              <img
                src="/images/Screenshot_2026-04-06_at_1.35.36_AM-removebg-preview.png"
                alt="G-Vector Realtech Institutional Advisory Firm Logo"
                loading="lazy"
                className="h-[42px] md:h-[50px] lg:h-[62px] w-auto object-contain"
              />
            </Link>
            
            <p className="font-jost text-[14px] text-white/70 leading-[1.6] mb-6 lg:mb-8">
              Institutional-grade real estate advisory firm delivering outcomes built on data, trust, and documented integrity across India.
            </p>

            <div className="flex items-center gap-3 py-2 px-3 border border-white/10 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5993E]" />
              <span className="font-jost text-[12px] font-bold uppercase tracking-[0.2em] text-white/60">30+ Years of Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-jost text-[15px] font-semibold text-white mb-4 lg:mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home",          href: "/" },
                { label: "About Us",      href: "/about" },
                { label: "Our Presence",  href: "/presence" },
                { label: "Case Studies",  href: "/case-studies" },
                { label: "Contact Us",    href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center gap-2 group font-jost text-[14px] text-white/80 hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 hidden lg:block -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#C5993E]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="col-span-1">
            <h4 className="font-jost text-[15px] font-semibold text-white mb-4 lg:mb-5">
              Expertise
            </h4>
            <ul className="space-y-3">
              {[
                "Investment Services",
                "Land Services",
                "Corporate Real Estate",
                "Leasing Services",
                "Industrial Services",
                "Retail Services",
              ].map((service) => (
                <li key={service} className="font-jost text-[14px] text-white/80 cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Locations */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-jost text-[15px] font-semibold text-white mb-4 lg:mb-5">
              Contact & Offices
            </h4>
            <div className="space-y-6">
              <a href="tel:+919810091101" title="Call G-Vector Realtech" className="inline-flex items-center gap-2.5 font-jost text-[15px] font-medium text-white/90 hover:text-[#C5993E] transition-colors">
                <Phone className="w-4 h-4 text-[#C5993E]" />
                +91 98100 91101
              </a>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-10 lg:gap-6">
                <div>
                  <p className="font-jost text-[12px] font-bold text-[#C5993E] uppercase tracking-wider mb-1.5">Corporate HQ</p>
                  <a 
                    href="https://maps.app.goo.gl/dHTheUr9Y6tEucrX8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="View Corporate HQ on Google Maps"
                    className="font-jost text-[13px] text-white/70 hover:text-[#C5993E] transition-colors leading-snug block"
                  >
                    FF 112, 112A, The Clarion Centrum Plaza,<br />Golf Course Road, Gurgaon 122002
                  </a>
                </div>

                <div>
                  <p className="font-jost text-[12px] font-bold text-[#C5993E] uppercase tracking-wider mb-1.5">Registered Office</p>
                  <p className="font-jost text-[13px] text-white/70 leading-snug">
                    D-1, Lower Ground Floor, Salcon Rasvilas,<br />Saket, New Delhi 110017
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/5 bg-black/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-4 lg:py-5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-5 text-center md:text-left">
          <p className="font-jost text-[13px] text-white/50">
            © {year} G-Vector Realtech Private Limited. <span className="hidden md:inline mx-2">|</span> CIN: U74120DL2007PTC169007
          </p>
          
          <p className="font-jost text-[12px] text-white/30 uppercase tracking-[0.15em] lg:tracking-[0.2em] font-medium">
            Institutional Real Estate & Technology Advisory
          </p>
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;
