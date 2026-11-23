import Image from "next/image";
import { PLACEHOLDER_IMAGE } from "@/lib/constants";
import { GraduationCap, BookOpen, Stethoscope, Award, CheckCircle2 } from "lucide-react";

export default function PostgraduateEducationSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left 7 Columns: Text Content */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight leading-tight mb-6">
                Postgraduate Medical Education at BVH
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
                <p>
                  Bhaktivedanta Hospital &amp; Research Institute conducts postgraduate and post-doctoral training accredited by the <strong>National Board of Examinations in Medical Sciences (NBEMS), New Delhi</strong>. Our programmes are designed to develop clinically excellent, ethically grounded and research-capable specialists who can deliver preventive, promotive, curative and rehabilitative care in their chosen field.
                </p>
                <p className="text-sm sm:text-base text-[#595959]">
                  Training at BVH combines mainstream, evidence-based clinical practice with a culture of academic rigour — structured bedside teaching, case presentations, seminars, journal clubs, grand rounds, clinical audits and continuing medical education — all delivered by senior, experienced faculty across a wide range of specialties and super-specialties under one roof.
                </p>
              </div>
            </div>

            {/* Right 5 Columns: Institutional Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 aspect-[4/3]">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt="Postgraduate Medical Training at Bhaktivedanta Hospital"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3864]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/20">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#D5E8F0] block">
                    NBEMS Accredited Training
                  </span>
                  <span className="font-serif font-bold text-sm block">
                    Bhaktivedanta Hospital &amp; Research Institute
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
