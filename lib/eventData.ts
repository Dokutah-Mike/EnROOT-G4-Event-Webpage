// lib/eventData.ts
// ONE PLACE FOR ALL EVENT DETAILS.

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

// Date used by the countdown.
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

// ---------- Booths ----------
export const BOOTHS = [
  { id: 1, name: "DoomScrolling", description: "Participants can casually unwind and browse TikTok or Instagram. Every 30 minutes or so, the station master will run a bingo game.", location: "Level 1", image: "/images/booths/booth1.jpg" },
  { id: 2, name: "Paper Crafts", description: "Participants fold origami shapes and learn how to make pop-up cards. The station master will hand out paper.", location: "Level 1", image: "/images/booths/booth2.jpg" },
  { id: 3, name: "Paracord Making", description: "Participants learn how to tie rope into a paracord that can be attached to their water bottle. A station master will guide participants through the process.", location: "Level 2", image: "/images/booths/booth3.jpg" },
  { id: 4, name: "Slime Making", description: "Participants make their own slime under the guidance of the station master", location: "Level 2", image: "/images/booths/booth4.jpg" },
  { id: 5, name: "F&B", description: "Participants who take part in 2 or more stations (with proof of participation) can claim a snack and a beverage. Bingo winners can also claim a lollipop. The station master will distribute all F&B", location: "Level 1", image: "/images/booths/booth5.jpg" },
];

// ---------- Organisers ----------
export const ORGANISERS = [
  { name: "Kim Seongyong (Mike)", role: "Project Director / Website" },
  { name: "David Sorkin", role: "Project Director / Station Master" },
  { name: "Renee Lee Rui Shi", role: "Station Master" },
  { name: "Tay Mian Yao", role: "Deputy Project Director" },
  { name: "Phua Xin Yi", role: "Station Master" },
  { name: "Timothy Chin Kai En", role: "Publicity Coordinator" },
  { name: "Jevan Yeo Jun Wei", role: "Publicity Coordinator" },
  { name: "Aravindan Sountharyaa", role: "Station Master" },
  { name: "Clifford Yau", role: "Finance Coordinator / Station Master" },
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
