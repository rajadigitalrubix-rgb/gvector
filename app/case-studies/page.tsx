'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import usePageMeta from "@/hooks/use-page-meta";

const caseStudies = [
  {
    category: "Corporate Real Estate",
    title: 'The "Golf Course Road" High-Stakes Relocation',
    client: "Global Fintech Headquarters",
    desc: "Relocated 800+ employees into a LEED-certified environment on Golf Course Road. Conducted a Transit-Efficiency Audit mapping employee commutes against Rapid Metro nodes, then secured an off-market Tier-1 developer deal before it reached public listing.",
    result: '22% reduction in long-term occupancy costs. 100% Go-Live on Day 1 with zero operational disruption. LEED certification maintained. Employees reported measurable improvement in commute satisfaction.',
    metric: "22%",
    metricLabel: "Cost Reduction",
    benchmark: "Compared to previous 3-year average",
    extended: `
      <h4>1. The Client Context</h4>
      <p>The client is a globally diversified financial technology firm managing over $15 Billion in daily transaction volume. Following a strategic decision to consolidate three distinct regional offices into a single national headquarters, the client mandated G-Vector Realtech to identify, secure, and project-manage a 120,000 sq. ft. Grade-A facility. The location was non-negotiable: it had to reside on the premium Golf Course Road corridor in Gurugram, widely acknowledged right now as the most competitive and supply-constrained commercial real estate micro-market in Northern India.</p>
      
      <h4>2. The Problem Statement</h4>
      <p>The assignment presented three acute challenges. First, zero inventory: our initial spatial mapping revealed vacancy rates below 3% in premium LEED-certified buildings along the specified corridor. Second, transit dependency: a workforce of over 800 employees heavily relied on the Rapid Metro transit system, meaning the asset had to be within a 500-meter walking radius of a station. Third, security compliance: as a fintech handling sensitive international financial data, the building's digital backbone and physical access controls needed to surpass standard Grade-A benchmarks and meet global Zero-Trust IT architecture standards.</p>
      <p>The traditional brokerage approach—checking publicly listed inventory and waiting for tenant churn—would guarantee failure and jeopardize the client's timeline.</p>

      <h4>3. Our Methodology & Structural Strategy</h4>
      <p>G-Vector enacted a proactive, intelligence-led acquisition strategy. Instead of relying on open market listings, our Capital Markets desk leveraged proprietary developer relationships to identify "shadow inventory"—spaces where existing tenants were quietly negotiating early lease surrenders due to restructuring, hidden from public scrutiny.</p>
      <p>Simultaneously, our in-house data teams executed a comprehensive Transit-Efficiency Audit. We cross-referenced the home postal codes of the primary 800 employees against the Gurugram Rapid Metro line network, mapping commute times and potential carbon footprint reductions. The math proved that securing a specific asset near the Sector 54 Metro Station would reduce aggregate employee commute times by 18% compared to the secondary option in Cyber City.</p>
      <p>Within 14 days, G-Vector identified an off-market opportunity where a legacy telecom operator was vacating three contiguous floors. We moved to structurally lock down the asset through a rigorous Letter of Intent (LOI) before the space could hit the open agency market, completely eliminating competitive bidding wars.</p>

      <h4>4. Execution Mechanics & Due Diligence</h4>
      <p>Acquiring the space was only the first phase. G-Vector's dual-competency team (Real Estate + Enterprise IT) immediately initiated a rigorous dual-diligence framework.</p>
      <p>On the real estate front, our analysts executed strict lease negotiations. We structured a 9-year lease with a 50-month lock-in, successfully pushing the initial rent-free fit-out period from the standard 90 days to an unprecedented 150 days by leveraging the developer's urgency to minimize void periods. Furthermore, we tied future mechanical, electrical, and plumbing (MEP) CAPEX requirements directly into the developer's lease obligations, shielding our client from unpredictable capital shocks.</p>
      <p>On the IT and infrastructure front, our technology architects audited the building's incoming fiber routes and power redundancies. We identified a critical flaw in the diesel generator backup tiering that violated the fintech's uptime mandates. G-Vector negotiated the installation of an isolated, dedicated UPS backbone at the landlord’s expense, ensuring 24/7 IT resilience natively built into the lease structure.</p>

      <h4>5. Financial and Operational Impact</h4>
      <p>The engagement culminated in a flawless transition. By securing off-market rates and expanding the rent-free period, G-Vector delivered a verified 22% reduction in long-term occupancy costs benchmarked against prevailing Golf Course Road micro-market averages. Our PMO division oversaw the structural fit-out, bridging the gap between boardroom design vision and on-ground contractor execution. The result was a 100% Go-Live on Day 1, with zero operational disruption, sustained LEED certification, and a highly satisfied workforce enjoying seamless transit access.</p>
    `
  },
  {
    category: "Enterprise IT",
    title: "Pan-India IT Consolidation for a Logistics Giant",
    client: "National Third-Party Logistics (3PL) Provider",
    desc: 'The client was suffering from zero interoperability between systems. Standardized the digital technology stack across 22 regional hubs including Gurgaon, Bhiwandi, and Hosur using a Hub-and-Spoke IT Governance Model centrally managed from our Gurgaon Corporate Office. Unified ERP, dashboards, and helpdesk across all locations.',
    result: "Full centralized CEO dashboard visibility within 6 months. 40% reduction in IT maintenance overhead within 12 months. All 22 hubs operating on a single, auditable digital stack.",
    metric: "40%",
    metricLabel: "IT Savings",
    benchmark: "vs. market benchmark",
    extended: `
      <h4>1. The Client Context</h4>
      <p>The client is one of India's fastest-growing Third-Party Logistics (3PL) and supply chain firms, operating a vast network of 22 regional distribution hubs in critical warehousing corridors such as Gurgaon, Bhiwandi, and Hosur. Propelled by rapid acquisitions and aggressive regional expansion, the company found its physical growth vastly outpacing its digital governance.</p>

      <h4>2. The Problem Statement</h4>
      <p>The operational reality was chaotic. The firm was running five completely different legacy ERP systems across its 22 hubs. There was absolutely zero interoperability between regional networks. If inventory moved from a warehouse in Hosur to a fulfillment center in Gurgaon, the data had to be manually reconciled via spreadsheets, leading to severe discrepancies, lost revenue, and a 14-day lag in executive reporting.</p>
      <p>Furthermore, local network hardware at individual warehouses was sourced dynamically without standardized cybersecurity protocols, exposing the corporate domain to extreme zero-day vulnerabilities and ransomware risks. The CIO mandate was clear: consolidate the entire national architecture, standardize the hardware procurement, and establish absolute digital visibility without halting active supply chain movements.</p>

      <h4>3. Our Methodology & Structural Strategy</h4>
      <p>G-Vector's Enterprise IT division approached this not merely as a software implementation, but as a physical-to-digital infrastructure overhaul. We mapped out a Hub-and-Spoke IT Governance Model centralized natively from our Gurgaon Corporate Office.</p>
      <p>Our strategy utilized a layered transformation. Phase One involved deploying a unified, cloud-native ERP backbone configured for high-availability logistics. Phase Two demanded a physical audit of all 22 locations to rip and replace fragmented network hardware with standardized, enterprise-grade SD-WAN (Software-Defined Wide Area Network) edge routers. This guaranteed that every remote fulfillment center was securely tethered back to the primary cloud instance, bypassing vulnerable local internet infrastructure.</p>

      <h4>4. Execution Mechanics & Due Diligence</h4>
      <p>Execution in a live supply chain environment is immensely delicate; any system downtime directly translates to stalled trucks and frozen inventory. G-Vector's Project Management Office (PMO) deployed regional implementation cells that operated entirely during the client's localized off-peak windows (typically 2:00 AM to 5:00 AM).</p>
      <p>We instituted strict RAID logs (Risks, Assumptions, Issues, Dependencies) tracking over 400 distinct transition milestones. Cybersecurity was modernized uniformly using a localized implementation of Zero-Trust Architecture—meaning warehouse floor managers accessing the system from handheld RF scanners required mutual authentication identical to a regional director logging in from headquarters.</p>

      <h4>5. Financial and Operational Impact</h4>
      <p>The structural consolidation resulted in a monumental shift in enterprise capability. Within six months, the CEO and board were granted full, real-time centralized dashboard visibility into national inventory movements. By eliminating redundant software licenses and migrating regional server maintenance to the unified cloud, G-Vector achieved an audited 40% reduction in aggregate IT maintenance overhead within 12 months.</p>
    `
  },
  {
    category: "Asset Repositioning",
    title: 'Turning "Dead Capital" into Dynamic Yield',
    client: "Family Office — Distressed Asset Portfolio",
    desc: "Conducted a comprehensive Highest and Best Use (HBU) study for a Family Office holding distressed assets in South Delhi and Gurgaon. Repositioned a failing retail block into a boutique co-working and high-end F&B destination with a premium tenant mix.",
    result: "Asset valuation increased by 3.5x over an 18-month redevelopment cycle. Fully leased within 4 months of repositioning completion.",
    metric: "3.5x",
    metricLabel: "Asset Growth",
    benchmark: "Compared to average market yield",
    extended: `
      <h4>1. The Client Context</h4>
      <p>The client is a legacy Family Office with substantial real estate holdings accumulated over three decades across the Delhi NCR region. Because the portfolio grew organically over a long period, it was characterized by inconsistent asset quality, mismanaged operational structures, and significantly suppressed yields. Their flagship holding was a 45,000 sq. ft. standalone retail asset situated in a historically premium, yet recently stagnating micro-market in South Delhi. The asset had slowly degraded into "dead capital," suffering from a 60% vacancy rate and tenants primarily on outdated, non-escalating lease structures.</p>

      <h4>2. The Problem Statement</h4>
      <p>The Family Office faced a critical juncture: they needed to significantly increase the portfolio yield to support generational wealth transfers, but the South Delhi asset was drastically underperforming against current market capital values. The existing tenant mix—largely legacy mom-and-pop retail—was yielding sub-3% returns, entirely disproportionate to the actual land value. Furthermore, the building’s mechanical and electrical systems were functionally obsolete, severely limiting the ability to attract Grade-A enterprise tenants or premium brands.</p>
      <p>The client's initial inclination was outright liquidation. However, selling a distressed, low-yield asset in a bearish transaction market would guarantee a massive valuation haircut, destroying millions in unrealized potential equity.</p>

      <h4>3. Our Methodology & Structural Strategy</h4>
      <p>G-Vector advised an immediate halt to the liquidation process. Instead, we executed a rigorous Highest and Best Use (HBU) valuation study. Our data analysts modeled three distinct scenarios: (A) As-Is Sale, (B) Minor Renovation & Re-tenanting, and (C) Complete Asset Repositioning. The financial modeling conclusively proved that Scenario C—repositioning the asset from legacy retail into a high-density, hybrid boutique co-working and premium Food & Beverage (F&B) destination—would unlock exponential equity value.</p>
      <p>To execute this, G-Vector created an airtight financial shell. We projected the required capital expenditure (CAPEX) for full gut-renovation and structural reinforcement, balancing it against the projected Net Operating Income (NOI) derived from conservative Grade-A flex-space rents. The model demonstrated that the post-renovation yield on cost would breach 14%, creating a valuation surge that justified the initial outlay.</p>

      <h4>4. Execution Mechanics & Due Diligence</h4>
      <p>The repositioning required a surgical operation. G-Vector's advisory team led the arduous legal process of clearing out the legacy tenant base. By leveraging nuanced break clauses and structuring strategic exit buyouts, we legally vacated the asset within 90 days—without a single instance of protracted litigation.</p>
      <p>With a blank canvas, our project management team took over. We structurally modernized the asset, increasing load-bearing capacities for heavy F&B equipment and overhauling the facade to signal a premium market pivot. Simultaneously, before the dust on the construction had even settled, our leasing division initiated a pre-commitment campaign targeting high-credit flex-workspace operators and premium dining brands that specifically required a South Delhi footprint but were starved for Grade-A inventory.</p>

      <h4>5. Financial and Operational Impact</h4>
      <p>The turnaround was remarkable. Through pre-leasing alone, we secured a master lease with a Tier-1 national co-working operator for 70% of the building, alongside two anchor F&B tenants for the ground floor. The asset was fully leased and cash-flowing within just 4 months of the repositioning completion.</p>
      <p>Financially, the transformation eradicated the "dead capital" label. Driven by the new, robust, escalating lease structures locked into high-credit tenants, the capitalized valuation of the asset increased by 3.5x over the 18-month redevelopment cycle. The Family Office retained the asset, now enjoying an institutional-grade yield profile.</p>
    `
  },
  {
    category: "Cybersecurity | Enterprise IT",
    title: "Cybersecurity Fortification for a Real Estate Fund",
    client: "Private Real Estate Investment Fund",
    desc: "The client was critically vulnerable to phishing and data leaks involving sensitive HNI investor data. G-Vector implemented a full Zero-Trust Architecture eliminating implicit trust at every network layer, and conducted 50+ hours of structured staff training and simulated phishing exercises.",
    result: "Zero security breaches reported in 2 years since implementation. Full regulatory compliance achieved. Investor confidence measurably strengthened.",
    metric: "Zero",
    metricLabel: "Breaches",
    benchmark: "No confidentiality or security breaches",
    extended: `
      <h4>1. The Client Context</h4>
      <p>The client operates a prominent Private Real Estate Investment Fund headquartered in Gurugram, managing over ₹2,500 Crores in active Assets Under Management (AUM). Their investor base primarily consists of Ultra-High-Net-Worth Individuals (UHNIs), family offices, and institutional allocators. In the fund management space, data integrity and absolute transaction confidentiality are the foundations of the fiduciary relationship.</p>

      <h4>2. The Problem Statement</h4>
      <p>A routine third-party IT audit triggered a red alert: the fund's internal network architecture was fundamentally compromised by an obsolete perimeter-defense model. Senior executives were frequently accessing sensitive deal-flow pipelines, KYC documents, and capital call schedules from unsecured residential Wi-Fi networks and public terminals. Furthermore, the staff exhibited a profound lack of cyber-awareness, resulting in alarming click-through rates during preliminary phishing baseline tests.</p>
      <p>The risk was existential. A successful breach of UHNI data or a wire fraud interception would not only trigger catastrophic regulatory fines but would instantly destroy the fund's market reputation, triggering mass LP (Limited Partner) withdrawals and potentially collapsing the firm.</p>

      <h4>3. Our Methodology & Structural Strategy</h4>
      <p>G-Vector's Enterprise Cybersecurity division was engaged to architect a total defensive overhaul. We rejected the traditional "castle-and-moat" security philosophy, which inherently trusts anyone inside the network. Instead, we executed a comprehensive transition to a Zero-Trust Architecture (ZTA).</p>
      <p>Our strategy operated on the core directive: "Never Trust, Always Verify." Every single access request—whether an analyst pulling a financial model in the central office or a managing partner reviewing term sheets from an airport lounge—was treated as a potential breach. We mandated stringent Identity and Access Management (IAM) protocols, coupling contextual Multi-Factor Authentication (MFA) with device-health compliance checks before granting granular, least-privilege network access.</p>

      <h4>4. Execution Mechanics & Due Diligence</h4>
      <p>The technical deployment was executed alongside a massive cultural realignment. G-Vector installed End-to-End Encryption (E2EE) on all sensitive communication channels and established secure, siloed data vaults for UHNI KYC documentation. We implemented enterprise-grade Endpoint Detection and Response (EDR) agents on all corporate devices, providing our central SOC (Security Operations Center) with real-time heuristic monitoring to kill malicious processes before execution.</p>
      <p>Knowing that human error is the weakest link in any cryptographic chain, we launched a relentless Human Risk Management program. Over six months, G-Vector orchestrated 50+ hours of structured, role-based cybersecurity training. This was reinforced by an unpredictable barrage of simulated spear-phishing campaigns—designed to mimic hyper-realistic vendor invoices and spoofed internal memos—to condition the staff to actively hunt for anomalies.</p>

      <h4>5. Financial and Operational Impact</h4>
      <p>The defensive transformation successfully neutralized the ambient threat environment. In the 24 months following the Zero-Trust implementation, the fund has reported zero successful security breaches or unauthorized data exfiltration events. Phishing susceptibility dropped from an initial dangerous baseline of 28% to near zero.</p>
      <p>Crucially, the resulting secure framework allowed the fund to easily pass rigorous institutional compliance audits, directly enabling them to onboard two new offshore institutional LPs who demanded strict data-governance standards before committing capital.</p>
    `
  },
  {
    category: "Investment Advisory",
    title: 'The "Master Brokerage" Success Story',
    client: "Tier-1 Real Estate Developer",
    desc: "A Tier-1 developer needed to move ₹500 Million in luxury residential inventory. G-Vector took on the exclusive advisory mandate covering pricing strategy, digital narrative development, and direct HNI outreach through our curated investor network.",
    result: "70% of total inventory moved within the first two quarters of engagement. Developer acknowledged G-Vector's network access as the single most valuable factor in the campaign's success.",
    metric: "70%",
    metricLabel: "Sold in Q2",
    benchmark: "vs. previous developer agency network",
    extended: `
      <h4>1. The Client Context</h4>
      <p>The client is a Tier-1 Real Estate Developer with a Pan-India residential and commercial footprint. Following the launch of an ultra-luxury residential tower in Gurugram, they encountered severe macroeconomic headwinds. Despite standard marketing efforts, a significant chunk of their premium inventory—valued at over ₹500 Million—was stalled. The traditional retail brokerage network broke down when attempting to sell ticket sizes exceeding ₹200 Million, simply lacking the sophistication and the network to access Ultra-High-Net-Worth Individuals (UHNIs) and family offices directly.</p>

      <h4>2. The Problem Statement</h4>
      <p>The cost of capital was severely compressing the developer’s margins. Every month the inventory sat idle, the internal rate of return (IRR) on the project deteriorated. The problem wasn't the physical product; the asset was impeccably built. The failure lay in the distribution channel. Standard broker networks were pitching the asset based purely on "price-per-square-foot" to unqualified leads, actively commoditizing what should have been an exclusive, aspirational luxury product.</p>

      <h4>3. Our Methodology & Structural Strategy</h4>
      <p>The developer mandated G-Vector Realtech as the Exclusive Master Broker for the stalled inventory. We completely dismantled the standard sales apparatus. Our strategy shifted the narrative entirely from "residential sales" to "wealth preservation and lifestyle equity."</p>
      <p>First, we restricted access. We pulled the project from all mass-market aggregate portals. G-Vector's data division restructured the pricing model, creating bespoke, staggered payment plans that favored early liquidity providers. We then developed a highly curated digital narrative, focusing on the asset's bespoke architectural elements, privacy controls, and projected long-term capital appreciation relative to inflation hedges.</p>

      <h4>4. Execution Mechanics & Due Diligence</h4>
      <p>Instead of blanket advertising, G-Vector engaged our proprietary network of Private Wealth Managers and Family Office directors. We organized highly exclusive, invitation-only site experiences, bypassing retail brokers entirely. Our advisory team presented the asset not as a home, but as a critical component of a diversified generational wealth portfolio.</p>
      <p>Crucially, G-Vector managed the entire transaction lifecycle end-to-end. We provided the buyers with comprehensive competitive analysis, clear projections on rental yields for those seeking investment returns, and seamless legal facilitation throughout the diligence phase.</p>

      <h4>5. Financial and Operational Impact</h4>
      <p>The shift from mass-market retail brokerage to institutional wealth advisory yielded immediate results. Within the first two quarters of the Master Brokerage engagement, G-Vector successfully transacted 70% of the stalled ₹500 Million inventory. The developer completely recovered their distressed capital timeline. During the post-engagement debrief, the client's board formally acknowledged that G-Vector's exclusive UHNI network access and sophisticated deal structuring were the defining factors in preventing a massive capital loss.</p>
    `
  },
  {
    category: "Corporate Consulting",
    title: "Supply Chain Process Re-engineering",
    client: "Major E-Commerce Enterprise",
    desc: "A critical gap between warehouse IT systems and physical dispatch operations was causing delays, errors, and rising costs at a high-volume Gurgaon fulfillment center. G-Vector redesigned complete SOPs — bridging IT with operations, retraining floor teams, and embedding real-time performance tracking.",
    result: '18% improvement in Order-to-Ship cycle times within 90 days. Documented SOPs now form the replicable standard across the client\'s national fulfillment network.',
    metric: "18%",
    metricLabel: "Faster Shipping",
    benchmark: "Compared to pre-reengineering baseline",
    extended: `
      <h4>1. The Client Context</h4>
      <p>The client operates one of the highest-volume e-commerce fulfillment networks in Northern India. Their flagship Gurgaon logistics center handles thousands of daily dispatch units, serving as the crucial node connecting regional suppliers to end-consumers. In the e-commerce sector, margin preservation relies entirely on cycle time efficiency; a delay of even minutes per pallet translates into millions of rupees in deferred revenue and severe SLA (Service Level Agreement) penalties.</p>

      <h4>2. The Problem Statement</h4>
      <p>Despite heavy capital investment in top-tier Warehouse Management Software (WMS), the center's Order-to-Ship metrics were dangerously lagging behind industry baselines. An initial diagnostic trace revealed a massive disconnect between the digital ERP signals and the physical floor operations. Pick-path routing algorithms were ignored by floor staff due to convoluted racking layouts, and dispatch bays were chronically bottlenecked because physical labeling SOPs (Standard Operating Procedures) were entirely manual and error-prone.</p>
      <p>The operations were fundamentally decoupled from the IT infrastructure. Expanding the workforce merely compounded the chaos, leading to rising labor overheads with no proportional increase in throughput.</p>

      <h4>3. Our Methodology & Structural Strategy</h4>
      <p>G-Vector's PMO and Enterprise Consulting divisions were deployed to execute a comprehensive Supply Chain Re-engineering sweep. We did not recommend buying new software; instead, we targeted the integration layer where human operators interact with digital systems. We initiated an exhaustive Time-and-Motion study across the entire 150,000 sq. ft. facility, mapping the physical trajectory of inventory from inbound receiving docks to outbound dispatch trucks.</p>
      <p>Based on the data, we formulated a strategy to physically reorganize the staging areas to match the exact logic of the WMS routing algorithm, eliminating "dead travel time" for forklift operators. We effectively bridged the gap between the boardroom software investments and the reality of the warehouse floor.</p>

      <h4>4. Execution Mechanics & Due Diligence</h4>
      <p>The operational pivot required surgical precision without shutting down daily fulfillment targets. G-Vector authored entirely new, granular SOPs for every single node in the warehouse. We introduced strict localization rules and standardized the hand-off protocols between the picking teams and the packing lines.</p>
      <p>Crucially, we ran intensive retraining modules for the supervisory staff. We implemented large-scale visual tracking boards directly on the floor, extracting real-time API data from the ERP to display dynamic performance metrics visible to all workers. Supervisors were instructed to manage purely by variance—flagging exceptions in the RAID logs rather than micromanaging functional processes.</p>

      <h4>5. Financial and Operational Impact</h4>
      <p>The physical and digital alignment produced immediate velocity. Within 90 days of deploying the new SOPs, the facility registered an audited 18% structural improvement in total Order-to-Ship cycle times. Overtime labor costs plummeted as shifts began hitting their output targets within standard operating hours. Most significantly, the G-Vector authored SOPs were so resilient and effective that the client's executive board formally adopted them as the unified replicable standard for their upcoming fulfillment grid expansions in Pune and Hyderabad.</p>
    `
  },
];

const CaseStudiesPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  usePageMeta({
    title: "Case Studies | G-Vector Realtech | Proof Over Promise",
    description: "Six deep-dive case studies showing how G-Vector Realtech turns complexity into measurable capital — real estate, IT, cybersecurity, and supply chain.",
    canonical: "/case-studies",
  });

  return (
    <>
      <PageHero
        title="The Case Study Vault"
        subtitle="Proof over promise — six deep-dive engagements that illustrate how G-Vector Realtech turns complexity into measurable capital."
        image="/images/Gemini_Generated_Image_6e5t8c6e5t8c6e5t (1).png"
      />

      {/* Stats bar */}
      <section className="bg-[#ECEAE6] border-y border-gray-300">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-gray-300 md:divide-y-0">
          {[
            { v: "6+",    l: "Engagements" },
            { v: "22%",   l: "Avg. Cost Savings" },
            { v: "3.5x",  l: "Best Asset Growth" },
            { v: "Zero",  l: "Confidentiality Breaches" },
          ].map((s, i) => (
            <div key={s.l} className="py-6 sm:py-8 text-center border-gray-300">
              <p className="font-playfair text-[24px] sm:text-[34px] text-[#C5993E] leading-none mb-1.5">{s.v}</p>
              <p className="font-jost text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-[0.1em] font-bold leading-tight px-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies — Premium full-width bands */}
      <div ref={ref}>
        {caseStudies.map((cs, i) => (
          <motion.section
            key={cs.title}
            className={i % 2 === 0 ? 'bg-white' : 'bg-[#ECEAE6]'}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-10 md:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-20 items-center">
                
                {/* Left — Category + Title + Client */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-[#C5993E]" />
                    <span className="font-jost text-[17px] font-bold uppercase tracking-[0.2em] text-[#C5993E]">{cs.category}</span>
                  </div>
                  <h3 className="font-playfair text-[24px] sm:text-[30px] md:text-[34px] text-[#2D2D2D] leading-[1.2] mb-3 font-bold">
                    {cs.title}
                  </h3>
                  <p className="font-jost text-[17px] text-gray-500 font-medium uppercase tracking-wide mb-6">
                    Client: {cs.client}
                  </p>
                  <p className="font-jost text-[15px] sm:text-[17px] text-[#444] leading-[1.75]">
                    {cs.desc}
                  </p>
                </div>

                {/* Right — Metric + Result */}
                <div>
                  <div className="flex items-end gap-4 mb-4 md:mb-6">
                    <span className="font-playfair text-[56px] sm:text-[72px] md:text-[90px] text-[#C5993E] leading-none font-bold">
                      {cs.metric}
                    </span>
                    <div className="pb-2 md:pb-4">
                      <span className="block font-jost text-[14px] sm:text-[17px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                        {cs.metricLabel}
                      </span>
                      <p className="font-jost text-[11px] sm:text-[12px] text-gray-400 italic mt-1">{cs.benchmark}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 pt-4 md:pt-5">
                    <p className="font-jost text-[15px] md:text-[16px] text-[#4A4A4A] leading-[1.75]">
                      <strong className="text-[#2D2D2D]">Impact:</strong> {cs.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      <CTABanner />
    </>
  );
};

export default CaseStudiesPage;
