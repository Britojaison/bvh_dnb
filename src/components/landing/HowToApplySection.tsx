"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, User, ChevronRight } from "lucide-react";
import { DNB_PROGRAMMES } from "@/lib/constants";

export default function HowToApplySection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry-form" className="py-16 sm:py-24 bg-[#1F3864] text-white relative overflow-hidden scroll-mt-20 border-y-4 border-[#C8862B]">
      {/* Subtle deep gradient overlay like the Hero section */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D33]/95 via-[#1F3864]/90 to-[#1F3864]/80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          {/* Section Heading */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold !text-white tracking-tight mb-4 drop-shadow-sm">
              How to Apply / Enquire
            </h2>
            <div className="space-y-3.5 text-base sm:text-lg text-slate-100 leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow">
                  1
                </span>
                <p>
                  Qualify the relevant national entrance examination - NEET-PG (broad-specialty &amp; diploma) or NEET-SS (super-specialty).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow">
                  2
                </span>
                <p>
                  Register for and participate in the applicable centralised counselling (MCC of DGHS / NBEMS).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow">
                  3
                </span>
                <p>
                  On seat allotment to BVH, report with original documents for verification and joining.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow">
                  4
                </span>
                <p>
                  For any queries on our programmes, contact the BVH Academic Cell / DNB Coordinator (below).
                </p>
              </div>
            </div>
          </div>

          {/* Contact Box + Interactive Academic Enquiry Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Cols: Contact - Academic Cell / DNB Coordinator */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md text-white p-7 sm:p-8 rounded-2xl border border-white/20 shadow-xl">
              <h3 className="font-serif font-bold text-xl !text-white mb-6 pb-3 border-b border-white/15">
                Contact - Academic Cell / DNB Coordinator
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-[#C8862B]">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#D5E8F0] font-medium">Name &amp; designation:</span>
                    <span className="font-mono text-sm text-slate-100">[ placeholder ]</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-[#C8862B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#D5E8F0] font-medium">Email (academic enquiries):</span>
                    <span className="font-mono text-sm text-slate-100">[ placeholder ]</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-[#C8862B]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#D5E8F0] font-medium">Phone:</span>
                    <span className="font-mono text-sm text-slate-100">[ placeholder ]</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-[#C8862B]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#D5E8F0] font-medium">Address:</span>
                    <span className="text-sm text-slate-100 block">
                      Bhaktivedanta Hospital &amp; Research Institute, Mira Road (E), Mumbai.
                    </span>
                    <span className="font-mono text-xs text-[#D5E8F0] block mt-0.5">
                      [ confirm full address &amp; map link ]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Academic Enquiry Form */}
            <div className="lg:col-span-7 bg-white text-gray-900 p-7 sm:p-8 rounded-2xl border border-gray-200 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-xl text-[#1F3864] mb-2">
                    Enquiry Submitted Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[#595959] max-w-md mx-auto mb-6">
                    Thank you for writing to the Academic Cell. Your query has been received and will be answered shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-[#1F3864] text-white text-xs font-semibold rounded-lg hover:bg-[#2E75B6] transition"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1F3864] mb-1">
                      Academic Enquiry Form
                    </h3>
                    <p className="text-xs text-[#595959]">
                      For prospective residents inquiring about seats, counselling rounds, stipend, or curriculum.
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
                        Specialty of Interest *
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
                    className="w-full sm:w-auto px-8 py-3 bg-[#C8862B] text-white font-semibold rounded-lg hover:brightness-105 transition flex items-center justify-center gap-2 shadow-md text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Submit Academic Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
