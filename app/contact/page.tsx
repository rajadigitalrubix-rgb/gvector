'use client';

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, MapPin, Clock, ChevronDown, ArrowRight, Building2 } from "lucide-react";
import { toast } from "sonner";
import usePageMeta from "@/hooks/use-page-meta";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

const faqs = [
  { q: "What types of clients do you work with?", a: "We serve global corporations, family offices, HNW individuals, logistics providers, real estate developers, and e-commerce companies demanding institutional-grade analysis." },
  { q: "What geographies do you cover?", a: "Headquartered in Gurgaon with a registered office in Delhi, we deliver services Pan-India — Mumbai, Bangalore, Hyderabad, Pune, Chennai, and all major business corridors." },
  { q: "How does a typical engagement begin?", a: "Every engagement starts with a Strategy Session — a no-obligation consultation where we understand your objectives, assess complexity, and propose a tailored approach." },
  { q: "Do you offer IT services independently?", a: "Absolutely. Our Enterprise IT practice — cloud governance, cybersecurity, and infrastructure modernization — operates independently across sectors." },
  { q: "What is your project management approach?", a: "We establish a formal PMO with weekly RAID logs, stakeholder alignment meetings, and milestone-based tracking." },
];

const ContactPage = () => {
  usePageMeta({
    title: "Contact Us | Schedule a Strategy Session | G-Vector Realtech",
    description: "Get in touch with G-Vector Realtech. Schedule a strategy session for real estate advisory, enterprise IT, or corporate consulting.",
    canonical: "/contact",
  });

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px" });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-60px" });

  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interest) { toast.error("Please fill required fields."); return; }
    setSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Enquiry sent successfully. We will be in touch shortly.");
        // Reset the form fields
        setFormData({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
      } else {
        toast.error(result.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full bg-white border border-gray-300 px-4 py-2.5 font-jost text-[16px] text-[#2D2D2D] placeholder:text-gray-500 focus:outline-none focus:border-[#C5993E] transition-colors";

  return (
    <>
      <PageHero eyebrow="Contact Us" headline="READY TO ENGINEER YOUR NEXT OUTCOME?" subtitle="Whether you are an investor, a corporate, a developer, or an institution — every conversation with G-Vector starts with listening." image="/images/Gemini_Generated_Image_6e5t8c6e5t8c6e5t (1).png" />

      {/* Form + Sidebar */}
      <section className="py-10 bg-[#ECEAE6]">
        <div ref={formRef} className="max-w-[1440px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] overflow-hidden border border-gray-300">
            {/* Form */}
            <motion.div className="bg-white p-6 lg:p-8" initial={{ opacity: 0, y: 24 }} animate={formInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              <div className="section-eyebrow mb-2">Get In Touch</div>
              <h2 className="font-playfair text-[24px] md:text-[30px] text-[#2D2D2D] mb-1">SCHEDULE A STRATEGY SESSION</h2>
              <p className="font-jost text-[17px] text-gray-500 mb-5">We respond to every enquiry personally. Your trust is our priority.</p>

              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="font-jost text-[17px] font-bold text-gray-700 uppercase tracking-wider block mb-1">Full Name *</label>
                    <input name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="font-jost text-[17px] font-bold text-gray-700 uppercase tracking-wider block mb-1">Company / Organization</label>
                    <input name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Company name" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="font-jost text-[17px] font-bold text-gray-700 uppercase tracking-wider block mb-1">Email *</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="font-jost text-[17px] font-bold text-gray-700 uppercase tracking-wider block mb-1">Phone</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="font-jost text-[17px] font-bold text-gray-700 uppercase tracking-wider block mb-1">Nature of Requirement *</label>
                  <select name="interest" value={formData.interest} onChange={handleChange} required className={inputClass}>
                    <option value="">Choose a service</option>
                    <option value="Real Estate Advisory">Real Estate Advisory</option>
                    <option value="Investment Advisory">Investment Advisory</option>
                    <option value="Corporate Real Estate">Corporate Real Estate Services</option>
                    <option value="Enterprise IT">Enterprise IT & Managed Services</option>
                    <option value="Corporate Consulting">Corporate Consulting & PMO</option>
                    <option value="Other">General Inquiry</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="font-jost text-[17px] font-bold text-gray-700 uppercase tracking-wider block mb-1">Message / Brief</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} placeholder="Tell us about your objectives..." />
                </div>
                <button type="submit" aria-label="Submit Contact Form" disabled={submitting} className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50">
                  {submitting ? "Sending..." : "Send Enquiry"} <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div className="bg-[#ECEAE6] border border-gray-300 p-6 lg:p-8 flex flex-col" initial={{ opacity: 0, y: 24 }} animate={formInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[2px] bg-[#C5993E]" />
                <span className="font-jost text-[17px] font-bold uppercase tracking-[0.2em] text-[#C5993E]">Contact Details</span>
              </div>
              <div className="space-y-4 flex-1">
                {[
                  { icon: Building2, label: "Corporate Office", lines: ["FF 112, 112A, The Clarion Centrum Plaza", "Golf Course Road, Gurgaon, Haryana – 122002"], href: "https://maps.app.goo.gl/dHTheUr9Y6tEucrX8" },
                  { icon: MapPin, label: "Registered Office", lines: ["D-1, Lower Ground Floor, Salcon Rasvilas", "Saket (South Delhi), New Delhi – 110017"] },
                  { icon: Phone, label: "Phone", lines: ["+91 98100 91101"], href: "tel:+919810091101" },
                  { icon: Clock, label: "Business Hours", lines: ["Mon-Fri: 9:00 AM – 6:30 PM", "Sat: By appointment"] },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#C5993E] flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-jost text-[16px] font-bold text-[#C5993E]/60 uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.lines.map((ln) => (
                        <p key={ln} className="font-jost text-[17px] text-gray-700 leading-[1.6]">
                          {(item as any).href ? <a href={(item as any).href} className="hover:text-[#C5993E] transition-colors">{ln}</a> : ln}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* WhatsApp */}
              <div className="border-t border-gray-300 pt-6 mt-6">
                <a href="https://wa.me/919810091101" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white border border-gray-300 p-4 hover:border-[#C5993E]/40 transition-colors group">
                  <div>
                    <h4 className="font-jost text-[16px] font-semibold text-[#2D2D2D]">Prefer WhatsApp?</h4>
                    <p className="font-jost text-[16px] text-gray-500">Quick response, same team.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C5993E] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div ref={faqRef} className="max-w-[900px] mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={faqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#C5993E]" />
              <span className="font-jost text-[16px] font-bold uppercase tracking-[0.25em] text-[#C5993E]">FAQs</span>
              <span className="w-10 h-[2px] bg-[#C5993E]" />
            </div>
            <h2 className="font-playfair text-[32px] md:text-[44px] text-[#2D2D2D]">FREQUENTLY ASKED <span className="text-[#C5993E]">QUESTIONS</span></h2>
          </motion.div>

          <div className="space-y-[1px] bg-gray-200">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                className="bg-white group"
                initial={{ opacity: 0, y: 16 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.05 + i * 0.04 }}
              >
                <summary className="font-jost text-[16px] font-semibold text-[#2D2D2D] cursor-pointer select-none list-none flex items-center justify-between gap-4 px-6 py-5 hover:text-[#C5993E] transition-colors">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-[#C5993E] transition-transform duration-200 group-open:rotate-180 shrink-0" />
                </summary>
                <div className="px-6 pb-5">
                  <div className="w-10 h-[2px] bg-[#C5993E]/20 mb-3" />
                  <p className="font-jost text-[16px] text-gray-700 leading-[1.75]">{faq.a}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Note */}
      <section className="py-10 bg-[#ECEAE6] border-t border-gray-300">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="font-jost text-[16px] text-gray-500 leading-[1.8]">
            G-Vector Realtech Private Limited (CIN: U74120DL2007PTC169007) is registered under the Companies Act, 2013. All advisory services are provided with full transparency and documented integrity. Information on this website does not constitute legal, financial, or investment advice.
          </p>
        </div>
      </section>
      <CTABanner />
    </>
  );
};

export default ContactPage;
