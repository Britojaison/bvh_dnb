import {
  Stethoscope,
  UserPlus,
  CheckCircle,
  Hospital,
  FileCheck,
  ClipboardList,
  GraduationCap,
  Award,
  Layers,
  ArrowRight
} from "lucide-react";

export default function AdmissionPathway() {
  const steps = [
    {
      num: "1",
      icon: Stethoscope,
      title: "Qualify NEET-PG / NEET-SS",
      subtitle: "",
      desc: "Appear for & qualify NEET-PG / NEET-SS / DNB-PDCET",
    },
    {
      num: "2",
      icon: UserPlus,
      title: "Register for counselling",
      subtitle: "(MCC/NBEMS)",
      desc: "Register for and participate in the applicable centralised counselling",
    },
    {
      num: "3",
      icon: CheckCircle,
      title: "Seat allotment",
      subtitle: "",
      desc: "Receive allotment to Bhaktivedanta Hospital & Research Institute",
    },
    {
      num: "4",
      icon: Hospital,
      title: "Report to BVH",
      subtitle: "",
      desc: "Report with original documents for verification within the deadline",
    },
    {
      num: "5",
      icon: FileCheck,
      title: "Document verification",
      subtitle: "",
      desc: "Verification of degrees, registrations and required certificates",
    },
    {
      num: "6",
      icon: ClipboardList,
      title: "Join the programme",
      subtitle: "",
      desc: "Formal admission, orientation, induction and start of residency",
    },
  ];

  return (
    <section id="admissions" className="py-16 sm:py-20 bg-white scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              Admission &amp; Counselling
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A] mt-3 leading-relaxed">
              Admissions are entirely merit-based, through national entrance examinations and centralised counselling — there is no separate institutional entrance test and no management quota.
            </p>
          </div>

          {/* 5.4 Admission-pathway flow infographic (Figure 5: Horizontal stepper on desktop; vertical timeline on mobile) */}
          <div className="mb-14 bg-white p-6 sm:p-10 rounded-2xl border border-gray-300 shadow-sm">
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864] mb-8 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8862B]"></span>
              Admission Pathway Flow Infographic
            </h3>

            {/* Desktop Horizontal Stepper (hidden on mobile) */}
            <div className="hidden lg:flex items-center justify-between gap-2 relative">
              {steps.map((st, idx) => {
                const isStartOrEnd = idx === 0 || idx === steps.length - 1;
                const Icon = st.icon;
                return (
                  <div key={idx} className="flex items-center flex-1 last:flex-none">
                    {/* Step Card: Box styled exactly like Figure 5 wireframe */}
                    <div
                      className={`w-full max-w-[175px] h-36 rounded-xl border-2 p-4 flex flex-col items-center justify-center text-center transition-all duration-200 shadow-sm ${
                        isStartOrEnd
                          ? "bg-[#1F3864] border-[#1F3864] text-white"
                          : "bg-[#EAF0F7] border-[#1F3864] text-[#1F3864]"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 mb-2.5 ${
                          isStartOrEnd ? "text-[#C8862B]" : "text-[#2E75B6]"
                        }`}
                      />
                      <span
                        className={`font-serif font-bold text-xs sm:text-[13px] leading-snug ${
                          isStartOrEnd ? "text-white" : "text-[#1F3864]"
                        }`}
                      >
                        {st.title}
                      </span>
                      {st.subtitle && (
                        <span
                          className={`text-[11px] mt-1 block font-normal leading-tight ${
                            isStartOrEnd ? "text-slate-200" : "text-[#595959]"
                          }`}
                        >
                          {st.subtitle}
                        </span>
                      )}
                    </div>

                    {/* Blue connecting arrow between steps */}
                    {idx < steps.length - 1 && (
                      <div className="px-1.5 flex-shrink-0 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-[#2E75B6] stroke-[2.5]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Vertical Timeline (hidden on desktop) */}
            <div className="lg:hidden relative pl-6 border-l-2 border-[#2E75B6] space-y-6">
              {steps.map((st, idx) => {
                const isStartOrEnd = idx === 0 || idx === steps.length - 1;
                const Icon = st.icon;
                return (
                  <div key={idx} className="relative group">
                    {/* Timeline bullet dot */}
                    <div className="absolute -left-[31px] top-4 w-4 h-4 rounded-full bg-[#1F3864] border-2 border-white shadow"></div>

                    {/* Step card */}
                    <div
                      className={`rounded-xl border-2 p-4 shadow-sm flex items-start gap-3.5 ${
                        isStartOrEnd
                          ? "bg-[#1F3864] border-[#1F3864] text-white"
                          : "bg-[#EAF0F7] border-[#1F3864] text-[#1F3864]"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isStartOrEnd ? "bg-white/10 text-[#C8862B]" : "bg-white text-[#2E75B6] shadow-sm"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                              isStartOrEnd ? "bg-white/20 text-white" : "bg-white text-[#1F3864]"
                            }`}
                          >
                            Step {st.num}
                          </span>
                        </div>
                        <h4
                          className={`font-serif font-bold text-sm mt-1 leading-snug ${
                            isStartOrEnd ? "text-white" : "text-[#1F3864]"
                          }`}
                        >
                          {st.title}
                        </h4>
                        {st.subtitle && (
                          <p
                            className={`text-xs mt-0.5 ${
                              isStartOrEnd ? "text-slate-200" : "text-[#595959]"
                            }`}
                          >
                            {st.subtitle}
                          </p>
                        )}
                        <p
                          className={`text-xs mt-1.5 leading-relaxed ${
                            isStartOrEnd ? "text-slate-300" : "text-gray-700"
                          }`}
                        >
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Counselling Streams (Broad, Super-specialty, Post-diploma) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* 1. Broad-specialty DNB & Diploma */}
            <div className="bg-[#EAF0F7]/40 p-6 sm:p-7 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864]">
                  Broad-specialty DNB &amp; Diploma
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#1A1A1A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2E75B6] font-bold mt-1">&bull;</span>
                  <span>Appear for and qualify NEET-PG.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E75B6] font-bold mt-1">&bull;</span>
                  <span>Participate in the centralised counselling conducted by the Medical Counselling Committee (MCC) of the DGHS, Ministry of Health &amp; Family Welfare — All-India Open NBEMS seats are allotted alongside the 50% All-India-Quota MD/MS/Diploma seats.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2E75B6] font-bold mt-1">&bull;</span>
                  <span>On allotment, report to BVH and join after verification of original documents.</span>
                </li>
              </ul>
            </div>

            {/* 2. Super-specialty DrNB */}
            <div className="bg-[#EAF0F7]/40 p-6 sm:p-7 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white text-purple-700 flex items-center justify-center shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864]">
                  Super-specialty DrNB
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#1A1A1A]">
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold mt-1">&bull;</span>
                  <span>Appear for and qualify NEET-SS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold mt-1">&bull;</span>
                  <span>Participate in the common counselling conducted by the MCC of DGHS for DrNB and DM/MCh seats. DrNB super-specialty seats are All-India Open with no reservation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold mt-1">&bull;</span>
                  <span>On allotment, report to BVH for document verification and joining.</span>
                </li>
              </ul>
            </div>

            {/* 3. Post-diploma DNB */}
            <div className="bg-[#EAF0F7]/40 p-6 sm:p-7 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white text-amber-700 flex items-center justify-center shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864]">
                  Post-diploma DNB
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#1A1A1A]">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold mt-1">&bull;</span>
                  <span>Appear for and qualify DNB-PDCET, followed by the counselling conducted by NBEMS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold mt-1">&bull;</span>
                  <span>Report to BVH on official allotment for credential verification.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Seat Categories (for awareness) Card */}
          <div className="p-6 sm:p-7 bg-[#FFFBF3] border-l-4 border-[#C8862B] rounded-r-xl shadow-sm">
            <h3 className="font-serif font-bold text-base text-[#1F3864] mb-3">
              Seat categories (for awareness)
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-800 leading-relaxed">
              <p>
                <strong>All-India Open seats:</strong> The route applicable to candidates joining a private accredited institution such as BVH.
              </p>
              <p>
                <strong>In-service and Sponsored seats:</strong> Applicable at eligible Government / PSU / Railway / ESIC institutions for their in-service candidates.
              </p>
              <p className="text-gray-600 pt-1 border-t border-[#C8862B]/20">
                Reservation, where applicable, follows the Government of India's policy; the seat matrix and the detailed counselling handbook are published by MCC/NBEMS at the time of each counselling cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
