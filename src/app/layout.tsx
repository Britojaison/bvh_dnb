import type { Metadata } from "next";
import "./globals.css";
import MobileStickyApply from "@/components/MobileStickyApply";

export const metadata: Metadata = {
  title: "DNB & DrNB Postgraduate Medical Programmes | Bhaktivedanta Hospital & Research Institute",
  description: "Official DNB and DrNB National Board accredited postgraduate medical education programs at Bhaktivedanta Hospital, Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans text-[#1A1A1A] bg-white selection:bg-[#D5E8F0] selection:text-[#1F3864]">
        {children}
        {/* Spec 5.10 & 8: Sticky 'Apply / Enquire' button on mobile (< 768px) */}
        <MobileStickyApply />
      </body>
    </html>
  );
}
