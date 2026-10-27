import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { COMPANY_INFO, PARTNERS, SECTORS, WHY_IMPACT, PROCESS_STEPS, SERVICES } from '../data/siteData';
import { ServiceId } from '../types';
import {
  ArrowRight,
  Building2,
  RefreshCw,
  ShieldCheck,
  MonitorDot,
  LineChart,
  CheckCircle2,
  Cpu,
  PackageCheck,
  Wrench,
  CloudSun,
  Activity,
  Zap,
  Leaf,
  Layers,
  ChevronRight,
  ShieldAlert,
  Award
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, openServiceModal } = useNavigation();

  const getServiceIcon = (id: ServiceId) => {
    switch (id) {
      case 'new-install':
        return <Building2 className="w-6 h-6 text-[#1F4E9E]" />;
      case 'upgrades-retrofit':
        return <RefreshCw className="w-6 h-6 text-[#1F4E9E]" />;
      case 'maintenance':
        return <ShieldCheck className="w-6 h-6 text-[#1F4E9E]" />;
      case 'remote-graphics':
        return <MonitorDot className="w-6 h-6 text-[#1F4E9E]" />;
      case 'energy-management':
        return <LineChart className="w-6 h-6 text-[#4BA82E]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#1F4E9E]" />;
    }
  };

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-[#1F4E9E]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#1F4E9E]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#1F4E9E]" />;
      case 'CloudSun':
        return <CloudSun className="w-6 h-6 text-[#1F4E9E]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#1F4E9E]" />;
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-20 md:pb-28 overflow-hidden bg-[#F6F4EE]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#1F4E9E] font-heading mb-3 inline-block">
              BUILDING ENERGY MANAGEMENT SYSTEMS SPECIALISTS
            </span>
            <h1 className="type-h1 text-[#0B1F3A] font-heading tracking-tight text-balance">
              Smarter Buildings. Lower Energy. Total Control.
            </h1>
            <p className="type-p1 text-[#4A5A70] mt-5 max-w-2xl mx-auto leading-relaxed">
              Delivering turnkey BMS solutions to clients across the UK since 1991. We design, install, maintain, and optimise building controls that cut operational carbon and drive long-term resilience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0B1F3A] text-base font-semibold px-7 py-3.5 rounded-full border border-[#DCE3EC] shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Explore Services</span>
              </button>
            </div>
          </div>

          {/* Large Illustrative Hero Object: Isometric Cutaway Commercial Building */}
          <div className="relative mx-auto max-w-5xl rounded-[24px] overflow-hidden shadow-2xl border border-[#DCE3EC] bg-white group">
            <img
              src={COMPANY_INFO.images.heroIsometric}
              alt="Isometric architectural cutaway of sustainable commercial building showing HVAC ducts, smart lighting, sensors, and central BEMS control room"
              className="w-full h-auto object-cover max-h-[620px] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              loading="eager"
            />

            {/* Floating Stat Chip (As requested in design brief) */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-lg border border-[#DCE3EC] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4BA82E]/10 flex items-center justify-center text-[#4BA82E] shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-[#4A5A70]">Active Building Optimisation</div>
                <div className="text-sm sm:text-base font-extrabold text-[#0B1F3A] font-heading flex items-center gap-2">
                  <span>94.2% Optimal Efficiency</span>
                  <span className="text-[10px] text-[#4BA82E] bg-[#4BA82E]/10 font-bold px-1.5 py-0.5 rounded-md">Live BMS</span>
                </div>
              </div>
            </div>

            {/* Floating Control Panel Chip */}
            <div className="hidden md:flex absolute bottom-6 right-6 bg-[#0B1F3A]/95 text-white backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/10 items-center gap-3 max-w-xs">
              <div className="w-9 h-9 rounded-xl bg-[#E4202C]/20 flex items-center justify-center text-[#E4202C] shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-left text-xs">
                <div className="font-bold text-white font-heading">Turnkey Engineering</div>
                <div className="text-slate-300">Panels, BACnet IP networks, and custom Trend/Niagara programming.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNER LOGO STRIP (Trend, Tridium, Siemens, Schneider, Johnson Controls) */}
      <section className="py-8 bg-white border-y border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-[#4A5A70] font-heading mb-6">
            Approved System Integrators & Technology Partners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
            {PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-[#DCE3EC]/60 bg-[#F6F4EE]/40 hover:bg-white hover:border-[#1F4E9E]/40 hover:shadow-sm transition-all text-center group"
              >
                <span className="font-heading font-extrabold text-[#0B1F3A] text-base group-hover:text-[#1F4E9E] transition-colors">
                  {partner.name}
                </span>
                <span className="text-[11px] text-[#4A5A70] mt-0.5 font-medium">
                  {partner.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMMITMENT TO SUSTAINABLE ENERGY */}
      <section className="py-16 md:py-24 bg-[#EAF0F7]/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4BA82E] font-heading mb-2 inline-block">
              ENGINEERING FOR NET ZERO
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Our Commitment to Sustainable Energy
            </h2>
            <p className="type-p1 text-[#4A5A70] mt-5 leading-relaxed">
              Energy efficiency is the cornerstone of a sustainable future. We engineer turnkey Building Energy Management Systems (BEMS) to optimise building performance, drastically reduce carbon footprints, and ensure long-term operational resilience across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* 4. STATS ROW */}
      <section className="py-14 bg-white border-y border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-4">
                <span className="type-h2 font-extrabold text-[#0B1F3A] font-heading tabular-nums">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-[#1F4E9E] mt-1 font-heading">
                  {stat.label}
                </span>
                <span className="text-xs text-[#4A5A70] mt-1">
                  {stat.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY IMPACT (4 cards) */}
      <section className="py-20 md:py-28 bg-[#F6F4EE]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              THE IMPACT ADVANTAGE
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Why Organisations Choose Impact Control Systems
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              Reliable, engineering-first BMS solutions backed by 35 years of UK delivery experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_IMPACT.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-[24px] border border-[#DCE3EC] shadow-sm hover:shadow-md hover:border-[#1F4E9E]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF0F7] flex items-center justify-center mb-6">
                    {getWhyIcon(item.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] font-heading leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4A5A70] mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES GRID (5 cards opening the modal) */}
      <section className="py-20 md:py-28 bg-white border-t border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
                END-TO-END CAPABILITIES
              </span>
              <h2 className="type-h2 text-[#0B1F3A] font-heading">
                Comprehensive BEMS Services
              </h2>
              <p className="type-p2 text-[#4A5A70] mt-3">
                From specification and panel manufacturing through to cloud hosting and proactive seasonal maintenance.
              </p>
            </div>
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1F4E9E] hover:text-[#0B1F3A] transition-colors self-start md:self-end"
            >
              <span>View full service details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-[#F6F4EE] rounded-[24px] p-7 border border-[#DCE3EC] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-[#DCE3EC] shadow-sm">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-xs font-bold text-[#1F4E9E] font-heading tracking-wider uppercase">
                      Specialist
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F3A] font-heading group-hover:text-[#1F4E9E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4A5A70] mt-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#DCE3EC]">
                  <button
                    onClick={() => openServiceModal(service.id)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#E4202C] hover:text-[#c81924] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4202C] rounded-lg"
                  >
                    <span>Find out more</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}

            {/* Turnkey Assurance Card */}
            <div className="bg-[#0B1F3A] text-white rounded-[24px] p-7 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4BA82E] font-heading">
                  Tailored Specification
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-2">
                  Need a Bespoke BMS Strategy?
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Our regional project directors conduct on-site surveys to assess your existing controls, occupancy patterns, and decarbonisation requirements.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-sm font-semibold py-2.5 px-4 rounded-full transition-colors"
                >
                  <span>Request Technical Survey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PLATFORM SHOWCASE ("Your whole building. One clear view.") */}
      <section className="py-20 md:py-28 bg-[#F6F4EE]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              CLOUD GRAPHICS & TELEMETRY
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Your Whole Building. One Clear View.
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              Interactive HTML5 graphics deliver real-time temperatures, chiller loads, and alarm notifications from any web browser without dedicated on-site server hardware.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl rounded-[24px] overflow-hidden shadow-2xl border border-[#DCE3EC] bg-white">
            <img
              src={COMPANY_INFO.images.dashboardMockup}
              alt="BMS graphics dashboard display showing 3D commercial floor plan, HVAC telemetry, energy consumption chart, and alarm list"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Small stat row under dashboard */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-2xl border border-[#DCE3EC] text-center shadow-sm">
              <div className="text-2xl font-extrabold text-[#0B1F3A] font-heading tabular-nums">28.4%</div>
              <div className="text-xs text-[#4A5A70] mt-1 font-medium">Avg. Energy Waste Reduction [CONFIRM]</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#DCE3EC] text-center shadow-sm">
              <div className="text-2xl font-extrabold text-[#0B1F3A] font-heading tabular-nums">99.8%</div>
              <div className="text-xs text-[#4A5A70] mt-1 font-medium">Cloud Supervisor Uptime SLA</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#DCE3EC] text-center shadow-sm">
              <div className="text-2xl font-extrabold text-[#0B1F3A] font-heading tabular-nums">0.5s</div>
              <div className="text-xs text-[#4A5A70] mt-1 font-medium">Real-Time Data Refresh Rate</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#DCE3EC] text-center shadow-sm">
              <div className="text-2xl font-extrabold text-[#0B1F3A] font-heading tabular-nums">100%</div>
              <div className="text-xs text-[#4A5A70] mt-1 font-medium">Open Protocol Compliance (BACnet)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROCESS (4 steps) */}
      <section className="py-20 md:py-28 bg-white border-t border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              PROVEN ENGINEERING METHODOLOGY
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              How We Deliver Turnkey BEMS
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              A disciplined, phased engineering process that guarantees project milestones, safety compliance, and maximum energy savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-[#F6F4EE] p-7 rounded-[24px] border border-[#DCE3EC] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#1F4E9E]/20 font-heading block mb-4 tabular-nums">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1F3A] font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5A70] mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTORS SERVED */}
      <section className="py-20 md:py-28 bg-[#EAF0F7]/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              UK ESTATE SPECIALISMS
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Sectors We Serve
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              Decades of experience delivering mission-critical environmental controls across varied operational estates.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SECTORS.map((sec) => (
              <div
                key={sec.id}
                className="bg-white p-5 rounded-2xl border border-[#DCE3EC] shadow-sm text-center flex flex-col items-center justify-start hover:border-[#1F4E9E]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF0F7] flex items-center justify-center text-[#1F4E9E] mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1F3A] font-heading leading-tight mb-1">
                  {sec.title}
                </h4>
                <p className="text-[11px] text-[#4A5A70] leading-tight mt-1">
                  {sec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ACCREDITATIONS & INDUSTRY STANDARDS */}
      <section className="py-14 bg-white border-y border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#4A5A70] font-heading">
              Accreditations & Industry Certifications <span className="text-amber-600 font-normal">[REPLACE WITH CLIENT LOGOS]</span>
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'BCIA Member', desc: 'Building Controls Industry Assoc.' },
              { name: 'Trend Integrator', desc: 'Approved System Centre' },
              { name: 'Tridium Certified', desc: 'Niagara TCP Partner' },
              { name: 'SafeContractor', desc: 'Health & Safety Accredited' },
              { name: 'Constructionline', desc: 'Gold Standard Member' },
              { name: 'ISO 9001', desc: 'Quality Management Certified' },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-dashed border-[#DCE3EC] bg-[#F6F4EE]/60 text-center flex flex-col items-center justify-center"
              >
                <Award className="w-6 h-6 text-[#1F4E9E] mb-1.5 opacity-80" />
                <span className="text-xs font-bold text-[#0B1F3A] font-heading">{badge.name}</span>
                <span className="text-[10px] text-[#4A5A70]">{badge.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIAL (Marked [PLACEHOLDER] as requested) */}
      <section className="py-20 md:py-24 bg-[#F6F4EE]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[24px] p-8 sm:p-12 border border-[#DCE3EC] shadow-sm relative">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E4202C] font-heading mb-4 inline-block">
              CLIENT TESTIMONIAL <span className="text-amber-600 font-normal">[PLACEHOLDER - CONFIRM WITH CLIENT]</span>
            </span>

            <blockquote className="type-h3 text-[#0B1F3A] font-heading font-semibold leading-relaxed">
              "Impact Control Systems delivered a seamless live retrofit across our commercial estate with zero disruption to tenants. Their turnkey approach, from panel manufacture through to dedicated maintenance, has cut our annual heating and cooling spend by over 24%."
            </blockquote>

            <div className="mt-8 pt-6 border-t border-[#DCE3EC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-heading font-extrabold text-[#0B1F3A] text-base">
                  Director of Estates & Sustainability
                </div>
                <div className="text-xs text-[#4A5A70]">
                  Major UK Commercial Property Portfolio [CONFIRM WITH CLIENT]
                </div>
              </div>
              <div className="text-xs font-bold text-[#1F4E9E] font-heading bg-[#EAF0F7] px-3 py-1.5 rounded-full self-start sm:self-auto">
                Verified BEMS Client
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA BAND (Navy) */}
      <section className="py-20 md:py-24 bg-[#0B1F3A] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="type-h2 text-white font-heading max-w-2xl mx-auto">
            Ready to Improve Your Building Performance?
          </h2>
          <p className="type-p1 text-slate-300 mt-4 max-w-xl mx-auto leading-relaxed">
            Speak directly with our technical team in Liverpool, Leeds, or London to discuss your project requirements or request an initial plant survey.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:01512542658"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-base font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-all"
            >
              <span>Call 0151 254 2658</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
