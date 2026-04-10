'use client';

const partners = [
  { type: "Headquarters", name: "Global Fintech HQ" },
  { type: "Logistics", name: "National 3PL Provider" },
  { type: "Real Estate", name: "Tier-1 Developer" },
  { type: "Wealth", name: "Institutional Family Office" },
  { type: "Corporate", name: "Fortune 500 Enterprise" },
  { type: "Supply Chain", name: "Regional Logistics Leader" }
];

const TrustedBy = () => {
  return (
    <section className="bg-white py-10 lg:py-14 border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Header Column */}
          <div className="lg:w-[320px] shrink-0 lg:sticky lg:top-32">
            <h4 className="font-jost text-[12px] font-bold text-[#C5993E] uppercase tracking-[0.3em] mb-3">Institutional Network</h4>
            <h2 className="font-playfair text-[28px] md:text-[34px] text-[#2D2D2D] leading-[1.2]">
              Trusted by the Industry&apos;s <br className="hidden lg:block"/><span className="text-[#C5993E]">Market Leaders</span>
            </h2>
            <div className="mt-6 w-12 h-[2px] bg-[#C5993E]" />
            <p className="font-jost text-[16px] text-gray-500 mt-6 leading-relaxed">
              Representing a strategic network of global enterprises, family offices, and developers across the Indian landscape.
            </p>
          </div>

          {/* Ledger-style Grid (Minimalist, no cards) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 border-t lg:border-t-0 lg:border-l border-gray-100 divide-y md:divide-y-0 divide-gray-100">
            {partners.map((p, i) => (
              <div
                key={p.name}
                className="p-5 md:p-6 lg:p-8 group hover:bg-[#FAFAF8] transition-all duration-300 border-b md:border-r border-gray-100 last:border-b-0"
              >
                <div className="relative z-10">
                  <span className="font-jost text-[11px] font-bold text-[#C5993E] uppercase tracking-[0.2em] block mb-2 opacity-60">
                    {p.type}
                  </span>
                  <h3 className="font-playfair text-[19px] md:text-[21px] text-[#2D2D2D] font-bold leading-snug group-hover:text-[#C5993E] transition-colors">
                    {p.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
