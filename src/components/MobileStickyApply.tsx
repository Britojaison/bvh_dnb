"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function MobileStickyApply() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button on mobile after scrolling past hero (~350px)
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl md:hidden transition-all duration-300">
      <a
        href="#enquiry-form"
        className="w-full py-3 px-5 bg-[#C8862B] text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-md hover:brightness-105 active:scale-[0.99] transition text-sm"
      >
        <span>Apply / Enquire</span>
        <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  );
}
