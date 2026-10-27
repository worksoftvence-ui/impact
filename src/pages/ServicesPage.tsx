import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SERVICES, PROCESS_STEPS, FAQS, COMPANY_INFO } from '../data/siteData';
import { ServiceId } from '../types';
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Building2,
  RefreshCw,
  ShieldCheck,
  MonitorDot,
  LineChart,
  CheckCircle2,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { openServiceModal, navigate } = useNavigation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const getServiceIcon = (id: ServiceId) => {
    switch (id) {
      case 'new-install':
        return <Building2 className="w-7 h-7 text-[#1F4E9E]" />;
      case 'upgrades-retrofit':
        return <RefreshCw className="w-7 h-7 text-[#1F4E9E]" />;
      case 'maintenance':
        return <ShieldCheck className="w-7 h-7 text-[#1F4E9E]" />;
      case 'remote-graphics':
        return <MonitorDot className="w-7 h-7 text-[#1F4E9E]" />;
      case 'energy-management':
        return <LineChart className="w-7 h-7 text-[#4BA82E]" />;
      default:
        return <Building2 className="w-7 h-7 text-[#1F4E9E]" />;
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* 1. HERO & INTRO */}
      <section className="pt-14 md:pt-20 pb-16 bg-[#F6F4EE] border-b border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              SPECIALIST BEMS CAPABILITIES
            </span>
            <h1 className="type-h1 text-[#0B1F3A] font-heading tracking-tight">
              Building Energy Management Solutions
            </h1>
            <p className="type-p1 text-[#4A5A70] mt-5 leading-relaxed">
              Impact Control Systems delivers high-performance Building Energy Management Solutions that integrate technical superiority with unmatched efficiency. We offer a full range of BMS services from tender stage right through to project handover, planned and reactive maintenance and energy management.
            </p>
          </div>
        </div>
      </section>

      {/* 2. 5 LARGE SERVICE CARDS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Our Five Core Service Pillars
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              Click any service below to explore full engineering specifications, inclusions, and client benefits.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  className={`bg-[#F6F4EE] rounded-[24px] border border-[#DCE3EC] p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col ${
                    isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } gap-8 items-center`}
                >
                  {/* Visual Preview / Image (5 cols) */}
                  <div className="w-full lg:w-5/12 shrink-0">
                    <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#DCE3EC] aspect-[4/3] bg-white group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-2.5 shadow-sm border border-[#DCE3EC]">
                        {getServiceIcon(service.id)}
                      </div>
                    </div>
                  </div>

                  {/* Content & Action (7 cols) */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#1F4E9E] font-heading uppercase tracking-wider mb-2 inline-block">
                        Service Pillar 0{index + 1}
                      </span>
                      <h3 className="type-h3 text-[#0B1F3A] font-heading">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-[#1F4E9E] mt-1 font-heading">
                        {service.tagline}
                      </p>
                      <p className="text-sm sm:text-base text-[#4A5A70] mt-4 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Benefits Teaser */}
                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#0B1F3A]">
                        {service.benefits.slice(0, 4).map((b, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#4BA82E] shrink-0" />
                            <span className="truncate">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#DCE3EC] flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => openServiceModal(service.id)}
                        className="inline-flex items-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow transition-all"
                      >
                        <span>View Full Service Scope</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => navigate('/contact')}
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#0B1F3A] text-sm font-semibold px-5 py-3 rounded-full border border-[#DCE3EC] transition-colors"
                      >
                        <span>Request Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. "HOW WE WORK" PROCESS STRIP */}
      <section className="py-20 md:py-24 bg-[#EAF0F7]/50 border-t border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              CONSISTENT DELIVERY
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Our Turnkey Engineering Process
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              Every project is managed with clear milestones, documented quality checks, and client collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-[24px] border border-[#DCE3EC] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1F4E9E]/10 text-[#1F4E9E] flex items-center justify-center font-heading font-extrabold text-base mb-4 tabular-nums">
                    {step.step}
                  </div>
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

      {/* 4. FAQ ACCORDION (5 questions) */}
      <section className="py-20 md:py-28 bg-white border-t border-[#DCE3EC]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              COMMON QUESTIONS
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Frequently Asked Questions
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              Clear answers regarding building controls, energy management, protocols, and maintenance contracts.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#DCE3EC] bg-[#F6F4EE] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-[#0B1F3A] hover:text-[#1F4E9E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E9E]"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#1F4E9E] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-[#4A5A70] leading-relaxed border-t border-[#DCE3EC]/60 pt-4 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA BAND */}
      <section className="py-20 md:py-24 bg-[#0B1F3A] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="type-h2 text-white font-heading max-w-2xl mx-auto">
            Discuss Your Building Controls Project
          </h2>
          <p className="type-p1 text-slate-300 mt-4 max-w-xl mx-auto leading-relaxed">
            Whether you require a new installation tender, a live retrofit survey, or ongoing PPM support, our engineering team is ready to assist.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:01512542658"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-base font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-all"
            >
              <span>Speak to an Engineer</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
