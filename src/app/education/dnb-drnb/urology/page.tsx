'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PLACEHOLDER_IMAGE } from '@/lib/constants';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import {
  ChevronRight,
  ChevronDown,
  Quote,
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
  Stethoscope,
  Microscope,
} from 'lucide-react';

interface AcademicScheduleItem {
  day: string;
  activity: string;
}

const academicSchedule: AcademicScheduleItem[] = [
  {
    day: 'Monday',
    activity: 'Bedside clinics; basic rounds',
  },
  {
    day: 'Tuesday',
    activity: 'Bedside clinics; basic rounds',
  },
  {
    day: 'Wednesday',
    activity: 'Case presentation (mortality meet on the 1st Wednesday of the month)',
  },
  {
    day: 'Thursday',
    activity: 'Basic rounds; seminar / symposia',
  },
  {
    day: 'Friday',
    activity: 'Basic rounds; interdepartmental meeting (once a month)',
  },
  {
    day: '2nd & 4th Saturday',
    activity: 'Thesis update; clinical audit',
  },
  {
    day: '1st & 3rd Saturday',
    activity: 'Journal club',
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
  name: 'Dr. Vikash Kumar',
  designation: 'HOD & Consultant Urologist',
  qualification: 'MS (General Surgery), DNB (Surgery), MCh (Urology)',
  experience: '14 years+',
  isHod: true,
};

const facultyList: FacultyMember[] = [
  {
    name: 'Dr. Siva Prasad Gourabathini',
    designation: 'Consultant Urologist',
    qualification: 'MS (General Surgery), MCh (Urology)',
    experience: '20 years+',
  },
  {
    name: 'Dr. Ajaykumar Gajengi',
    designation: 'Consultant Urologist',
    qualification: 'MS (General Surgery), MCh (Urology)',
    experience: '7 years+',
  },
];

export default function UrologyPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb banner */}
        <div className="bg-[#EAF0F7] py-2.5 border-b border-gray-200 text-xs text-[#595959]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2">
            <Link href="/education/dnb-drnb" className="hover:text-[#1F3864]">Home</Link>
            <span>&rsaquo;</span>
            <Link href="/education/dnb-drnb" className="hover:text-[#1F3864]">DNB &amp; DrNB Programmes</Link>
            <span>&rsaquo;</span>
            <span className="text-[#1F3864] font-semibold">DrNB Urology</span>
          </div>
        </div>

        {/* SECTION 1: Department Banner */}
        <section className="relative w-full text-white overflow-hidden py-36 sm:py-48 lg:py-60 min-h-[580px] lg:min-h-[680px] flex items-center border-b-4 border-[#C8862B]">
          {/* Full-width background photograph */}
          <div className="absolute inset-0 z-0">
            <Image
              src={PLACEHOLDER_IMAGE}
              alt="Urology Operating Theatre and Endourology Suite at BVH"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dual gradient overlay matching General Medicine: rich dark navy wash on the left blending into the photograph */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D33]/95 via-[#1F3864]/85 to-[#1F3864]/50"></div>
            <div className="absolute inset-0 bg-[#1F3864]/30 mix-blend-multiply"></div>
          </div>

          {/* Overlaid Title and One-line positioning */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              {/* Page title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-serif font-bold !text-white tracking-tight leading-[1.2] mb-6 drop-shadow-md">
                DrNB Urology
              </h1>

              {/* One-line positioning */}
              <p className="text-base sm:text-lg md:text-xl text-slate-100 font-normal leading-relaxed mb-8 drop-shadow-sm max-w-3xl">
                Three-year, NBEMS-accredited super-specialty training at a centre of excellence equipped for the full spectrum of urology and transplantation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: About the Department */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-6">
                About the Department
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
                <p>
                The Urology Centre at Bhaktivedanta Hospital & Research Institute is a super-specialty centre of excellence, equipped with state-of-the-art technology under one roof to diagnose and treat the full spectrum of urological disease, including transplantation. All advanced treatment modalities are available at this highly specialised centre.
              </p>
                  <p>
                The Centre is supported by a team of qualified, experienced consultants, doctors, nurses and paramedical staff who keep abreast of the latest procedures and advances through regular participation in conferences and workshops, both in India and abroad.
              </p>
                  <p>
                BVH is a 300-bedded multi-specialty hospital with an NBEMS-accredited urology training programme. <span className="text-gray-500 text-sm font-normal">[ Confirm current seat intake - the site notes one trainee per year. ]</span>
              </p>
              </div>
            </div>

            {/* Right: Department Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 aspect-[4/3]">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt="Urology Department - Bhaktivedanta Hospital"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3864]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/20">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#D5E8F0] block">
                    Urology Department
                  </span>
                  <span className="font-serif font-bold text-sm block">
                    Advanced Clinical Care &amp; Resident Teaching
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Programme at BVH */}
      <section id="programme-details" className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-3">
              The Programme at BVH
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Key administrative, accreditation, and curriculum attributes of the DrNB Urology super-specialty programme.
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
                    <td className="py-4 px-6 text-[#1C2D4A]">DrNB Urology</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition bg-gray-50/30">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Level</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">Super-specialty (Post-MS/MCh/DNB feeder)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Duration</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">3 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition bg-gray-50/30">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Seats per session</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">[seats - placeholder]</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Entrance</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">NEET-SS</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition bg-gray-50/30">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">NBEMS accreditation status</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">[accredited since / validity - placeholder]</td>
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

      {/* SECTION 4: Why Train in Urology at BVH */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-3">
              Why Train in Urology at BVH
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Distinguishing surgical, operative, and academic pillars that define our super-specialty urological training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <Stethoscope className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                A dedicated super-specialty centre with the full spectrum of urological care, including transplantation.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <Activity className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                Exposure to advanced endourology, laparoscopic/minimally invasive urology and reconstructive procedures.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                Multi-specialty hospital setting enabling rich peri-operative and interdisciplinary exposure.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                Active academic culture with national and international conference and workshop participation.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
            <span className="font-semibold text-[#1F3864]">Numbers to confirm: </span>
            [ Add metrics - major/minor urological procedures per year, endourology & transplant volumes - placeholders. ]
          </div>
        </div>
      </section>

      {/* SECTION 5: Clinical Exposure & Caseload */}
      {/* SECTION 6: Facilities & Infrastructure */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
              Facilities &amp; Infrastructure
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl mt-3">
              Advanced operating suites, specialized diagnostic infrastructure, and multi-specialty tertiary care support.
            </p>
          </div>

          {/* Showcase Grid with Photographic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Facility 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt="Urology Operating & Endourology Suites - Bhaktivedanta Hospital"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#C8862B]" />
                  <span className="font-semibold text-sm drop-shadow">Urology Operating & Endourology Suites</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-[#1F3864] block mb-1 uppercase tracking-wider">Urology Operating & Endourology Suites</span>
                <p className="text-sm font-mono text-[#595959] bg-[#EAF0F7]/40 p-3 rounded-lg border border-gray-200">
                  [ Urology operating and endourology suites - placeholder ]
                </p>
              </div>
            </div>

            {/* Facility 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt="Renal Transplant Infrastructure - Bhaktivedanta Hospital"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#C8862B]" />
                  <span className="font-semibold text-sm drop-shadow">Renal Transplant Infrastructure</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-[#1F3864] block mb-1 uppercase tracking-wider">Renal Transplant Infrastructure</span>
                <p className="text-sm font-mono text-[#595959] bg-[#EAF0F7]/40 p-3 rounded-lg border border-gray-200">
                  [ Kidney transplant OT, ICU and isolation beds - placeholder ]
                </p>
              </div>
            </div>

            {/* Facility 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt="24x7 Diagnostic & Critical Care - Bhaktivedanta Hospital"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#C8862B]" />
                  <span className="font-semibold text-sm drop-shadow">24x7 Diagnostic & Critical Care</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-[#1F3864] block mb-1 uppercase tracking-wider">24x7 Diagnostic & Critical Care</span>
                <p className="text-sm font-mono text-[#595959] bg-[#EAF0F7]/40 p-3 rounded-lg border border-gray-200">
                  [ 24x7 diagnostic pathology, radiology, HDU & ICU support ]
                </p>
              </div>
            </div>
          </div>

          {/* Academic Infrastructure: Simulation, Seminar Room & Library */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#EAF0F7]/50 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#2E75B6] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#D5E8F0]">
                <Sparkles className="w-6 h-6 text-[#C8862B]" />
              </div>
              <div className="flex-grow">
                <h3 className="font-serif font-bold text-base text-[#1F3864] mb-1">
                  Skills / Simulation Facilities &amp; Seminar Room
                </h3>
                <p className="text-sm font-mono text-[#595959] bg-white p-3 rounded-lg border border-gray-200 mt-2">
                  [ Skills / simulation facilities, seminar room - placeholder ]
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#EAF0F7]/50 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#2E75B6] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#D5E8F0]">
                <BookOpen className="w-6 h-6 text-[#2E75B6]" />
              </div>
              <div className="flex-grow">
                <h3 className="font-serif font-bold text-base text-[#1F3864] mb-1">
                  Library &amp; E-Resources Access
                </h3>
                <p className="text-sm text-gray-800 leading-relaxed mt-1">
                  Library and e-resources access for all residents. <span className="font-mono text-xs text-[#595959] bg-white px-2 py-0.5 rounded border border-gray-200">[ confirm details ]</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Faculty */}
      <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-3">
              Faculty
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Super-specialist urologists and transplant surgeons mentoring DrNB residents through operative surgeries, OPD, and clinical research.
            </p>
          </div>

          {/* HOD Card */}
          <div className="mb-12">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-4">
              Head of Department
            </h3>
            <div className="bg-white rounded-xl border border-[#D2DCE8] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-3xl">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#D5E8F0] bg-gray-100 flex-shrink-0 shadow-inner">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt="Head of Department"
                  fill
                  className="object-cover"
                />
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
              Consultants
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyList.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#D2DCE8] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#D5E8F0] bg-gray-100 flex-shrink-0 shadow-sm">
                      <Image
                        src={PLACEHOLDER_IMAGE}
                        alt={f.name}
                        fill
                        className="object-cover"
                      />
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
            [ Confirm the full current faculty list and the HOD. ]
          </div>
        </div>
      </section>

      {/* SECTION 8: Weekly Academic Schedule */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-3">
              Weekly Academic Schedule
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Structured bedside teaching, seminar symposia, mortality meets, and journal clubs.
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
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-gray-50/50 hover:bg-gray-50 transition' : 'hover:bg-gray-50 transition'}>
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
      <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-3">
              Your Training Journey
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              A 3-year structured progression from core postings to sub-specialty consolidation and independent operative mastery.
            </p>
          </div>

          {/* Horizontal Timeline (3 nodes for DrNB) */}
          <div className="relative max-w-5xl mx-auto px-4 py-8">
            {/* Continuous Blue Baseline */}
            <div className="hidden md:block absolute top-[102px] left-[10%] right-[10%] h-[3px] bg-[#1F3864] -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
              {/* YEAR 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-44 py-2.5 px-6 rounded-md bg-[#1F3864] text-white font-bold tracking-wider text-sm shadow-md mb-4">
                  YEAR 1
                </div>
                {/* Node */}
                <div className="w-7 h-7 rounded-full bg-[#1F3864] border-4 border-white shadow-md mb-6 hidden md:block z-10" />
                <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm w-full">
                  <h3 className="font-bold text-base text-[#1F3864] mb-2">
                    Foundation
                  </h3>
                  <p className="text-sm text-[#1C2D4A]/80 leading-relaxed font-normal">
                    Core urology postings, endourology basics, log-book initiation, research methodology and protocol development.
                  </p>
                </div>
              </div>

              {/* YEAR 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-44 py-2.5 px-6 rounded-md bg-[#1F3864] text-white font-bold tracking-wider text-sm shadow-md mb-4">
                  YEAR 2
                </div>
                {/* Node */}
                <div className="w-7 h-7 rounded-full bg-[#1F3864] border-4 border-white shadow-md mb-6 hidden md:block z-10" />
                <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm w-full">
                  <h3 className="font-bold text-base text-[#1F3864] mb-2">
                    Consolidation
                  </h3>
                  <p className="text-sm text-[#1C2D4A]/80 leading-relaxed font-normal">
                    Advanced operative urology, sub-specialty exposure, thesis data collection, NBEMS Formative Assessment Test (FAT).
                  </p>
                </div>
              </div>

              {/* YEAR 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-44 py-2.5 px-6 rounded-md bg-[#1F3864] text-white font-bold tracking-wider text-sm shadow-md mb-4">
                  YEAR 3
                </div>
                {/* Node */}
                <div className="w-7 h-7 rounded-full bg-[#1F3864] border-4 border-white shadow-md mb-6 hidden md:block z-10" />
                <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm w-full">
                  <h3 className="font-bold text-base text-[#1F3864] mb-2">
                    Mastery
                  </h3>
                  <p className="text-sm text-[#1C2D4A]/80 leading-relaxed font-normal">
                    Independent operative management under supervision, thesis completion, preparation for the DrNB Final (Exit) Examination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Thesis & Research */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-6">
              Thesis & Research
            </h2>
            <div className="bg-[#EAF0F7]/40 border-l-4 border-[#1F3864] p-6 rounded-r-xl mb-6">
              <p className="text-base sm:text-lg text-[#1C2D4A] font-medium leading-relaxed">
                A thesis is a mandatory component of this programme. Residents are supported end-to-end by the Medical Research Department and a faculty guide - from research methodology training and Ethics Committee approval to analysis, writing, timely submission to NBEMS, and publication of thesis-based work.
              </p>
            </div>
            <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
              [ Add department-specific research highlights - recent resident publications/presentations - placeholders. ]
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Outcomes (Spec 5.9 Dashboard) */}
      {/* SECTION 12: Resident & Faculty Voices */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-3">
              Resident &amp; Faculty Voices
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Real perspectives from our teaching faculty, current resident doctors, and alumni.
            </p>
          </div>

          {/* Video Cards from 10 July Shoot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Faculty Video Card & Pull-Quote */}
            <div className="bg-[#EAF0F7]/40 rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div className="relative aspect-[16/9] bg-gray-900 group cursor-pointer">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt="Urology Faculty Interview - Bhaktivedanta Hospital"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#C8862B] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/20">
                  Faculty Testimonial Film (10 July shoot)
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="mb-4">
                  <Quote className="w-7 h-7 text-[#C8862B] mb-2 opacity-70" />
                  <p className="text-sm sm:text-base italic text-gray-800 leading-relaxed">
                    &ldquo;[ pull-quote ]&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <span className="font-serif font-bold text-sm text-[#1F3864] block">
                    Faculty - [ name ]
                  </span>
                </div>
              </div>
            </div>

            {/* Resident Video Card & Pull-Quote */}
            <div className="bg-[#EAF0F7]/40 rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div className="relative aspect-[16/9] bg-gray-900 group cursor-pointer">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt="Urology Resident Interview - Bhaktivedanta Hospital"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#2E75B6] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/20">
                  Resident Testimonial Film (10 July shoot)
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="mb-4">
                  <Quote className="w-7 h-7 text-[#C8862B] mb-2 opacity-70" />
                  <p className="text-sm sm:text-base italic text-gray-800 leading-relaxed">
                    &ldquo;[ pull-quote ]&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <span className="font-serif font-bold text-sm text-[#1F3864] block">
                    Resident - [ name, batch ]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: How to Apply / Enquire */}
        <section id="enquiry-form" className="py-16 sm:py-24 bg-[#1F3864] text-white relative overflow-hidden scroll-mt-20 border-y-4 border-[#C8862B]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D33]/95 via-[#1F3864]/90 to-[#1F3864]/80 pointer-events-none"></div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div>
              <div className="max-w-4xl mb-12">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold !text-white tracking-tight mb-6 drop-shadow-sm">
                  How to Apply / Enquire
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-slate-100 leading-relaxed">
                  <div className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5 shadow-md">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-white">Qualify NEET-SS</p>
                      <p className="font-normal text-slate-200 text-sm sm:text-base">Qualify NEET-SS for the relevant session.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5 shadow-md">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-white">Centralised Counselling</p>
                      <p className="font-normal text-slate-200 text-sm sm:text-base">Participate in the centralised counselling and select DrNB Urology at BVH.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5 shadow-md">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-white">Joining &amp; Verification</p>
                      <p className="font-normal text-slate-200 text-sm sm:text-base">Report to BVH with original documents for verification and joining.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid: Contact Coordinator Card + Academic Enquiry Form */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-5 bg-white/10 backdrop-blur-md text-white p-7 sm:p-8 rounded-2xl border border-white/20 shadow-xl flex flex-col justify-between h-full">
                  <h3 className="font-serif font-bold text-xl !text-white mb-6 pb-3 border-b border-white/15">
                    Contact - Academic Cell / DNB Coordinator
                  </h3>
                  <div className="space-y-5 text-sm flex-1 flex flex-col justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-[#C8862B]">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs text-[#D5E8F0] font-medium">Name &amp; designation:</span>
                        <span className="font-mono text-sm text-slate-100">[ placeholder ]</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-[#C8862B]">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs text-[#D5E8F0] font-medium">Academic enquiry email:</span>
                        <span className="font-mono text-sm text-slate-100">[ placeholder ]</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-[#C8862B]">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs text-[#D5E8F0] font-medium">Phone:</span>
                        <span className="font-mono text-sm text-slate-100">[ placeholder ]</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-[#C8862B]">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs text-[#D5E8F0] font-medium">Address:</span>
                        <span className="text-sm text-slate-100 block">
                          Bhaktivedanta Hospital &amp; Research Institute, Mira Road (E), Mumbai.
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/15">
                      <a
                        href="#enquiry-form"
                        className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#C8862B] text-white font-semibold text-sm hover:brightness-110 shadow-md transition"
                      >
                        <span>Apply / Enquire</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white text-gray-900 p-7 sm:p-8 rounded-2xl border border-gray-200 shadow-2xl flex flex-col justify-between h-full">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1F3864] mb-1">
                        Have questions about DrNB Urology?
                      </h3>
                      <p className="text-xs text-[#595959]">
                        Submit an inquiry directly to the Academic Cell regarding operative rotations, transplant exposure, hostel accommodations, or seat allotment.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. Candidate Name"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E75B6]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="doctor@example.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E75B6]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E75B6]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          NEET-SS Roll / Rank (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rank 320"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E75B6]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Your Enquiry / Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Specify your question regarding DrNB Urology at BVH..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E75B6]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-[#C8862B] text-white font-semibold rounded-lg hover:brightness-105 transition flex items-center justify-center gap-2 shadow-md text-sm"
                    >
                      <span>Submit Academic Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
