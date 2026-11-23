"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PLACEHOLDER_IMAGE, DNB_PROGRAMMES } from "@/lib/constants";
import {
  Stethoscope,
  Award,
  Users,
  Calendar,
  Clock,
  BookOpen,
  Microscope,
  CheckCircle2,
  ChevronRight,
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Heart,
  Activity,
  Layers,
  Bed,
  Sparkles,
  FileText,
  Send,
  Video,
  Play,
  Quote
} from "lucide-react";
import { useState } from "react";

// Section 7 Faculty Data from document
const HOD_DATA = {
  name: "Dr. Dhaval Dalal",
  designation: "HOD & Senior Consultant, Internal Medicine",
  qualification: "MD (Internal Medicine)",
  experience: "32 years+",
  photo: PLACEHOLDER_IMAGE,
};

const FACULTY_MEMBERS = [
  {
    name: "Dr. Suraj Purushotthaman",
    designation: "Consultant Internal Medicine and Chief Intensivist",
    qualification: "MD, DNB, EDIC (European Diploma in Intensive Care)",
    experience: "18 years+",
    photo: PLACEHOLDER_IMAGE,
  },
  {
    name: "Dr. Falguni Parikh",
    designation: "Senior Consultant, General Medicine",
    qualification: "MBBS, MD (General Medicine), DNB (General Medicine)",
    experience: "29 years+",
    photo: PLACEHOLDER_IMAGE,
  },
  {
    name: "Dr. Prashant Patil",
    designation: "Consultant Physician & Intensivist",
    qualification: "MBBS, DNB (Internal Medicine), FCPS, MD; Fellowship in General Infectious Diseases (CMC Vellore)",
    experience: "15 years+",
    photo: PLACEHOLDER_IMAGE,
  },
  {
    name: "Dr. Priyank Dumade",
    designation: "Consultant Physician & Intensivist",
    qualification: "MD (Medicine)",
    experience: "5 years+",
    photo: PLACEHOLDER_IMAGE,
  },
  {
    name: "Dr. Namrata Rao",
    designation: "Consultant, Internal Medicine",
    qualification: "MD (Internal Medicine)",
    experience: "12 years+",
    photo: PLACEHOLDER_IMAGE,
  },
  {
    name: "Dr. Swapnil Gautam",
    designation: "Consultant, General Medicine; Infectious Disease Specialist & Intensivist",
    qualification: "MD, DNB, MRCP (London), MRCPE (Edinburgh), MRCPS (Glasgow), PG Diploma in Infectious Diseases",
    experience: "14 years+",
    photo: PLACEHOLDER_IMAGE,
  },
  {
    name: "Dr. Pramodini Shankaran",
    designation: "Consultant Rheumatologist",
    qualification: "MD, Rheumatologist",
    experience: "25 years+",
    photo: PLACEHOLDER_IMAGE,
  },
];

// Section 8 Weekly Academic Schedule
const ACADEMIC_SCHEDULE = [
  { day: "Monday", activity: "Bedside clinics; basic rounds" },
  { day: "Tuesday", activity: "Intra-departmental meet; grand rounds; case presentation" },
  { day: "Wednesday", activity: "Faculty teaching; central session; guest lecture; mortality meet; clinical audit" },
  { day: "Thursday", activity: "Basic rounds" },
  { day: "Friday", activity: "Journal club; seminar / symposia" },
  { day: "Saturday", activity: "Thesis update; skills and procedures" },
];

