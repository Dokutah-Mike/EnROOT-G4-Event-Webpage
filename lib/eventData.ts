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
export const REGISTER_URL = "https://forms.cloud.microsoft/r/yXzHmMpCRh";



// ---------- Location ----------
export const LOCATION = {
  image: "/images/location/Location-image.jpg",
  name: "ROOT Cove (2.311A)",
  description: "A chill hangout place to destress",
  video: "/videos/Directions-video.mp4",
};

// ---------- Posters ----------
export const POSTERS = [
  {
    id: 1,
    image: "/images/posters/poster1.jpeg",
    alt: "[Poster 1 description]",
  },
  {
    id: 2,
    image: "/images/posters/poster2.jpeg",
    alt: "[Poster 2 description]",
  },
  {
    id: 3,
    image: "/images/posters/poster3.jpeg",
    alt: "[Poster 3 description]",
  },
];

// ---------- Prize image panel ----------
export const PRIZES = [
  {
    image: "/images/prizes/prize1.jpeg",
    alt: "[Prize image 1 description]",
    title: "SNACKS!",
    detail: "Mamee Monster and Corntoz!",
  },
  {
    image: "/images/prizes/prize2.jpg",
    alt: "[Prize image 2 description]",
    title: "DRINKS!",
    detail: "Green/Chrysanthemum Tea!",
  },
  {
    image: "/images/prizes/prize3.jpg",
    alt: "[Prize image 3 description]",
    title: "MORE SNACKS!",
    detail: "Twisties and Double Decker!",
  },
];

export const EXCLUSIVE_PRIZE = {
  image: "/images/prizes/Exprize.jpg",
  alt: "[Exclusive prize image description]",
  title: "PRIZE REWARD",
  condition: "Participate in at least 2 stations to claim a SWEET EXCLUSIVE prize!",
};

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
  tele: "@Dokutah_Mike",
};

export const FAQS = [
  { question: "Who can participate?", answer: "All Freshmore students are welcome to participate, bring your friends!" },
  { question: "Can I bring home my crafts?", answer: "Yes, you can take your completed crafts home with you." },
  { question: "Can I really doomscroll?", answer: "Of course! Just make sure to take breaks, stay hydrated and keep content safe." },
];
