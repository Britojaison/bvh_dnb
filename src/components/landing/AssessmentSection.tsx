import { AlertCircle } from "lucide-react";

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
          </div>

          {/* 2 Clean Cards: Flat, open layout with no nested interior boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Formative Assessment */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#D2DCE8] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#1F3864] mb-6">
                  Formative assessment
                </h3>

                <div className="space-y-6 text-xs sm:text-sm text-[#1C2D4A] leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-[#1F3864] mb-1.5">
                      Centralised Formative Assessment Test (FAT)
                    </h4>
                    <p className="text-gray-600 font-normal">
                      A centralised Formative Assessment Test (FAT) is conducted by NBEMS — during the <strong>2nd year for 3-year courses</strong> and the <strong>1st year for 2-year courses</strong> — comprising a theory examination followed by workplace-based assessment.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1F3864] mb-1.5">
                      Institutional Internal Assessments
                    </h4>
                    <p className="text-gray-600 font-normal">
                      In the other years of training, the institute conducts internal assessments on lines similar to the FAT.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summative Assessment (Exit Examination) */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#D2DCE8] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#1F3864] mb-6">
                  Summative assessment (exit examination)
                </h3>

                <div className="space-y-6 text-xs sm:text-sm text-[#1C2D4A] leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-[#1F3864] mb-1.5">
                      DNB / DrNB Final Examination
                    </h4>
                    <p className="text-gray-600 font-normal">
                      The DNB/DrNB Final Examination comprises a theory examination and a practical/clinical examination, conducted by NBEMS on a standardised national pattern using multiple assessment tools.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1F3864] mb-1.5">
                      Direct 6-Year DrNB Pathway Structure
                    </h4>
                    <p className="text-gray-600 font-normal">
                      For applicable Direct 6-year DrNB courses, a Part-I and a Part-II (Final) examination structure applies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Note */}
          <div className="p-4 sm:p-5 bg-white border border-[#D2DCE8] rounded-xl shadow-sm text-xs sm:text-sm text-[#1C2D4A] leading-relaxed">
            <p>
              <strong className="text-[#1F3864]">Final Examination Eligibility Condition:</strong> Eligibility to appear for the Final Examination depends on satisfactory completion of training, the logbook, and acceptance of the thesis (see below).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