export default function GeneralMedicineSpokePage() {
  const [activeTab, setActiveTab] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
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
            <span className="text-[#1F3864] font-semibold">DNB General Medicine</span>
          </div>
        </div>

        {/* 1. Department Banner (§1) */}
        {/* Full-width banner: teaching/ward photograph of Internal Medicine from 10 July shoot (using PLACEHOLDER_IMAGE until photography upload). Overlay title and one-line positioning below. */}
        <section className="relative w-full text-white overflow-hidden py-16 sm:py-24 border-b-4 border-[#C8862B]">
          <div className="absolute inset-0 z-0">
            <Image
              src={PLACEHOLDER_IMAGE}
              alt="Internal Medicine Teaching and Ward Rounds - Bhaktivedanta Hospital"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D33]/95 via-[#1F3864]/90 to-[#1F3864]/65"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#D5E8F0] text-xs font-semibold mb-4 border border-white/20">
                <Stethoscope className="w-3.5 h-3.5 text-[#C8862B]" />
                NBEMS Accredited Broad Specialty
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold !text-white tracking-tight leading-tight mb-4 drop-shadow">
                DNB General Medicine
              </h1>
              <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed mb-8 drop-shadow-sm">
                Three-year, NBEMS-accredited broad-specialty training in Internal Medicine, blending evidence-based practice with comprehensive, patient-centred care.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C8862B] text-white font-semibold text-sm hover:brightness-110 shadow-lg transition"
                >
                  <span>Apply / Enquire</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="#programme-details"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold text-sm border border-white/30 backdrop-blur-sm transition"
                >
                  <span>Programme Overview &darr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. About the Department (§2) */}
        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-6">
                  About the Department
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
                  <p>
                    The Department of Internal Medicine at Bhaktivedanta Hospital &amp; Research Institute treats each patient as an individual, harmonising mainstream medical protocols with scientifically validated complementary modalities to achieve the best possible curative, promotive and rehabilitative outcomes. This integrative approach is particularly valuable in complex multi-organ disorders and chronic conditions, and is well received by patients.
                  </p>
                  <p className="text-sm sm:text-base text-[#595959]">
                    The department brings together a strong blend of accomplished senior physicians with over three decades of experience and academically excellent younger physicians. The team provides comprehensive in-patient care for a broad range of medical conditions, with close interaction across the hospital&apos;s specialties and super-specialties.
                  </p>
                </div>

                {/* Integrated Medicine Callout */}
                <div className="mt-8 p-6 bg-[#EAF0F7]/60 rounded-xl border border-[#D5E8F0]">
                  <h3 className="font-serif font-bold text-base text-[#1F3864] mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#C8862B]" />
                    Integrated Medicine
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    BVH offers an integrated, whole-person approach to care that recognises the connection between physical, mental, emotional and spiritual well-being. Conventional medical treatment is combined, where appropriate and evidence-based, with modalities such as Ayurveda, Yoga, Naturopathy, Homeopathy and Nutrition, tailored to the individual. By addressing root causes and recommending personalised lifestyle modification, the goal is durable improvement, especially in chronic disease — always prioritising patient safety.
                  </p>
                </div>
              </div>

              {/* Right: Department Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 aspect-[4/3]">
                  <Image
                    src={PLACEHOLDER_IMAGE}
                    alt="Internal Medicine Ward Rounds & Teaching"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3864]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/20">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#D5E8F0] block">
                      Internal Medicine Teaching Ward
                    </span>
                    <span className="font-serif font-bold text-sm block">
                      High-Volume In-Patient Medical Care
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Programme at BVH (§3) */}
        <section id="programme-details" className="py-16 sm:py-20 bg-[#EAF0F7]/50 scroll-mt-20 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                The Programme at BVH
              </h2>
              <p className="text-sm text-[#595959] mt-2">
                Standardised, competency-based postgraduate curriculum affiliated with the National Board of Examinations in Medical Sciences.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#1F3864] text-white font-serif font-bold">
                      <th className="py-3.5 px-6 border-r border-white/20 w-1/3">Attribute</th>
                      <th className="py-3.5 px-6">Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-900">
                    <tr className="hover:bg-[#EAF0F7]/30 transition">
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864] border-r border-gray-200">Programme</td>
                      <td className="py-3.5 px-6 font-medium">DNB General Medicine</td>
                    </tr>
                    <tr className="hover:bg-[#EAF0F7]/30 transition">
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864] border-r border-gray-200">Level</td>
                      <td className="py-3.5 px-6">Broad specialty (Post-MBBS)</td>
                    </tr>
                    <tr className="hover:bg-[#EAF0F7]/30 transition">
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864] border-r border-gray-200">Duration</td>
                      <td className="py-3.5 px-6 font-mono font-bold text-[#2E75B6]">3 years</td>
                    </tr>
                    <tr className="hover:bg-[#EAF0F7]/30 transition">
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864] border-r border-gray-200">Seats per session</td>
                      <td className="py-3.5 px-6 font-mono text-[#595959]">[seats — placeholder]</td>
                    </tr>
                    <tr className="hover:bg-[#EAF0F7]/30 transition">
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864] border-r border-gray-200">Entrance</td>
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864]">NEET-PG</td>
                    </tr>
                    <tr className="hover:bg-[#EAF0F7]/30 transition">
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864] border-r border-gray-200">NBEMS accreditation status</td>
                      <td className="py-3.5 px-6 font-mono text-[#595959]">[accredited since / validity — placeholder]</td>
                    </tr>
                    <tr className="hover:bg-[#EAF0F7]/30 transition">
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864] border-r border-gray-200">Commencement session</td>
                      <td className="py-3.5 px-6 font-mono text-[#595959]">[January / July — confirm]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-white rounded-xl border border-[#D5E8F0] text-xs sm:text-sm text-gray-700 flex items-center justify-between flex-wrap gap-4">
              <p>
                Admission is entirely merit-based through NEET-PG and centralised counselling (MCC of DGHS).
              </p>
              <Link
                href="/education/dnb-drnb#admissions"
                className="text-[#2E75B6] hover:text-[#1F3864] font-semibold inline-flex items-center gap-1 text-xs"
              >
                <span>View full admission pathway, stipend &amp; welfare details &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Why Train in General Medicine at BVH (§4) */}
        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Why Train in General Medicine at BVH
              </h2>
              <p className="text-sm text-[#595959] mt-2">
                Comprehensive clinical exposure, dedicated mentorship, and structured academic rigour.
              </p>
            </div>

            {/* 3-Column Card Grid (Spec 5.3) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group">
                <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                  High-Volume In-Patient Exposure
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#1A1A1A]">
                  Broad, high-volume in-patient exposure across the full spectrum of general medicine and its sub-specialties.
                </p>
              </div>

              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group">
                <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                  30+ Years Faculty Mentorship
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#1A1A1A]">
                  Mentorship by senior physicians with 30+ years of clinical and teaching experience.
                </p>
              </div>

              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group">
                <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                  Allied Super-Specialty Rotations
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#1A1A1A]">
                  Structured rotations through pulmonology, critical care, gastroenterology, cardiology, neurology, endocrinology, and infectious diseases.
                </p>
              </div>

              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group">
                <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                  Fixed Academic Calendar
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#1A1A1A]">
                  A fixed weekly academic calendar — rounds, case presentations, journal clubs, clinical audit and mortality meets.
                </p>
              </div>

              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group">
                <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                  Strong Research Support
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#1A1A1A]">
                  Strong research support for thesis work and publications via the dedicated Medical Research Department.
                </p>
              </div>

              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group">
                <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                  Integrative Medicine Environment
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#1A1A1A]">
                  A distinctive integrative-medicine environment that broadens clinical perspective and therapeutic understanding.
                </p>
              </div>
            </div>

            {/* Numbers to Confirm */}
            <div className="p-6 bg-[#EAF0F7]/40 rounded-xl border border-[#D5E8F0]">
              <h4 className="font-serif font-bold text-sm text-[#1F3864] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C8862B]" />
                Department Metrics to Confirm
              </h4>
              <p className="text-xs font-mono text-[#595959]">
                [ Add 2–3 department metrics — annual medical admissions, ICU exposure, OPD footfall — placeholders. ]
              </p>
            </div>
          </div>
        </section>

        {/* 5. Clinical Exposure & Caseload (§5) */}
        <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Clinical Exposure &amp; Caseload
              </h2>
              <p className="text-sm text-[#595959] mt-2">
                Hands-on diagnostic and management experience across acute, chronic, and intensive care medicine.
              </p>
            </div>

            {/* Stat Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                <span className="text-xs font-medium text-[#595959] block">Annual In-Patient Admissions</span>
                <span className="text-xl font-bold font-mono text-[#1F3864] mt-1 block">[ placeholder ]</span>
              </div>
              <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                <span className="text-xs font-medium text-[#595959] block">Medical ICU / HDU Beds</span>
                <span className="text-xl font-bold font-mono text-[#1F3864] mt-1 block">[ placeholder ]</span>
              </div>
              <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                <span className="text-xs font-medium text-[#595959] block">General Medicine OPD / Year</span>
                <span className="text-xl font-bold font-mono text-[#1F3864] mt-1 block">[ placeholder ]</span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-sm space-y-4 text-xs sm:text-sm text-gray-800">
              <div>
                <strong className="text-[#1F3864] block mb-1">Sub-specialty rotations available:</strong>
                <p className="text-[#595959]">
                  Pulmonology, critical care, gastroenterology, cardiology, neurology, oncology, endocrinology, emergency medicine, infectious diseases.
                </p>
              </div>
              <div>
                <strong className="text-[#1F3864] block mb-1">Common procedures residents are trained in:</strong>
                <p className="text-[#595959] font-mono">[ list of core procedural competencies — placeholder ]</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Facilities & Infrastructure (§6) */}
        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Facilities &amp; Infrastructure
              </h2>
              <p className="text-sm text-[#595959] mt-2">
                Tertiary-care clinical and academic facilities aligned with NBEMS accreditation standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#EAF0F7]/40 p-5 rounded-xl border border-gray-200 shadow-sm">
                <Bed className="w-6 h-6 text-[#2E75B6] mb-3" />
                <h3 className="font-serif font-bold text-sm text-[#1F3864] mb-1">Medical Wards &amp; Beds</h3>
                <p className="text-xs font-mono text-[#595959]">[ Medical wards &amp; bed strength — placeholder ]</p>
              </div>

              <div className="bg-[#EAF0F7]/40 p-5 rounded-xl border border-gray-200 shadow-sm">
                <Activity className="w-6 h-6 text-[#2E75B6] mb-3" />
                <h3 className="font-serif font-bold text-sm text-[#1F3864] mb-1">Medical ICU / HDU</h3>
                <p className="text-xs font-mono text-[#595959]">[ Medical ICU / HDU — placeholder ]</p>
              </div>

              <div className="bg-[#EAF0F7]/40 p-5 rounded-xl border border-gray-200 shadow-sm">
                <Building className="w-6 h-6 text-[#2E75B6] mb-3" />
                <h3 className="font-serif font-bold text-sm text-[#1F3864] mb-1">24x7 Diagnostic Support</h3>
                <p className="text-xs font-mono text-[#595959]">[ 24x7 pathology &amp; radiology — confirm/expand ]</p>
              </div>

              <div className="bg-[#EAF0F7]/40 p-5 rounded-xl border border-gray-200 shadow-sm">
                <BookOpen className="w-6 h-6 text-[#2E75B6] mb-3" />
                <h3 className="font-serif font-bold text-sm text-[#1F3864] mb-1">Library &amp; Academics</h3>
                <p className="text-xs text-[#595959]">Library &amp; e-resources access for all residents. [ confirm details ]</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Faculty Grid (§7 - Spec 5.6: HOD highlighted/first, then faculty) */}
        <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Faculty
              </h2>
              <p className="text-sm text-[#595959] mt-2">
                Accomplished teaching faculty, clinicians, and recognized postgraduate guides.
              </p>
            </div>

            {/* Head of Department Highlighted Card */}
            <div className="mb-10 p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#2E75B6] shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#D5E8F0] bg-gray-100 flex-shrink-0">
                <Image
                  src={HOD_DATA.photo}
                  alt={HOD_DATA.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1F3864] text-white text-xs font-bold uppercase tracking-wider mb-2">
                  Head of Department
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1F3864]">
                  {HOD_DATA.name}
                </h3>
                <p className="text-sm font-semibold text-[#2E75B6] mt-0.5">
                  {HOD_DATA.designation}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                  <p><strong>Qualifications:</strong> {HOD_DATA.qualification}</p>
                  <p><strong>Experience:</strong> {HOD_DATA.experience}</p>
                </div>
              </div>
            </div>

            {/* Faculty Members Grid (Spec: 2-per-row, then 1-per-row on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FACULTY_MEMBERS.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center hover:border-[#2E75B6] transition"
                >
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#D5E8F0] bg-gray-100 mb-4 flex-shrink-0">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#1F3864] leading-snug">
                    {f.name}
                  </h3>
                  <p className="text-xs font-medium text-[#2E75B6] mt-1 mb-2">
                    {f.designation}
                  </p>
                  <div className="mt-auto pt-3 border-t border-gray-100 w-full text-[11px] text-gray-600 space-y-1">
                    <p className="line-clamp-2"><strong>Qual:</strong> {f.qualification}</p>
                    <p><strong>Experience:</strong> {f.experience}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-[#595959] italic text-center">
              * Note: Faculty data carried over from institutional records. Please verify current list, qualifications and years of experience.
            </p>
          </div>
        </section>

        {/* 8. Weekly Academic Schedule (§8 - Spec 5.7) */}
        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Weekly Academic Schedule
              </h2>
              <p className="text-sm text-[#595959] mt-2">
                Structured clinical and didactic teaching schedule for DNB General Medicine residents.
              </p>
            </div>

            {/* Desktop Table (hidden on mobile) */}
            <div className="hidden sm:block overflow-hidden bg-white rounded-xl shadow-sm border border-gray-300 mb-4">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#1F3864] text-white font-serif font-bold">
                    <th className="py-3.5 px-6 border-r border-white/20 w-1/4">Day</th>
                    <th className="py-3.5 px-6">Academic activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {ACADEMIC_SCHEDULE.map((s, idx) => (
                    <tr key={idx} className="hover:bg-[#EAF0F7]/40 transition">
                      <td className="py-3.5 px-6 font-serif font-bold text-[#1F3864] border-r border-gray-200">
                        {s.day}
                      </td>
                      <td className="py-3.5 px-6 text-gray-800">
                        {s.activity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Accordion/Cards (Spec 5.7: Day-wise stacked accordion on mobile) */}
            <div className="sm:hidden space-y-3">
              {ACADEMIC_SCHEDULE.map((s, idx) => (
                <div key={idx} className="p-4 bg-[#EAF0F7]/40 rounded-xl border border-gray-200">
                  <span className="font-serif font-bold text-sm text-[#1F3864] block mb-1">
                    {s.day}
                  </span>
                  <p className="text-xs text-gray-700">
                    {s.activity}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#595959] italic mt-3">
              * Subject to rotation adjustments and clinical postings.
            </p>
          </div>
        </section>

        {/* 9. Your Training Journey (§9 - Year 1 -> 2 -> 3 Timeline Infographic) */}
        <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Your Training Journey
              </h2>
              <p className="text-sm text-[#595959] mt-2">
                Three-year progressive residency from fundamental competencies to independent clinical practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Year 1 */}
              <div className="bg-white p-7 rounded-2xl border-2 border-[#1F3864] shadow-sm flex flex-col justify-between relative group hover:border-[#2E75B6] transition">
                <div>
                  <span className="w-9 h-9 rounded-full bg-[#1F3864] text-white flex items-center justify-center font-bold text-sm mb-4">
                    1
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2">
                    Year 1 — Foundation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Core clinical postings, ward and ICU exposure, log-book initiation, research methodology training, and thesis protocol development.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-gray-100 text-xs font-semibold text-[#2E75B6]">
                  Core Clinical Grounding
                </div>
              </div>

              {/* Year 2 */}
              <div className="bg-white p-7 rounded-2xl border-2 border-[#1F3864] shadow-sm flex flex-col justify-between relative group hover:border-[#2E75B6] transition">
                <div>
                  <span className="w-9 h-9 rounded-full bg-[#2E75B6] text-white flex items-center justify-center font-bold text-sm mb-4">
                    2
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2">
                    Year 2 — Consolidation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Sub-specialty rotations, increasing clinical responsibility, thesis data collection, and appearing for the centralised NBEMS Formative Assessment Test (FAT).
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-gray-100 text-xs font-semibold text-[#2E75B6]">
                  Sub-specialty &amp; FAT Exam
                </div>
              </div>

              {/* Year 3 */}
              <div className="bg-white p-7 rounded-2xl border-2 border-[#1F3864] shadow-sm flex flex-col justify-between relative group hover:border-[#2E75B6] transition">
                <div>
                  <span className="w-9 h-9 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-sm mb-4">
                    3
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2">
                    Year 3 — Mastery
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Independent clinical management under supervision, thesis completion and timely submission to NBEMS, and intensive preparation for the DNB Final (Exit) Examination.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-gray-100 text-xs font-semibold text-[#C8862B]">
                  DNB Exit Summative Exams
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Thesis & Research (§10) */}
        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-8">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Thesis &amp; Research
              </h2>
              <p className="text-base sm:text-lg text-[#1A1A1A] mt-3 leading-relaxed">
                A thesis is mandatory for DNB General Medicine. Residents are supported end-to-end by the Medical Research Department and a faculty guide — from research methodology training and Ethics Committee approval to analysis, writing, timely submission to NBEMS, and publication of thesis-based work.
              </p>
            </div>

            <div className="p-6 bg-[#EAF0F7]/40 rounded-xl border border-[#D5E8F0]">
              <span className="text-xs uppercase font-bold text-[#2E75B6] tracking-wider block mb-1">
                Department Research Activity
              </span>
              <p className="text-xs sm:text-sm text-[#595959] font-mono">
                [ Add department-specific research highlights — recent resident publications/presentations — placeholders. ]
              </p>
            </div>
          </div>
        </section>

        {/* 11. Outcomes (§11 - Spec 5.9: Headline result figures + alumni highlight strip) */}
        <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Outcomes
              </h2>
              <p className="text-sm text-[#595959] mt-2">
                Specialty-specific exit examination outcomes, alumni achievements, and career progressions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <span className="text-xs font-semibold text-[#595959] uppercase tracking-wider block">
                  DNB Exit Exam Pass Rate
                </span>
                <span className="text-2xl font-serif font-bold text-[#1F3864] mt-2 block">
                  [ % ]
                </span>
                <span className="text-xs text-[#595959] font-mono mt-1 block">
                  [ placeholder ]
                </span>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <span className="text-xs font-semibold text-[#595959] uppercase tracking-wider block">
                  Alumni Trained to Date
                </span>
                <span className="text-2xl font-serif font-bold text-[#1F3864] mt-2 block">
                  [ alumni ]
                </span>
                <span className="text-xs text-[#595959] font-mono mt-1 block">
                  [ placeholder ]
                </span>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <span className="text-xs font-semibold text-[#595959] uppercase tracking-wider block">
                  Resident Awards
                </span>
                <span className="text-2xl font-serif font-bold text-[#1F3864] mt-2 block">
                  [ awards ]
                </span>
                <span className="text-xs text-[#595959] font-mono mt-1 block">
                  [ placeholder ]
                </span>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm text-xs sm:text-sm text-gray-700">
              <strong className="text-[#1F3864] block mb-1">Where our alumni are now:</strong>
              <p className="text-[#595959] font-mono">[ Notable placements, super-specialty fellowships, consultant &amp; faculty positions — placeholder ]</p>
            </div>
          </div>
        </section>

        {/* 12. Resident & Faculty Voices (§12 - Spec 5.8: Thumbnail video cards + text pull quotes) */}
        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-2">
                Resident &amp; Faculty Voices
              </h2>
              <p className="text-sm text-[#595959]">
                Insights from General Medicine guides and resident trainees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Faculty Testimonial */}
              <div className="bg-[#EAF0F7]/40 rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <Quote className="w-8 h-8 text-[#C8862B] mb-3 opacity-60" />
                  <p className="text-sm sm:text-base italic text-gray-800 leading-relaxed mb-4">
                    &ldquo;[ pull-quote from General Medicine faculty member ]&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <span className="font-serif font-bold text-sm text-[#1F3864] block">
                    Faculty — [ name, designation ]
                  </span>
                  <span className="text-xs text-[#595959]">
                    Department of Internal Medicine, BVH
                  </span>
                </div>
              </div>

              {/* Resident Testimonial */}
              <div className="bg-[#EAF0F7]/40 rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <Quote className="w-8 h-8 text-[#C8862B] mb-3 opacity-60" />
                  <p className="text-sm sm:text-base italic text-gray-800 leading-relaxed mb-4">
                    &ldquo;[ pull-quote from DNB General Medicine resident trainee ]&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <span className="font-serif font-bold text-sm text-[#1F3864] block">
                    Resident — [ name, batch ]
                  </span>
                  <span className="text-xs text-[#595959]">
                    DNB General Medicine Resident Doctor
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#2E75B6] italic text-center">
              [[ General Medicine faculty and student video testimonial films from the 10 July shoot will be embedded here with interactive lightbox playback. ]]
            </p>
          </div>
        </section>

        {/* 13. How to Apply / Enquire (§13 - Spec 5.10: Academic CTA + Form) */}
        <section id="enquiry-form" className="py-16 sm:py-24 bg-[#1F3864] text-white relative overflow-hidden scroll-mt-20 border-y-4 border-[#C8862B]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D33]/95 via-[#1F3864]/90 to-[#1F3864]/80 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div>
              <div className="max-w-4xl mb-12">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold !text-white tracking-tight mb-4 drop-shadow-sm">
                  How to Apply / Enquire
                </h2>
                <div className="space-y-3.5 text-base sm:text-lg text-slate-100 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow">
                      1
                    </span>
                    <p>Qualify NEET-PG for the relevant admission session.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow">
                      2
                    </span>
                    <p>Participate in centralised counselling (MCC of DGHS) and select <strong>DNB General Medicine at Bhaktivedanta Hospital &amp; Research Institute</strong>.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow">
                      3
                    </span>
                    <p>Report to BVH with original documents for verification and joining.</p>
                  </div>
                </div>
              </div>

              {/* Grid: Contact Coordinator Card + Academic Enquiry Form */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 bg-white/10 backdrop-blur-md text-white p-7 sm:p-8 rounded-2xl border border-white/20 shadow-xl">
                  <h3 className="font-serif font-bold text-xl !text-white mb-6 pb-3 border-b border-white/15">
                    Contact — Academic Cell / DNB Coordinator
                  </h3>
                  <div className="space-y-5 text-sm">
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
                        <span className="block text-xs text-[#D5E8F0] font-medium">Email (academic enquiries):</span>
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
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs text-[#D5E8F0] font-medium">Address:</span>
                        <span className="text-sm text-slate-100 block">
                          Bhaktivedanta Hospital &amp; Research Institute, Mira Road (E), Mumbai.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white text-gray-900 p-7 sm:p-8 rounded-2xl border border-gray-200 shadow-2xl">
                  {formSubmitted ? (
                    <div className="text-center py-10">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                      <h4 className="font-serif font-bold text-xl text-[#1F3864] mb-2">
                        Enquiry Submitted Successfully
                      </h4>
                      <p className="text-xs sm:text-sm text-[#595959] max-w-md mx-auto mb-6">
                        Thank you for inquiring about DNB General Medicine at Bhaktivedanta Hospital. The Academic Cell will respond to your query shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="px-5 py-2.5 bg-[#1F3864] text-white text-xs font-semibold rounded-lg hover:bg-[#2E75B6] transition"
                      >
                        Submit Another Query
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1F3864] mb-1">
                          General Medicine Admissions Enquiry
                        </h3>
                        <p className="text-xs text-[#595959]">
                          Submit your query regarding seat status, clinical rotations, stipend, or counselling.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Candidate Name *
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
                          Your Academic Query *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Inquire about clinical exposure, ICU rotation schedule, thesis guides, or accommodation..."
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E75B6]"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 bg-[#C8862B] text-white font-semibold rounded-lg hover:brightness-105 transition flex items-center justify-center gap-2 shadow-md text-sm"
                      >
                        <Send className="w-4 h-4" />
                        Submit Academic Enquiry
                      </button>
                    </form>
                  )}
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
