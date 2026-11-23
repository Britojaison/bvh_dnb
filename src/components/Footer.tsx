import Link from "next/link";
import Image from "next/image";
import { DNB_PROGRAMMES, LOGO_IMAGE } from "@/lib/constants";
import { Phone, Mail, MapPin, Shield, BookOpen, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A253A] text-slate-300 pt-16 pb-8 border-t-4 border-[#C8862B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/60">
          {/* Column 1: Institute Info */}
          <div>
            <div className="mb-4 bg-white p-2.5 rounded-lg inline-block shadow-sm">
              <Image
                src={LOGO_IMAGE}
                alt="Bhaktivedanta Hospital Logo"
                width={220}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-300 mb-4">
              A NABH &amp; NABL accredited tertiary-care teaching hospital committed to evidence-based clinical excellence, ethical training, and compassionate patient care.
            </p>
            <div className="text-xs space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8862B] flex-shrink-0 mt-0.5" />
                <span>Srishti Complex, Bhaktivedanta Swami Marg, Mira Road (East), Thane, Maharashtra 401107, India.</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8862B] flex-shrink-0" />
                <span>Emergency: 022 2845 5555</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C8862B] flex-shrink-0" />
                <span>dnb@bhaktivedantahospital.com</span>
              </p>
            </div>
          </div>

          {/* Column 2: 8 Specialty Spokes */}
          <div>
            <h3 className="text-white font-serif text-base font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#2E75B6]" />
              Accredited Specialties
            </h3>
            <ul className="space-y-2 text-xs">
              {DNB_PROGRAMMES.map((prog) => (
                <li key={prog.slug}>
                  <Link
                    href={prog.slug}
                    className="hover:text-[#D5E8F0] transition flex items-center justify-between group"
                  >
                    <span>{prog.title}</span>
                    <span className="text-slate-300 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Academic Guidelines */}
          <div>
            <h3 className="text-white font-serif text-base font-bold mb-4">
              Academic &amp; Regulatory
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/education/dnb-drnb/nbems-mandatory-disclosures" className="hover:text-white transition font-medium text-[#D5E8F0] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#C8862B]" />
                  NBEMS Mandatory Disclosures
                </Link>
              </li>
              <li>
                <a href="#compliance" className="hover:text-white transition">Grievance Redressal Committee</a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-white transition">Anti-Ragging Squad &amp; Cell</a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-white transition">Internal Complaints Committee (PoSH)</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition">National Stipend &amp; Leave Guidelines</a>
              </li>
              <li>
                <a href="https://natboard.edu.in" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
                  NBEMS Official Portal <ExternalLink className="w-3 h-3 text-slate-300" />
                </a>
              </li>
              <li>
                <a href="https://mcc.nic.in" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
                  MCC Counselling Portal <ExternalLink className="w-3 h-3 text-slate-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: National Helplines & Compliance */}
          <div>
            <h3 className="text-white font-serif text-base font-bold mb-4">
              Student Welfare Helplines
            </h3>
            <div className="bg-[#141C2B] p-4 rounded-lg border border-slate-700/80 space-y-3 text-xs">
              <div>
                <span className="text-[#C8862B] font-semibold block">National Anti-Ragging Helpline</span>
                <span className="text-white font-mono text-sm">1800-180-5522</span>
                <span className="block text-slate-300 text-[11px]">24x7 Toll Free &bull; helpline@antiragging.in</span>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-[#D5E8F0] font-semibold block">Academic Cell Coordinator</span>
                <span className="text-slate-300">DNB &amp; DrNB Secretariat</span>
                <span className="block text-slate-300 text-[11px]">Direct: admissions-dnb@bhaktivedantahospital.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-300 gap-4">
          <p>&copy; 2026 Bhaktivedanta Hospital &amp; Research Institute. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>DNB &amp; DrNB Academic Section</span>
            <Link href="/education/dnb-drnb/nbems-mandatory-disclosures" className="hover:underline text-slate-300">
              Mandatory Disclosures
            </Link>
            <a href="https://www.bhaktivedantahospital.com" target="_blank" rel="noreferrer" className="hover:underline text-[#D5E8F0]">
              Hospital Main Site &rarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
