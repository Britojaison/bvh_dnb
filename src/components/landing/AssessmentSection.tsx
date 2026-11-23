import { FileCheck, Award, GraduationCap, CheckCircle2, AlertCircle } from "lucide-react";

export default function AssessmentSection() {
  return (
    <section id="assessment" className="py-16 sm:py-20 bg-[#EAF0F7]/50 scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              Assessment &amp; Examinations
            </h2>
            <p className="text-sm text-[#595959] mt-2">
              Structured dual-tier evaluation framework comprising centralised formative reviews and national exit summative examinations.
            </p>
          </div>

          {/* 2 Assessment Tier Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Tier 1: Formative Assessment */}
            <div className="bg-[#EAF0F7]/50 p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center shadow-sm">
                    <FileCheck className="w-5 h-5 text-[#2E75B6]" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1F3864]">
                    Formative assessment
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#1A1A1A] leading-relaxed">
                  <div className="p-4 bg-white rounded-xl border border-[#D5E8F0]">
                    <strong className="text-[#1F3864] block mb-1">
                      Centralised Formative Assessment Test (FAT)
                    </strong>
                    <p className="text-gray-700">
                      A centralised Formative Assessment Test (FAT) is conducted by NBEMS — during the <strong>2nd year for 3-year courses</strong> and the <strong>1st year for 2-year courses</strong> — comprising a theory examination followed by workplace-based assessment.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-[#D5E8F0]">
                    <strong className="text-[#1F3864] block mb-1">
                      Institutional Internal Assessments
                    </strong>
                    <p className="text-gray-700">
                      In the other years of training, the institute conducts internal assessments on lines similar to the FAT.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tier 2: Summative Assessment (Exit Examination) */}
            <div className="bg-[#EAF0F7]/50 p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white text-purple-700 flex items-center justify-center shadow-sm">
                    <Award className="w-5 h-5 text-purple-700" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1F3864]">
                    Summative assessment (exit examination)
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#1A1A1A] leading-relaxed">
                  <div className="p-4 bg-white rounded-xl border border-[#D5E8F0]">
                    <strong className="text-[#1F3864] block mb-1">
                      DNB / DrNB Final Examination
                    </strong>
                    <p className="text-gray-700">
                      The DNB/DrNB Final Examination comprises a theory examination and a practical/clinical examination, conducted by NBEMS on a standardised national pattern using multiple assessment tools.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-[#D5E8F0]">
                    <strong className="text-[#1F3864] block mb-1">
                      Direct 6-Year DrNB Pathway Structure
                    </strong>
                    <p className="text-gray-700">
                      For applicable Direct 6-year DrNB courses, a Part-I and a Part-II (Final) examination structure applies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Callout Banner */}
          <div className="p-5 bg-[#FFFBF3] border-l-4 border-[#C8862B] rounded-r-xl shadow-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#C8862B] flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
              <strong>Final Examination Eligibility Condition:</strong> Eligibility to appear for the Final Examination depends on satisfactory completion of training, the logbook, and acceptance of the thesis (see below).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
