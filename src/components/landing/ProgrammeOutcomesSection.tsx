import { Trophy, Award, Users, BookOpen, GraduationCap, MapPin, Sparkles } from "lucide-react";

export default function ProgrammeOutcomesSection() {
  return (
    <section id="outcomes" className="py-16 sm:py-20 bg-[#EAF0F7]/50 scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-3">
              Programme Outcomes
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
              Our results speak to the quality of training at BVH.
            </p>
          </div>

          {/* Results Dashboard: Headline Numbers (Spec §15) */}
          <div className="bg-[#1F3864] text-white rounded-2xl p-6 sm:p-8 shadow-lg mb-8 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3 mb-6">
              <h3 className="font-serif font-bold text-lg text-white">
                Institution-wide outcomes (to be supplied)
              </h3>
              <span className="text-xs text-[#D5E8F0] font-mono">
                [ BVH verified figures to be supplied ]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stat 1 */}
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15">
                <div className="w-8 h-8 rounded-lg bg-[#D5E8F0] text-[#1F3864] flex items-center justify-center mb-3">
                  <Award className="w-4 h-4 text-[#1F3864]" />
                </div>
                <div className="text-2xl font-serif font-bold text-[#C8862B] mb-1">
                  [ % ]
                </div>
                <span className="text-xs font-semibold text-white block">
                  Exit (Final) examination pass rate
                </span>
                <span className="text-[11px] text-[#D5E8F0]/70 font-mono mt-1 block">
                  [ placeholder ]
                </span>
              </div>

              {/* Stat 2 */}
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15">
                <div className="w-8 h-8 rounded-lg bg-[#D5E8F0] text-[#1F3864] flex items-center justify-center mb-3">
                  <Users className="w-4 h-4 text-[#1F3864]" />
                </div>
                <div className="text-2xl font-serif font-bold text-white mb-1">
                  [ number ]
                </div>
                <span className="text-xs font-semibold text-white block">
                  DNB / DrNB alumni trained to date
                </span>
                <span className="text-[11px] text-[#D5E8F0]/70 font-mono mt-1 block">
                  [ placeholder ]
                </span>
              </div>

              {/* Stat 3 */}
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15">
                <div className="w-8 h-8 rounded-lg bg-[#D5E8F0] text-[#1F3864] flex items-center justify-center mb-3">
                  <BookOpen className="w-4 h-4 text-[#1F3864]" />
                </div>
                <div className="text-2xl font-serif font-bold text-white mb-1">
                  [ publications ]
                </div>
                <span className="text-xs font-semibold text-white block">
                  Resident research output
                </span>
                <span className="text-[11px] text-[#D5E8F0]/70 font-mono mt-1 block">
                  [ thesis publications / presentations — placeholder ]
                </span>
              </div>

              {/* Stat 4 */}
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15">
                <div className="w-8 h-8 rounded-lg bg-[#D5E8F0] text-[#1F3864] flex items-center justify-center mb-3">
                  <MapPin className="w-4 h-4 text-[#1F3864]" />
                </div>
                <div className="text-2xl font-serif font-bold text-[#C8862B] mb-1">
                  [ Placements ]
                </div>
                <span className="text-xs font-semibold text-white block">
                  Where our alumni are now
                </span>
                <span className="text-[11px] text-[#D5E8F0]/70 font-mono mt-1 block">
                  [ notable placements, fellowships, faculty/consultant positions — placeholders ]
                </span>
              </div>
            </div>
          </div>

          {/* Resident Achievements Card (Seed Examples to be Expanded) */}
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
              <Trophy className="w-5 h-5 text-[#C8862B]" />
              <h3 className="font-serif font-bold text-base text-[#1F3864]">
                Resident achievements (seed examples to be expanded)
              </h3>
            </div>

            <div className="p-4 bg-[#FFFBF3] border-l-4 border-[#C8862B] rounded-r-lg space-y-2 text-xs sm:text-sm text-gray-800">
              <p>
                <strong>Dr. [name]</strong> — <span>[award/recognition], [conference/year].</span> <span className="text-[#595959] italic">[ Replace and expand with the current, complete list. ]</span>
              </p>
              <p className="text-xs text-[#2E75B6] italic pt-1">
                <em>[[ Pull forward the strongest, most recent achievements; refresh annually. ]]</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
