import { Award, BookOpen, CheckCircle, ShieldCheck } from "lucide-react";

export default function AboutNbemsSection() {
  return (
    <section id="about-nbems" className="py-16 sm:py-20 bg-white scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="max-w-4xl mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              About NBEMS &amp; What the Qualification Means
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A] mt-4 leading-relaxed">
              The <strong>National Board of Examinations in Medical Sciences (NBEMS)</strong> is an autonomous body under the Ministry of Health &amp; Family Welfare, Government of India, established to set high and uniform national standards for postgraduate and post-doctoral medical education. Qualifications are awarded on successful completion of prescribed training and examinations:
            </p>
          </div>

          {/* 3 Qualification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-[#EAF0F7]/70 rounded-xl border border-[#D5E8F0] shadow-sm hover:border-[#2E75B6]/50 transition">
              <div className="w-10 h-10 rounded-lg bg-white text-[#1F3864] flex items-center justify-center mb-3 shadow-sm font-serif font-bold text-base">
                DNB
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864] mb-1">
                DNB (Diplomate of National Board)
              </h3>
              <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                Broad-specialty postgraduate qualification.
              </p>
            </div>

            <div className="p-6 bg-[#EAF0F7]/70 rounded-xl border border-[#D5E8F0] shadow-sm hover:border-[#2E75B6]/50 transition">
              <div className="w-10 h-10 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-3 shadow-sm font-serif font-bold text-base">
                DrNB
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864] mb-1">
                DrNB (Doctorate of National Board)
              </h3>
              <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                Super-specialty post-doctoral qualification.
              </p>
            </div>

            <div className="p-6 bg-[#EAF0F7]/70 rounded-xl border border-[#D5E8F0] shadow-sm hover:border-[#2E75B6]/50 transition">
              <div className="w-10 h-10 rounded-lg bg-white text-[#C8862B] flex items-center justify-center mb-3 shadow-sm font-serif font-bold text-base">
                DRD
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864] mb-1">
                Diploma
              </h3>
              <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                A two-year broad-specialty diploma (e.g. Diploma in Radio Diagnosis).
              </p>
            </div>
          </div>

          {/* Equivalence and Inspection Criteria Card */}
          <div className="p-6 sm:p-7 bg-[#FFFBF3] border-l-4 border-[#C8862B] rounded-r-xl shadow-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#C8862B] flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm text-gray-800 leading-relaxed">
                <p>
                  <strong>Statutory Equivalence:</strong> NBEMS qualifications are recognised nationally; the DNB/DrNB is treated as equivalent to the corresponding MD/MS or DM/MCh for the purposes prescribed by the Government of India, including eligibility for teaching and specialist posts.
                </p>
                <p className="text-gray-600">
                  <strong>Accreditation Standards:</strong> Accreditation is granted only to institutions that meet NBEMS's infrastructure, faculty and clinical-workload criteria following inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
