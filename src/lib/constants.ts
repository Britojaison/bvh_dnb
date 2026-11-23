export const DNB_THEME = {
  colors: {
    primaryNavy: "#1F3864",     // Headings, header/footer, primary blocks
    secondaryBlue: "#2E75B6",   // Links, dividers, arrows, accents
    lightTint: "#EAF0F7",       // Section/card backgrounds
    midTint: "#D5E8F0",         // Stat circles, highlighted bands
    accentCta: "#C8862B",       // Primary buttons / call-to-action
    bodyText: "#1A1A1A",        // Paragraph text
    mutedText: "#595959",       // Captions, notes
    white: "#FFFFFF",
  },
  typography: {
    fontHeadings: "'PT Serif', 'Lora', serif",
    fontBody: "'Inter', 'Open Sans', sans-serif",
  }
};

export const PLACEHOLDER_IMAGE = "/images/placeholder.jpg";
export const LOGO_IMAGE = "/images/logo.png";

export interface ProgramRoute {
  title: string;
  shortTitle: string;
  slug: string;
  level: string;
  duration: string;
  seats?: string;
  entrance?: string;
}

export const DNB_PROGRAMMES: ProgramRoute[] = [
  {
    title: "DNB General Medicine",
    shortTitle: "General Medicine",
    slug: "/education/dnb-drnb/general-medicine",
    level: "Postgraduate (DNB)",
    duration: "3 Years",
  },
  {
    title: "DNB Paediatrics",
    shortTitle: "Paediatrics",
    slug: "/education/dnb-drnb/paediatrics",
    level: "Postgraduate (DNB)",
    duration: "3 Years",
  },
  {
    title: "DNB Ophthalmology",
    shortTitle: "Ophthalmology",
    slug: "/education/dnb-drnb/ophthalmology",
    level: "Postgraduate (DNB)",
    duration: "3 Years",
  },
  {
    title: "DNB Obstetrics & Gynaecology",
    shortTitle: "Obstetrics & Gynaecology",
    slug: "/education/dnb-drnb/obstetrics-gynaecology",
    level: "Postgraduate (DNB)",
    duration: "3 Years",
  },
  {
    title: "DNB Anaesthesiology",
    shortTitle: "Anaesthesiology",
    slug: "/education/dnb-drnb/anaesthesiology",
    level: "Postgraduate (DNB)",
    duration: "3 Years",
  },
  {
    title: "Diploma in Radio Diagnosis (DRD)",
    shortTitle: "Radio Diagnosis",
    slug: "/education/dnb-drnb/radio-diagnosis",
    level: "Postgraduate Diploma",
    duration: "2 Years",
  },
  {
    title: "DrNB Urology",
    shortTitle: "Urology",
    slug: "/education/dnb-drnb/urology",
    level: "Super Specialty (DrNB)",
    duration: "3 Years",
  },
  {
    title: "DrNB Cardiology",
    shortTitle: "Cardiology",
    slug: "/education/dnb-drnb/cardiology",
    level: "Super Specialty (DrNB)",
    duration: "3 Years",
  },
];
