'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  ChevronDown,
  Award,
  CheckCircle2,
  FileText,
  UserCheck,
  Building2,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Play,
  Phone,
  Mail,
  User,
  ExternalLink,
  ShieldCheck,
  Layers,
  Sparkles,
  Zap,
  Activity,
  Heart,
  Stethoscope,
  Microscope,
} from 'lucide-react';

interface AcademicScheduleItem {
  day: string;
  activity: string;
}

const academicSchedule: AcademicScheduleItem[] = [
  {
    day: '[ Confirm ]',
    activity: "[ Provide the department's current weekly academic schedule — the PPT did not include a weekly timetable. ]",
  },
];

interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  photo?: string;
  isHod?: boolean;
}

const hodData: FacultyMember = {
  name: 'Dr. Sandeep Patil',
  designation: 'HOD, Cardiology & Consultant Interventional Cardiologist',
  qualification: 'MD (Internal Medicine), DNB (Internal Medicine), DM (Cardiology), FESC',
  experience: '15 years+',
  isHod: true,
};

const facultyList: FacultyMember[] = [
  {
    name: 'Dr. Harminder Singh',
    designation: 'Consultant Interventional Cardiologist',
    qualification: 'MD (Medicine), DM (Cardiology – AIIMS), FACC, FCSI, FESC',
    experience: '40 years+',
  },
  {
    name: 'Dr. Nitinkumar Abdagire',
    designation: 'Consultant Interventional Cardiologist',
    qualification: 'MD, DM (Cardiology), DNB (Cardiology)',
    experience: '5 years+',
  },
  {
    name: 'Dr. Yogesh Shilimkar',
    designation: 'Associate Consultant, Cardiology',
    qualification: 'MBBS, MD (General Medicine), DM (Cardiology)',
    experience: '3 years+',
  },
];

