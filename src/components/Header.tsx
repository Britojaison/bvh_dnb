"use client";

import Link from "next/link";
import Image from "next/image";
import { LOGO_IMAGE } from "@/lib/constants";
import { Phone, Mail, ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#1F3864] text-white text-xs py-2.5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              NBEMS Accredited Postgraduate Medical Institute
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#D5E8F0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8862B]" />
              NABH &amp; NABL Accredited Hospital
            </span>
            <span className="hidden lg:inline opacity-30">|</span>
            <Link
              href="/education/dnb-drnb/nbems-mandatory-disclosures"
              className="hidden lg:inline-flex items-center gap-1 text-[#D5E8F0] hover:text-white font-medium underline underline-offset-2 transition"
            >
              NBEMS Mandatory Disclosures
            </Link>
          </div>

          <div className="flex items-center space-x-4 text-xs text-slate-200">
            <a href="tel:02228455555" className="flex items-center gap-1 hover:text-white transition">
              <Phone className="w-3 h-3 text-[#C8862B]" />
              <span>Emergency: <strong>022 2845 5555</strong></span>
            </a>
            <span className="hidden sm:inline opacity-30">|</span>
            <a href="mailto:dnb@bhaktivedantahospital.com" className="hover:text-white transition hidden sm:flex items-center gap-1">
              <Mail className="w-3 h-3 text-[#C8862B]" />
              <span>dnb@bhaktivedantahospital.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Clean Logo & Primary Academic CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/education/dnb-drnb" className="flex items-center group py-2">
            <div className="relative h-14 w-auto flex items-center">
              <Image
                src={LOGO_IMAGE}
                alt="Bhaktivedanta Hospital &amp; Research Institute Logo"
                width={280}
                height={65}
                priority
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#C8862B] text-white text-xs sm:text-sm font-semibold hover:brightness-105 shadow-sm hover:shadow transition whitespace-nowrap"
            >
              Apply / Enquire
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
