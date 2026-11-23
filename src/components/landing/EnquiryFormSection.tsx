"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { DNB_PROGRAMMES } from "@/lib/constants";

export default function EnquiryFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry-form" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 5 Cols: Contact Information */}
          <div className="lg:col-span-5 bg-[#1F3864] text-white p-8 rounded-2xl relative overflow-hidden shadow-lg">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D5E8F0]">
                Academic Admissions Cell
              </span>
              <h2 className="text-3xl font-serif font-bold !text-white mt-1 mb-4">
                Enquire About DNB &amp; DrNB Admissions
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Connect directly with the DNB Academic Secretariat for curriculum inquiries, intake timelines, accommodation guidance, and documentation requirements.
              </p>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#C8862B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-300">Academic Inquiries</span>
                    <a href="mailto:dnb@bhaktivedantahospital.com" className="font-semibold text-white hover:text-[#D5E8F0] transition">
                      dnb@bhaktivedantahospital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#C8862B]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-300">Hospital Board / Academic Extn</span>
                    <span className="font-semibold text-white">022 2845 5555 / 2945 2500</span>
                    <span className="block text-[11px] text-slate-300">Mon–Sat: 9:00 AM – 5:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#C8862B]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-300">Hospital &amp; Academic Address</span>
                    <span className="font-semibold text-white block">
                      Bhaktivedanta Hospital &amp; Research Institute
                    </span>
                    <span className="text-xs text-slate-300 leading-relaxed block mt-0.5">
                      Srishti Complex, Bhaktivedanta Swami Marg, Sector 1, Mira Road (East), Thane, Mumbai Metropolitan Region - 401107
                    </span>
                  </div>
                </div>
              </div>

              {/* No Capitation Notice */}
              <div className="mt-8 pt-6 border-t border-white/15 text-xs text-slate-300">
                <strong className="text-amber-300 block mb-1">Important Notice for Applicants:</strong>
                Bhaktivedanta Hospital does not entertain donations, capitation fees, or private agents. All seats are strictly filled via MCC centralised merit counselling.
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Interactive Form */}
          <div className="lg:col-span-7 bg-[#EAF0F7]/40 p-8 rounded-2xl border border-gray-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-serif font-bold text-2xl text-[#1F3864] mb-2">
                  Enquiry Submitted Successfully
                </h3>
                <p className="text-sm text-[#595959] max-w-md mx-auto mb-6">
                  Thank you for your interest in our postgraduate programs. The DNB Academic Cell has received your message and will respond via email shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#1F3864] text-white rounded-lg text-xs font-semibold hover:bg-[#2E75B6] transition"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-2xl text-[#1F3864] mb-1">
                    Academic Enquiry &amp; Contact Form
                  </h3>
                  <p className="text-xs text-[#595959]">
                    Have questions regarding seat intake, resident stipend, department rotations, or joining formalities? Leave a message below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Candidate Name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E75B6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="doctor@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E75B6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E75B6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Program of Interest *
                    </label>
                    <select
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E75B6]"
                    >
                      <option value="">Select Specialty</option>
                      {DNB_PROGRAMMES.map((p) => (
                        <option key={p.slug} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Academic Message / Query *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Inquire about eligibility, rotation schedule, counseling session status, or hostel amenities..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E75B6]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#C8862B] text-white font-semibold rounded-lg hover:brightness-105 transition flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <Send className="w-4 h-4" />
                  Submit Academic Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
