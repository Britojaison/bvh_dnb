'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  ChevronDown,
  Calendar,
  Clock,
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
  Scan,
  Radio,
  FileCheck,
  Stethoscope,
  Microscope,
} from 'lucide-react';

interface AcademicScheduleItem {
  day: string;
  activity: string;
  details?: string;
}

const academicSchedule: AcademicScheduleItem[] = [
  {
    day: 'Every Tuesday',
    activity: 'Journal club',
  },
  {
    day: 'Every Friday',
    activity: 'Case presentation',
  },
  {
    day: 'Every Sunday',
    activity: 'Open-book question & answer',
  },
  {
    day: 'Every 15 days',
    activity: 'Post-end viva',
  },
  {
    day: 'Daily',
    activity: 'History taking; patient preparation; performing the scan; provisional reporting; procedure assistance; follow-up',
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
  name: 'Dr. Ankush Govindwar',
  designation: 'HOD & Consultant Radiologist',
  qualification: 'MBBS, DMRD, DNB (Radiology)',
  experience: '8 years+',
  isHod: true,
};

const facultyList: FacultyMember[] = [
  {
    name: 'Dr. Gaurav Gangwani',
    designation: 'Consultant Interventional Radiologist',
    qualification: 'MBBS, DNB, FIVR',
    experience: '7 years+',
  },
  {
    name: 'Dr. Nikhil Karnik',
    designation: 'Consultant Interventional Neuro-Radiologist',
    qualification: 'MBBS, DNB (Radio Diagnosis), DMRE; Fellowship in Interventional Neuroradiology (KEM)',
    experience: '17 years+',
  },
  {
    name: 'Dr. Khushal Pawar',
    designation: 'Consultant Interventional Radiologist',
    qualification: 'MBBS, MD (Radio Diagnosis)',
    experience: '10 years+',
  },
  {
    name: 'Dr. Abhijeet Soni',
    designation: 'Consultant Interventional Radiologist',
    qualification: 'MBBS, DNB (Radio Diagnosis)',
    experience: '29 years+',
  },
  {
    name: 'Dr. Ruchi Garg',
    designation: 'Consultant Radiologist',
    qualification: 'MBBS, DNB (Radio Diagnosis)',
    experience: '6 years+',
  },
  {
    name: 'Dr. Pawan Parmar',
    designation: 'Consultant Radiologist',
    qualification: 'MBBS, DMRD',
    experience: '5 years+',
  },
  {
    name: 'Dr. Chandrakant Kamble',
    designation: 'Consultant Vascular & Interventional Radiologist',
    qualification: 'MBBS, MD, DNB, FVIR',
    experience: '7 years+',
  },
  {
    name: 'Dr. Amarsingh Yadav',
    designation: 'Consultant Radiologist',
    qualification: 'MBBS, DMRE',
    experience: '8 years+',
  },
  {
    name: 'Dr. Nilesh Suryawanshi',
    designation: 'Associate Consultant, Radiology',
    qualification: 'MBBS, DNB (Radio-Diagnosis)',
    experience: '4 years+',
  },
  {
    name: 'Dr. Anoop Shetty',
    designation: 'Consultant Radiologist',
    qualification: 'MBBS, DNB (Radio Diagnosis)',
    experience: '17 years+',
  },
];

export default function RadioDiagnosisPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-[#1C2D4A]">
      {/* SECTION 1: Department Banner */}
      <section className="relative w-full py-36 sm:py-48 lg:py-60 min-h-[580px] lg:min-h-[680px] flex items-center bg-gradient-to-r from-[#0F1D33]/95 via-[#1F3864]/90 to-[#1F3864]/80 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 mix-blend-multiply opacity-30">
          <Image
            src="/images/department-radiology.jpg"
            alt="Radio Diagnosis Department BVH"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 mb-4 font-medium flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/education/dnb-drnb" className="hover:text-white transition">Postgraduate Medical Education</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#C8862B] font-semibold">Diploma in Radio Diagnosis (DRD)</span>
          </div>


          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Diploma in Radio Diagnosis (DRD)
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/90 max-w-4xl font-normal leading-relaxed mb-8">
            Two-year, NBEMS-accredited diploma training in diagnostic and interventional radiology, with 24x7 imaging across modern modalities.
          </p>

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
                The Department of Radiology at Bhaktivedanta Hospital & Research Institute offers a wide range of diagnostic and advanced interventional radiology services. It is well equipped for CT, ultrasound, digital subtraction angiography (DSA) and interventional procedures, and functions 24x7 for routine and emergency imaging.
              </p>
              <p>
                Established on 11 January 1998, the department is staffed by radiologists with fellowship training from leading institutions. Modalities available include X-ray, CT, PET-CT, ultrasound, DEXA and mammography, with a state-of-the-art MRI facility being introduced.
              </p>
              <p>
                The department serves as a tertiary-care referral centre for hospitals and nursing homes from Borivali to Dahanu, supported by an experienced team of consultant and interventional radiologists, residents and trained nursing staff.
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
              Key administrative, accreditation, and curriculum attributes of the Diploma in Radio Diagnosis.
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
                    <td className="py-4 px-6 text-[#1C2D4A]">Diploma in Radio Diagnosis (DRD)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition bg-gray-50/30">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Level</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">Diploma (Post-MBBS)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Duration</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">2 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition bg-gray-50/30">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Seats per session</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">[seats - placeholder]</td>
                  </tr>
                  <tr className="hover:bg-gray-50/70 transition">
                    <td className="py-4 px-6 font-semibold text-[#1F3864]">Entrance</td>
                    <td className="py-4 px-6 text-[#1C2D4A]">NEET-PG</td>
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
              Admission is merit-based through NEET-PG and centralised counselling (MCC of DGHS). See the main DNB & DrNB page for the full pathway, stipend, fees and welfare.
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

      {/* SECTION 4: Why Train in Radio Diagnosis at BVH */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              Why Train in Radio Diagnosis at BVH
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              Distinguishing academic and clinical pillars that define our postgraduate radiology training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <Scan className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                High-volume, round-the-clock exposure across X-ray, ultrasound, CT, mammography, DEXA and PET-CT.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <Activity className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                Dedicated interventional radiology services, including DSA and vascular/neuro-interventional procedures.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                Fellowship-trained faculty and a structured, examination-oriented academic schedule.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6 text-[#C8862B]" />
              </div>
              <p className="text-sm sm:text-base text-[#1C2D4A] font-medium leading-relaxed">
                An expanding modality base, including the introduction of MRI.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
            <span className="font-semibold text-[#1F3864]">Numbers to confirm: </span>
            [ Add metrics - scans reported per resident, IR procedures - placeholders. ]
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
              Representative monthly clinical volumes ensuring rigorous diagnostic and interventional procedural exposure.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-1">
                Ultrasound studies / month
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864]">
                1,650+
              </div>
              <div className="text-xs text-gray-500 mt-2">
                [verify; previously 1,500+]
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-1">
                X-rays / month
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864]">
                2,750+
              </div>
              <div className="text-xs text-gray-500 mt-2">
                [verify; previously 2,500+]
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-1">
                CT scans / month
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864]">
                660+
              </div>
              <div className="text-xs text-gray-500 mt-2">
                [verify; previously 600+]
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1F3864]/70 mb-1">
                Mammography / month
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864]">
                55+
              </div>
              <div className="text-xs text-gray-500 mt-2">
                [verify; previously 50+]
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#D2DCE8]">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1F3864] mb-2">
              Available Modalities
            </h4>
            <p className="text-base text-[#1C2D4A] font-medium">
              Modalities: X-ray, CT, PET-CT, ultrasound, DSA, DEXA, mammography; MRI being introduced.
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
              Modern imaging suites, digital subtraction angiography installations, and dedicated workstation archives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-4">
                <Scan className="w-5 h-5 text-[#C8862B]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F3864] mb-2">
                Comprehensive Diagnostic Suites
              </h3>
              <p className="text-sm sm:text-base text-[#1C2D4A]/80">
                X-ray, CT, PET-CT, ultrasound, DEXA and mammography; 24x7 imaging.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-4">
                <Activity className="w-5 h-5 text-[#C8862B]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F3864] mb-2">
                Interventional Radiology Suite
              </h3>
              <p className="text-sm sm:text-base text-[#1C2D4A]/80">
                Digital subtraction angiography (DSA) and interventional radiology suite.
              </p>
            </div>

            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#1F3864] text-white flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-[#C8862B]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F3864] mb-2">
                Advanced MRI Facility
              </h3>
              <p className="text-sm sm:text-base text-[#1C2D4A]/80">
                MRI facility being introduced. <span className="text-xs text-gray-500 font-normal">[ confirm status / installation date ]</span>
              </p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
            <span className="font-semibold text-[#1F3864]">Department Infrastructure: </span>
            [ PACS / reporting workstations, teaching archive - placeholders ]
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
              Experienced diagnostic and interventional radiologists guiding residents through daily reporting, procedures, and academics.
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
            [ Confirm the full current faculty list. ]
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
              Structured teaching sessions, journal clubs, case presentations, and hands-on scanning duties.
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

      {/* SECTION 9: Your Training Journey (Figure 6 - 2 Nodes for Diploma) */}
      <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-y border-[#D2DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F3864] mb-3">
              Your Training Journey
            </h2>
            <p className="text-base sm:text-lg text-[#1C2D4A]/70 max-w-3xl">
              A 2-year structured progression from foundational imaging modalities to advanced reporting and exit examination.
            </p>
          </div>

          {/* Horizontal Timeline (2 nodes for 2-year Diploma) */}
          <div className="relative max-w-4xl mx-auto px-4 py-8">
            {/* Blue baseline line */}
            <div className="hidden md:block absolute top-[68px] left-[15%] right-[15%] h-[3px] bg-[#1F3864] -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative z-10">
              {/* YEAR 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-48 py-2.5 px-6 rounded-md bg-[#1F3864] text-white font-bold tracking-wider text-sm shadow-md mb-4">
                  YEAR 1
                </div>
                {/* Node */}
                <div className="w-7 h-7 rounded-full bg-[#1F3864] border-4 border-white shadow-md mb-6 hidden md:block" />
                <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm w-full">
                  <h3 className="font-bold text-base text-[#1F3864] mb-2">
                    Foundation
                  </h3>
                  <p className="text-sm text-[#1C2D4A]/80 leading-relaxed font-normal">
                    Core modality postings (X-ray, ultrasound, CT), reporting fundamentals, log-book initiation, and (for the 2-year course) the NBEMS Formative Assessment Test (FAT).
                  </p>
                </div>
              </div>

              {/* YEAR 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-48 py-2.5 px-6 rounded-md bg-[#1F3864] text-white font-bold tracking-wider text-sm shadow-md mb-4">
                  YEAR 2
                </div>
                {/* Node */}
                <div className="w-7 h-7 rounded-full bg-[#1F3864] border-4 border-white shadow-md mb-6 hidden md:block" />
                <div className="bg-white p-6 rounded-xl border border-[#D2DCE8] shadow-sm w-full">
                  <h3 className="font-bold text-base text-[#1F3864] mb-2">
                    Consolidation & Exit
                  </h3>
                  <p className="text-sm text-[#1C2D4A]/80 leading-relaxed font-normal">
                    Advanced modalities and interventional exposure, independent reporting under supervision, and preparation for the NBEMS Diploma Final (Exit) Examination.
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
                Research methodology and academic activity form part of the training. As this is an NBEMS Diploma, the thesis/research requirement differs from DNB programmes.
              </p>
            </div>
            <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
              [ Confirm the exact research/thesis requirement for the Diploma from the current NBEMS Diploma bulletin, and add any department-specific research highlights - placeholders. ]
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
                Diploma Final (Exit) Examination pass rate - Radio Diagnosis
              </div>
              <div className="text-3xl font-bold text-[#1F3864] mb-2">
                [ % - placeholder ]
              </div>
              <p className="text-xs text-gray-500">
                NBEMS Diploma final examination success rate.
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
                Placements in academic centers & corporate diagnostic institutions.
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
                Prizes at national radiological conferences and symposiums.
              </p>
            </div>
          </div>

          {/* Alumni Highlight Strip */}
          <div className="bg-[#1F3864] text-white p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base text-white">Alumni Network & Career Trajectory</h4>
              <p className="text-sm text-blue-100">
                Our diplomates transition into consultant radiologist roles, subspecialty fellowships, and tertiary-care diagnostic hubs nationwide.
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
              Perspectives on diagnostic mentorship, case volume, and clinical training culture in Radiology at BVH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Faculty Card */}
            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-video bg-[#1F3864]/80 flex items-center justify-center text-white">
                <Play className="w-12 h-12 text-[#C8862B] opacity-80" />
                <span className="absolute bottom-3 left-4 text-xs bg-black/60 px-2 py-1 rounded text-white/90">
                  Faculty Film - 10 July shoot
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <blockquote className="text-sm sm:text-base italic text-[#1C2D4A]/90 mb-4">
                  “ [ pull-quote ] ”
                </blockquote>
                <div>
                  <h4 className="font-bold text-[#1F3864] text-base">Faculty - [ name ]</h4>
                  <p className="text-xs text-gray-500">Department of Radiology, BVH</p>
                </div>
              </div>
            </div>

            {/* Resident Card */}
            <div className="bg-[#EAF0F7]/30 border border-[#D2DCE8] rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-video bg-[#1F3864]/80 flex items-center justify-center text-white">
                <Play className="w-12 h-12 text-[#C8862B] opacity-80" />
                <span className="absolute bottom-3 left-4 text-xs bg-black/60 px-2 py-1 rounded text-white/90">
                  Resident Film - 10 July shoot
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <blockquote className="text-sm sm:text-base italic text-[#1C2D4A]/90 mb-4">
                  “ [ pull-quote ] ”
                </blockquote>
                <div>
                  <h4 className="font-bold text-[#1F3864] text-base">Resident - [ name, batch ]</h4>
                  <p className="text-xs text-gray-500">Diploma in Radio Diagnosis, BVH</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-xs sm:text-sm text-gray-600">
            [[ Embed Radiology faculty and resident testimonial films from the 10 July shoot; add 1–2 text pull-quotes. ]]
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
              <h3 className="text-lg font-bold text-white mb-2">Qualify NEET-PG</h3>
              <p className="text-sm text-blue-100/80 leading-relaxed font-normal">
                Qualify NEET-PG for the relevant session.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-[#C8862B] text-white font-bold flex items-center justify-center text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Centralised Counselling</h3>
              <p className="text-sm text-blue-100/80 leading-relaxed font-normal">
                Participate in the centralised counselling and select Diploma in Radio Diagnosis (DRD) at BVH.
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
                Contact - Academic Cell / DNB Coordinator
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
                  [[ Use an &apos;Apply / Enquire&apos; academic CTA - not the clinical &apos;Book Appointment&apos; button. ]]
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/10 border border-white/20 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">
                Have questions about Diploma in Radio Diagnosis?
              </h3>
              <p className="text-sm text-blue-100/90 mb-6 font-normal">
                Submit an inquiry directly to the Academic Cell regarding curriculum, modality rotations, hostel accommodations, or seat allotment.
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
                    <label className="block text-xs font-medium text-blue-100 mb-1">NEET-PG Roll / Rank (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Rank 4520"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8862B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-blue-100 mb-1">Your Enquiry / Message</label>
                  <textarea
                    rows={3}
                    placeholder="Specify your question regarding DRD at BVH..."
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
