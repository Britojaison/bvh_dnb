import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import PostgraduateEducationSection from "@/components/landing/PostgraduateEducationSection";
import StatsBand from "@/components/landing/StatsBand";
import AboutNbemsSection from "@/components/landing/AboutNbemsSection";
import ProgrammesTable from "@/components/landing/ProgrammesTable";
import WhyTrainSection from "@/components/landing/WhyTrainSection";
import EligibilitySection from "@/components/landing/EligibilitySection";
import AdmissionPathway from "@/components/landing/AdmissionPathway";
import ProgrammeDurationSection from "@/components/landing/ProgrammeDurationSection";
import AssessmentSection from "@/components/landing/AssessmentSection";
import ThesisResearchSection from "@/components/landing/ThesisResearchSection";
import StipendSection from "@/components/landing/StipendSection";
import FeesSection from "@/components/landing/FeesSection";
import ComplianceAccordion from "@/components/landing/ComplianceAccordion";
import ProgrammeOutcomesSection from "@/components/landing/ProgrammeOutcomesSection";
import VoicesSection from "@/components/landing/VoicesSection";
import LifeAtBvhSection from "@/components/landing/LifeAtBvhSection";
import HowToApplySection from "@/components/landing/HowToApplySection";
import DownloadsSection from "@/components/landing/DownloadsSection";
import FaqSection from "@/components/landing/FaqSection";

export default function EducationHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Persistent Academic Header */}
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb banner */}
        <div className="bg-[#EAF0F7] py-2.5 border-b border-gray-200 text-xs text-[#595959]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2">
            <span>Home</span>
            <span>&rsaquo;</span>
            <span>Education</span>
            <span>&rsaquo;</span>
            <span className="text-[#1F3864] font-semibold">DNB &amp; DrNB Programmes Hub</span>
          </div>
        </div>

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Postgraduate Medical Education at BVH (§2) */}
        <PostgraduateEducationSection />

        {/* 3. Why Train at BVH (§3 - 3-Column Icon Grid) */}
        <WhyTrainSection />

        {/* 4. Stats Band (§4 - Animated Counter Band) */}
        <StatsBand />

        {/* 5. Programmes at a Glance (§5 - Responsive Table) */}
        <ProgrammesTable />

        {/* 6. About NBEMS & Education at BVH (§6) */}
        <AboutNbemsSection />

        {/* 7. Eligibility (§7) */}
        <EligibilitySection />

        {/* 8. Admission & Counselling (§8 - 6-Step Infographic) */}
        <AdmissionPathway />

        {/* 9. Programme Duration & Training Structure (§9) */}
        <ProgrammeDurationSection />

        {/* 10. Assessment & Examinations (§10) */}
        <AssessmentSection />

        {/* 11. Thesis & Research (§11) */}
        <ThesisResearchSection />

        {/* 12. Stipend (§12) */}
        <StipendSection />

        {/* 13. Fees & Financial Transparency (§13) */}
        <FeesSection />

        {/* 14. Compliance, Resident Welfare & Support (§14 - Accordion) */}
        <ComplianceAccordion />

        {/* 15. Programme Outcomes (§15) */}
        <ProgrammeOutcomesSection />

        {/* 16. Resident & Faculty Voices (§16) */}
        <VoicesSection />

        {/* 17. Life at BVH (§17) */}
        <LifeAtBvhSection />

        {/* 18. How to Apply / Enquire (§18) */}
        <HowToApplySection />

        {/* 19. Downloads (§19) */}
        <DownloadsSection />

        {/* 20. Frequently Asked Questions (§20 - Accordion) */}
        <FaqSection />
      </main>

      {/* Footer with Accreditations & Mandatory Contacts */}
      <Footer />
    </div>
  );
}
