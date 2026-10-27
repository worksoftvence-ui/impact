import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SERVICES } from '../data/siteData';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Building2, RefreshCw, LineChart, Layers } from 'lucide-react';

export const ServiceModal: React.FC = () => {
  const { activeServiceModal, closeServiceModal, navigate } = useNavigation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeServiceModal();
      }
    };
    if (activeServiceModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeServiceModal, closeServiceModal]);

  if (!activeServiceModal) return null;

  const service = SERVICES.find((s) => s.id === activeServiceModal);
  if (!service) return null;

  const handleStartNow = () => {
    closeServiceModal();
    navigate('/contact');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#08162B]/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={closeServiceModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#F6F4EE] rounded-[24px] shadow-2xl border border-[#DCE3EC] p-6 sm:p-8 md:p-10 my-auto max-h-[90vh] overflow-y-auto focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeServiceModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#4A5A70] hover:text-[#0B1F3A] hover:bg-slate-200/60 shadow-sm border border-[#DCE3EC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E9E]"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F4E9E] mb-2 font-heading">
            <Layers className="w-4 h-4" />
            <span>Specialist BEMS Service</span>
          </div>
          <h2
            id="service-modal-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] font-heading tracking-tight"
          >
            {service.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg font-medium text-[#1F4E9E]">
            {service.tagline}
          </p>
          <p className="mt-4 text-sm sm:text-base text-[#4A5A70] leading-relaxed">
            {service.fullIntro}
          </p>
        </div>

        {/* What's Included: 2-Column Icon Rows */}
        <div className="mt-8 pt-8 border-t border-[#DCE3EC]">
          <h3 className="text-lg font-bold text-[#0B1F3A] font-heading mb-6 flex items-center gap-2">
            <span>What's Included in This Service</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#DCE3EC] shadow-sm flex flex-col justify-start gap-2 hover:border-[#1F4E9E]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#1F4E9E]/10 text-[#1F4E9E] flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-[#0B1F3A] font-heading">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#4A5A70] leading-relaxed pl-8">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Checklist */}
        <div className="mt-8 pt-8 border-t border-[#DCE3EC]">
          <h3 className="text-lg font-bold text-[#0B1F3A] font-heading mb-4">
            Key Operational & Financial Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-[#EAF0F7]/60 p-3.5 rounded-xl border border-[#DCE3EC]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#4BA82E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#0B1F3A] font-medium leading-normal">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-8 pt-6 border-t border-[#DCE3EC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#4A5A70] text-center sm:text-left">
            <span>Need advice for your specific building or portfolio? </span>
            <span className="block sm:inline font-semibold text-[#0B1F3A]">Our engineers provide turnkey UK proposals.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={closeServiceModal}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full border border-[#DCE3EC] bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-[#4A5A70] transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleStartNow}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Start Now · Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
