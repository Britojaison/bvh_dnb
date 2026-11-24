import { CheckCircle2, GraduationCap, Award, FileText, AlertCircle } from "lucide-react";

export default function EligibilitySection() {
  return (
    <section id="eligibility" className="py-16 sm:py-20 bg-[#EAF0F7]/50 scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              Eligibility
            </h2>
          </div>

          {/* 3 Eligibility Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1: Broad-specialty DNB & Diploma (Post-MBBS) */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h3 className="font-serif font-bold text-lg text-[#1F3864]">
                    Broad-specialty DNB and Diploma (Post-MBBS)
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#1A1A1A]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                    <span>MBBS degree recognised under the NMC Act, 2019 / the erstwhile Indian Medical Council Act, 1956.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                    <span>Valid permanent or provisional registration with the NMC / State Medical Council.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                    <span>Completion of the compulsory rotating internship.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                    <span>A qualifying rank in NEET-PG for the relevant admission session.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Super-specialty DrNB (Urology, Cardiology) */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h3 className="font-serif font-bold text-lg text-[#1F3864]">
                    Super-specialty DrNB (Urology, Cardiology)
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#1A1A1A]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 flex-shrink-0 mt-0.5" />
                    <span>A recognised postgraduate qualification (MD / MS / DNB) in the prescribed feeder specialty, with permanent MBBS registration.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 flex-shrink-0 mt-0.5" />
                    <span>A qualifying rank in NEET-SS for the relevant admission session.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Post-diploma DNB (where offered) */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h3 className="font-serif font-bold text-lg text-[#1F3864]">
                    Post-diploma DNB (where offered)
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#1A1A1A]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>A recognised diploma in the relevant specialty, with valid registration.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>A qualifying rank in DNB-PDCET for the relevant admission session.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exact Note from the document */}
          <div className="p-5 bg-white border border-[#D5E8F0] rounded-xl flex items-start gap-3 shadow-sm">
            <AlertCircle className="w-5 h-5 text-[#C8862B] flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              <em>
                <strong>Note:</strong> Candidates already pursuing a DrNB/DM/MCh are not eligible to take up another super-specialty seat for the duration of the course already joined. Age and other criteria are as per the prevailing NBEMS bulletin. [ Confirm any institute-specific eligibility notes. ]
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
