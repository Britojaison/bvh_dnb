import { CheckCircle2, ShieldCheck, AlertCircle, Coins, Award } from "lucide-react";

const STIPEND_ROWS = [
  {
    programme: "Post-MBBS DNB (Broad)",
    year1: "Rs 35,000",
    year2: "Rs 37,000",
    year3: "Rs 39,000",
  },
  {
    programme: "Post-diploma DNB (Broad)",
    year1: "Rs 37,000",
    year2: "Rs 39,000",
    year3: "—",
  },
  {
    programme: "DrNB (Super-specialty)",
    year1: "Rs 41,000",
    year2: "Rs 43,000",
    year3: "Rs 45,000",
  },
];

export default function StipendSection() {
  return (
    <section id="stipend" className="py-16 sm:py-20 bg-[#EAF0F7]/50 scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              Stipend
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A] mt-3 leading-relaxed">
              Payment of stipend to NBEMS trainees is compulsory. As per NBEMS policy, the hospital pays at least the prescribed national minimum, or the applicable State Government rate, whichever is higher. The trainee is paid for the entire duration of training, including eligible leave.
            </p>
          </div>

          {/* Stipend Table Card */}
          <div className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden mb-8">
            <div className="bg-[#1F3864] text-white py-3.5 px-6 flex items-center justify-between">
              <h3 className="font-serif font-bold text-sm sm:text-base">
                NBEMS national minimum stipend (per month)
              </h3>
              <span className="text-xs text-[#D5E8F0] font-mono">
                Mandatory Floor Rate
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px] text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#EAF0F7]/60 text-[#1F3864] font-serif font-bold border-b border-gray-200">
                    <th className="py-3.5 px-6 border-r border-gray-200">Programme</th>
                    <th className="py-3.5 px-6 border-r border-gray-200">Year 1</th>
                    <th className="py-3.5 px-6 border-r border-gray-200">Year 2</th>
                    <th className="py-3.5 px-6">Year 3</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {STIPEND_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#EAF0F7]/30 transition">
                      <td className="py-4 px-6 font-semibold text-[#1F3864] border-r border-gray-200">
                        {row.programme}
                      </td>
                      <td className="py-4 px-6 font-mono font-bold text-gray-800 border-r border-gray-200">
                        {row.year1}
                      </td>
                      <td className="py-4 px-6 font-mono font-bold text-gray-800 border-r border-gray-200">
                        {row.year2}
                      </td>
                      <td className="py-4 px-6 font-mono font-bold text-gray-800">
                        {row.year3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* BVH Stipend Policy Callout Card */}
          <div className="p-6 bg-[#FFFBF3] border-l-4 border-[#C8862B] rounded-r-xl shadow-sm flex items-start gap-3">
            <Coins className="w-6 h-6 text-[#C8862B] flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-gray-800 leading-relaxed space-y-1">
              <h4 className="font-serif font-bold text-base text-[#1F3864]">
                BVH stipend policy:
              </h4>
              <p>
                [ <em>State whether BVH pays the NBEMS minimum, the Maharashtra State rate, or above — and any additional allowances. If BVH pays above the minimum, this should be highlighted prominently as a key advantage.</em> ]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
