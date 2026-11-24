export default function FeesSection() {
  return (
    <section id="fees" className="py-16 sm:py-20 bg-white scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="max-w-4xl mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-4">
              Fees &amp; Financial Transparency
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#1A1A1A] font-normal leading-relaxed">
              <p>
                Course fees for NBEMS programmes are standardised nationally, fixed and collected by NBEMS — they are uniform across accredited institutions for a given session.
              </p>
              <p>
                Fee heads comprise tuition, library and annual appraisal charges, plus accommodation charges (only where accommodation is provided) and GST at the prevailing rate.
              </p>
              <p>
                Indicative amounts: [ insert current figures as per the latest NBEMS bulletin — verify. The NBEMS manuals in our project quote differing tuition figures, so the published number must be confirmed before going live. ]
              </p>
              <p>
                Accredited hospitals cannot charge any capitation fee, security deposit, security bond or caution deposit in any form — an important assurance of fair, transparent admission.
              </p>
            </div>
          </div>

          {/* Small Clearly Captioned Fees Table */}
          <div className="bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden mb-3">
            <div className="bg-[#1F3864] text-white py-3.5 px-6">
              <h3 className="font-serif font-bold text-sm sm:text-base">
                NBEMS Standardised Course Fee Heads
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-[#EAF0F7]/70 text-[#1F3864] font-serif font-bold border-b border-gray-200">
                    <th className="py-3.5 px-6 border-r border-gray-200">Fee Head</th>
                    <th className="py-3.5 px-6 text-right">Amount (Per Annum)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-800">
                  <tr className="hover:bg-[#EAF0F7]/30 transition">
                    <td className="py-3.5 px-6 font-medium border-r border-gray-200 text-[#1F3864]">Tuition Fees</td>
                    <td className="py-3.5 px-6 text-right font-mono text-[#595959]">[ To be confirmed — as fixed by NBEMS ]</td>
                  </tr>
                  <tr className="hover:bg-[#EAF0F7]/30 transition">
                    <td className="py-3.5 px-6 font-medium border-r border-gray-200 text-[#1F3864]">Library &amp; Learning Resources</td>
                    <td className="py-3.5 px-6 text-right font-mono text-[#595959]">[ Standard NBEMS head ]</td>
                  </tr>
                  <tr className="hover:bg-[#EAF0F7]/30 transition">
                    <td className="py-3.5 px-6 font-medium border-r border-gray-200 text-[#1F3864]">Annual Appraisal Charges</td>
                    <td className="py-3.5 px-6 text-right font-mono text-[#595959]">[ Standard NBEMS head ]</td>
                  </tr>
                  <tr className="hover:bg-[#EAF0F7]/30 transition">
                    <td className="py-3.5 px-6 font-medium border-r border-gray-200 text-[#1F3864]">Accommodation Charges</td>
                    <td className="py-3.5 px-6 text-right font-mono text-[#595959]">[ Where provided; strictly capped per NBEMS ]</td>
                  </tr>
                  <tr className="bg-gray-50/80 font-semibold text-[#1F3864]">
                    <td className="py-3.5 px-6 border-r border-gray-200">GST</td>
                    <td className="py-3.5 px-6 text-right font-mono text-[#595959]">At prevailing statutory rate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-[#595959] italic text-right">
            * Note: fees as fixed by NBEMS.
          </p>
        </div>
      </div>
    </section>
  );
}