export default function CardiologyPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-[#1C2D4A]">
      {/* SECTION 1: Department Banner */}
      <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-gradient-to-r from-[#0F1D33]/95 via-[#1F3864]/90 to-[#1F3864]/80 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 mix-blend-multiply opacity-30">
          <Image
            src="/images/department-cardiology.jpg"
            alt="Siemens Artis Zee Cardiac Cath-Lab at BVH"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 mb-4 font-medium flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/education/dnb-drnb" className="hover:text-white transition">Postgraduate Medical Education</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#C8862B] font-semibold">DrNB Cardiology</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide uppercase text-blue-100 mb-6">
            <Heart className="w-4 h-4 text-[#C8862B]" />
            NBEMS Accredited Super-Specialty Programme
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            DrNB Cardiology
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/90 max-w-4xl font-normal leading-relaxed mb-8">
            Three-year, NBEMS-accredited super-specialty training in a high-volume interventional cardiology department serving since 1998.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#apply-enquire"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#C8862B] text-white font-semibold text-base shadow-lg hover:bg-[#b07424] transition duration-200"
            >
              Apply / Enquire
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#programme-details"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold text-base hover:bg-white/20 transition duration-200"
            >
              Programme Details
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: About the Department */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-6">
              About the Department
            </h2>
            <div className="prose prose-lg text-[#1C2D4A]/80 space-y-4 leading-relaxed font-normal">
              <p>
                The Department of Cardiology at Bhaktivedanta Hospital & Research Institute has been serving since 1998, with its cath-lab inaugurated in 2013. Cardiology services are delivered at BVH, Mira Road (E), with an additional OPD at Sheth P. V. Doshi Hospital, Mira Road (E).
              </p>
              <p>
                The department offers a full spectrum of interventional cardiology in a high-volume setting, supported by modern catheterisation, diagnostic and critical-care infrastructure and an academically active faculty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Programme at BVH */}
      <section id="programme-details" className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-y border-[#D2DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              The Programme at BVH
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Key administrative, accreditation, and curriculum attributes of the DrNB Cardiology super-specialty programme.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-[#D2DCE8] overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1F3864] text-white text-sm sm:text-base font-semibold">
                    <th className="py-4 px-6 w-1/3">Attribute</th>
                    <th className="py-4 px-6 w-2/3">Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                  <tr className="hover:bg-gray-50/70 transition">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Programme</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">DrNB Cardiology</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition bg-gray-50/30">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Level</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">Super-specialty (Post-MD/DNB feeder)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Duration</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">3 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition bg-gray-50/30">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Seats per session</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">[seats — placeholder]</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Entrance</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">NEET-SS</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition bg-gray-50/30">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">NBEMS accreditation status</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">[accredited last year — confirm exact date/validity]</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Commencement session</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">[confirm session]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50/80 border-l-4 border-[#1F3864] p-5 rounded-r-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm sm:text-base text-[#1C2D4A]/90 font-medium">
              Admission is merit-based through NEET-SS and centralised counselling (MCC of DGHS). See the main DNB & DrNB page for the full pathway, stipend, fees and welfare.
            </p>
            <Link
              href="/education/dnb-drnb"
              className="inline-flex items-center text-sm font-semibold text-[#1F3864] hover:text-[#C8862B] whitespace-nowrap transition"
            >
              View main landing page
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: Why Train in Cardiology at BVH */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              Why Train in Cardiology at BVH
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Distinguishing clinical, interventional, and academic pillars that define our super-specialty training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                High-volume interventional cardiology exposure, including complex PCI and CTO work.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                A modern cath-lab — Siemens Artis Zee (inaugurated by former President Dr. A. P. J. Abdul Kalam), with an additional Siemens Artis One planned.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <Activity className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                Comprehensive non-invasive diagnostics — multiple 2D-echo/colour-Doppler systems, TMT, Holter and ABPM.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                An academically vibrant department hosting workshops with international proctors and CME programmes.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
            <span className="font-semibold text-[#1F3864]">Numbers to confirm: </span>
            [ Add metrics — annual angiographies/angioplasties, device implants — placeholders. ]
          </div>
        </div>
      </section>

      {/* SECTION 5: Clinical Exposure & Caseload */}
      <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-y border-[#D2DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              Clinical Exposure & Caseload
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Published inpatient and outpatient volumes backing super-specialty clinical training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-1">
                In-patients / year
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#1F3864]">
                1,650+
              </div>
              <p className="text-xs text-gray-500 mt-2">
                [verify; PPT 2023: ~1,500]
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-1">
                Out-patients / year
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#1F3864]">
                8,030+
              </div>
              <p className="text-xs text-gray-500 mt-2">
                [verify; PPT 2023: ~7,300]
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-1">
                Department beds
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#1F3864]">
                20 Beds
              </div>
              <p className="text-xs text-gray-500 mt-2">
                (ICCU 12 + IPD 8). [verify]
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-2">
              Interventional & Diagnostic Exposure
            </h3>
            <p className="text-base text-[#1C2D4A] font-medium leading-relaxed">
              Interventional & diagnostic exposure: coronary angiography & angioplasty (incl. complex PCI/CTO), temporary pacing, IABP support, and the full non-invasive work-up (2D echo with TEE, TMT, Holter, ABPM).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Facilities & Infrastructure */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              Facilities & Infrastructure
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Advanced catheterisation suites, critical care monitoring, and diagnostic systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-[#C8862B]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F3864] mb-2">
                Cardiac Catheterisation Suite
              </h3>
              <p className="text-sm sm:text-base text-[#1C2D4A]/80 leading-relaxed mb-3">
                Siemens Artis Zee cardiac cath-lab machine (inaugurated by former President Dr. A. P. J. Abdul Kalam); additional Siemens Artis One (with 3D processing, SENSIS vibe) planned. <span className="text-xs text-gray-500 font-normal">[ confirm installation status ]</span>
              </p>
              <p className="text-xs sm:text-sm text-[#1C2D4A]/75">
                <span className="font-semibold text-gray-700">Cath-lab support:</span> Intra-Aortic Balloon Pumps (Datascope by Maquet, x2), temporary pacemakers, advanced anaesthesia machine (BPL Eflo-6D).
              </p>
            </div>

            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-4">
                <Activity className="w-5 h-5 text-[#C8862B]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F3864] mb-2">
                Non-Invasive Diagnostics
              </h3>
              <p className="text-sm sm:text-base text-[#1C2D4A]/80 leading-relaxed mb-3">
                Philips AFFINITY CVX 2D echo with TEE probe; Samsung 2D echo & colour Doppler (x2); Siemens ACUSON NX 2D echo & colour Doppler; GE LOGIQ portable 2D echo; Wipro GE Cardiosoft TMT; Holter monitoring; ABPM; Siemens SOMATOM go.Top CT.
              </p>
              <p className="text-xs sm:text-sm text-[#1C2D4A]/75">
                <span className="font-semibold text-gray-700">Critical care & monitoring:</span> Nihon Kohden defibrillators; Drager and Philips multi-para monitors. In-patient: ICCU (12 beds) and IPD (8 beds). <span className="text-xs text-gray-500 font-normal">[verify]</span>
              </p>
            </div>
          </div>

          {/* Education & Training Facilities */}
          <div className="bg-white rounded-xl border border-[#D2DCE8] p-6 sm:p-8 mb-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#1F3864] mb-4">
              Education & Training Facilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="p-4 bg-[#EAF0F7]/40 rounded-lg border border-[#D2DCE8]">
                <h4 className="font-bold text-[#1F3864] mb-1">Lecture Theatres & Academic Spaces</h4>
                <p className="text-[#1C2D4A]/80">
                  Seminar room (30 seats), demonstration room, lecture hall (30 seats) and a 200-seat auditorium. <span className="text-xs text-gray-500">[verify]</span>
                </p>
              </div>
              <div className="p-4 bg-[#EAF0F7]/40 rounded-lg border border-[#D2DCE8]">
                <h4 className="font-bold text-[#1F3864] mb-1">Hostel & Accommodations</h4>
                <p className="text-[#1C2D4A]/80">
                  6 rooms (off campus) and 4 duty rooms within the hospital. <span className="text-xs text-gray-500">[verify]</span>
                </p>
              </div>
              <div className="p-4 bg-[#EAF0F7]/40 rounded-lg border border-[#D2DCE8]">
                <h4 className="font-bold text-[#1F3864] mb-1">Library & Digital Archives</h4>
                <p className="text-[#1C2D4A]/80">
                  Library access to journals, periodicals and academic sessions for all consultants, DrNB trainees and RMOs.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Activities, Workshops & Recent Developments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#1F3864] mb-3">
                Academic Activities & Workshops
              </h3>
              <ul className="space-y-2 text-sm text-[#1C2D4A]/80 list-disc pl-5">
                <li>Workshop on &apos;Complex PCI in Calcified Vessels&apos; (Feb 2019).</li>
                <li>CME on &apos;Acute Coronary Syndrome Conclave&apos; (Mar 2024).</li>
                <li>Workshop on &apos;CTO using OPN NC Nano&apos; with international proctor Dr. Salvatore Cassese (Jul 2024).</li>
                <li>Faculty participation in international investigator meetings. <span className="text-xs text-gray-500 font-normal">[ refresh list — placeholder ]</span></li>
              </ul>
            </div>

            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#1F3864] mb-3">
                Recent & Upcoming Developments
              </h3>
              <p className="text-sm sm:text-base text-[#1C2D4A]/80 leading-relaxed">
                Additional cath-lab room with adjacent ICCU beds and a second cath-lab machine (Artis One) were planned. <span className="text-xs text-gray-500 font-normal">[ confirm current status — the PPT projected late-2024 commissioning. ]</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Faculty */}
      <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-y border-[#D2DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              Faculty
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Experienced interventional cardiologists mentoring DrNB residents in coronary interventions, device implantations, and emergency cath-lab care.
            </p>
          </div>

          {/* HOD Card */}
          <div className="mb-12">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-4">
              Head of Department
            </h3>
            <div className="bg-white rounded-xl border border-[#D2DCE8] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-3xl">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1F3864]/10 border-2 border-[#1F3864] flex items-center justify-center text-[#1F3864] flex-shrink-0">
                <User className="w-12 h-12" />
              </div>
              <div className="text-center sm:text-left flex-grow">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1F3864]/10 text-[#1F3864] text-xs font-semibold mb-2">
                  Head of Department
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#1F3864]">
                  {hodData.name}
                </h4>
                <p className="text-sm sm:text-base font-semibold text-[#C8862B] mb-2">
                  {hodData.designation}
                </p>
                <p className="text-sm text-[#1C2D4A]/80 mb-1">
                  <span className="font-semibold text-gray-700">Qualification:</span> {hodData.qualification}
                </p>
                <p className="text-sm text-[#1C2D4A]/80">
                  <span className="font-semibold text-gray-700">Experience:</span> {hodData.experience}
                </p>
              </div>
            </div>
          </div>

          {/* Faculty Members Grid */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-4">
              Consultants & Associate Consultants
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyList.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#D2DCE8] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#1F3864] flex-shrink-0">
                      <User className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1F3864]">
                        {f.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#C8862B] mt-0.5">
                        {f.designation}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-3 text-xs text-[#1C2D4A]/80 space-y-1">
                    <p>
                      <span className="font-semibold text-gray-700">Qualification:</span> {f.qualification}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">Experience:</span> {f.experience}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
            [ Confirm the full current faculty list and designations. ]
          </div>
        </div>
      </section>

      {/* SECTION 8: Weekly Academic Schedule */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              Weekly Academic Schedule
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Curricular schedule of didactic teaching, cath-lab discussions, and clinical reviews.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block bg-white rounded-xl shadow-sm border border-[#D2DCE8] overflow-hidden mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1F3864] text-white text-sm sm:text-base font-semibold">
                  <th className="py-4 px-6 w-1/3">Day / Frequency</th>
                  <th className="py-4 px-6 w-2/3">Academic activities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                {academicSchedule.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition">
                    <td className="py-4 px-6 font-semibold text-[#1F3864] whitespace-nowrap">
                      {item.day}
                    </td>
                    <td className="py-4 px-6 text-[#1C2D4A]">
                      {item.activity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion View */}
          <div className="sm:hidden space-y-3 mb-6">
            {academicSchedule.map((item, idx) => {
              const isOpen = activeAccordion === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#D2DCE8] rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-[#1F3864] bg-[#EAF0F7]/40 hover:bg-[#EAF0F7]/70 transition"
                  >
                    <span>{item.day}</span>
                    <ChevronDown className={`w-4 h-4 text-[#1F3864] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-sm text-[#1C2D4A] border-t border-[#D2DCE8]">
                      <p className="font-medium text-[#1F3864] mb-1">Academic activities:</p>
                      <p>{item.activity}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
            [ Confirm the current schedule. ]
          </div>
        </div>
      </section>

      {/* SECTION 9: Your Training Journey (Figure 6 - 3 Nodes for DrNB) */}
      <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-y border-[#D2DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              Your Training Journey
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              A 3-year structured progression from cath-lab fundamentals to advanced interventional procedures and exit examination.
            </p>
          </div>

          {/* Horizontal Timeline (3 nodes for DrNB) */}
          <div className="relative max-w-5xl mx-auto px-4 py-8">
            {/* Continuous Blue Baseline */}
            <div className="hidden md:block absolute top-[68px] left-[10%] right-[10%] h-[3px] bg-[#1F3864] -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
              {/* YEAR 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-44 py-2.5 px-6 rounded-md bg-[#1F3864] text-white font-bold tracking-wider text-sm shadow-md mb-4">
                  YEAR 1
                </div>
                {/* Node */}
                <div className="w-7 h-7 rounded-full bg-[#1F3864] border-4 border-white shadow-md mb-6 hidden md:block" />
                <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm w-full">
                  <h3 className="font-bold text-base text-[#1F3864] mb-2">
                    Foundation
                  </h3>
                  <p className="text-sm text-[#1C2D4A]/80 leading-relaxed font-normal">
                    Cath-lab and ICCU postings, non-invasive cardiology, log-book initiation, research methodology and protocol development.
                  </p>
                </div>
              </div>

              {/* YEAR 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-44 py-2.5 px-6 rounded-md bg-[#1F3864] text-white font-bold tracking-wider text-sm shadow-md mb-4">
                  YEAR 2
                </div>
                {/* Node */}
                <div className="w-7 h-7 rounded-full bg-[#1F3864] border-4 border-white shadow-md mb-6 hidden md:block" />
                <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm w-full">
                  <h3 className="font-bold text-base text-[#1F3864] mb-2">
                    Consolidation
                  </h3>
                  <p className="text-sm text-[#1C2D4A]/80 leading-relaxed font-normal">
                    Interventional procedures under supervision, device and imaging skills, thesis data collection, NBEMS Formative Assessment Test (FAT).
                  </p>
                </div>
              </div>

              {/* YEAR 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-44 py-2.5 px-6 rounded-md bg-[#1F3864] text-white font-bold tracking-wider text-sm shadow-md mb-4">
                  YEAR 3
                </div>
                {/* Node */}
                <div className="w-7 h-7 rounded-full bg-[#1F3864] border-4 border-white shadow-md mb-6 hidden md:block" />
                <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm w-full">
                  <h3 className="font-bold text-base text-[#1F3864] mb-2">
                    Mastery
                  </h3>
                  <p className="text-sm text-[#1C2D4A]/80 leading-relaxed font-normal">
                    Increasing procedural independence under supervision, thesis completion, preparation for the DrNB Final (Exit) Examination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Thesis & Research */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-6">
              Thesis & Research
            </h2>
            <div className="bg-[#EAF0F7]/40 border-l-4 border-[#1F3864] p-6 rounded-r-xl mb-6">
              <p className="text-base sm:text-lg text-[#1C2D4A] font-medium leading-relaxed">
                A thesis is a mandatory component of this programme. Residents are supported end-to-end by the Medical Research Department and a faculty guide — from research methodology training and Ethics Committee approval to analysis, writing, timely submission to NBEMS, and publication of thesis-based work.
              </p>
            </div>
            <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
              [ Add department-specific research highlights — recent resident publications/presentations — placeholders. ]
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Outcomes (Spec 5.9 Dashboard) */}
      <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-y border-[#D2DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              Outcomes
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Specialty-specific outcomes (to be supplied)
            </p>
          </div>

          {/* 3 Headline Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-2">
                DrNB Final (Exit) Examination pass rate — Cardiology
              </div>
              <div className="text-3xl font-bold text-[#1F3864] mb-2">
                [ % — placeholder ]
              </div>
              <p className="text-xs text-gray-500">
                National board exit examination qualifying record.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-2">
                Alumni trained & current positions
              </div>
              <div className="text-xl font-bold text-[#1F3864] mb-2">
                [ placeholder ]
              </div>
              <p className="text-xs text-gray-500">
                Consultant interventional cardiologists across regional and national centres.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-2">
                Resident awards / achievements
              </div>
              <div className="text-xl font-bold text-[#1F3864] mb-2">
                [ placeholder ]
              </div>
              <p className="text-xs text-gray-500">
                Prizes at CSI, India Live, and national cardiology conclaves.
              </p>
            </div>
          </div>

          {/* Alumni Highlight Strip */}
          <div className="bg-[#1F3864] text-white p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base text-white">Super-Specialty Cardiology Trajectory</h4>
              <p className="text-sm text-blue-100">
                Graduates transition to lead cath-labs, coronary care units, and interventional cardiology fellowships across major tertiary institutions.
              </p>
            </div>
            <Link
              href="/education/dnb-drnb"
              className="px-4 py-2 rounded-lg bg-[#C8862B] text-white text-xs sm:text-sm font-semibold whitespace-nowrap hover:bg-[#b07424] transition"
            >
              Institutional Outcomes
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 12: Resident & Faculty Voices */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              Resident & Faculty Voices
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Perspectives on cath-lab mentorship, interventional case volume, and clinical training culture in Cardiology at BVH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Faculty Card */}
            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-video bg-[#1F3864]/80 flex items-center justify-center text-white">
                <Play className="w-12 h-12 text-[#C8862B] opacity-80" />
                <span className="absolute bottom-3 left-4 text-xs bg-black/60 px-2 py-1 rounded text-white/90">
                  Faculty Film — 10 July shoot
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <blockquote className="text-sm sm:text-base italic text-[#1C2D4A]/90 mb-4">
                  “ [ pull-quote ] ”
                </blockquote>
                <div>
                  <h4 className="font-bold text-[#1F3864] text-base">Faculty — [ name ]</h4>
                  <p className="text-xs text-gray-500">Department of Cardiology, BVH</p>
                </div>
              </div>
            </div>

            {/* Resident Card */}
            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-video bg-[#1F3864]/80 flex items-center justify-center text-white">
                <Play className="w-12 h-12 text-[#C8862B] opacity-80" />
                <span className="absolute bottom-3 left-4 text-xs bg-black/60 px-2 py-1 rounded text-white/90">
                  Resident Film — 10 July shoot
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <blockquote className="text-sm sm:text-base italic text-[#1C2D4A]/90 mb-4">
                  “ [ pull-quote ] ”
                </blockquote>
                <div>
                  <h4 className="font-bold text-[#1F3864] text-base">Resident — [ name, batch ]</h4>
                  <p className="text-xs text-gray-500">DrNB Cardiology, BVH</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
            [[ Embed Cardiology faculty and resident testimonial films from the 10 July shoot; add 1–2 text pull-quotes. ]]
          </div>
        </div>
      </section>

      {/* SECTION 13: How to Apply / Enquire */}
      <section id="apply-enquire" className="py-16 sm:py-20 bg-[#1F3864] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              How to Apply / Enquire
            </h2>
            <p className="text-base sm:text-lg text-blue-100/80">
              Admission pathway, verification procedures, and direct contact with our Academic Cell.
            </p>
          </div>

          {/* 3 Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-[#C8862B] text-white font-bold flex items-center justify-center text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Qualify NEET-SS</h3>
              <p className="text-sm text-blue-100/80 leading-relaxed font-normal">
                Qualify NEET-SS for the relevant session.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-[#C8862B] text-white font-bold flex items-center justify-center text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Centralised Counselling</h3>
              <p className="text-sm text-blue-100/80 leading-relaxed font-normal">
                Participate in the centralised counselling and select DrNB Cardiology at BVH.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-[#C8862B] text-white font-bold flex items-center justify-center text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Joining & Verification</h3>
              <p className="text-sm text-blue-100/80 leading-relaxed font-normal">
                Report to BVH with original documents for verification and joining.
              </p>
            </div>
          </div>

          {/* Contact Card & Inquiry CTA Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white text-[#1C2D4A] rounded-xl p-6 sm:p-8 shadow-lg border border-[#D2DCE8]">
              <h3 className="text-xl font-bold text-[#1F3864] mb-4">
                Contact — Academic Cell / DNB Coordinator
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Name & designation
                  </span>
                  <p className="text-[#1C2D4A] font-semibold mt-0.5">[ placeholder ]</p>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Academic enquiry email
                  </span>
                  <p className="text-[#1C2D4A] font-semibold mt-0.5">[ placeholder ]</p>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Phone
                  </span>
                  <p className="text-[#1C2D4A] font-semibold mt-0.5">[ placeholder ]</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/education/dnb-drnb#enquire"
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#1F3864] text-white font-semibold text-sm hover:bg-[#152747] transition shadow"
                >
                  Apply / Enquire Online
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  [[ Use an &apos;Apply / Enquire&apos; academic CTA — not the clinical &apos;Book Appointment&apos; button. ]]
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/10 border border-white/20 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">
                Have questions about DrNB Cardiology?
              </h3>
              <p className="text-sm text-blue-100/90 mb-6 font-normal">
                Submit an inquiry directly to the Academic Cell regarding cath-lab exposure, ICCU postings, hostel accommodations, or seat allotment.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-blue-100 mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Dr. Candidate Name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8862B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-blue-100 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="doctor@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8862B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-blue-100 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8862B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-blue-100 mb-1">NEET-SS Roll / Rank (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Rank 215"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8862B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-blue-100 mb-1">Your Enquiry / Message</label>
                  <textarea
                    rows={3}
                    placeholder="Specify your question regarding DrNB Cardiology at BVH..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8862B]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#C8862B] text-white font-semibold text-sm hover:bg-[#b07424] transition shadow-md"
                >
                  Submit Academic Enquiry
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
