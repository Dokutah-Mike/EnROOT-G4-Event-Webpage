// app/layout.tsx
// The ROOT LAYOUT wraps every page in the app. It is a good place for fonts,
// page metadata (the browser tab title) and the <html>/<body> tags.

import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

// Load two Google fonts (Next.js downloads and hosts them for us).
// `variable` creates a CSS variable that globals.css uses in the theme.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces", // soft serif for headings
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans", // clean sans-serif for body text
});

// Text shown in the browser tab and used by search engines.
export const metadata: Metadata = {
  title: "Surviving Midterms 101: DIY Edition | SUTD",
  description: "A welfare event designed to provide students with an opportunity to unwind and take a break from their daily commitments. Participants can engage in a variety of Arts & Crafts activities or simply relax in our designated space.",
};

// Defines the root layout shared across all pages of the website.
// Sets the global fonts, HTML language, and base body styling.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
