import { FileDown, FileText, Shield, Award, Clock } from "lucide-react";

export default function DownloadsSection() {
  const downloads = [
    {
      title: "DNB & DrNB Prospectus (PDF)",
      desc: "[ to be added once content is finalised ].",
      badge: "Upcoming PDF",
      icon: FileDown,
    },
    {
      title: "Accreditation Certificates",
      desc: "[ NBEMS, NABH & NABL institutional certificates - placeholder ].",
      badge: "Certificates",
      icon: Shield,
    },
    {
      title: "Academic Brochure & Department Guides",
      desc: "[ Specialty wise resident guides & rotation brochures - placeholder ].",
      badge: "Brochures",
      icon: FileText,
    },
  ];

  return (
    <section id="downloads" className="py-16 sm:py-20 bg-white scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-2">
              Downloads
            </h2>
            <p className="text-sm text-[#595959]">
              Downloadable resources, official accreditation documentation, and academic prospectuses.
            </p>
          </div>

          {/* Download Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {downloads.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#2E75B6] transition group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#EAF0F7] text-[#1F3864] flex items-center justify-center group-hover:bg-[#1F3864] group-hover:text-white transition">
                        <Icon className="w-5 h-5 text-[#2E75B6] group-hover:text-white transition" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F3864] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Soon
                    </span>
                    <button
                      type="button"
                      disabled
                      className="px-4 py-2 bg-gray-100 text-gray-400 text-xs font-semibold rounded-lg cursor-not-allowed border border-gray-200 flex items-center gap-1.5"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      Download
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-[#595959] italic text-right">
            [ Any other downloadables - accreditation certificates, brochure - placeholders. ]
          </p>
        </div>
      </div>
    </section>
  );
}
