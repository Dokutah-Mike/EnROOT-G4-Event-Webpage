// lib/eventData.ts
// ONE PLACE FOR ALL EVENT DETAILS.
// Everything in square brackets, like "[Event Name]", is a PLACEHOLDER.
// When you know the real details, edit them here and the whole site updates.

// ---------- Tabs ----------
// The ids are used by the navbar and by SiteShell to decide what to show.
export type TabId = "home" | "booths" | "organisers" | "contact";

export const TABS: { id: TabId; label: string }[] = [
  { id: "home", label: "Main page" },
  { id: "booths", label: "Event booths" },
  { id: "organisers", label: "Organisers" },
  { id: "contact", label: "Contact / Help" },
];

// ---------- Core event info ----------
export const EVENT_NAME = "Surviving Midterms 101: DIY Edition";
export const EVENT_TAGLINE = "Scrolling and Crafting away";
export const EVENT_DESCRIPTION =
  "A welfare event designed to provide students with an opportunity to unwind and take a break from their daily commitments. Participants can engage in a variety of Arts & Crafts activities or simply relax in our designated space.";
export const UNIVERSITY_NAME = "SUTD EnROOT Group 4";

// Date used by the countdown. Use ISO format, for example "2026-12-31T18:00:00".
// Leave it as an empty string "" until the date is confirmed; the countdown
// will then show placeholder dashes instead of numbers.
export const EVENT_DATE_ISO = "2026-11-04T15:00:00";

// Human-readable details shown in the info cards.
export const EVENT_DATE_TEXT = "4/11/2026";
export const EVENT_TIME_TEXT = "3:00p.m. - 6:00p.m.";
export const EVENT_VENUE_TEXT = "ROOT Cove (2.311A) @ SUTD Campus";

// Where the "Register now" button goes. Replace "#" with your sign-up link.
export const REGISTER_URL = "[Registation URL not released yet]";

// ---------- Speakers ----------
export const SPEAKERS = [
  { name: "[Speaker 1 Name]", role: "[Title / Topic]" },
  { name: "[Speaker 2 Name]", role: "[Title / Topic]" },
  { name: "[Speaker 3 Name]", role: "[Title / Topic]" },
];

// ---------- Prizes ----------
export const PRIZES = [
  { place: "[1st Prize]", detail: "[Prize description]" },
  { place: "[2nd Prize]", detail: "[Prize description]" },
  { place: "[3rd Prize]", detail: "[Prize description]" },
];

// ---------- Booths (exactly 5 placeholders) ----------
export const BOOTHS = [
  { id: 1, name: "[Booth 1 Name]", description: "[What happens at this booth]", location: "[Booth location]", activities: ["[Activity 1]", "[Activity 2]"] },
  { id: 2, name: "[Booth 2 Name]", description: "[What happens at this booth]", location: "[Booth location]", activities: ["[Activity 1]", "[Activity 2]"] },
  { id: 3, name: "[Booth 3 Name]", description: "[What happens at this booth]", location: "[Booth location]", activities: ["[Activity 1]", "[Activity 2]"] },
  { id: 4, name: "[Booth 4 Name]", description: "[What happens at this booth]", location: "[Booth location]", activities: ["[Activity 1]", "[Activity 2]"] },
  { id: 5, name: "[Booth 5 Name]", description: "[What happens at this booth]", location: "[Booth location]", activities: ["[Activity 1]", "[Activity 2]"] },
];

// ---------- Organisers ----------
export const ORGANISERS = [
  { name: "[Organiser 1 Name]", role: "[Role]" },
  { name: "[Organiser 2 Name]", role: "[Role]" },
  { name: "[Organiser 3 Name]", role: "[Role]" },
  { name: "[Organiser 4 Name]", role: "[Role]" },
];

// ---------- Contact / Help ----------
export const CONTACT = {
  email: "seongyong_kim@mymail.sutd.edu.sg",
  phone: "[Phone number]",
  social: "[@social_handle]",
};

export const FAQS = [
  { question: "[Question 1]", answer: "[Answer 1]" },
  { question: "[Question 2]", answer: "[Answer 2]" },
  { question: "[Question 3]", answer: "[Answer 3]" },
];
