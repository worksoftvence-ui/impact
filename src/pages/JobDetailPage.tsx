import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { VACANCIES, COMPANY_INFO } from '../data/siteData';
import {
  ChevronLeft,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Mail,
  Phone,
  Briefcase
} from 'lucide-react';

interface JobDetailPageProps {
  jobSlug: string;
}

export const JobDetailPage: React.FC<JobDetailPageProps> = ({ jobSlug }) => {
  const { navigate } = useNavigation();

  const job = VACANCIES.find((j) => j.slug === jobSlug) || VACANCIES[0];

  const emailSubject = encodeURIComponent(`Application for ${job.title} (${job.location})`);
  const emailBody = encodeURIComponent(
    `Dear Impact Control Systems Recruitment Team,\n\nI am writing to apply for the position of ${job.title} based in ${job.location}.\n\nPlease find attached my CV for your consideration.\n\nKind regards,\n[Your Name]\n[Your Phone Number]`
  );
  const mailtoLink = `mailto:${COMPANY_INFO.contacts.careersEmail}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="w-full bg-[#F6F4EE] pb-24">
      {/* 1. BREADCRUMB & HEADER */}
      <section className="pt-8 pb-12 bg-white border-b border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-[#4A5A70] mb-6">
            <button
              onClick={() => navigate('/')}
              className="hover:text-[#0B1F3A] hover:underline transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => navigate('/careers')}
              className="hover:text-[#0B1F3A] hover:underline transition-colors"
            >
              Careers
            </button>
            <span>/</span>
            <span className="text-[#0B1F3A] font-semibold truncate max-w-xs">{job.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F4E9E] font-heading bg-[#EAF0F7] px-3 py-1 rounded-full border border-[#DCE3EC]">
                  <MapPin className="w-3.5 h-3.5 text-[#E4202C]" />
                  <span>{job.location}</span>
                </span>
                <span className="text-xs font-semibold text-[#4A5A70] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{job.type}</span>
                </span>
                <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {job.salary}
                </span>
              </div>

              <h1 className="type-h2 text-[#0B1F3A] font-heading tracking-tight">
                {job.title}
              </h1>
            </div>

            <button
              onClick={() => navigate('/careers')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F4E9E] hover:text-[#0B1F3A] self-start md:self-center"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to all vacancies</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN DETAIL GRID */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Overview */}
            <div className="bg-white p-7 sm:p-9 rounded-[24px] border border-[#DCE3EC] shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A] font-heading mb-4">
                Role Overview
              </h2>
              <p className="text-base text-[#4A5A70] leading-relaxed">
                {job.overview}
              </p>
            </div>

            {/* Responsibilities (Grouped Bullet Lists) */}
            <div className="bg-white p-7 sm:p-9 rounded-[24px] border border-[#DCE3EC] shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A] font-heading mb-6">
                Key Responsibilities & Duties
              </h2>

              <div className="flex flex-col gap-8">
                {job.responsibilities.map((group, idx) => (
                  <div key={idx} className="border-l-2 border-[#1F4E9E] pl-5">
                    <h3 className="text-base font-bold text-[#0B1F3A] font-heading mb-3">
                      {group.category}
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-sm text-[#4A5A70] flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E9E] shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidate Requirements */}
            <div className="bg-white p-7 sm:p-9 rounded-[24px] border border-[#DCE3EC] shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A] font-heading mb-4">
                Key Requirements & Qualifications
              </h2>
              <div className="flex flex-col gap-3">
                {job.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#0B1F3A]">
                    <CheckCircle2 className="w-5 h-5 text-[#1F4E9E] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Offer / Benefits */}
            <div className="bg-white p-7 sm:p-9 rounded-[24px] border border-[#DCE3EC] shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A] font-heading mb-4">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {job.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-[#F6F4EE] p-3.5 rounded-xl border border-[#DCE3EC] flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#0B1F3A]">
                    <CheckCircle2 className="w-4 h-4 text-[#4BA82E] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar / Apply Card (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
            <div className="bg-white p-7 rounded-[24px] border border-[#DCE3EC] shadow-md">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 block">
                APPLY FOR THIS ROLE
              </span>
              <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">
                Ready to Join Impact?
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5A70] mt-2 leading-relaxed">
                Send your CV and a brief introduction directly to our recruitment team.
              </p>

              <div className="mt-6 pt-6 border-t border-[#DCE3EC] flex flex-col gap-3">
                <a
                  href={mailtoLink}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-sm font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Apply via Email</span>
                </a>

                <a
                  href="tel:01512542658"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F6F4EE] hover:bg-[#EAF0F7] text-[#0B1F3A] text-xs font-semibold py-2.5 px-4 rounded-full border border-[#DCE3EC] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1F4E9E]" />
                  <span>Questions? Call 0151 254 2658</span>
                </a>
              </div>

              {/* Direct email display */}
              <div className="mt-5 p-3 rounded-xl bg-[#EAF0F7]/60 border border-[#DCE3EC] text-center text-xs text-[#4A5A70]">
                <span>Direct submissions to:</span>
                <div className="font-semibold text-[#0B1F3A] select-all mt-0.5">
                  careers@impactcontrols.co.uk
                </div>
              </div>

              {/* Sponsorship Notice */}
              <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 leading-tight">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Candidates must possess full, unrestricted legal rights to work in the UK. We cannot offer visa sponsorship at this time.
                </span>
              </div>
            </div>

            {/* Other Vacancies Quick Card */}
            <div className="bg-[#F6F4EE] p-6 rounded-[24px] border border-[#DCE3EC]">
              <h4 className="text-sm font-bold text-[#0B1F3A] font-heading mb-3">
                Explore Other Vacancies
              </h4>
              <div className="flex flex-col gap-2">
                {VACANCIES.filter((v) => v.slug !== job.slug).map((v) => (
                  <button
                    key={v.slug}
                    onClick={() => navigate(`/careers/${v.slug}` as any)}
                    className="text-left p-3 rounded-xl bg-white hover:bg-[#EAF0F7] border border-[#DCE3EC] transition-colors group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#0B1F3A] font-heading group-hover:text-[#1F4E9E]">
                        {v.title}
                      </div>
                      <div className="text-[11px] text-[#4A5A70]">{v.location}</div>
                    </div>
                    <span className="text-[#1F4E9E] text-xs font-bold">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
