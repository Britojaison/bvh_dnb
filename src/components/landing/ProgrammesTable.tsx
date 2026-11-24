import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProgrammeRow {
  specialty: string;
  programme: string;
  slug: string;
  level: string;
  duration: string;
  seats: string;
  entrance: string;
}

const PROGRAMMES_DATA: ProgrammeRow[] = [
  {
    specialty: "General Medicine",
    programme: "DNB General Medicine",
    slug: "/education/dnb-drnb/general-medicine",
    level: "Broad (Post-MBBS)",
    duration: "3 years",
    seats: "[seats]",
    entrance: "NEET-PG",
  },
  {
    specialty: "Paediatrics",
    programme: "DNB Paediatrics",
    slug: "/education/dnb-drnb/paediatrics",
    level: "Broad (Post-MBBS)",
    duration: "3 years",
    seats: "[seats]",
    entrance: "NEET-PG",
  },
  {
    specialty: "Ophthalmology",
    programme: "DNB Ophthalmology",
    slug: "/education/dnb-drnb/ophthalmology",
    level: "Broad (Post-MBBS)",
    duration: "3 years",
    seats: "[seats]",
    entrance: "NEET-PG",
  },
  {
    specialty: "Obstetrics & Gynaecology",
    programme: "DNB Obstetrics & Gynaecology",
    slug: "/education/dnb-drnb/obstetrics-gynaecology",
    level: "Broad (Post-MBBS)",
    duration: "3 years",
    seats: "[seats]",
    entrance: "NEET-PG",
  },
  {
    specialty: "Anaesthesiology",
    programme: "DNB Anaesthesiology",
    slug: "/education/dnb-drnb/anaesthesiology",
    level: "Broad (Post-MBBS)",
    duration: "3 years",
    seats: "[seats]",
    entrance: "NEET-PG",
  },
  {
    specialty: "Radio Diagnosis",
    programme: "Diploma in Radio Diagnosis (DRD)",
    slug: "/education/dnb-drnb/radio-diagnosis",
    level: "Diploma",
    duration: "2 years",
    seats: "[seats]",
    entrance: "NEET-PG",
  },
  {
    specialty: "Urology",
    programme: "DrNB Urology",
    slug: "/education/dnb-drnb/urology",
    level: "Super-specialty",
    duration: "3 years",
    seats: "[seats]",
    entrance: "NEET-SS",
  },
  {
    specialty: "Cardiology",
    programme: "DrNB Cardiology",
    slug: "/education/dnb-drnb/cardiology",
    level: "Super-specialty",
    duration: "3 years",
    seats: "[seats]",
    entrance: "NEET-SS",
  },
];

export default function ProgrammesTable() {
  return (
    <section id="programmes" className="py-16 sm:py-20 bg-[#EAF0F7]/50 scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              Programmes at a Glance
            </h2>
          </div>

          {/* Desktop Responsive Table (hidden on mobile) */}
          <div className="hidden md:block overflow-hidden bg-white rounded-xl shadow-sm border border-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#1F3864] text-white text-xs sm:text-sm font-serif">
                    <th className="py-3.5 px-5 font-bold border-r border-white/20">Specialty</th>
                    <th className="py-3.5 px-5 font-bold border-r border-white/20">Programme</th>
                    <th className="py-3.5 px-5 font-bold border-r border-white/20">Level</th>
                    <th className="py-3.5 px-5 font-bold border-r border-white/20">Duration</th>
                    <th className="py-3.5 px-5 font-bold border-r border-white/20">Seats</th>
                    <th className="py-3.5 px-5 font-bold">Entrance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-900">
                  {PROGRAMMES_DATA.map((row) => (
                    <tr
                      key={row.slug}
                      className="hover:bg-gray-50/70 transition"
                    >
                      <td className="py-3.5 px-5 font-bold text-[#1F3864] border-r border-gray-200">
                        {row.specialty}
                      </td>
                      <td className="py-3.5 px-5 font-medium border-r border-gray-200">
                        {row.programme}
                      </td>
                      <td className="py-3.5 px-5 border-r border-gray-200">
                        {row.level}
                      </td>
                      <td className="py-3.5 px-5 border-r border-gray-200">
                        {row.duration}
                      </td>
                      <td className="py-3.5 px-5 text-[#595959] font-mono border-r border-gray-200">
                        {row.seats}
                      </td>
                      <td className="py-3.5 px-5 font-mono font-semibold text-[#1F3864]">
                        {row.entrance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Collapsible Stacked Cards (Spec 5.2: Collapses to stacked cards, one card per programme) */}
          <div className="md:hidden space-y-4">
            {PROGRAMMES_DATA.map((row) => (
              <div
                key={row.slug}
                className="bg-white rounded-xl border border-gray-300 p-5 shadow-sm"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="font-serif font-bold text-base text-[#1F3864]">
                    {row.programme}
                  </span>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#EAF0F7] text-[#1F3864]">
                    {row.entrance}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 mt-3 pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-[#595959] block text-[11px]">Specialty:</span>
                    <span className="font-medium text-[#1F3864]">{row.specialty}</span>
                  </div>
                  <div>
                    <span className="text-[#595959] block text-[11px]">Level:</span>
                    <span>{row.level}</span>
                  </div>
                  <div>
                    <span className="text-[#595959] block text-[11px]">Duration:</span>
                    <span>{row.duration}</span>
                  </div>
                  <div>
                    <span className="text-[#595959] block text-[11px]">Seats:</span>
                    <span className="font-mono text-[#595959]">{row.seats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Exact Note from the document below the table */}
          <div className="mt-6 p-4 bg-white rounded-lg border border-[#D5E8F0] text-xs sm:text-sm text-gray-700 leading-relaxed shadow-sm">
            <p>
              <em>
                <strong>Note:</strong> A post-diploma route (2-year DNB for candidates already holding a recognised diploma) may also be available where seats are accredited; admission for that route is through the DNB-PDCET. [ Confirm whether BVH offers any post-diploma seats. ]
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
