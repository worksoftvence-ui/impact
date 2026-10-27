import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { COMPANY_INFO, SERVICES } from '../data/siteData';
import { PageRoute, ServiceId } from '../types';
import { Mail, Phone, MapPin, ExternalLink, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, openServiceModal } = useNavigation();

  const handleNav = (route: PageRoute) => {
    navigate(route);
  };

  const handleServiceClick = (id: ServiceId) => {
    navigate('/services');
    openServiceModal(id);
  };

  return (
    <footer className="bg-[#08162B] text-white pt-16 md:pt-24 pb-12 overflow-hidden border-t border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Blurb (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_INFO.images.logo}
                alt="Impact Control Systems Ltd"
                className="h-10 w-auto bg-white/10 p-1 rounded backdrop-blur-sm"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-white text-xl tracking-tight leading-none">
                  IMPACT
                </span>
                <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">
                  Control Systems Ltd
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Delivering turnkey Building Energy Management Systems (BEMS) across the UK since 1991. We engineer smarter, sustainable environments that lower operating costs, eliminate energy waste, and maintain total occupant comfort.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={COMPANY_INFO.contacts.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#1F4E9E] text-xs font-medium text-white transition-colors duration-200"
                aria-label="Connect with Impact Control Systems on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>Follow on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/about')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  About Us & Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  BEMS Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/careers')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Careers & Vacancies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contact')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Contact & Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: BEMS Services (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Specialist Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleServiceClick(s.id)}
                    className="hover:text-white hover:underline transition-colors text-left flex items-center justify-between group w-full"
                  >
                    <span>{s.title}</span>
                    <span className="text-xs text-[#E4202C] opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Regional Offices & Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Regional Offices
            </h4>
            
            <div className="flex flex-col gap-3 text-xs text-slate-300">
              {/* Liverpool */}
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E4202C]" />
                  <span>Head Office (Liverpool)</span>
                </div>
                <p className="mt-1 text-slate-300">16 Tapton Way, Liverpool L13 1DA</p>
                <div className="mt-1 flex items-center gap-3">
                  <a href="tel:01512542658" className="hover:text-white text-sky-400 font-medium">0151 254 2658</a>
                </div>
              </div>

              {/* Leeds */}
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1F4E9E]" />
                  <span>Leeds Office (Yorkshire)</span>
                </div>
                <p className="mt-1 text-slate-300">3 Howley Park Business Village, Morley LS27 0BZ</p>
                <div className="mt-1 flex items-center gap-3">
                  <a href="tel:01132049111" className="hover:text-white text-sky-400 font-medium">0113 204 9111</a>
                </div>
              </div>

              {/* London */}
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#4BA82E]" />
                  <span>London Office <span className="text-[10px] text-amber-300 bg-amber-500/20 px-1 py-0.5 rounded font-normal">[CONFIRM ADDRESS]</span></span>
                </div>
                <p className="mt-1 text-slate-300">London & South East Regional Team</p>
                <p className="text-slate-400 text-[11px]">Enquiries via Head Office</p>
              </div>

              <div className="pt-1 flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href="mailto:admin@impactcontrols.co.uk" className="hover:text-white">
                  admin@impactcontrols.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Oversized Brand Wordmark (matching reference mockup aesthetic) */}
        <div className="py-8 md:py-12 select-none pointer-events-none text-center overflow-hidden">
          <span className="font-heading font-black tracking-tighter text-[16vw] leading-none text-white/[0.04] block whitespace-nowrap">
            IMPACT
          </span>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Impact Control Systems Ltd. All rights reserved. Registered in England & Wales.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Prepared for Wix Studio Rebuild</span>
            <span>·</span>
            <span>Est. 1991</span>
            <span>·</span>
            <span>ISO 9001 Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
