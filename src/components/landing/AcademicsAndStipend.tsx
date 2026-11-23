import { BookOpen, Award, FileSpreadsheet, Scale, CheckCircle2 } from "lucide-react";

export default function AcademicsAndStipend() {
  return (
    <section id="academics" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2E75B6]">
            Academic Rigour &amp; Resident Welfare
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#1F3864] mt-1">
            Training Structure, Assessments &amp; Compulsory Stipend
          </h2>
          <p className="text-sm text-[#595959] mt-2">
            Structured competency-based curricula prescribed by NBEMS with transparent monthly stipends, formative evaluations, and dedicated research facilitation.
          </p>
        </div>

        {/* 2-Column: Training & Assessment + Research */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Academic Methodology */}
          <div className="bg-[#EAF0F7]/60 p-6 sm:p-8 rounded-2xl border border-gray-200">
            <h3 className="font-serif font-bold text-xl text-[#1F3864] mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#2E75B6]" />
              Structured Academic Delivery &amp; Logbooks
            </h3>
            <ul className="text-xs sm:text-sm space-y-3 text-gray-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                <span><strong>Fixed Weekly Academic Calendar:</strong> Bedside teaching rounds, clinical case presentations, seminars, journal clubs, and clinical audits.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                <span><strong>Mandatory e-Doctor Logbook:</strong> Regular verification of procedural numbers and academic activities by designated faculty mentors.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                <span><strong>Formative Assessment Tests (FAT):</strong> Centralised examinations conducted by NBEMS (Year 2 for 3-year courses, Year 1 for 2-year diplomas) followed by workplace evaluations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E75B6] flex-shrink-0 mt-0.5" />
                <span><strong>Summative Exit Exam:</strong> National theory and multi-centre practical examination conducted directly by NBEMS.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Thesis & Research Ecosystem */}
          <div className="bg-[#EAF0F7]/60 p-6 sm:p-8 rounded-2xl border border-gray-200">
            <h3 className="font-serif font-bold text-xl text-[#1F3864] mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#C8862B]" />
              Mandatory Thesis &amp; Medical Research Support
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
              A thesis is mandatory for DNB and DrNB candidates. Residents are supported at every step by our dedicated Medical Research Department:
            </p>
            <ul className="text-xs sm:text-sm space-y-2.5 text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#C8862B] font-bold">&bull;</span>
                <span>Bio-statistics and research methodology workshops prior to protocol drafting.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8862B] font-bold">&bull;</span>
                <span>Protocol review and fast clearance via registered Institutional Ethics Committees (IEC).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8862B] font-bold">&bull;</span>
                <span>Assistance in obtaining official Thesis Acceptance Certificates (TAC) from NBEMS.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8862B] font-bold">&bull;</span>
                <span>Guidance in publishing papers in high-impact indexed international and national journals.</span>
              </li>
            </ul>
            <div className="p-3 bg-white rounded-lg border border-[#D5E8F0] text-xs text-[#595959]">
              <strong className="text-[#1F3864]">Research Scale:</strong> 110+ international clinical trials conducted under GCP compliance.
            </div>
          </div>
        </div>

        {/* Stipend Table (§12) */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
            <div>
              <h3 className="font-serif font-bold text-xl text-[#1F3864]">
                Compulsory Monthly Stipend Structure
              </h3>
              <p className="text-xs text-[#595959] mt-1">
                Stipend is paid without fail for the entire duration of training, including eligible leave, compliant with NBEMS / State Government mandates.
              </p>
            </div>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-full border border-emerald-200">
              Compulsory Regular Disbursal
            </span>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1F3864] text-white">
                  <th className="py-3 px-4 font-semibold rounded-l">Programme Category</th>
                  <th className="py-3 px-4 font-semibold">Year 1</th>
                  <th className="py-3 px-4 font-semibold">Year 2</th>
                  <th className="py-3 px-4 font-semibold rounded-r">Year 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="py-3.5 px-4 font-semibold text-[#1F3864]">
                    Post-MBBS DNB (Broad Specialties)
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-gray-800">₹ 35,000 / mo</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-gray-800">₹ 37,000 / mo</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-gray-800">₹ 39,000 / mo</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3.5 px-4 font-semibold text-[#1F3864]">
                    Post-Diploma DNB (Broad Specialties)
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-gray-800">₹ 37,000 / mo</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-gray-800">₹ 39,000 / mo</td>
                  <td className="py-3.5 px-4 text-[#595959]">— (2-year course)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3.5 px-4 font-semibold text-purple-900">
                    DrNB (Super Specialties — Urology, Cardiology)
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-purple-900">₹ 41,000 / mo</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-purple-900">₹ 43,000 / mo</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-purple-900">₹ 45,000 / mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[#595959] italic">
            * Figures state NBEMS statutory national minimum floors. The institute pays as per or higher than prescribed NBEMS/State Government rate. [Confirm any higher institutional allowance scale before final publishing].
          </p>
        </div>
      </div>
    </section>
  );
}
