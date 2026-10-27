import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { VACANCIES, COMPANY_INFO } from '../data/siteData';
import { PageRoute } from '../types';
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Send,
  Zap,
  Leaf,
  Users,
  TrendingUp,
  AlertCircle,
  ChevronRight
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const { navigate } = useNavigation();

  const handleViewJob = (slug: string) => {
    navigate(`/careers/${slug}` as PageRoute);
  };

  const WHY_WORK_WITH_US = [
    {
      title: 'Leading Technologies',
      description: 'Work with the latest hardware and software from Trend, Tridium Niagara, Siemens, and Schneider Electric on cutting-edge commercial projects.',
      icon: Zap
    },
    {
      title: 'Sustainability Impact',
      description: 'Make a tangible difference in the UK’s race to Net Zero by engineering buildings that eliminate thousands of tonnes of carbon emissions annually.',
      icon: Leaf
    },
    {
      title: 'Close-Knit Expert Team',
      description: 'Join an experienced, supportive engineering family where you are recognized as an individual rather than a number in a sprawling corporate hierarchy.',
      icon: Users
    },
    {
      title: 'Real Career Growth',
      description: 'Direct mentorship from company directors, funded manufacturer certifications, and structured routes to senior project leadership.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="pt-14 md:pt-20 pb-16 bg-[#F6F4EE] border-b border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              JOIN OUR ENGINEERING TEAM
            </span>
            <h1 className="type-h1 text-[#0B1F3A] font-heading tracking-tight">
              Build Your Career with Impact
            </h1>
            <p className="type-p1 text-[#4A5A70] mt-5 leading-relaxed">
              Working with us means being part of a close-knit business where people genuinely matter. We're a focused team, which means your contribution is seen, valued and makes a real difference to the efficiency of commercial buildings across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CURRENT VACANCIES (4 cards) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
                OPEN OPPORTUNITIES
              </span>
              <h2 className="type-h2 text-[#0B1F3A] font-heading">
                Current Vacancies
              </h2>
              <p className="type-p2 text-[#4A5A70] mt-2">
                Click any position to review detailed responsibilities, technical requirements, and benefits.
              </p>
            </div>

            {/* Note on overseas sponsorship */}
            <div className="bg-[#EAF0F7] p-3.5 rounded-xl border border-[#DCE3EC] flex items-center gap-2.5 text-xs text-[#0B1F3A] max-w-md">
              <AlertCircle className="w-4 h-4 text-[#1F4E9E] shrink-0" />
              <span>
                <strong>Important Note:</strong> We are unable to sponsor overseas candidates at this time.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VACANCIES.map((job) => (
              <div
                key={job.id}
                className="bg-[#F6F4EE] rounded-[24px] p-7 border border-[#DCE3EC] shadow-sm hover:shadow-md hover:border-[#1F4E9E]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F4E9E] font-heading bg-white px-3 py-1 rounded-full border border-[#DCE3EC]">
                      <MapPin className="w-3.5 h-3.5 text-[#E4202C]" />
                      <span>{job.location}</span>
                    </span>
                    <span className="text-xs text-[#4A5A70] font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{job.type}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B1F3A] font-heading mt-2">
                    {job.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#4A5A70] mt-1">
                    {job.salary}
                  </p>
                  <p className="text-sm text-[#4A5A70] mt-4 leading-relaxed">
                    {job.shortDescription}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#DCE3EC] flex items-center justify-between">
                  <span className="text-xs text-[#4A5A70]">Full spec available</span>
                  <button
                    onClick={() => handleViewJob(job.slug)}
                    className="inline-flex items-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
                  >
                    <span>View Role</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY WORK WITH US (4 Pillars) */}
      <section className="py-20 md:py-28 bg-[#F6F4EE] border-t border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              CULTURE & VALUES
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Why Work With Impact?
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              We provide the autonomy, tools, and respect that professional controls engineers deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_WORK_WITH_US.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-[24px] border border-[#DCE3EC] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF0F7] flex items-center justify-center text-[#1F4E9E] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4A5A70] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SPECULATIVE APPLICATION / SEND CV */}
      <section className="py-20 md:py-24 bg-white border-t border-[#DCE3EC]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#EAF0F7]/60 p-8 sm:p-12 rounded-[24px] border border-[#DCE3EC]">
            <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Send className="w-6 h-6 text-white" />
            </div>

            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Experienced BMS Engineer?
            </h2>
            <p className="type-p1 text-[#4A5A70] mt-4 max-w-xl mx-auto leading-relaxed">
              We welcome interest from experienced BMS engineers, commissioning technicians, and project managers at any time. Send your CV in strict confidence to our leadership team.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${COMPANY_INFO.contacts.careersEmail}?subject=BMS%20Career%20Enquiry%20-%20Impact%20Control%20Systems`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Email Your CV in Confidence</span>
              </a>
              <a
                href="tel:01512542658"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0B1F3A] text-base font-semibold px-7 py-3.5 rounded-full border border-[#DCE3EC] shadow-sm transition-colors"
              >
                <span>Call Recruitment Team</span>
              </a>
            </div>

            <div className="mt-6 text-xs text-[#4A5A70]">
              Email directly to: <span className="font-semibold text-[#0B1F3A]">careers@impactcontrols.co.uk</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
