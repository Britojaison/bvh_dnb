"use client";

import { useState } from "react";
import Image from "next/image";
import { PLACEHOLDER_IMAGE } from "@/lib/constants";
import { Play, Quote, X, Video } from "lucide-react";

interface TestimonialCard {
  role: string;
  speaker: string;
  designation: string;
  quote: string;
  videoTitle: string;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    role: "Faculty",
    speaker: "Faculty testimonial — [ name, designation ]",
    designation: "[ Department HOD / PG Teacher ]",
    quote: "“[ short pull-quote ]”",
    videoTitle: "Faculty Perspective — Postgraduate Clinical Training at BVH",
  },
  {
    role: "Resident",
    speaker: "Resident testimonial — [ name, specialty, batch ]",
    designation: "[ DNB / DrNB Resident Doctor ]",
    quote: "“[ short pull-quote ]”",
    videoTitle: "Resident Journey — Daily Academics & Hands-on Exposure",
  },
  {
    role: "Alumnus",
    speaker: "Alumnus testimonial — [ name, current position ]",
    designation: "[ Consultant / Super-Specialist Fellow ]",
    quote: "“[ short pull-quote ]”",
    videoTitle: "Alumni Reflection — Foundation for a Super-Specialty Career",
  },
];

export default function VoicesSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-[#EAF0F7]/50 scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-2">
              Resident &amp; Faculty Voices
            </h2>
            <p className="text-sm text-[#595959]">
              Real perspectives from our teaching faculty, current resident doctors, and alumni.
            </p>
          </div>

          {/* Testimonial Wall Grid: Video Thumbnail Cards + Pull-Quotes (Spec §16) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#EAF0F7]/40 rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition group"
              >
                {/* 16:9 Video Thumbnail that opens lightbox */}
                <div
                  className="relative aspect-video bg-gray-900 cursor-pointer overflow-hidden group/thumb"
                  onClick={() => setActiveVideo(t.videoTitle)}
                >
                  <Image
                    src={PLACEHOLDER_IMAGE}
                    alt={t.videoTitle}
                    fill
                    className="object-cover opacity-80 group-hover/thumb:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#C8862B] text-white flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded text-[11px] text-white font-medium truncate">
                    {t.videoTitle}
                  </div>
                </div>

                {/* Text Pull-Quote & Speaker Info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <Quote className="w-7 h-7 text-[#2E75B6]/40 mb-2" />
                    <p className="text-base sm:text-lg italic font-serif text-[#1F3864] leading-relaxed">
                      {t.quote}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200/80">
                    <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#D5E8F0] text-[#1F3864] mb-1">
                      {t.role}
                    </span>
                    <h3 className="font-serif font-bold text-sm text-[#1F3864]">
                      {t.speaker}
                    </h3>
                    <p className="text-xs text-[#595959]">
                      {t.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#2E75B6] italic text-center">
            <em>[[ Note: Testimonial films will be embedded with transcripts upon final release. Click any card to preview lightbox. ]]</em>
          </p>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-[#1F3864] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <div className="flex items-center justify-between p-4 bg-[#14233e] border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-[#C8862B]" />
                <span className="font-serif font-bold text-sm sm:text-base">{activeVideo}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10 text-center text-white">
              <div className="relative aspect-video max-w-xl mx-auto rounded-xl overflow-hidden mb-6 bg-black">
                <Image src={PLACEHOLDER_IMAGE} alt="Video player preview" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <Play className="w-14 h-14 text-[#C8862B] mb-2" />
                  <span className="text-sm font-semibold">Video Documentary from 10 July Shoot</span>
                  <span className="text-xs text-slate-300 mt-1">[ Video film will load here with captions &amp; downloadable transcript ]</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="px-6 py-2 bg-[#C8862B] text-white text-xs font-semibold rounded-lg hover:brightness-105 transition"
              >
                Close Lightbox
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
