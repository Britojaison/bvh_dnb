import Link from "next/link";

export default function NbemsDisclosuresPage() {
  return (
    <main className="min-h-screen py-12 px-6 max-w-6xl mx-auto">
      <div className="mb-4 text-sm text-[#595959]">
        <Link href="/education/dnb-drnb" className="hover:underline">Home › Education › DNB &amp; DrNB</Link>
        {" "}&rsaquo;{" "}
        <span className="text-[#1F3864] font-semibold">NBEMS Mandatory Disclosures</span>
      </div>
      <h1 className="text-4xl font-bold text-[#1F3864] font-serif mb-4">
        NBEMS Mandatory Disclosures
      </h1>
      <p className="text-[#595959] mb-8">
        National Board of Examinations in Medical Sciences (NBEMS) institutional compliance, committee rosters, bed distribution, and faculty information.
      </p>
    </main>
  );
}
