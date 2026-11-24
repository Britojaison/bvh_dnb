"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Is the DNB/DrNB equivalent to MD/MS or DM/MCh?",
    a: "Yes - NBEMS qualifications are recognised nationally and treated as equivalent to the corresponding MD/MS or DM/MCh for the purposes prescribed by the Government of India, including specialist and teaching posts.",
  },
  {
    q: "How are admissions decided?",
    a: "Purely on merit, through NEET-PG / NEET-SS / DNB-PDCET and centralised counselling. There is no institutional entrance test and no management quota.",
  },
  {
    q: "Is a stipend paid?",
    a: "Yes - a stipend is compulsory and paid for the full duration of training. [ State BVH's stipend figures once confirmed. ]",
  },
  {
    q: "Can the hospital charge a bond or capitation fee?",
    a: "No. NBEMS rules prohibit any capitation fee, security deposit or bond at accredited institutions.",
  },
  {
    q: "Is accommodation provided?",
    a: "[ Answer once accommodation policy is confirmed. ]",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#EAF0F7]/50 scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#595959]">
              Common queries from prospective residents regarding admissions, qualifications, stipends, and policies.
            </p>
          </div>

          {/* Accordion Starter Set */}
          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <span className="font-serif font-bold text-base text-[#1F3864] pr-4 flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#2E75B6] flex-shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#2E75B6]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-800 leading-relaxed border-t border-gray-100 bg-gray-50/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
