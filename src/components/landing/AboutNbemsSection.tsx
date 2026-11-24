import { Award, BookOpen, CheckCircle, ShieldCheck, GraduationCap, CheckCircle2 } from "lucide-react";

export default function AboutNbemsSection() {
  return (
    <section id="about-nbems" className="py-16 sm:py-20 bg-white scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              About NBEMS &amp; What the Qualification Means
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A] mt-4 leading-relaxed font-normal">
              The <strong>National Board of Examinations in Medical Sciences (NBEMS)</strong> is an autonomous body under the Ministry of Health &amp; Family Welfare, Government of India, established to set high and uniform national standards for postgraduate and post-doctoral medical education. Qualifications are awarded on successful completion of prescribed training and examinations:
            </p>
          </div>

          {/* Integrated Modern Layout: 3 Columns of Qualification Cards + Bottom Statutory Verification Strip */}
          <div className="bg-gradient-to-b from-[#F6F9FC] to-[#EDF3F9] rounded-2xl border border-[#D2DCE8] p-6 sm:p-8 shadow-sm mb-8">
            {/* 3 Qualification Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* DNB */}
              <div className="bg-white rounded-xl p-6 border border-[#D2DCE8] shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-md bg-[#1F3864] text-white font-mono font-bold text-xs tracking-wider">
                      DNB
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2E75B6] bg-[#EAF0F7] px-2 py-0.5 rounded">
                      Postgraduate
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864] mb-2 leading-snug">
                    DNB (Diplomate of National Board)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                    Broad-specialty postgraduate qualification.
                  </p>
                </div>
              </div>

              {/* DrNB */}
              <div className="bg-white rounded-xl p-6 border border-[#D2DCE8] shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-md bg-[#2E75B6] text-white font-mono font-bold text-xs tracking-wider">
                      DrNB
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2E75B6] bg-[#EAF0F7] px-2 py-0.5 rounded">
                      Super-Specialty
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864] mb-2 leading-snug">
                    DrNB (Doctorate of National Board)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                    Super-specialty post-doctoral qualification.
                  </p>
                </div>
              </div>

              {/* Diploma */}
              <div className="bg-white rounded-xl p-6 border border-[#D2DCE8] shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-md bg-[#C8862B] text-white font-mono font-bold text-xs tracking-wider">
                      DRD
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C8862B] bg-amber-50 px-2 py-0.5 rounded">
                      Diploma
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864] mb-2 leading-snug">
                    Diploma
                  </h3>
                  <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                    A two-year broad-specialty diploma (e.g. Diploma in Radio Diagnosis).
                  </p>
                </div>
              </div>
            </div>

            {/* Statutory Equivalence & Accreditation Standards Strip */}
            <div className="mt-8 pt-6 border-t border-[#D2DCE8] grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-[#D2DCE8]">
                <ShieldCheck className="w-5 h-5 text-[#1F3864] flex-shrink-0 mt-0.5" />
                <p className="text-[#1C2D4A] leading-relaxed">
                  <strong className="text-[#1F3864] font-semibold block mb-0.5">Statutory Equivalence:</strong>
                  NBEMS qualifications are recognised nationally; the DNB/DrNB is treated as equivalent to the corresponding MD/MS or DM/MCh for the purposes prescribed by the Government of India, including eligibility for teaching and specialist posts.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-[#D2DCE8]">
                <CheckCircle2 className="w-5 h-5 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                <p className="text-[#1C2D4A] leading-relaxed">
                  <strong className="text-[#1F3864] font-semibold block mb-0.5">Accreditation Standards:</strong>
                  Accreditation is granted only to institutions that meet NBEMS&apos;s infrastructure, faculty and clinical-workload criteria following inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
