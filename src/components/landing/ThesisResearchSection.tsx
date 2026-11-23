import { Microscope, CheckCircle2, FileText, Award, FlaskConical, BookOpen, Layers } from "lucide-react";

export default function ThesisResearchSection() {
  const steps = [
    {
      num: "1",
      title: "Research Methodology & Biostatistics",
      desc: "Structured training in research methodology and biostatistics as part of the academic calendar.",
    },
    {
      num: "2",
      title: "Protocol Clearance (Ethics Committee)",
      desc: "Protocol development and review, with approval from BVH's registered Ethics Committee(s).",
    },
    {
      num: "3",
      title: "Guidance & Timely Submission",
      desc: "Guidance on data, documentation, analysis and writing, leading to timely submission of the thesis to NBEMS.",
    },
    {
      num: "4",
      title: "Thesis Acceptance (TAC)",
      desc: "Theses are assessed by NBEMS subject experts; an accepted thesis receives a Thesis Acceptance (TAC), which is a prerequisite for eligibility for the Final Examination.",
    },
    {
      num: "5",
      title: "Indexed Journal Publication",
      desc: "Support for publishing thesis-based work in indexed journals — building each resident's academic profile.",
    },
  ];

  return (
    <section id="thesis-research" className="py-16 sm:py-20 bg-white scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              Thesis &amp; Research
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A] mt-3 leading-relaxed">
              A thesis is an integral, mandatory component of DNB and DrNB training (diploma and FNB programmes excepted). At BVH, residents are supported through every stage by a dedicated team and the institute's Medical Research Department:
            </p>
          </div>

          {/* 5-Step Thesis Journey Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm flex flex-col justify-between hover:border-[#2E75B6] transition group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#EAF0F7] text-[#1F3864] flex items-center justify-center font-bold text-sm font-mono group-hover:bg-[#1F3864] group-hover:text-white transition">
                      0{st.num}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-[#2E75B6]" />
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864] mb-2 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Research Support Card */}
            <div className="bg-gradient-to-br from-[#1F3864] to-[#14233e] text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#C8862B]">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                  Medical Research Department
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Dual registered Institutional Ethics Committees (IEC) recognized by CDSCO &amp; DHR with extensive GCP clinical trial experience.
                </p>
              </div>
              <span className="text-[11px] text-[#D5E8F0] font-mono mt-4 block">
                Dedicated Biostatistical Mentorship
              </span>
            </div>
          </div>

          {/* Research Scale Statement Placeholder (Spec §11) */}
          <div className="p-5 bg-[#FFFBF3] border-l-4 border-[#C8862B] rounded-r-xl shadow-sm">
            <h4 className="font-serif font-bold text-sm text-[#1F3864] mb-1">
              BVH Institutional Research Scale:
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              [ <em>Add a one-line statement of BVH's research scale once confirmed — e.g. number of publications, ongoing trials, research staff — placeholders.</em> ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
