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
  ChevronDown,
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
  const [openScheduleDay, setOpenScheduleDay] = useState<number | null>(0);

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
        {/* Full-width banner: a teaching/ward photograph of the Internal Medicine department from the 10 July shoot. Overlay the title and one-line below. */}
        <section className="relative w-full text-white overflow-hidden py-36 sm:py-48 lg:py-60 min-h-[580px] lg:min-h-[680px] flex items-center border-b-4 border-[#C8862B]">
          {/* Full-width background photograph */}
          <div className="absolute inset-0 z-0">
            <Image
              src={PLACEHOLDER_IMAGE}
              alt="Department of Internal Medicine - Bhaktivedanta Hospital & Research Institute"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dual gradient overlay matching HeroSection: rich dark navy wash on the left blending into the photograph */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D33]/95 via-[#1F3864]/85 to-[#1F3864]/50"></div>
            <div className="absolute inset-0 bg-[#1F3864]/30 mix-blend-multiply"></div>
          </div>

          {/* Overlaid Title and One-line positioning */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              
              {/* Page title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-serif font-bold !text-white tracking-tight leading-[1.2] mb-6 drop-shadow-md">
                DNB General Medicine
              </h1>
              
              {/* One-line positioning */}
              <p className="text-base sm:text-lg md:text-xl text-slate-100 font-normal leading-relaxed mb-8 drop-shadow-sm max-w-3xl">
                Three-year, NBEMS-accredited broad-specialty training in Internal Medicine, blending evidence-based practice with comprehensive, patient-centred care.
              </p>
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
                  <p>
                    The department brings together a strong blend of accomplished senior physicians with over three decades of experience and academically excellent younger physicians. The team provides comprehensive in-patient care for a broad range of medical conditions, with close interaction across the hospital&apos;s specialties and super-specialties.
                  </p>
                </div>

                {/* Integrated Medicine Callout Card */}
                <div className="mt-8 p-6 bg-[#EAF0F7]/60 rounded-xl border border-[#D5E8F0] shadow-sm">
                  <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#C8862B]" />
                    <span>Integrated Medicine</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    BVH offers an integrated, whole-person approach to care that recognises the connection between physical, mental, emotional and spiritual well-being. Conventional medical treatment is combined, where appropriate and evidence-based, with modalities such as Ayurveda, Yoga, Naturopathy, Homeopathy and Nutrition, tailored to the individual. By addressing root causes and recommending personalised lifestyle modification, the goal is durable improvement, especially in chronic disease - always prioritising patient safety.
                  </p>
                </div>
              </div>

              {/* Right: Department Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 aspect-[4/3]">
                  <Image
                    src={PLACEHOLDER_IMAGE}
                    alt="Internal Medicine Department - Bhaktivedanta Hospital"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3864]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/20">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#D5E8F0] block">
                      Internal Medicine Department
                    </span>
                    <span className="font-serif font-bold text-sm block">
                      In-Patient Medical Care &amp; Clinical Teaching
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
            <div className="max-w-4xl mb-8">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                The Programme at BVH
              </h2>
            </div>

            {/* Desktop Table View */}
            <div className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden mb-6 hidden md:block">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#1F3864] text-white font-serif font-bold text-sm">
                      <th className="py-4 px-6 border-r border-white/20 w-1/3">Attribute</th>
                      <th className="py-4 px-6">Detail</th>
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
                      <td className="py-3.5 px-6 font-mono text-[#595959]">[seats - placeholder]</td>
                    </tr>
                    <tr className="hover:bg-[#EAF0F7]/30 transition">
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864] border-r border-gray-200">Entrance</td>
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864]">NEET-PG</td>
                    </tr>
                    <tr className="hover:bg-[#EAF0F7]/30 transition">
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864] border-r border-gray-200">NBEMS accreditation status</td>
                      <td className="py-3.5 px-6 font-mono text-[#595959]">[accredited since / validity - placeholder]</td>
                    </tr>
                    <tr className="hover:bg-[#EAF0F7]/30 transition">
                      <td className="py-3.5 px-6 font-semibold text-[#1F3864] border-r border-gray-200">Commencement session</td>
                      <td className="py-3.5 px-6 font-mono text-[#595959]">[January / July - confirm]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Stacked View */}
            <div className="md:hidden space-y-3 mb-6">
              <div className="bg-white p-4 rounded-xl border border-gray-300 shadow-sm">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#595959] block">Programme</span>
                <span className="text-sm font-bold text-[#1F3864]">DNB General Medicine</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-300 shadow-sm">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#595959] block">Level</span>
                <span className="text-sm text-gray-900">Broad specialty (Post-MBBS)</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-300 shadow-sm">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#595959] block">Duration</span>
                <span className="text-sm font-mono font-bold text-[#2E75B6]">3 years</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-300 shadow-sm">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#595959] block">Seats per session</span>
                <span className="text-sm font-mono text-[#595959]">[seats - placeholder]</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-300 shadow-sm">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#595959] block">Entrance</span>
                <span className="text-sm font-semibold text-[#1F3864]">NEET-PG</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-300 shadow-sm">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#595959] block">NBEMS accreditation status</span>
                <span className="text-sm font-mono text-[#595959]">[accredited since / validity - placeholder]</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-300 shadow-sm">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#595959] block">Commencement session</span>
                <span className="text-sm font-mono text-[#595959]">[January / July - confirm]</span>
              </div>
            </div>

            {/* Note text exactly from document */}
            <div className="p-5 bg-white rounded-xl border border-[#D5E8F0] text-sm text-gray-800 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="leading-relaxed">
                Admission is entirely merit-based through NEET-PG and centralised counselling (MCC of DGHS). See the main <Link href="/education/dnb-drnb" className="text-[#2E75B6] hover:underline font-semibold">DNB &amp; DrNB page</Link> for the full admission pathway, stipend, fees and welfare details.
              </p>
              <Link
                href="/education/dnb-drnb#admissions"
                className="whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#EAF0F7] hover:bg-[#D5E8F0] text-[#1F3864] font-semibold text-xs transition"
              >
                <span>Full Admission Details &rarr;</span>
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
            </div>

            {/* 3-Column Card Grid (Spec 5.3: Line icon + 3-5 word heading + one supporting line) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {/* Card 1 */}
              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                    High-Volume In-Patient Exposure
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]">
                    Broad, high-volume in-patient exposure across the full spectrum of general medicine and its sub-specialties.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                    Senior Physician Mentorship
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]">
                    Mentorship by senior physicians with 30+ years of clinical and teaching experience.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                    Super-Specialty Rotations
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]">
                    Structured rotations through allied super-specialties (e.g. pulmonology, critical care, gastroenterology, cardiology, neurology, endocrinology, infectious diseases).
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                    Fixed Academic Calendar
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]">
                    A fixed weekly academic calendar - rounds, case presentations, journal clubs, clinical audit and mortality meets.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                    Dedicated Research Support
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]">
                    Strong research support for thesis work and publications via the Medical Research Department.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="p-6 bg-[#EAF0F7]/50 rounded-xl border border-gray-200 hover:border-[#2E75B6]/50 transition group shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white text-[#2E75B6] flex items-center justify-center mb-4 shadow-sm border border-[#D5E8F0] group-hover:bg-[#1F3864] group-hover:text-white transition">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1F3864] mb-2 leading-snug">
                    Integrative Medicine Environment
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]">
                    A distinctive integrative-medicine environment that broadens clinical perspective.
                  </p>
                </div>
              </div>
            </div>

            {/* Numbers to confirm */}
            <div className="p-6 bg-[#EAF0F7]/60 rounded-xl border border-[#D5E8F0] shadow-sm">
              <h3 className="font-serif font-bold text-sm sm:text-base text-[#1F3864] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C8862B]" />
                <span>Numbers to confirm</span>
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#595959] bg-white p-3.5 rounded-lg border border-gray-200">
                [ Add 2–3 department metrics - annual medical admissions, ICU exposure, OPD footfall - placeholders. ]
              </p>
            </div>
          </div>
        </section>

        {/* 5. Clinical Exposure & Caseload (§5) */}
        {/* Render as a compact stat strip if figures are supplied. */}
        <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Clinical Exposure &amp; Caseload
              </h2>
            </div>

            {/* Compact Stat Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <span className="text-sm font-semibold text-[#1F3864] block">
                  Annual medical in-patient admissions:
                </span>
                <span className="text-xl font-bold font-mono text-[#595959] mt-3 block bg-[#EAF0F7]/40 py-2 px-3 rounded-lg border border-gray-200">
                  [ placeholder ]
                </span>
              </div>

              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <span className="text-sm font-semibold text-[#1F3864] block">
                  Medical ICU / HDU beds and exposure:
                </span>
                <span className="text-xl font-bold font-mono text-[#595959] mt-3 block bg-[#EAF0F7]/40 py-2 px-3 rounded-lg border border-gray-200">
                  [ placeholder ]
                </span>
              </div>

              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <span className="text-sm font-semibold text-[#1F3864] block">
                  General Medicine OPD footfall / year:
                </span>
                <span className="text-xl font-bold font-mono text-[#595959] mt-3 block bg-[#EAF0F7]/40 py-2 px-3 rounded-lg border border-gray-200">
                  [ placeholder ]
                </span>
              </div>
            </div>

            {/* Sub-specialties & Common Procedures */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
              <div>
                <strong className="text-base font-serif font-bold text-[#1F3864] block mb-2">
                  Sub-specialty rotations available:
                </strong>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  pulmonology, critical care, gastroenterology, cardiology, neurology, oncology, endocrinology, emergency medicine, infectious diseases.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <strong className="text-base font-serif font-bold text-[#1F3864] block mb-2">
                  Common procedures residents are trained in:
                </strong>
                <p className="text-sm font-mono text-[#595959] bg-[#EAF0F7]/30 p-3.5 rounded-lg border border-gray-200">
                  [ list - placeholder ]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Facilities & Infrastructure (§6) */}
        {/* Use department/ward/ICU photographs from the 10 July shoot. NBEMS accreditation is judged on infrastructure, so showcase it well. */}
        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Facilities &amp; Infrastructure
              </h2>
            </div>

            {/* Showcase Grid with Photographic Cards from 10 July Shoot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Facility 1: Medical Wards */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition group">
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  <Image
                    src={PLACEHOLDER_IMAGE}
                    alt="Medical Wards & Bed Strength - Bhaktivedanta Hospital"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2">
                    <Bed className="w-5 h-5 text-[#C8862B]" />
                    <span className="font-semibold text-sm drop-shadow">Medical In-Patient Wards</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#1F3864] block mb-1 uppercase tracking-wider">Bed Strength &amp; In-Patient Setup</span>
                  <p className="text-sm font-mono text-[#595959] bg-[#EAF0F7]/40 p-3 rounded-lg border border-gray-200">
                    [ Medical wards &amp; bed strength - placeholder ]
                  </p>
                </div>
              </div>

              {/* Facility 2: Medical ICU / HDU */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition group">
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  <Image
                    src={PLACEHOLDER_IMAGE}
                    alt="Medical ICU and HDU - Bhaktivedanta Hospital"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#C8862B]" />
                    <span className="font-semibold text-sm drop-shadow">Medical ICU / HDU</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#1F3864] block mb-1 uppercase tracking-wider">Critical Care Exposure</span>
                  <p className="text-sm font-mono text-[#595959] bg-[#EAF0F7]/40 p-3 rounded-lg border border-gray-200">
                    [ Medical ICU / HDU - placeholder ]
                  </p>
                </div>
              </div>

              {/* Facility 3: Diagnostic Support */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition group">
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  <Image
                    src={PLACEHOLDER_IMAGE}
                    alt="24x7 Diagnostic Pathology and Radiology - Bhaktivedanta Hospital"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2">
                    <Building className="w-5 h-5 text-[#C8862B]" />
                    <span className="font-semibold text-sm drop-shadow">24x7 Diagnostics</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#1F3864] block mb-1 uppercase tracking-wider">Pathology &amp; Radiology Support</span>
                  <p className="text-sm font-mono text-[#595959] bg-[#EAF0F7]/40 p-3 rounded-lg border border-gray-200">
                    [ Diagnostic support: 24x7 pathology and radiology - confirm/expand ]
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

        {/* 7. Faculty Grid (§7 - Spec 5.6: HOD highlighted/first, then faculty) */}
        {/* Render as a faculty grid with photographs. Data below carried over from current site - verify and add photos. */}
        <section className="py-16 sm:py-20 bg-[#EAF0F7]/50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Faculty
              </h2>
            </div>

            {/* Sub-heading: Head of Department */}
            <h3 className="font-serif font-bold text-xl text-[#1F3864] mb-4">
              Head of Department
            </h3>

            {/* Head of Department Highlighted Card */}
            <div className="mb-12 p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#2E75B6] shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#D5E8F0] bg-gray-100 flex-shrink-0 shadow-inner">
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
                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F3864]">
                  {HOD_DATA.name}
                </h4>
                <p className="text-base font-semibold text-[#2E75B6] mt-1">
                  {HOD_DATA.designation}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <p><strong>Qualification(s):</strong> {HOD_DATA.qualification}</p>
                  <p><strong>Experience:</strong> {HOD_DATA.experience}</p>
                </div>
              </div>
            </div>

            {/* Sub-heading: Faculty */}
            <h3 className="font-serif font-bold text-xl text-[#1F3864] mb-6">
              Faculty
            </h3>

            {/* Faculty Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {FACULTY_MEMBERS.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center hover:border-[#2E75B6] hover:shadow-md transition"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-[#D5E8F0] bg-gray-100 mb-4 flex-shrink-0 shadow-sm">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#1F3864] leading-snug">
                    {f.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#2E75B6] mt-1 mb-3">
                    {f.designation}
                  </p>
                  <div className="mt-auto pt-3 border-t border-gray-100 w-full text-xs text-gray-700 text-left space-y-1.5 bg-[#EAF0F7]/30 p-3 rounded-lg">
                    <p><strong>Qualification(s):</strong> {f.qualification}</p>
                    <p><strong>Experience:</strong> {f.experience}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification prompt banner */}
            <div className="p-4 bg-white rounded-xl border border-dashed border-gray-300 text-center">
              <p className="text-xs sm:text-sm font-mono text-[#595959] italic">
                [ Verify the full, current faculty list, designations, qualifications and years of experience; add or remove members as needed. ]
              </p>
            </div>
          </div>
        </section>

        {/* 8. Weekly Academic Schedule (§8 - Spec 5.7) */}
        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Weekly Academic Schedule
              </h2>
            </div>

            {/* Desktop Table (hidden on mobile) */}
            <div className="hidden sm:block overflow-hidden bg-white rounded-xl shadow-sm border border-gray-300 mb-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1F3864] text-white font-serif font-bold">
                    <th className="py-4 px-6 border-r border-white/20 w-1/4">Day / Frequency</th>
                    <th className="py-4 px-6">Activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {ACADEMIC_SCHEDULE.map((s, idx) => (
                    <tr key={idx} className="hover:bg-[#EAF0F7]/40 transition">
                      <td className="py-4 px-6 font-semibold text-[#1F3864] border-r border-gray-200">
                        {s.day}
                      </td>
                      <td className="py-4 px-6 text-gray-800">
                        {s.activity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Accordion (Spec 5.7: Day-wise stacked accordion on mobile) */}
            <div className="sm:hidden space-y-2.5 mb-6">
              {ACADEMIC_SCHEDULE.map((s, idx) => {
                const isOpen = openScheduleDay === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenScheduleDay(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between font-serif font-bold text-sm text-[#1F3864] hover:bg-[#EAF0F7]/30 transition"
                    >
                      <span>{s.day}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#2E75B6] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 border-t border-gray-100 text-xs text-gray-700 leading-relaxed bg-[#EAF0F7]/20">
                        {s.activity}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Confirmation cue */}
            <div className="p-4 bg-[#EAF0F7]/40 rounded-xl border border-dashed border-gray-300">
              <p className="text-xs sm:text-sm font-mono text-[#595959] italic text-center">
                [ Confirm the current schedule. ]
              </p>
            </div>
          </div>
        </section>

        {/* 9. Your Training Journey (§9 - Spec 5.5 / Figure 6: Training-journey timeline) */}
        <section className="py-16 sm:py-24 bg-[#EAF0F7]/50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight">
                Your Training Journey
              </h2>
            </div>

            {/* Exact Figure 6 Diagram: Box (YEAR 1, 2, 3) above, circular node on horizontal line, short descriptor below */}
            <div className="relative max-w-5xl mx-auto">
              {/* Continuous horizontal blue baseline across nodes (desktop) */}
              <div className="hidden md:block absolute top-[94px] left-[12%] right-[12%] h-[3px] bg-[#1F3864] z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                {/* YEAR 1 */}
                <div className="flex flex-col items-center text-center">
                  {/* Top Navy Box */}
                  <div className="w-56 sm:w-64 py-3.5 px-6 rounded-md bg-[#1F3864] text-white font-bold text-base sm:text-lg tracking-wider uppercase shadow-md mb-6">
                    YEAR 1
                  </div>

                  {/* Circular Node centered on the baseline */}
                  <div className="relative my-1">
                    <div className="w-8 h-8 rounded-full bg-[#1F3864] ring-4 ring-white shadow flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Descriptor Below Node */}
                  <div className="mt-6 max-w-xs text-sm text-[#1A1A1A] leading-relaxed">
                    <strong className="block text-[#1F3864] font-semibold mb-1">
                      Year 1 - Foundation:
                    </strong>
                    core clinical postings, ward and ICU exposure, log-book initiation, research methodology and protocol development.
                  </div>
                </div>

                {/* YEAR 2 */}
                <div className="flex flex-col items-center text-center">
                  {/* Top Navy Box */}
                  <div className="w-56 sm:w-64 py-3.5 px-6 rounded-md bg-[#1F3864] text-white font-bold text-base sm:text-lg tracking-wider uppercase shadow-md mb-6">
                    YEAR 2
                  </div>

                  {/* Circular Node centered on the baseline */}
                  <div className="relative my-1">
                    <div className="w-8 h-8 rounded-full bg-[#1F3864] ring-4 ring-white shadow flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Descriptor Below Node */}
                  <div className="mt-6 max-w-xs text-sm text-[#1A1A1A] leading-relaxed">
                    <strong className="block text-[#1F3864] font-semibold mb-1">
                      Year 2 - Consolidation:
                    </strong>
                    sub-specialty rotations, increasing clinical responsibility, thesis data collection, NBEMS Formative Assessment Test (FAT).
                  </div>
                </div>

                {/* YEAR 3 */}
                <div className="flex flex-col items-center text-center">
                  {/* Top Navy Box */}
                  <div className="w-56 sm:w-64 py-3.5 px-6 rounded-md bg-[#1F3864] text-white font-bold text-base sm:text-lg tracking-wider uppercase shadow-md mb-6">
                    YEAR 3
                  </div>

                  {/* Circular Node centered on the baseline */}
                  <div className="relative my-1">
                    <div className="w-8 h-8 rounded-full bg-[#1F3864] ring-4 ring-white shadow flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Descriptor Below Node */}
                  <div className="mt-6 max-w-xs text-sm text-[#1A1A1A] leading-relaxed">
                    <strong className="block text-[#1F3864] font-semibold mb-1">
                      Year 3 - Mastery:
                    </strong>
                    independent clinical management under supervision, thesis completion and submission, preparation for the DNB Final (Exit) Examination.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Thesis & Research (§10) */}
        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-8">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-4">
                Thesis &amp; Research
              </h2>
              <p className="text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
                A thesis is mandatory for DNB General Medicine. Residents are supported end-to-end by the Medical Research Department and a faculty guide - from research methodology training and Ethics Committee approval to analysis, writing, timely submission to NBEMS, and publication of thesis-based work.
              </p>
            </div>

            {/* Department-Specific Research Highlights */}
            <div className="p-6 bg-[#EAF0F7]/50 rounded-2xl border border-[#D5E8F0] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Microscope className="w-5 h-5 text-[#C8862B]" />
                <h3 className="font-serif font-bold text-base text-[#1F3864]">
                  Department Research Highlights
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#595959] font-mono bg-white p-4 rounded-xl border border-gray-200">
                [ Add department-specific research highlights - recent resident publications/presentations - placeholders. ]
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
              <p className="text-sm font-semibold text-[#2E75B6] mt-2">
                Specialty-specific outcomes (to be supplied)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#595959] block">
                    DNB Final (Exit) Examination pass rate - General Medicine:
                  </span>
                  <span className="text-xl font-bold font-mono text-[#595959] mt-3 block bg-[#EAF0F7]/40 py-2 px-3 rounded-lg border border-gray-200">
                    [ % - placeholder ]
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#595959] block">
                    Alumni trained &amp; current positions:
                  </span>
                  <span className="text-xl font-bold font-mono text-[#595959] mt-3 block bg-[#EAF0F7]/40 py-2 px-3 rounded-lg border border-gray-200">
                    [ placeholder ]
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#595959] block">
                    Resident awards / achievements:
                  </span>
                  <span className="text-xl font-bold font-mono text-[#595959] mt-3 block bg-[#EAF0F7]/40 py-2 px-3 rounded-lg border border-gray-200">
                    [ placeholder ]
                  </span>
                </div>
              </div>
            </div>

            {/* Alumni Highlight Strip (Spec 5.9) */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm text-xs sm:text-sm text-gray-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#EAF0F7] flex items-center justify-center text-[#1F3864] flex-shrink-0">
                <Users className="w-5 h-5 text-[#2E75B6]" />
              </div>
              <div className="flex-grow">
                <strong className="text-sm font-serif font-bold text-[#1F3864] block mb-1">
                  Alumni Highlights &amp; Placements
                </strong>
                <p className="font-mono text-xs sm:text-sm text-[#595959] bg-[#EAF0F7]/40 p-3 rounded-lg border border-gray-200">
                  [ Notable placements, super-specialty fellowships, consultant &amp; faculty positions - placeholder ]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Resident & Faculty Voices (§12 - Spec 5.8: Video cards + text pull quotes) */}
        {/* Embed General Medicine faculty and resident testimonial films from the 10 July shoot; add 1–2 text pull-quotes. */}
        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-2">
                Resident &amp; Faculty Voices
              </h2>
            </div>

            {/* Video Cards from 10 July Shoot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Faculty Video Card & Pull-Quote */}
              <div className="bg-[#EAF0F7]/40 rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="relative aspect-[16/9] bg-gray-900 group cursor-pointer">
                  <Image
                    src={PLACEHOLDER_IMAGE}
                    alt="General Medicine Faculty Interview - Bhaktivedanta Hospital"
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
                    alt="General Medicine Resident Interview - Bhaktivedanta Hospital"
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

        {/* 13. How to Apply / Enquire (§13 - Spec 5.10: Academic CTA + Form) */}
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
                    <p className="font-medium pt-0.5">Qualify NEET-PG for the relevant session.</p>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5 shadow-md">
                      2
                    </span>
                    <p className="font-medium pt-0.5">Participate in the centralised counselling (MCC of DGHS) and select DNB General Medicine at BVH.</p>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#C8862B] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5 shadow-md">
                      3
                    </span>
                    <p className="font-medium pt-0.5">Report to BVH with original documents for verification and joining.</p>
                  </div>
                </div>
              </div>

              {/* Grid: Contact Coordinator Card + Academic Enquiry Form */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 bg-white/10 backdrop-blur-md text-white p-7 sm:p-8 rounded-2xl border border-white/20 shadow-xl">
                  <h3 className="font-serif font-bold text-xl !text-white mb-6 pb-3 border-b border-white/15">
                    Contact - Academic Cell / DNB Coordinator
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
                        <MapPin className="w-5 h-5" />
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
