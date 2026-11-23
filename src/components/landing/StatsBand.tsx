"use client";

import { useEffect, useRef, useState } from "react";
import {
  Eye,
  Activity,
  Syringe,
  Baby,
  Bed,
  GraduationCap,
  Sparkles,
  Layers,
  Users,
  Building2,
  Calendar
} from "lucide-react";

interface SpecStatItem {
  icon: any;
  value: number | null;
  suffix: string;
  displayText?: string;
  label: string;
}

// 6 stats exactly per Spec 5.1:
// Layout: 6 circular icon counters in 1 row (desktop); 2-per-row grid (mobile)
// Each item: Icon + bold number + short label
// Behaviour: Count-up animation on scroll into view
const SPEC_STATS: SpecStatItem[] = [
  {
    icon: Eye,
    value: 28600,
    suffix: "+",
    label: "Eye OPD / yr",
  },
  {
    icon: Activity,
    value: 15400,
    suffix: "+",
    label: "Eye surgeries",
  },
  {
    icon: Syringe,
    value: 7700,
    suffix: "+",
    label: "Anaesthesia cases",
  },
  {
    icon: Baby,
    value: 1100,
    suffix: "+",
    label: "Newborns / yr",
  },
  {
    icon: Bed,
    value: null,
    suffix: "",
    displayText: "[  ]",
    label: "Total beds",
  },
  {
    icon: GraduationCap,
    value: 8,
    suffix: "",
    label: "Programmes",
  },
];

// Supplementary figures to be supplied by BVH (Spec §4)
const BVH_SUPPLIED_PLACEHOLDERS = [
  { icon: Bed, label: "Total Hospital Beds", placeholder: "[ Total beds ]" },
  { icon: Layers, label: "ICU / NICU / PICU Beds", placeholder: "[ ICU/NICU/PICU beds ]" },
  { icon: Activity, label: "Operation Theatres", placeholder: "[ Number of OTs ]" },
  { icon: Users, label: "Total DNB/DrNB/DRD Seats", placeholder: "[ Total seats / session ]" },
  { icon: Building2, label: "Accredited Specialties", placeholder: "[ 8 DNB/DrNB/DRD Spokes ]" },
  { icon: Calendar, label: "PG Teaching Experience", placeholder: "[ Years of PG teaching ]" },
];

export default function StatsBand() {
  const [isVisible, setIsVisible] = useState(false);
  const bandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (bandRef.current) {
      observer.observe(bandRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats-band"
      ref={bandRef}
      className="py-16 sm:py-20 bg-white relative overflow-hidden scroll-mt-20 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          {/* Section Heading */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              Clinical Stats &amp; Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-[#595959] mt-2">
              Headline metrics at a glance — delivering high clinical volumes and procedural diversity for postgraduate medical residents.
            </p>
          </div>

          {/* 
            5.1 Stats Band (Icon Counters)
            - Layout: 6 circular icon counters in 1 row (desktop `lg:grid-cols-6`); 2-per-row grid (mobile `grid-cols-2`)
            - Each item: Icon + bold number + short label
            - Count-up animation on scroll into view
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-14 items-start justify-items-center">
            {SPEC_STATS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group w-full max-w-[160px]"
                >
                  {/* Circular / Oval Counter: Light tint fill with deep navy border */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#EAF0F7] border-2 border-[#1F3864] flex flex-col items-center justify-center p-2 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#2E75B6] group-hover:shadow-md">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2E75B6] mb-1 opacity-80 group-hover:text-[#C8862B] group-hover:opacity-100 transition-colors" />
                    <span className="font-serif font-bold text-lg sm:text-xl text-[#1F3864] tracking-tight">
                      {item.value !== null ? (
                        isVisible ? (
                          <AnimatedCounter end={item.value} suffix={item.suffix} />
                        ) : (
                          `0${item.suffix}`
                        )
                      ) : (
                        item.displayText
                      )}
                    </span>
                  </div>

                  {/* Short Label */}
                  <span className="mt-3 text-xs sm:text-sm font-semibold text-gray-700 leading-snug">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bottom Card: Supplementary Figures to be supplied by BVH */}
          <div className="bg-[#EAF0F7]/40 rounded-2xl p-6 border border-[#D5E8F0]">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
              <Sparkles className="w-4 h-4 text-[#C8862B]" />
              <h3 className="font-serif font-bold text-sm text-[#1F3864] uppercase tracking-wider">
                Figures to be supplied by BVH (no prior published base to apply +10%)
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {BVH_SUPPLIED_PLACEHOLDERS.map((pl, idx) => {
                const Icon = pl.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2 text-[#1F3864] mb-2">
                      <Icon className="w-4 h-4 text-[#C8862B]" />
                      <span className="text-xs font-medium text-gray-800">{pl.label}</span>
                    </div>
                    <span className="font-mono text-xs text-[#2E75B6] bg-[#EAF0F7] px-2 py-1 rounded text-center font-semibold">
                      {pl.placeholder}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}
