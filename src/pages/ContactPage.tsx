import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { OFFICES, COMPANY_INFO } from '../data/siteData';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Building,
  ShieldCheck
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { navigate } = useNavigation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    facilityType: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const facilityOptions = [
    'Commercial Office',
    'Healthcare / NHS Facility',
    'Education Campus / University',
    'Retail / Shopping Centre',
    'Industrial / Manufacturing / Logistics',
    'Public Sector / Council Building',
    'Other Facility'
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.facilityType) errors.facilityType = 'Please select a facility type';
    if (!formData.message.trim()) errors.message = 'Please provide brief details of your enquiry';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call for lead submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      facilityType: '',
      message: '',
    });
    setFormErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="pt-14 md:pt-20 pb-16 bg-[#F6F4EE] border-b border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
              GET IN TOUCH
            </span>
            <h1 className="type-h1 text-[#0B1F3A] font-heading tracking-tight">
              Contact Us
            </h1>
            <p className="type-p1 text-[#4A5A70] mt-5 leading-relaxed">
              Speak to our technical team about your facility requirements and discover how our BEMS solutions can enhance your building performance, reduce energy overheads, and streamline operations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. REGIONAL OFFICE CARDS */}
      <section className="py-16 md:py-20 bg-white border-b border-[#DCE3EC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="type-h2 text-[#0B1F3A] font-heading">
              Our Regional Offices
            </h2>
            <p className="type-p2 text-[#4A5A70] mt-2">
              Strategically based across the UK to provide immediate on-site technical support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Liverpool */}
            <div className="bg-[#F6F4EE] rounded-[24px] p-7 border border-[#DCE3EC] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#E4202C]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E9E] font-heading">
                    National Headquarters
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">
                  Liverpool Office
                </h3>
                <p className="text-sm text-[#4A5A70] mt-3 leading-relaxed">
                  16 Tapton Way
                  <br />
                  Liverpool, L13 1DA
                </p>

                {/* Map Placeholder */}
                <div className="mt-4 rounded-xl overflow-hidden border border-[#DCE3EC] bg-white h-32 flex items-center justify-center text-xs text-[#4A5A70] relative group">
                  <div className="absolute inset-0 bg-[#0B1F3A]/5 group-hover:bg-[#0B1F3A]/10 transition-colors" />
                  <div className="flex items-center gap-1.5 z-10 font-medium">
                    <MapPin className="w-4 h-4 text-[#E4202C]" />
                    <span>Liverpool L13 1DA · Map Area</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#DCE3EC] flex flex-col gap-2 text-xs">
                <a
                  href="tel:01512542658"
                  className="font-bold text-[#0B1F3A] hover:text-[#1F4E9E] flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E4202C]" />
                  <span>Tel: 0151 254 2658</span>
                </a>
                <a
                  href="mailto:admin@impactcontrols.co.uk"
                  className="text-[#4A5A70] hover:text-[#0B1F3A] flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>admin@impactcontrols.co.uk</span>
                </a>
                <a
                  href="https://maps.google.com/?q=16+Tapton+Way+Liverpool+L13+1DA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline flex items-center gap-1 pt-1 font-medium"
                >
                  <span>See location on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Leeds */}
            <div className="bg-[#F6F4EE] rounded-[24px] p-7 border border-[#DCE3EC] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#1F4E9E]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E9E] font-heading">
                    Yorkshire & North East
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] font-heading">
                  Leeds Office
                </h3>
                <p className="text-sm text-[#4A5A70] mt-3 leading-relaxed">
                  3 Howley Park Business Village, Morley
                  <br />
                  Leeds, LS27 0BZ
                </p>

                {/* Map Placeholder */}
                <div className="mt-4 rounded-xl overflow-hidden border border-[#DCE3EC] bg-white h-32 flex items-center justify-center text-xs text-[#4A5A70] relative group">
                  <div className="absolute inset-0 bg-[#0B1F3A]/5 group-hover:bg-[#0B1F3A]/10 transition-colors" />
                  <div className="flex items-center gap-1.5 z-10 font-medium">
                    <MapPin className="w-4 h-4 text-[#1F4E9E]" />
                    <span>Leeds LS27 0BZ · Map Area</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#DCE3EC] flex flex-col gap-2 text-xs">
                <a
                  href="tel:01132049111"
                  className="font-bold text-[#0B1F3A] hover:text-[#1F4E9E] flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1F4E9E]" />
                  <span>Tel: 0113 204 9111</span>
                </a>
                <a
                  href="mailto:admin@impactcontrols.co.uk"
                  className="text-[#4A5A70] hover:text-[#0B1F3A] flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>admin@impactcontrols.co.uk</span>
                </a>
                <a
                  href="https://maps.google.com/?q=3+Howley+Park+Business+Village+Morley+LS27+0BZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline flex items-center gap-1 pt-1 font-medium"
                >
                  <span>See location on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* London [CONFIRM ADDRESS] */}
            <div className="bg-[#F6F4EE] rounded-[24px] p-7 border border-[#DCE3EC] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#4BA82E]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E9E] font-heading">
                    London & South East
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] font-heading flex items-center justify-between">
                  <span>London Hub</span>
                  <span className="text-[10px] text-amber-700 bg-amber-100 font-bold px-2 py-0.5 rounded">
                    [CONFIRM ADDRESS]
                  </span>
                </h3>
                <p className="text-sm text-[#4A5A70] mt-3 leading-relaxed">
                  Greater London Operations Center
                  <br />
                  Serving Central London & South East Estates
                </p>

                {/* Map Placeholder */}
                <div className="mt-4 rounded-xl overflow-hidden border border-[#DCE3EC] bg-white h-32 flex items-center justify-center text-xs text-[#4A5A70] relative group">
                  <div className="absolute inset-0 bg-[#0B1F3A]/5 group-hover:bg-[#0B1F3A]/10 transition-colors" />
                  <div className="flex items-center gap-1.5 z-10 font-medium">
                    <MapPin className="w-4 h-4 text-[#4BA82E]" />
                    <span>London Regional Hub · Map Area</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#DCE3EC] flex flex-col gap-2 text-xs">
                <a
                  href="tel:01512542658"
                  className="font-bold text-[#0B1F3A] hover:text-[#1F4E9E] flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1F4E9E]" />
                  <span>Tel: 0151 254 2658 (Enquiries)</span>
                </a>
                <a
                  href="mailto:admin@impactcontrols.co.uk"
                  className="text-[#4A5A70] hover:text-[#0B1F3A] flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>admin@impactcontrols.co.uk</span>
                </a>
                <div className="text-[11px] text-[#4A5A70] pt-1 italic">
                  Address details pending final client confirmation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONSULTATION FORM & PROMISE */}
      <section className="py-20 md:py-28 bg-[#F6F4EE]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[24px] border border-[#DCE3EC] shadow-xl p-8 sm:p-12">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E9E] font-heading mb-2 inline-block">
                DIRECT TECHNICAL ENQUIRY
              </span>
              <h2 className="type-h2 text-[#0B1F3A] font-heading">
                Request Your Consultation
              </h2>
              <p className="type-p2 text-[#4A5A70] mt-3">
                Complete the form below and one of our regional project operations directors will contact you to review your building requirements.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#EAF0F7] rounded-2xl p-8 text-center border border-[#DCE3EC] animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#4BA82E]/10 text-[#4BA82E] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3A] font-heading">
                  Thank You for Your Consultation Request
                </h3>
                <p className="text-sm text-[#4A5A70] mt-3 max-w-md mx-auto leading-relaxed">
                  We have received your enquiry for <strong>{formData.facilityType}</strong>. Our senior technical team typically responds within 1 business day [CONFIRM PROMISE WITH CLIENT].
                </p>
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#1F4E9E] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1F3A] font-heading mb-2">
                      First Name <span className="text-[#E4202C]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. John"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        formErrors.firstName ? 'border-[#E4202C] bg-red-50/20' : 'border-[#DCE3EC]'
                      } bg-[#F6F4EE]/60 focus:bg-white text-sm text-[#0B1F3A] placeholder-[#4A5A70]/60 focus:outline-none focus:ring-2 focus:ring-[#1F4E9E] transition-all`}
                    />
                    {formErrors.firstName && (
                      <p className="text-xs text-[#E4202C] mt-1.5">{formErrors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1F3A] font-heading mb-2">
                      Last Name <span className="text-[#E4202C]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Smith"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        formErrors.lastName ? 'border-[#E4202C] bg-red-50/20' : 'border-[#DCE3EC]'
                      } bg-[#F6F4EE]/60 focus:bg-white text-sm text-[#0B1F3A] placeholder-[#4A5A70]/60 focus:outline-none focus:ring-2 focus:ring-[#1F4E9E] transition-all`}
                    />
                    {formErrors.lastName && (
                      <p className="text-xs text-[#E4202C] mt-1.5">{formErrors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1F3A] font-heading mb-2">
                      Work Email Address <span className="text-[#E4202C]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john.smith@company.co.uk"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        formErrors.email ? 'border-[#E4202C] bg-red-50/20' : 'border-[#DCE3EC]'
                      } bg-[#F6F4EE]/60 focus:bg-white text-sm text-[#0B1F3A] placeholder-[#4A5A70]/60 focus:outline-none focus:ring-2 focus:ring-[#1F4E9E] transition-all`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-[#E4202C] mt-1.5">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1F3A] font-heading mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="07123 456789 or 0151..."
                      className="w-full px-4 py-3 rounded-xl border border-[#DCE3EC] bg-[#F6F4EE]/60 focus:bg-white text-sm text-[#0B1F3A] placeholder-[#4A5A70]/60 focus:outline-none focus:ring-2 focus:ring-[#1F4E9E] transition-all"
                    />
                  </div>
                </div>

                {/* Facility Type Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] font-heading mb-2">
                    Facility Type <span className="text-[#E4202C]">*</span>
                  </label>
                  <select
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      formErrors.facilityType ? 'border-[#E4202C] bg-red-50/20' : 'border-[#DCE3EC]'
                    } bg-[#F6F4EE]/60 focus:bg-white text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#1F4E9E] transition-all`}
                  >
                    <option value="">-- Please select your facility type --</option>
                    {facilityOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {formErrors.facilityType && (
                    <p className="text-xs text-[#E4202C] mt-1.5">{formErrors.facilityType}</p>
                  )}
                </div>

                {/* Requirements Message */}
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] font-heading mb-2">
                    Requirements & Facility Details <span className="text-[#E4202C]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your building setup, current BMS controller type (e.g. Trend, Tridium, etc.), project timeframe, or whether you need a tender quote / maintenance review..."
                    className={`w-full px-4 py-3 rounded-xl border ${
                      formErrors.message ? 'border-[#E4202C] bg-red-50/20' : 'border-[#DCE3EC]'
                    } bg-[#F6F4EE]/60 focus:bg-white text-sm text-[#0B1F3A] placeholder-[#4A5A70]/60 focus:outline-none focus:ring-2 focus:ring-[#1F4E9E] transition-all leading-relaxed`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-[#E4202C] mt-1.5">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Row with Response Promise */}
                <div className="pt-4 border-t border-[#DCE3EC] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#4A5A70]">
                    <Clock className="w-4 h-4 text-[#1F4E9E] shrink-0" />
                    <span>
                      Response Time Promise: <strong>Within 1 business day</strong> <span className="text-amber-700">[CONFIRM WITH CLIENT]</span>
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E4202C] hover:bg-[#c81924] text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Consultation Request...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
