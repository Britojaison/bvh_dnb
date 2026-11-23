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
    <div className="min-h-screen bg-white text-[#1C2D4A]">
      {/* SECTION 1: Department Banner */}
      <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-gradient-to-r from-[#0F1D33]/95 via-[#1F3864]/90 to-[#1F3864]/80 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 mix-blend-multiply opacity-30">
          <Image
            src="/images/department-urology.jpg"
            alt="Urology Operating Theatre and Endourology Suite at BVH"
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
            <span className="text-[#C8862B] font-semibold">DrNB Urology</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide uppercase text-blue-100 mb-6">
            <Activity className="w-4 h-4 text-[#C8862B]" />
            NBEMS Accredited Super-Specialty Programme
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            DrNB Urology
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/90 max-w-4xl font-normal leading-relaxed mb-8">
            Three-year, NBEMS-accredited super-specialty training at a centre of excellence equipped for the full spectrum of urology and transplantation.
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
                The Urology Centre at Bhaktivedanta Hospital & Research Institute is a super-specialty centre of excellence, equipped with state-of-the-art technology under one roof to diagnose and treat the full spectrum of urological disease, including transplantation. All advanced treatment modalities are available at this highly specialised centre.
              </p>
              <p>
                The Centre is supported by a team of qualified, experienced consultants, doctors, nurses and paramedical staff who keep abreast of the latest procedures and advances through regular participation in conferences and workshops, both in India and abroad.
              </p>
              <p>
                BVH is a 300-bedded multi-specialty hospital with an NBEMS-accredited urology training programme. <span className="text-gray-500 text-sm font-normal">[ Confirm current seat intake — the site notes one trainee per year. ]</span>
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
                    <td className="py-4 px-6 text-[#1C2D4A]">[seats — placeholder]</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Entrance</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">NEET-SS</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition bg-gray-50/30">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">NBEMS accreditation status</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">[accredited since / validity — placeholder]</td>
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
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
            [ Add metrics — major/minor urological procedures per year, endourology & transplant volumes — placeholders. ]
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
              Breadth of surgical modalities and procedure exposure for super-specialty trainees.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm mb-8">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-2">
              Clinical Scope
            </h3>
            <p className="text-base text-[#1C2D4A] font-medium">
              Endourology, laparoscopic & minimally invasive urology, open and reconstructive urology, uro-oncology, and transplantation. <span className="text-xs text-gray-500 font-normal">[ confirm scope ]</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-1">
                Annual urological procedure volume
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#1F3864]">
                [ placeholder ]
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Endourology, reconstructive, and major operative cases.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-1">
                Transplant exposure
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#1F3864]">
                [ placeholder ]
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Renal transplant procedures and donor nephrectomies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-1">
                Advanced Modalities
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#1F3864]">
                [ placeholder ]
              </div>
              <p className="text-xs text-gray-500 mt-2">
                [ Robotic / advanced modalities if applicable — placeholder ]
              </p>
            </div>
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
              Advanced operating suites, specialized endourology towers, and multi-specialty tertiary care support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-4">
                <Activity className="w-5 h-5 text-[#C8862B]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F3864] mb-2">
                Urology Operating & Endourology Suites
              </h3>
              <p className="text-sm sm:text-base text-[#1C2D4A]/80">
                State-of-the-art urology operating and endourology facilities. <span className="text-xs text-gray-500 font-normal">[ list key equipment — placeholder ]</span>
              </p>
            </div>

            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-[#C8862B]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F3864] mb-2">
                Imaging & Critical Care Support
              </h3>
              <p className="text-sm sm:text-base text-[#1C2D4A]/80">
                Imaging and interventional support; ICU and peri-operative care.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-[#C8862B]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F3864] mb-2">
                Tertiary Hospital Ecosystem
              </h3>
              <p className="text-sm sm:text-base text-[#1C2D4A]/80">
                300-bedded multi-specialty hospital backing the programme. <span className="text-xs text-gray-500 font-normal">[verify]</span>
              </p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
            <span className="font-semibold text-[#1F3864]">Specialized Equipment: </span>
            [ Lithotripsy, laser, laparoscopy/robotics, transplant facilities — placeholders ]
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
              Super-specialist urologists and transplant surgeons mentoring DrNB residents through operative surgeries, OPD, and clinical research.
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
              Consultants
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
            [ Confirm the full current faculty list and the HOD. ]
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
      <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-y border-[#D2DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              Your Training Journey
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              A 3-year structured progression from core postings to sub-specialty consolidation and independent operative mastery.
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
                <div className="w-7 h-7 rounded-full bg-[#1F3864] border-4 border-white shadow-md mb-6 hidden md:block" />
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
                <div className="w-7 h-7 rounded-full bg-[#1F3864] border-4 border-white shadow-md mb-6 hidden md:block" />
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
                DrNB Final (Exit) Examination pass rate — Urology
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
                Urology consultants and academic appointments.
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
                Prizes at national urological association conferences.
              </p>
            </div>
          </div>

          {/* Alumni Highlight Strip */}
          <div className="bg-[#1F3864] text-white p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base text-white">Super-Specialty Career Pathways</h4>
              <p className="text-sm text-blue-100">
                Our DrNB graduates lead urology and kidney transplant units across leading academic and healthcare networks across India.
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
              Perspectives on surgical training, operative case volume, and mentor-apprentice culture in Urology at BVH.
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
                  <p className="text-xs text-gray-500">Department of Urology, BVH</p>
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
                  <p className="text-xs text-gray-500">DrNB Urology, BVH</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
            [[ Embed Urology faculty and resident testimonial films from the 10 July shoot; add 1–2 text pull-quotes. ]]
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
                Participate in the centralised counselling and select DrNB Urology at BVH.
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
                Have questions about DrNB Urology?
              </h3>
              <p className="text-sm text-blue-100/90 mb-6 font-normal">
                Submit an inquiry directly to the Academic Cell regarding operative rotations, transplant exposure, hostel accommodations, or seat allotment.
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
                      placeholder="e.g. Rank 320"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8862B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-blue-100 mb-1">Your Enquiry / Message</label>
                  <textarea
                    rows={3}
                    placeholder="Specify your question regarding DrNB Urology at BVH..."
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
