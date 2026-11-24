'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DNB_PROGRAMMES } from '@/lib/constants';
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Layers,
  Sparkles,
  ExternalLink,
  Menu,
  X,
  Stethoscope,
} from 'lucide-react';

export default function LateralProgrammesMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  // If on main landing or non-dnb pages, we can still show or hide as needed
  const isSpecialtyPage = pathname.startsWith('/education/dnb-drnb/') && pathname !== '/education/dnb-drnb';

  return (
    <>
      {/* =========================================================================
          DESKTOP PERSISTENT LATERAL QUICK-SWITCH MENU (xl+ screen)
          Fixed to the left edge, floating cleanly with toggle button to collapse/expand
      ========================================================================= */}
      <aside
        className={`hidden xl:block fixed left-0 top-36 z-40 transition-all duration-300 ease-in-out ${
          isCollapsed ? '-translate-x-[260px]' : 'translate-x-0'
        }`}
        aria-label="Programmes Quick Lateral Movement"
      >
        <div className="flex items-start">
          {/* Main Sidebar Box */}
          <div className="w-[260px] bg-white/95 backdrop-blur-md border-y border-r border-[#D2DCE8] rounded-r-2xl shadow-xl shadow-[#0F1D33]/10 p-4">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EAF0F7]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#1F3864] text-white flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-[#C8862B]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F3864]">
                    Programmes
                  </h3>
                  <p className="text-[10px] text-gray-500 font-medium">8 Accredited Spokes</p>
                </div>
              </div>

              <Link
                href="/education/dnb-drnb"
                className="text-[11px] font-semibold text-[#2E75B6] hover:text-[#1F3864] transition"
                title="Return to Main Hub"
              >
                Hub &rarr;
              </Link>
            </div>

            {/* List of 8 Specialty Spokes */}
            <nav className="space-y-1">
              {DNB_PROGRAMMES.map((prog) => {
                const isActive = pathname === prog.slug;
                return (
                  <Link
                    key={prog.slug}
                    href={prog.slug}
                    className={`group flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-all duration-150 ${
                      isActive
                        ? 'bg-[#1F3864] text-white shadow-sm font-semibold'
                        : 'text-[#1C2D4A] hover:bg-[#EAF0F7]/70 hover:text-[#1F3864]'
                    }`}
                  >
                    <span className="truncate pr-2">{prog.shortTitle}</span>
                    <span
                      className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-mono ${
                        isActive
                          ? 'bg-[#C8862B] text-white'
                          : 'bg-gray-100 text-gray-500 group-hover:bg-[#D5E8F0] group-hover:text-[#1F3864]'
                      }`}
                    >
                      {prog.duration}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Bottom quick link */}
            <div className="mt-4 pt-3 border-t border-[#EAF0F7] flex items-center justify-between text-[11px]">
              <Link
                href="/education/dnb-drnb/nbems-mandatory-disclosures"
                className="text-gray-500 hover:text-[#1F3864] transition truncate flex items-center gap-1"
              >
                <span>Mandatory Disclosures</span>
              </Link>
            </div>
          </div>

          {/* Toggle Tab Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="mt-6 bg-[#1F3864] text-white px-2 py-3 rounded-r-lg shadow-lg hover:bg-[#152747] transition flex flex-col items-center gap-1.5 border-y border-r border-[#C8862B]/50"
            title={isCollapsed ? 'Expand Programmes Menu' : 'Collapse Programmes Menu'}
          >
            {isCollapsed ? (
              <>
                <ChevronRight className="w-4 h-4 text-[#C8862B]" />
                <span
                  className="text-[10px] uppercase font-bold tracking-widest text-white [writing-mode:vertical-rl] rotate-180 py-1"
                >
                  Programmes
                </span>
              </>
            ) : (
              <>
                <ChevronLeft className="w-4 h-4 text-[#C8862B]" />
                <span
                  className="text-[10px] uppercase font-bold tracking-widest text-white [writing-mode:vertical-rl] rotate-180 py-1"
                >
                  Close
                </span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* =========================================================================
          MOBILE / TABLET LATERAL QUICK-SWITCH PILL & DRAWER (< xl screens)
      ========================================================================= */}
      <div className="xl:hidden fixed left-3 top-24 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F3864] text-white text-xs font-semibold shadow-lg hover:bg-[#152747] border border-[#C8862B]/60 transition"
          aria-label="Open Programmes Menu"
        >
          <Layers className="w-3.5 h-3.5 text-[#C8862B]" />
          <span>Programmes</span>
        </button>
      </div>

      {/* Mobile Drawer Modal Backdrop */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          {/* Drawer Panel */}
          <div
            className="w-72 max-w-[85vw] h-full bg-white shadow-2xl p-5 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1F3864] text-white flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[#C8862B]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F3864]">Programmes</h3>
                    <p className="text-xs text-gray-500">Quick Lateral Switch</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-100 text-gray-500"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-4">
                <Link
                  href="/education/dnb-drnb"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-xs font-bold transition ${
                    pathname === '/education/dnb-drnb'
                      ? 'bg-[#1F3864] text-white'
                      : 'bg-[#EAF0F7] text-[#1F3864] hover:bg-[#D5E8F0]'
                  }`}
                >
                  &larr; Main DNB / DrNB Overview Hub
                </Link>
              </div>

              <div className="space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-2">
                  8 Accredited Specialties
                </p>
                {DNB_PROGRAMMES.map((prog) => {
                  const isActive = pathname === prog.slug;
                  return (
                    <Link
                      key={prog.slug}
                      href={prog.slug}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs transition ${
                        isActive
                          ? 'bg-[#1F3864] text-white font-semibold shadow-sm'
                          : 'text-[#1C2D4A] hover:bg-[#EAF0F7] font-medium'
                      }`}
                    >
                      <span className="truncate pr-2">{prog.title}</span>
                      <span
                        className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-mono ${
                          isActive
                            ? 'bg-[#C8862B] text-white'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {prog.duration}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-gray-200 text-xs">
              <Link
                href="/education/dnb-drnb/nbems-mandatory-disclosures"
                onClick={() => setIsOpen(false)}
                className="block py-1 text-[#2E75B6] hover:underline font-medium"
              >
                NBEMS Mandatory Disclosures &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
