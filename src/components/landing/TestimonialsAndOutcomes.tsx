import Image from "next/image";
import Link from "next/link";
import { PLACEHOLDER_IMAGE } from "@/lib/constants";
import { Award, GraduationCap, Video, Quote } from "lucide-react";

export default function TestimonialsAndOutcomes() {
  return (
    <section id="testimonials" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Outcomes Dashboard (§15) */}
        <div className="bg-[#1F3864] text-white rounded-2xl p-8 mb-16 shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D5E8F0]">
                  Academic Outcomes &amp; Achievements
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold !text-white mt-1">
                  Proven Excellence in National Examinations &amp; Clinical Careers
                </h2>
              </div>
              <span className="text-xs text-slate-300 mt-2 md:mt-0 font-mono">
                [Institution-wide verified figures]
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C8862B] block">
                  100%
                </span>
                <span className="text-xs text-slate-200 mt-1 block font-medium">
                  Exit Examination Pass Rate [verify]
                </span>
              </div>
              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-white block">
                  150+
                </span>
                <span className="text-xs text-slate-200 mt-1 block font-medium">
                  Alumni Specialists Trained to Date [verify]
                </span>
              </div>
              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-white block">
                  50+
                </span>
                <span className="text-xs text-slate-200 mt-1 block font-medium">
                  Thesis Publications in Indexed Journals
                </span>
              </div>
              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C8862B] block">
                  Top Tier
                </span>
                <span className="text-xs text-slate-200 mt-1 block font-medium">
                  Alumni in Lead Consultant &amp; Fellowship Roles
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Resident & Faculty Voices (§16) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E75B6]">
              Resident &amp; Faculty Voices
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#1F3864] mt-1">
              Testimonials from the Academic Community
            </h2>
            <p className="text-sm text-[#595959] mt-2">
              Hear from our teaching faculty, current residents, and alumni practicing across prestigious institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Faculty */}
            <div className="bg-[#EAF0F7]/40 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-[#2E75B6]/40 mb-3" />
                <p className="text-sm italic text-gray-700 leading-relaxed mb-6">
                  "Our goal at Bhaktivedanta Hospital is not only to impart top-tier clinical competencies and procedural confidence, but to nurture doctors who treat every patient with empathy, dignity, and unwavering ethical dedication."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image src={PLACEHOLDER_IMAGE} alt="Faculty Headshot" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1F3864]">Senior Faculty Guide</h4>
                  <span className="text-[11px] text-[#595959] block">Department HOD &amp; Post-Grad Teacher</span>
                </div>
              </div>
            </div>

            {/* Card 2: Resident */}
            <div className="bg-[#EAF0F7]/40 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-[#2E75B6]/40 mb-3" />
                <p className="text-sm italic text-gray-700 leading-relaxed mb-6">
                  "The volume of varied cases and the structured weekly teaching schedule prepare you comprehensively for the NBEMS exit exams. Having approachable mentors and a supportive hospital culture makes a world of difference during intense residency."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image src={PLACEHOLDER_IMAGE} alt="Resident Headshot" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1F3864]">DNB Resident Doctor</h4>
                  <span className="text-[11px] text-[#595959] block">Final Year Broad-Specialty Trainee</span>
                </div>
              </div>
            </div>

            {/* Card 3: Alumnus */}
            <div className="bg-[#EAF0F7]/40 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-[#2E75B6]/40 mb-3" />
                <p className="text-sm italic text-gray-700 leading-relaxed mb-6">
                  "The research mentorship and hands-on surgical/clinical autonomy I gained at BVH laid the foundation for my super-specialty career. The values instilled here stay with you for life."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image src={PLACEHOLDER_IMAGE} alt="Alumnus Headshot" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1F3864]">DNB Alumnus Specialist</h4>
                  <span className="text-[11px] text-[#595959] block">Consultant &amp; Super-Specialist Fellow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Placeholder Strip (§6 Visual Asset Plan) */}
          <div className="mt-8 p-4 bg-[#FFFBF3] rounded-xl border border-[#C8862B]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#595959]">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-[#C8862B]" />
              <span>Full faculty and resident video interview documentaries (16:9 captured shoot) will be embedded with transcripts upon release.</span>
            </div>
            <a href="#enquiry-form" className="font-semibold text-[#1F3864] hover:underline whitespace-nowrap">
              Contact Academic Cell &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
