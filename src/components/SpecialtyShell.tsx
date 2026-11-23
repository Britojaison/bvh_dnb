import Link from "next/link";

interface SpecialtyShellProps {
  title: string;
  level: string;
  duration: string;
  shortTitle: string;
}

export default function SpecialtyShell({ title, level, duration, shortTitle }: SpecialtyShellProps) {
  return (
    <main className="min-h-screen py-12 px-6 max-w-6xl mx-auto">
      <div className="mb-4 text-sm text-[#595959]">
        <Link href="/education/dnb-drnb" className="hover:underline">Home › Education › DNB &amp; DrNB</Link>
        {" "}&rsaquo;{" "}
        <span className="text-[#1F3864] font-semibold">{shortTitle}</span>
      </div>
      <span className="inline-block px-3 py-1 bg-[#D5E8F0] text-[#1F3864] text-xs font-semibold rounded-full mb-3">
        {level} &bull; {duration}
      </span>
      <h1 className="text-4xl font-bold text-[#1F3864] font-serif mb-4">{title}</h1>
      <p className="text-gray-600 mb-8">
        Bhaktivedanta Hospital &amp; Research Institute — Specialty department page placeholder. Content will be populated from the specialty document.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-2.5 bg-[#C8862B] text-white font-medium rounded-lg shadow-sm hover:brightness-105 transition">
          Apply / Enquire
        </button>
        <Link href="/education/dnb-drnb" className="px-6 py-2.5 border border-[#1F3864] text-[#1F3864] font-medium rounded-lg hover:bg-gray-50 transition">
          &larr; Back to Programmes Hub
        </Link>
      </div>
    </main>
  );
}
