import { Clock, BookOpen, CheckCircle2, Calendar, FileText, Compass, Award } from "lucide-react";

const DURATION_ROWS = [
  { type: "Broad-specialty DNB (Post-MBBS)", duration: "3 years" },
  { type: "Broad-specialty DNB (Post-diploma)", duration: "2 years" },
  { type: "Diploma (e.g. Radio Diagnosis)", duration: "2 years" },
  { type: "Super-specialty DrNB (Post-MD/MS/DNB)", duration: "3 years" },
];

export default function ProgrammeDurationSection() {
  return (
    <section id="training-structure" className="py-16 sm:py-20 bg-white scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              Programme Duration &amp; Training Structure
            </h2>
            <p className="text-sm text-[#595959] mt-2">
              National standard durations and competency-based academic delivery prescribed by NBEMS.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left 5 Cols: Programme Duration Table */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-[#1F3864] text-white py-3.5 px-6">
                <h3 className="font-serif font-bold text-sm uppercase tracking-wider">
                  Programme Durations
                </h3>
              </div>

              <div className="p-4 sm:p-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 text-[#1F3864] font-serif font-bold">
                      <th className="py-3 px-3">Programme type</th>
                      <th className="py-3 px-3 text-right">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {DURATION_ROWS.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition">
                        <td className="py-3.5 px-3 font-medium text-gray-900">
                          {row.type}
                        </td>
                        <td className="py-3.5 px-3 text-right font-mono font-bold text-[#2E75B6] whitespace-nowrap">
                          {row.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-6 p-4 rounded-xl bg-[#EAF0F7]/40 border border-[#D2DCE8]/70 text-xs text-[#1C2D4A] leading-relaxed flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#1F3864] flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Note:</strong> Training period is counted from the date of joining. Excess leave beyond prescribed NBEMS guidelines extends the course duration accordingly.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: How Training is Delivered */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="font-serif font-bold text-xl text-[#1F3864]">
                  How training is delivered
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#1A1A1A] leading-relaxed">
                <div className="flex items-start gap-3 p-3.5 bg-[#EAF0F7]/40 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                  <span>
                    Training follows the NBEMS-prescribed, competency-based curriculum for each specialty, with structured clinical postings and rotations.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#EAF0F7]/40 rounded-xl border border-gray-100">
                  <Calendar className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                  <span>
                    A fixed weekly academic calendar in every department — bedside clinics, basic and grand rounds, case presentations, seminars and symposia, journal clubs, faculty teaching, central sessions, guest lectures, clinical audit, mortality meets and interdepartmental meetings.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#EAF0F7]/40 rounded-xl border border-gray-100">
                  <BookOpen className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                  <span>
                    Cross-cutting central sessions on basic sciences, biostatistics, research methodology, teaching methodology, health economics, and medical ethics and legal issues.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#EAF0F7]/40 rounded-xl border border-gray-100">
                  <FileText className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                  <span>
                    Every trainee maintains the mandatory e-Doctor Logbook of cases and academic activities, reviewed regularly by the assigned guide/mentor.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
