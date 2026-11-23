import Image from "next/image";
import { PLACEHOLDER_IMAGE } from "@/lib/constants";
import { Heart, Sparkles, Users, Coffee } from "lucide-react";

export default function LifeAtBvhSection() {
  return (
    <section id="life-at-bvh" className="py-16 sm:py-20 bg-white scroll-mt-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Heading & Compact Preamble */}
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3864] tracking-tight mb-4">
              Life at BVH
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
              Beyond clinical training, BVH offers a supportive, values-driven community. Alongside modern, evidence-based medicine, the institute is known for its compassionate, patient-centred ethos and an integrative approach to care — an environment many residents find uniquely grounding.
            </p>
          </div>

          {/* Compact Photo & Culture Highlights (Spec: light and warm) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Photo Card 1: Campus Life */}
            <div className="bg-white rounded-2xl overflow-hidden border border-amber-200/60 shadow-sm flex flex-col justify-between group">
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt="Campus Life at Bhaktivedanta Hospital"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[#C8862B] mb-1.5">
                  <Coffee className="w-4 h-4" />
                  <span className="font-serif font-bold text-sm text-[#1F3864]">Campus Living &amp; Camaraderie</span>
                </div>
                <p className="text-xs text-[#595959] leading-relaxed">
                  [ <em>Add 1 line on hostel life, shared resident spaces, and campus community — placeholder.</em> ]
                </p>
              </div>
            </div>

            {/* Photo Card 2: Community Outreach */}
            <div className="bg-white rounded-2xl overflow-hidden border border-amber-200/60 shadow-sm flex flex-col justify-between group">
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt="Community Outreach and Rural Medical Camps"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[#C8862B] mb-1.5">
                  <Users className="w-4 h-4" />
                  <span className="font-serif font-bold text-sm text-[#1F3864]">Community &amp; Outreach Camps</span>
                </div>
                <p className="text-xs text-[#595959] leading-relaxed">
                  [ <em>Add 1 line on community health camps, rural outreach, and service initiatives — placeholder.</em> ]
                </p>
              </div>
            </div>

            {/* Photo Card 3: Values & Culture */}
            <div className="bg-white rounded-2xl overflow-hidden border border-amber-200/60 shadow-sm flex flex-col justify-between group">
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt="Values-Driven Spiritual & Holistic Care"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[#C8862B] mb-1.5">
                  <Heart className="w-4 h-4" />
                  <span className="font-serif font-bold text-sm text-[#1F3864]">Values &amp; Holistic Culture</span>
                </div>
                <p className="text-xs text-[#595959] leading-relaxed">
                  [ <em>Add 1 line on spiritual grounding, mindfulness, and the institute&apos;s compassionate culture — placeholder.</em> ]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
