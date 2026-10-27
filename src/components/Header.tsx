import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { COMPANY_INFO } from '../data/siteData';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { PageRoute } from '../types';

export const Header: React.FC = () => {
  const { currentRoute, navigate } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Careers', route: '/careers' },
    { label: 'Contact', route: '/contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    navigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6F4EE]/95 backdrop-blur-md shadow-sm border-b border-[#DCE3EC]'
          : 'bg-[#F6F4EE]/90 backdrop-blur-sm border-b border-[#DCE3EC]/60'
      }`}
    >
      {/* Top micro-bar for quick phone access */}
      <div className="bg-[#0B1F3A] text-white py-1.5 px-4 text-xs">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-300">
            <span>Specialist BEMS Engineering Across the UK</span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="hidden sm:inline">Liverpool · Leeds · London</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:01512542658"
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E4202C]" />
              <span className="font-medium">0151 254 2658</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand / Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E9E] rounded-lg p-1"
          aria-label="Impact Control Systems Home"
        >
          <img
            src={COMPANY_INFO.images.logo}
            alt="Impact Control Systems Ltd"
            className="h-10 sm:h-12 w-auto object-contain rounded"
            onError={(e) => {
              // Graceful fallback if image doesn't render
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="hidden min-[480px]:flex flex-col">
            <span className="font-heading font-extrabold text-[#0B1F3A] text-lg tracking-tight leading-none group-hover:text-[#1F4E9E] transition-colors">
              IMPACT
            </span>
            <span className="text-[11px] font-semibold text-[#4A5A70] tracking-wider uppercase leading-tight">
              Control Systems Ltd
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (hidden on <= 1000px) */}
        <nav className="hidden min-[1001px]:flex items-center gap-8 text-[15px] font-medium text-[#4A5A70]">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route || (item.route !== '/' && currentRoute.startsWith(item.route));
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`relative py-1 whitespace-nowrap transition-colors hover:text-[#0B1F3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E9E] rounded px-1 ${
                  isActive ? 'text-[#0B1F3A] font-semibold' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-[#E4202C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('/contact')}
            className="hidden sm:inline-flex items-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4202C] focus-visible:ring-offset-2"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Hamburger Menu Toggle (<= 1000px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[1001px]:hidden p-2.5 text-[#0B1F3A] hover:bg-slate-200/60 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E9E]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="min-[1001px]:hidden bg-[#F6F4EE] border-b border-[#DCE3EC] shadow-xl px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`flex items-center justify-between text-left py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-white text-[#0B1F3A] shadow-sm font-semibold'
                      : 'text-[#4A5A70] hover:bg-white/60 hover:text-[#0B1F3A]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#E4202C]" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#DCE3EC] flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full flex items-center justify-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white font-semibold py-3 px-6 rounded-full shadow-sm transition-colors"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-4 text-xs text-[#4A5A70] pt-1">
              <a href="tel:01512542658" className="hover:text-[#0B1F3A]">Tel: 0151 254 2658</a>
              <span>·</span>
              <a href="mailto:admin@impactcontrols.co.uk" className="hover:text-[#0B1F3A]">admin@impactcontrols.co.uk</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
