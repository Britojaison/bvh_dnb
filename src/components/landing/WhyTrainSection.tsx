import {
  Award,
  Activity,
  Hospital,
  Microscope,
  CalendarCheck,
  UserCheck,
  Heart,
  Building,
  Bed,
  GraduationCap
} from "lucide-react";

interface WhyItem {
  icon: any;
  heading: string;
  line: React.ReactNode;
}

const WHY_POINTS: WhyItem[] = [
  {
    icon: Award,
    heading: "Comprehensive NBEMS Breadth",
    line: "NBEMS-accredited programmes across broad specialties, super-specialties and a diploma — a wide academic spread in one institution.",
  },
  {
    icon: Activity,
    heading: "High Clinical Volumes",
    line: (
      <span>
        High clinical volumes that translate into rich hands-on exposure for every trainee.{" "}
        <a href="#stats-band" className="text-[#2E75B6] font-semibold underline hover:text-[#1F3864]">
          View clinical stats &darr;
        </a>
      </span>
    ),
  },
  {
    icon: Hospital,
    heading: "NABH Referral Centre",
    line: "NABH-accredited tertiary-care referral centre serving the Borivali–Dahanu belt of North Mumbai.",
  },
  {
    icon: Microscope,
    heading: "Active Research Ecosystem",
    line: "A strong, well-resourced research ecosystem — dedicated Medical Research Department, dual registered Ethics Committees, and extensive clinical-trial experience — giving residents real research training as per NBEMS requirements.",
  },
  {
    icon: CalendarCheck,
    heading: "Structured Academics",
    line: "Structured, mentor-led academics with a fixed weekly teaching calendar in every department.",
  },
  {
    icon: UserCheck,
    heading: "Resident-First Support",
    line: "Resident-first support: stipend as per (or above) NBEMS norms, accommodation, library and learning resources, and robust welfare and grievance mechanisms.",
  },
  {
    icon: Heart,
    heading: "Compassionate Holistic Care",
    line: "A values-driven, patient-centred environment that integrates compassionate, holistic care alongside modern medicine.",
  },
];

export default function WhyTrainSection() {
  return (
    <section id="why-train" className="py-16 sm:py-20 bg-[#EAF0F7]/50 scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              Why Train at BVH
            </h2>
          </div>

          {/* Grid of Icon Cards: Heading + 1 Line (Instruction Spec §3 & §5.3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_POINTS.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200/90 hover:bg-[#EAF0F7] hover:border-[#2E75B6]/50 transition group flex flex-col justify-start shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                    {pt.heading}
                  </h3>
                  <div className="text-xs sm:text-[13px] leading-relaxed text-[#1A1A1A]">
                    {pt.line}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Numeric Claims to Confirm (Spec §3) */}
          <div className="mt-12 p-6 bg-white rounded-xl border border-[#D2DCE8] shadow-sm">
            <h4 className="font-serif font-bold text-base text-[#1F3864] mb-3 flex items-center gap-2">
              <Building className="w-5 h-5 text-[#1F3864]" />
              Numeric Claims
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-gray-100 text-xs text-[#595959]">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#EAF0F7]/40 border border-[#D2DCE8]/60">
                <Bed className="w-4 h-4 text-[#1F3864] flex-shrink-0" />
                <span><strong className="text-[#1F3864]">Hospital Beds:</strong> [ Total beds — to be confirmed by BVH ]</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#EAF0F7]/40 border border-[#D2DCE8]/60">
                <Award className="w-4 h-4 text-[#1F3864] flex-shrink-0" />
                <span><strong className="text-[#1F3864]">Accredited Specialties:</strong> [ 8 DNB/DrNB/DRD Spokes ]</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#EAF0F7]/40 border border-[#D2DCE8]/60">
                <GraduationCap className="w-4 h-4 text-[#1F3864] flex-shrink-0" />
                <span><strong className="text-[#1F3864]">Teaching Experience:</strong> [ Years of PG Teaching — to be supplied ]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
