"use client";

import { useState } from "react";
import {
  ChevronDown,
  Scale,
  ShieldAlert,
  HeartHandshake,
  UserCheck,
  Calendar,
  Clock,
  Home,
  BookOpen,
  Shield,
  Sparkles,
  Phone,
  Mail
} from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  icon: any;
  content: React.ReactNode;
}

export default function ComplianceAccordion() {
  const [openItem, setOpenItem] = useState<string | null>("14.1");

  const items: AccordionItem[] = [
    {
      id: "14.1",
      title: "Grievance Redressal",
      icon: Scale,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
          <p>
            A constituted institutional Grievance Redressal Committee receives and resolves resident grievances in a time-bound, confidential and impartial manner.
          </p>
          <div className="p-3.5 bg-[#EAF0F7] rounded-xl text-[#1F3864] font-medium border border-[#D5E8F0]">
            Clear escalation: department/mentor level &rarr; Academic Cell / DNB Coordinator &rarr; Grievance Redressal Committee &rarr; institutional leadership, with recourse to NBEMS where applicable.
          </div>
          <p className="text-[#595959]">
            Committee composition and contact: <span className="italic font-mono text-xs">[ names, designations, email, phone — placeholders ].</span>
          </p>
          <p className="text-[#595959]">
            How to raise a grievance: <span className="italic font-mono text-xs">[ describe the submission channel — email / form / register — placeholder ].</span>
          </p>
        </div>
      ),
    },
    {
      id: "14.2",
      title: "Anti-Ragging",
      icon: ShieldAlert,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
          <p>
            BVH maintains a strict zero-tolerance policy on ragging in line with UGC/NMC anti-ragging regulations.
          </p>
          <p>
            A constituted Anti-Ragging Committee and Anti-Ragging Squad monitor, prevent and act on any incident.
          </p>
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-1 text-red-900">
            <div className="font-serif font-bold text-sm">
              National Anti-Ragging Helpline (24x7)
            </div>
            <div className="font-mono font-bold text-base text-red-700">
              1800-180-5522 | helpline@antiragging.in
            </div>
          </div>
          <p className="text-[#595959]">
            Institutional anti-ragging contact: <span className="italic font-mono text-xs">[ name, designation, phone, email — placeholder ].</span>
          </p>
        </div>
      ),
    },
    {
      id: "14.3",
      title: "Prevention of Sexual Harassment (PoSH)",
      icon: HeartHandshake,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
          <p>
            An Internal Complaints Committee (ICC) is constituted under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.
          </p>
          <p>
            Complaints are handled confidentially, fairly and within statutory timelines.
          </p>
          <p className="text-[#595959]">
            ICC Presiding Officer and members, and contact details: <span className="italic font-mono text-xs">[ placeholders ].</span>
          </p>
        </div>
      ),
    },
    {
      id: "14.4",
      title: "Code of Conduct & Professional Ethics",
      icon: UserCheck,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
          <p>
            Residents are expected to uphold the highest standards of professional, ethical and patient-centred conduct, in line with NMC professional conduct regulations.
          </p>
          <p>
            Orientation on medical ethics, patient rights, confidentiality and documentation forms part of the academic programme.
          </p>
          <p className="text-[#595959]">
            <span className="italic font-mono text-xs">[ Link to / summarise BVH's resident code of conduct — placeholder. ]</span>
          </p>
        </div>
      ),
    },
    {
      id: "14.5",
      title: "Leave Policy",
      icon: Calendar,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
          <p>
            Leave is granted as per NBEMS leave guidelines; stipend continues during eligible leave.
          </p>
          <p>
            Leave availed in excess of the prescribed limit extends the training period correspondingly and may affect eligibility for the Final Examination.
          </p>
          <p className="text-[#595959]">
            <span className="italic font-mono text-xs">[ Add BVH-specific leave details — casual/academic/maternity leave, application process — placeholders. ]</span>
          </p>
        </div>
      ),
    },
    {
      id: "14.6",
      title: "Duty Hours & Working Conditions",
      icon: Clock,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
          <p>
            Duty rosters are structured to balance rigorous clinical exposure with resident well-being and safe patient care.
          </p>
          <p className="text-[#595959]">
            <span className="italic font-mono text-xs">[ State BVH's duty-hour framework, on-call and rest provisions — placeholders. ]</span>
          </p>
        </div>
      ),
    },
    {
      id: "14.7",
      title: "Accommodation & Living",
      icon: Home,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
          <p className="text-[#595959]">
            <span className="italic font-mono text-xs">[ Hostel availability, single/shared rooms, capacity, on-/off-campus, duty rooms, mess/canteen, and whether accommodation is free or charged (charges, if any, are capped per NBEMS) — placeholders. ]</span>
          </p>
          <p className="text-xs text-[#2E75B6]">
            <em>[[ Note: Real hostel, duty-room, mess and campus photographs will be updated from the scheduled shoot. ]]</em>
          </p>
        </div>
      ),
    },
    {
      id: "14.8",
      title: "Library & Learning Resources",
      icon: BookOpen,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
          <p>
            A well-equipped library with current textbooks, journals and periodicals, plus e-books and e-journals, accessible to all DNB/DrNB residents.
          </p>
          <p>
            Computing, internet and access to evidence-based resources for academics and research.
          </p>
          <p className="text-[#595959]">
            <span className="italic font-mono text-xs">[ Add library hours, seating, digital-library details — placeholders. ]</span>
          </p>
        </div>
      ),
    },
    {
      id: "14.9",
      title: "Health, Safety & Insurance",
      icon: Shield,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
          <p className="text-[#595959]">
            <span className="italic font-mono text-xs">[ Resident health cover / medical benefits, occupational-safety provisions, immunisation, and any insurance — placeholders. ]</span>
          </p>
        </div>
      ),
    },
    {
      id: "14.10",
      title: "Mentorship & Counselling Support",
      icon: Sparkles,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
          <p>
            Each resident is assigned a faculty guide/mentor who oversees academic progress and logbook review.
          </p>
          <p className="text-[#595959]">
            <span className="italic font-mono text-xs">[ Add details of academic counselling, wellness/psychological support, and pastoral/spiritual-care support available to residents — placeholders. ]</span>
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="compliance" className="py-16 sm:py-20 bg-[#EAF0F7]/50 scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-3">
              Compliance, Resident Welfare &amp; Support
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
              BVH is committed to a safe, fair and supportive training environment that fully complies with NBEMS, NMC and statutory requirements. The mechanisms below protect and support every trainee.
            </p>
          </div>

          {/* All 10 Accordion Items (14.1 to 14.10) */}
          <div className="space-y-3">
            {items.map((item) => {
              const Icon = item.icon;
              const isOpen = openItem === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? null : item.id)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#EAF0F7] text-[#1F3864] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#2E75B6]" />
                      </div>
                      <span className="font-serif font-bold text-base text-[#1F3864]">
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#2E75B6]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50/40">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
