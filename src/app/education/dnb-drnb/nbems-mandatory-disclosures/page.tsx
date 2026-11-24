'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  FileText,
  ShieldCheck,
  Calendar,
  AlertCircle,
  Phone,
  Mail,
  User,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Clock,
  Landmark,
  HeartHandshake,
  Download,
  AlertTriangle,
} from 'lucide-react';

export default function NBEMSMandatoryDisclosuresPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2D4A]">
      {/* Banner / Header */}
      <section className="relative w-full py-16 sm:py-24 bg-gradient-to-r from-[#0F1D33] via-[#1F3864] to-[#1F3864] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 mb-4 font-medium flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/education/dnb-drnb" className="hover:text-white transition">Postgraduate Medical Education</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#C8862B] font-semibold">NBEMS Mandatory Disclosures</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide uppercase text-blue-100 mb-6">
            <ShieldCheck className="w-4 h-4 text-[#C8862B]" />
            Statutory & Regulatory Compliance
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            NBEMS Mandatory Disclosures
          </h1>

          <p className="text-base sm:text-lg text-blue-100/90 max-w-4xl font-normal leading-relaxed mb-6">
            In compliance with the directive of the National Board of Examinations in Medical Sciences (NBEMS), New Delhi - “Mandatory disclosure by NBEMS Accredited Hospitals / Medical Institutions” - Bhaktivedanta Hospital & Research Institute publishes below the essential information relating to its training infrastructure, clinical workload and other prescribed particulars, in the proforma notified by NBEMS. This page is reviewed and updated during the first week of every quarter, or immediately upon any material change, whichever is earlier.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C8862B]/20 border border-[#C8862B]/50 text-white text-xs sm:text-sm font-semibold">
            <Clock className="w-4 h-4 text-[#C8862B]" />
            <span>Last reviewed and updated on: <span className="text-[#EAF0F7] font-medium">[DD Month 2026]</span></span>
          </div>
        </div>
      </section>

      {/* SECTION 1: General Information of the Institution */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3864] mb-2">
              General Information of the Institution
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Prescribed institutional identity, governance structure, leadership contacts, and course accreditation history.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#D2DCE8] shadow-sm overflow-hidden mb-10">
            <div className="divide-y divide-gray-200 text-sm sm:text-base">
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-50/50">
                <span className="font-semibold text-[#1F3864]">Name of the Hospital / Institution</span>
                <span className="md:col-span-2 text-[#1C2D4A] font-medium">Bhaktivedanta Hospital & Research Institute</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-semibold text-[#1F3864]">Complete Address with PIN Code</span>
                <span className="md:col-span-2 text-[#1C2D4A]">[Complete registered address], Mira Road (East), [District], Maharashtra - [PIN code]</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-50/50">
                <span className="font-semibold text-[#1F3864]">Nature of Hospital (Govt. / Private / Trust / Corporate)</span>
                <span className="md:col-span-2 text-[#1C2D4A]">Trust - managed by Shri Chaitanya Health and Care Trust <span className="text-xs text-gray-500">[confirm registered trust name]</span></span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-semibold text-[#1F3864]">Name of the Head of the Institute (HOI)</span>
                <span className="md:col-span-2 text-[#1C2D4A]">[Name and designation of the HOI]</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-50/50">
                <span className="font-semibold text-[#1F3864]">Contact Details of HOI (Email ID & Official Phone)</span>
                <span className="md:col-span-2 text-[#1C2D4A]">Email: [official email ID] &nbsp;·&nbsp; Phone: [official phone number]</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-semibold text-[#1F3864]">Name of the NBEMS Single Point of Contact</span>
                <span className="md:col-span-2 text-[#1C2D4A]">[Name, designation and contact details of the NBEMS SPOC]</span>
              </div>
            </div>
          </div>

          {/* Table 1.7: Date of Initial NBEMS Accreditation */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#1F3864] mb-3">
              Date of Initial NBEMS Accreditation (First Grant) of different courses
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-[#D2DCE8] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#1F3864] text-white font-semibold">
                      <th className="py-3.5 px-5">NBEMS accredited specialty</th>
                      <th className="py-3.5 px-5">Course (NBEMS Diploma / DNB / FNB / DrNB)</th>
                      <th className="py-3.5 px-5">Date of First Accreditation</th>
                      <th className="py-3.5 px-5">Accreditation Valid up to</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">General Medicine</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">DNB General Medicine</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">Paediatrics</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">DNB Paediatrics</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">Ophthalmology</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">DNB Ophthalmology</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">Obstetrics & Gynaecology</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">DNB Obstetrics & Gynaecology</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">Anaesthesiology</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">DNB Anaesthesiology</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">Radio Diagnosis</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">Diploma in Radio Diagnosis (DRD)</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">Urology</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">[DNB Urology / DrNB Urology - as per accreditation letter]</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">Cardiology</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">DrNB Cardiology</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                      <td className="py-3.5 px-5 text-gray-600">[DD-MM-YYYY]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              [Add any further NBEMS-accredited courses (e.g., post-diploma DNB seats), exactly as named in the accreditation letters - confirm.]
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Clinical Facilities & Institutional Infrastructure */}
      <section className="py-14 sm:py-18 bg-[#EAF0F7]/50 border-y border-[#D2DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3864] mb-2">
              Clinical Facilities & Institutional Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              SPCB certified operational bed capacity, critical care infrastructure, 24x7 emergency & diagnostic services, and calendar-year clinical workload.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#D2DCE8] shadow-sm overflow-hidden mb-8">
            <div className="divide-y divide-gray-200 text-sm sm:text-base">
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-50/50">
                <span className="font-semibold text-[#1F3864]">Total operational beds in the hospital (as per SPCB / MPCB certificate/letter)</span>
                <span className="md:col-span-2 text-[#1C2D4A]">[Insert exact bed count as per the current SPCB (MPCB) certificate/letter]</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-semibold text-[#1F3864]">Total ICU / Critical Care Beds</span>
                <span className="md:col-span-2 text-[#1C2D4A]">
                  [Insert total critical-care beds across all units] <span className="text-xs text-gray-500 font-normal">(component units include an Intensive Coronary Care Unit of 17 beds; [add ICU, NICU, PICU and other unit-wise figures])</span>
                </span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-50/50">
                <span className="font-semibold text-[#1F3864]">24×7 Emergency Department Availability (Yes/No)</span>
                <span className="md:col-span-2 text-[#1C2D4A]">[Yes / No - confirm]</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-semibold text-[#1F3864]">24×7 Blood Bank Availability (Yes/No) - In-house / Out-sourced</span>
                <span className="md:col-span-2 text-[#1C2D4A]">[Yes / No - confirm] &nbsp;·&nbsp; [In-house / Out-sourced - confirm]</span>
              </div>
            </div>
          </div>

          {/* Table 2.5: Major Diagnostic Facilities */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#1F3864] mb-3">
              Major Diagnostic Facilities (e.g., CT, MRI, Cath Lab) - In-house / Out-sourced
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-[#D2DCE8] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#1F3864] text-white font-semibold">
                      <th className="py-3.5 px-5">Facility</th>
                      <th className="py-3.5 px-5">Availability</th>
                      <th className="py-3.5 px-5">In-house / Out-sourced</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">CT scan</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">Yes</td>
                      <td className="py-3.5 px-5 text-gray-600">In-house [confirm]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">MRI</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">Yes - in service</td>
                      <td className="py-3.5 px-5 text-gray-600">In-house [confirm]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">Cardiac Catheterisation Laboratory (Cath Lab)</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">Yes - Siemens Artis Zee, Heart Centre</td>
                      <td className="py-3.5 px-5 text-gray-600">In-house [confirm]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">Interventional Radiology / DSA</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">Yes</td>
                      <td className="py-3.5 px-5 text-gray-600">In-house [confirm]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">X-ray, Ultrasound & Doppler, Mammography, DEXA</td>
                      <td className="py-3.5 px-5 text-[#1C2D4A]">Yes</td>
                      <td className="py-3.5 px-5 text-gray-600">[In-house / Out-sourced - confirm each]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">PET-CT</td>
                      <td className="py-3.5 px-5 text-gray-600">[Available? - confirm]</td>
                      <td className="py-3.5 px-5 text-gray-600">[In-house / Out-sourced - confirm]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">[Add any other major diagnostic facility]</td>
                      <td className="py-3.5 px-5 text-gray-600">[ ]</td>
                      <td className="py-3.5 px-5 text-gray-600">[ ]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Table 2.6: Specialty-Specific Workload */}
          <div>
            <h3 className="text-lg font-bold text-[#1F3864] mb-3">
              Specialty-Specific Workload (previous calendar year - 2025)
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-[#D2DCE8] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#1F3864] text-white font-semibold">
                      <th className="py-3.5 px-4">Accredited Specialty / Course</th>
                      <th className="py-3.5 px-3">Departmental Beds</th>
                      <th className="py-3.5 px-3">Yearly OPD</th>
                      <th className="py-3.5 px-3">Yearly IPD</th>
                      <th className="py-3.5 px-3">Major Surgeries / Year</th>
                      <th className="py-3.5 px-3">Minor Surgeries / Year</th>
                      <th className="py-3.5 px-3">Rotational Policy (In-house / Outsourced)</th>
                      <th className="py-3.5 px-4">Track Record of Trainees (Registered / Left / Passed / Failed / Result Awaited)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-4 font-semibold text-[#1F3864]">DNB General Medicine</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-600">[In-house / Outsourced]</td>
                      <td className="py-3.5 px-4 text-gray-600 text-xs">Registered: [ ] &nbsp;·&nbsp; Left: [ ] &nbsp;·&nbsp; Passed: [ ] &nbsp;·&nbsp; Failed: [ ] &nbsp;·&nbsp; Result awaited: [ ]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-4 font-semibold text-[#1F3864]">DNB Paediatrics</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-600">[In-house / Outsourced]</td>
                      <td className="py-3.5 px-4 text-gray-600 text-xs">Registered: [ ] &nbsp;·&nbsp; Left: [ ] &nbsp;·&nbsp; Passed: [ ] &nbsp;·&nbsp; Failed: [ ] &nbsp;·&nbsp; Result awaited: [ ]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-4 font-semibold text-[#1F3864]">DNB Ophthalmology</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-600">[In-house / Outsourced]</td>
                      <td className="py-3.5 px-4 text-gray-600 text-xs">Registered: [ ] &nbsp;·&nbsp; Left: [ ] &nbsp;·&nbsp; Passed: [ ] &nbsp;·&nbsp; Failed: [ ] &nbsp;·&nbsp; Result awaited: [ ]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-4 font-semibold text-[#1F3864]">DNB Obstetrics & Gynaecology</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-600">[In-house / Outsourced]</td>
                      <td className="py-3.5 px-4 text-gray-600 text-xs">Registered: [ ] &nbsp;·&nbsp; Left: [ ] &nbsp;·&nbsp; Passed: [ ] &nbsp;·&nbsp; Failed: [ ] &nbsp;·&nbsp; Result awaited: [ ]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-4 font-semibold text-[#1F3864]">DNB Anaesthesiology</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-600">[In-house / Outsourced]</td>
                      <td className="py-3.5 px-4 text-gray-600 text-xs">Registered: [ ] &nbsp;·&nbsp; Left: [ ] &nbsp;·&nbsp; Passed: [ ] &nbsp;·&nbsp; Failed: [ ] &nbsp;·&nbsp; Result awaited: [ ]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-4 font-semibold text-[#1F3864]">Diploma in Radio Diagnosis (DRD)</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-600">[In-house / Outsourced]</td>
                      <td className="py-3.5 px-4 text-gray-600 text-xs">Registered: [ ] &nbsp;·&nbsp; Left: [ ] &nbsp;·&nbsp; Passed: [ ] &nbsp;·&nbsp; Failed: [ ] &nbsp;·&nbsp; Result awaited: [ ]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-4 font-semibold text-[#1F3864]">[DNB / DrNB] Urology</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-600">[In-house / Outsourced]</td>
                      <td className="py-3.5 px-4 text-gray-600 text-xs">Registered: [ ] &nbsp;·&nbsp; Left: [ ] &nbsp;·&nbsp; Passed: [ ] &nbsp;·&nbsp; Failed: [ ] &nbsp;·&nbsp; Result awaited: [ ]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-4 font-semibold text-[#1F3864]">DrNB Cardiology</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-500">[ ]</td>
                      <td className="py-3.5 px-3 text-gray-600">[In-house / Outsourced]</td>
                      <td className="py-3.5 px-4 text-gray-600 text-xs">Registered: [ ] &nbsp;·&nbsp; Left: [ ] &nbsp;·&nbsp; Passed: [ ] &nbsp;·&nbsp; Failed: [ ] &nbsp;·&nbsp; Result awaited: [ ]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              [All figures to be drawn from Medical Records / HIS for calendar year 2025 exactly as recorded. For predominantly non-surgical specialties, enter the applicable procedure/investigation counts or “Not applicable” in the surgery columns - confirm the entry convention before publication.]
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Financial & Administrative Disclosures */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3864] mb-2">
              Financial & Administrative Disclosures
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Monthly stipend rates conforming to NBEMS statutory minimums and resident accommodation facilities.
            </p>
          </div>

          {/* Table 3.1: Monthly Stipend */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[#1F3864] mb-3">
              Monthly Stipend (1st Year, 2nd Year, 3rd Year)
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-[#D2DCE8] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#1F3864] text-white font-semibold">
                      <th className="py-3.5 px-5">Programme</th>
                      <th className="py-3.5 px-5">Year 1 (per month)</th>
                      <th className="py-3.5 px-5">Year 2 (per month)</th>
                      <th className="py-3.5 px-5">Year 3 (per month)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">DNB - Broad Specialty (Post-MBBS)</td>
                      <td className="py-3.5 px-5 text-gray-600">Rs [ ]</td>
                      <td className="py-3.5 px-5 text-gray-600">Rs [ ]</td>
                      <td className="py-3.5 px-5 text-gray-600">Rs [ ]</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">DNB - Broad Specialty (Post-Diploma), if applicable</td>
                      <td className="py-3.5 px-5 text-gray-600">Rs [ ]</td>
                      <td className="py-3.5 px-5 text-gray-600">Rs [ ]</td>
                      <td className="py-3.5 px-5 text-gray-400">-</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">Diploma in Radio Diagnosis (DRD)</td>
                      <td className="py-3.5 px-5 text-gray-600">Rs [ ]</td>
                      <td className="py-3.5 px-5 text-gray-600">Rs [ ]</td>
                      <td className="py-3.5 px-5 text-gray-400">-</td>
                    </tr>
                    <tr className="hover:bg-gray-50/60 transition bg-gray-50/30">
                      <td className="py-3.5 px-5 font-semibold text-[#1F3864]">DrNB - Super Specialty</td>
                      <td className="py-3.5 px-5 text-gray-600">Rs [ ]</td>
                      <td className="py-3.5 px-5 text-gray-600">Rs [ ]</td>
                      <td className="py-3.5 px-5 text-gray-600">Rs [ ]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Stipend is paid for the entire duration of training, including eligible leave, in accordance with NBEMS norms. [Insert BVH’s exact monthly stipend figures above - not below the NBEMS-prescribed national minimum or the applicable State Government rate, whichever is higher.]
            </p>
          </div>

          {/* 3.2 Accommodation */}
          <div className="bg-white rounded-xl border border-[#D2DCE8] p-5 sm:p-6 shadow-sm">
            <h3 className="text-base font-bold text-[#1F3864] mb-2">
              Accommodation Provided (Yes/No)
            </h3>
            <p className="text-sm sm:text-base text-[#1C2D4A] leading-relaxed">
              Yes - secure resident accommodation with dining facilities is provided. <span className="text-xs text-gray-500 font-normal">[Add: location (on-/off-campus), room type (single/shared), capacity, and charges if any - accommodation charges, where levied, are as capped under NBEMS norms - confirm details.]</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Academic Environment & Research */}
      <section className="py-14 sm:py-18 bg-[#EAF0F7]/50 border-y border-[#D2DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3864] mb-2">
              Academic Environment & Research
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Medical library, digital knowledge repositories, departmental academic schedules, and institutional ethics committee registration.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#D2DCE8] shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200 text-sm sm:text-base">
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-50/50">
                <span className="font-semibold text-[#1F3864]">Availability of Physical Medical Library</span>
                <span className="md:col-span-2 text-[#1C2D4A]">
                  Yes - a well-stocked medical library with current textbooks, journals and periodicals, accessible to all NBEMS trainees. <span className="text-xs text-gray-500 font-normal">[Add: holdings, seating capacity and working hours - confirm.]</span>
                </span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-semibold text-[#1F3864]">Access to Digital / E-Library Resources</span>
                <span className="md:col-span-2 text-[#1C2D4A]">
                  Yes - e-books, e-journals and evidence-based clinical resources are available to all trainees. <span className="text-xs text-gray-500 font-normal">[Add: named databases/subscriptions and mode of access - confirm.]</span>
                </span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-50/50">
                <span className="font-semibold text-[#1F3864]">Academic Activities (Journal Clubs, Case Presentations, Grand Rounds)</span>
                <span className="md:col-span-2 text-[#1C2D4A]">
                  Yes - every department runs a fixed weekly academic calendar: bedside clinics, grand rounds, case presentations, seminars and symposia, journal clubs, clinical audits and mortality meetings, supplemented by central sessions on research methodology, biostatistics and medical ethics.
                </span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="font-semibold text-[#1F3864]">Seminar / Demonstration Room</span>
                <span className="md:col-span-2 text-[#1C2D4A]">
                  Yes - <span className="text-xs text-gray-500 font-normal">[number of seminar/demonstration rooms, seating capacity and audiovisual facilities - confirm].</span>
                </span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-50/50">
                <span className="font-semibold text-[#1F3864]">Institutional Ethics Committee (Registered with DHR, MoHFW, Govt. of India)</span>
                <span className="md:col-span-2 text-[#1C2D4A]">
                  Yes - the institute has government-registered Ethics Committee(s) supporting trainee research and thesis work. <span className="text-xs text-gray-500 font-normal">[Insert DHR (MoHFW) registration number(s) with validity dates; add CDSCO registration details if applicable - confirm.]</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Grievance Redressal & Anti-Ragging */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3864] mb-2">
              Grievance Redressal & Anti-Ragging
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Institutional committees, confidential submission channels, escalation pathways, and zero-tolerance anti-ragging helpline contacts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Grievance Redressal */}
            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1F3864] text-white flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-[#C8862B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F3864]">
                    Grievance Redressal Committee
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#1C2D4A]/90 leading-relaxed mb-4">
                  A constituted institutional Grievance Redressal Committee receives and resolves trainee grievances in a time-bound, confidential and impartial manner.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-[#1C2D4A]/80 border-t border-[#D2DCE8] pt-4 mb-4">
                  <p>
                    <span className="font-semibold text-gray-700">Chairperson:</span> [name and designation - confirm]. &nbsp;
                    <span className="font-semibold text-gray-700">Members:</span> [names and designations - confirm].
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Grievance helpline:</span> [phone number] &nbsp;·&nbsp;
                    <span className="font-semibold text-gray-700">Email:</span> [email ID]
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">How to raise a grievance:</span> [submission channel - email / online form / register].
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-[#D2DCE8] text-xs text-[#1C2D4A]/80">
                <span className="font-semibold text-[#1F3864] block mb-1">Escalation pathway:</span>
                Department / Guide → Academic Cell / DNB Coordinator → Grievance Redressal Committee → Institutional leadership, with recourse to NBEMS where applicable.
              </div>
            </div>

            {/* Anti-Ragging */}
            <div className="bg-[#EAF0F7]/40 border border-[#D2DCE8] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1F3864] text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#C8862B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F3864]">
                    Anti-Ragging
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#1C2D4A]/90 leading-relaxed mb-4">
                  The institute maintains zero tolerance towards ragging, in line with the applicable UGC/NMC anti-ragging regulations. A constituted Anti-Ragging Committee and Anti-Ragging Squad monitor, prevent and act upon any incident.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-[#1C2D4A]/80 border-t border-[#D2DCE8] pt-4 mb-4">
                  <p>
                    <span className="font-semibold text-gray-700">Chairperson, Anti-Ragging Committee:</span> [name and designation - confirm].
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Institutional anti-ragging contact:</span> [name, phone and email - confirm].
                  </p>
                </div>
              </div>

              <div className="bg-[#1F3864] text-white p-4 rounded-lg text-xs sm:text-sm">
                <span className="font-bold text-[#C8862B] block mb-1">National Anti-Ragging Helpline (24×7):</span>
                1800-180-5522 &nbsp;·&nbsp; helpline@antiragging.in
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Footer Note */}
      <section className="py-8 bg-gray-100 border-t border-gray-300 text-center text-xs text-gray-600">
        <div className="max-w-5xl mx-auto px-4">
          <p>
            Published pursuant to NBEMS Directive: “Mandatory disclosure by NBEMS Accredited Hospitals / Medical Institutions - Details & Proforma”. Direct URL submitted via the NBEMS Online Accreditation Application Portal under “Update Profile”.
          </p>
        </div>
      </section>
    </div>
  );
}
