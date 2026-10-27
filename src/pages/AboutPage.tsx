import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { COMPANY_INFO, TEAM_MEMBERS, PARTNERS, OFFICES } from '../data/siteData';
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Leaf,
  Award,
  Building,
  Calendar,
  CheckCircle2,
  MapPin,
  Sparkles
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation();

  const TIMELINE_MILESTONES = [
    {
      year: '1991',
      title: 'Company Founded in Liverpool',
      description: 'Impact Control Systems established to provide specialist Building Energy Management System services to commercial and public sector clients across the UK.'
    },
    {
      year: '2001',
      title: 'Dedicated Maintenance Division Launched',
      description: 'Expanded operations with a dedicated in-house maintenance division providing scheduled PPM, seasonal energy tuning, and reactive callouts. [CONFIRM YEAR WITH CLIENT]'
    },
    {
      year: '2012',
      title: 'Yorkshire Regional Expansion (Leeds)',
      description: 'Opened our regional operations office in Morley, Leeds to support expanding project delivery across Yorkshire and the North East. [CONFIRM YEAR WITH CLIENT]'
    },
    {
      year: '2019',
      title: 'Cloud Graphics & Remote Diagnostics Rollout',
      description: 'Pioneered secure cloud-hosted BMS graphics, removing on-site server hardware constraints and providing multi-site portfolio visibility. [CONFIRM YEAR WITH CLIENT]'
    },
    {
      year: 'Present',
      title: '35 Years of Turnkey BEMS Excellence',
      description: 'Operating across three key regional hubs (Liverpool, Leeds, London) with an experienced multi-disciplinary engineering team leading UK commercial decarbonisation.'
    }
  ];

  const VALUES = [
    {
      title: 'Reliability',
      description: 'We build systems designed to operate flawlessly for decades, with robust in-house maintenance and support you can count on.',
      icon: ShieldCheck,
      color: 'text-[#1F4E9E]'
    },
    {
      title: 'Partnership',
      description: 'We believe in long-term relationships with clients, consultants, and suppliers, acting as trusted technical custodians of your building plant.',
      icon: Users,
      color: 'text-[#1F4E9E]'
    },
    {
      title: 'Sustainability',
      description: 'Engineering real, measurable energy reduction is at the heart of our mission, lowering carbon emissions and supporting UK Net Zero targets.',
      icon: Leaf,
      color: 'text-[#4BA82E]'
    },
    {
      title: 'Technical Excellence',
      description: 'Certified in leading open platforms (Trend, Tridium, Siemens, Schneider), our engineers master complex HVAC systems and smart telemetry.',
      icon: Award,
      color: 'text-[#1F4E9E]'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="pt-14 md:pt-20 pb-16 bg-[#F6F4EE] border-b border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              ABOUT OUR COMPANY
            </span>
            <h1 className="type-h1 text-[#0B1F3A] font-heading tracking-tight">
              About Impact Control Systems
            </h1>
            <p className="type-p1 text-[#4A5A70] mt-5 leading-relaxed">
              Impact Control Systems provide Building Energy Management System services to all sectors across the UK. We are partnered with Trend, Tridium, Siemens, Schneider and Johnson Controls.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE IMPACT STORY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading">
                OUR HERITAGE & MISSION
              </span>
              <h2 className="type-h2 text-[#0B1F3A] font-heading">
                Turnkey Engineering, Proven Reliability
              </h2>
              
              <div className="text-base text-[#4A5A70] leading-relaxed space-y-4">
                <p>
                  Since 1991, Impact Control Systems has been a premier provider of turnkey BEMS. We manage the entire lifecycle from tendering to installation and commissioning, ensuring high performance and reliability.
                </p>
                <p>
                  Our dedicated maintenance division provides expert after-care to extend infrastructure life, while our cloud-based interface delivers interactive data insights to help your organisation boost sustainability, cut operational costs and improve comfort.
                </p>
                <p className="font-medium text-[#0B1F3A]">
                  With established offices in Liverpool, Leeds, and London, our large experienced team fosters long-term relationships with clients and suppliers. We work with high-profile clients across healthcare, commercial offices, education, and industry who expect the highest level of technical service.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-[#F6F4EE] p-4 rounded-2xl border border-[#DCE3EC]">
                  <div className="text-2xl font-extrabold text-[#0B1F3A] font-heading">1991</div>
                  <div className="text-xs text-[#4A5A70] mt-0.5">Founded in Liverpool, UK</div>
                </div>
                <div className="bg-[#F6F4EE] p-4 rounded-2xl border border-[#DCE3EC]">
                  <div className="text-2xl font-extrabold text-[#0B1F3A] font-heading">3 Hubs</div>
                  <div className="text-xs text-[#4A5A70] mt-0.5">Liverpool · Leeds · London</div>
                </div>
              </div>
            </div>

            {/* Visual Asset (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-[24px] overflow-hidden shadow-xl border border-[#DCE3EC] bg-[#F6F4EE]">
                <img
                  src={COMPANY_INFO.images.plantRoom}
                  alt="Modern commercial plant room engineered by Impact Control Systems"
                  className="w-full h-[440px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-20 md:py-28 bg-[#F6F4EE] border-t border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Our Core Company Values
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              The values that define every installation, maintenance contract, and client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-[24px] border border-[#DCE3EC] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF0F7] flex items-center justify-center mb-6">
                    <Icon className={`w-6 h-6 ${val.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] font-heading mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#4A5A70] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COMPANY TIMELINE (1991 to Present) */}
      <section className="py-20 md:py-28 bg-white border-t border-[#DCE3EC]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              35 YEARS OF HERITAGE
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Our Journey Since 1991
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              Key milestones in our growth into one of the UK's premier independent BEMS specialists.
            </p>
          </div>

          <div className="relative border-l-2 border-[#DCE3EC] ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
            {TIMELINE_MILESTONES.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Year Marker on Left for desktop */}
                <div className="hidden md:block absolute -left-40 top-0 w-28 text-right font-heading font-extrabold text-xl text-[#1F4E9E] tabular-nums">
                  {item.year}
                </div>

                {/* Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#1F4E9E] group-hover:scale-125 transition-transform" />

                <div className="bg-[#F6F4EE] p-6 rounded-2xl border border-[#DCE3EC]">
                  <span className="md:hidden inline-block text-xs font-bold text-[#1F4E9E] font-heading uppercase mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1F3A] font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4A5A70] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET THE TEAM */}
      <section className="py-20 md:py-28 bg-[#F6F4EE] border-t border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              LEADERSHIP & EXPERTISE
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Meet the Leadership Team
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              Hands-on engineering leaders with extensive field experience across major UK commercial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-7 border border-[#DCE3EC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Photo Placeholder / Avatar (as specified in brief) */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center font-heading font-extrabold text-xl mb-6 shadow-sm border border-slate-700">
                    {member.initials}
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#1F4E9E] mt-1 font-heading min-h-[32px]">
                    {member.role}
                  </div>
                  <p className="text-xs text-[#4A5A70] mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE3EC] flex items-center justify-between text-[11px] text-[#4A5A70]">
                  <span>Photo placeholder [CLIENT]</span>
                  <span className="text-[#1F4E9E] font-semibold">Impact Leadership</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REGIONAL OFFICES OVERVIEW */}
      <section className="py-20 md:py-24 bg-white border-t border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              NATIONWIDE FOOTPRINT
            </span>
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Three Regional Operations Hubs
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-3">
              Strategic offices positioned to deliver rapid service response and engineering support across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="bg-[#F6F4EE] rounded-[24px] p-7 border border-[#DCE3EC] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-[#E4202C]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E9E] font-heading">
                      {office.name}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] font-heading">
                    {office.tag}
                  </h3>
                  <p className="text-sm text-[#4A5A70] mt-3">
                    {office.address}
                    <br />
                    {office.postalCode}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE3EC] flex flex-col gap-1 text-xs">
                  <div className="font-medium text-[#0B1F3A]">Tel: {office.phone}</div>
                  <div className="text-[#4A5A70]">{office.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BAND */}
      <section className="py-20 md:py-24 bg-[#0B1F3A] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="type-h2 text-white font-heading max-w-2xl mx-auto">
            Partner With Our BEMS Engineering Team
          </h2>
          <p className="type-p1 text-slate-300 mt-4 max-w-xl mx-auto leading-relaxed">
            Discover how 35 years of building controls expertise can transform your facility's energy performance and reliability.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-base font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-all"
            >
              <span>Explore All Services</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
