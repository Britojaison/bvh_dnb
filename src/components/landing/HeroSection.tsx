import Image from "next/image";
import { PLACEHOLDER_IMAGE } from "@/lib/constants";
import { ShieldCheck, ChevronRight, FileDown, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full text-white overflow-hidden py-20 sm:py-28 lg:py-36 border-b-4 border-[#C8862B]">
      {/* 
        Full-Width Background Banner Image (uses /images/placeholder.jpg from public)
        with explicit visual visibility and balanced overlay gradient
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src={PLACEHOLDER_IMAGE}
          alt="Bhaktivedanta Hospital Tertiary Care & Teaching Infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dual Gradient Overlay: Dark navy wash on the left for text contrast, allowing the facility image to be visible on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D33]/95 via-[#1F3864]/85 to-[#1F3864]/50"></div>
        <div className="absolute inset-0 bg-[#1F3864]/30 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-serif font-bold !text-white tracking-tight leading-[1.2] mb-6 drop-shadow-md">
            Train Where Medicine Meets Compassion — NBEMS-Accredited DNB &amp; DrNB Programmes at Bhaktivedanta Hospital &amp; Research Institute, Mumbai.
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-100 font-normal leading-relaxed mb-8 drop-shadow-sm max-w-2xl">
            A NABH-accredited tertiary-care teaching institute offering structured, competency-based postgraduate training across broad specialties, super-specialties and diploma programmes — with high clinical volumes, an active research ecosystem, and dedicated resident support.
          </p>

          {/* Primary and Secondary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-[#C8862B] text-white font-semibold text-sm sm:text-base hover:brightness-110 shadow-lg hover:shadow-xl transition group"
            >
              <span>Apply / Enquire about DNB &amp; DrNB Admissions</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Button 1: Download Prospectus */}
            <div className="relative group/btn">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-black/40 hover:bg-black/60 text-slate-100 hover:text-white border border-white/30 backdrop-blur-sm text-sm font-semibold transition"
                title="Prospectus will be available for download once finalised by BVH"
              >
                <FileDown className="w-4 h-4 text-[#D5E8F0]" />
                <span>Download Prospectus</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/20 text-[#D5E8F0] ml-1">
                  Soon
                </span>
              </button>
            </div>

            {/* Secondary Button 2: Watch our Programmes */}
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-black/30 hover:bg-black/50 text-white border border-white/30 backdrop-blur-sm text-sm font-semibold transition"
            >
              <Play className="w-4 h-4 text-[#C8862B] fill-[#C8862B]" />
              <span>Watch our Programmes</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
