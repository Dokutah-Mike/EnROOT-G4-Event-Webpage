// components/tabs/HomeTab.tsx
// The "Main page" tab: hero with countdown, quick event info, description,
// speakers, prizes and the register call-to-action.
// This component has no state of its own, so it needs no "use client".

import { CalendarDays, Clock, MapPin, Trophy, QrCode } from "lucide-react";
import Countdown from "@/components/Countdown";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import {
  EVENT_NAME,
  EVENT_TAGLINE,
  EVENT_DESCRIPTION,
  EVENT_DATE_ISO,
  EVENT_DATE_TEXT,
  EVENT_TIME_TEXT,
  EVENT_VENUE_TEXT,
  REGISTER_URL,
  SPEAKERS,
  PRIZES,
  type TabId,
} from "@/lib/eventData";

export default function HomeTab({ onNavigate }: { onNavigate: (tab: TabId) => void }) {
  // The three quick-info cards (date, time, venue).
  const details = [
    { icon: CalendarDays, label: "Date", value: EVENT_DATE_TEXT },
    { icon: Clock, label: "Time", value: EVENT_TIME_TEXT },
    { icon: MapPin, label: "Venue", value: EVENT_VENUE_TEXT },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden rounded-[2rem] px-4 py-14 text-center sm:px-10 sm:py-20">
        {/* Soft blurry circles behind the text. They slowly "breathe". */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="breathe absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lagoon blur-3xl sm:h-[34rem] sm:w-[34rem]" />
          <div className="breathe absolute -left-10 top-4 h-48 w-48 rounded-full bg-lavender blur-3xl" />
          <div className="breathe absolute -right-10 bottom-4 h-48 w-48 rounded-full bg-peach blur-3xl" />
        </div>

        <p className="text-sm text-moss sm:text-base">Midterms are over. Time to unwind.</p>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-5xl leading-tight sm:text-7xl">
          {EVENT_NAME}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-lg text-moss">{EVENT_TAGLINE}</p>

        {/* Countdown-style text */}
        <div className="mt-10">
          <Countdown targetDate={EVENT_DATE_ISO} />
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={REGISTER_URL}
            className="rounded-full bg-pine px-8 py-3 text-mist transition hover:bg-moss focus:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
          >
            Register now
          </a>
          <button
            type="button"
            onClick={() => onNavigate("booths")}
            className="rounded-full border border-pine px-8 py-3 transition hover:bg-pine hover:text-mist focus:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
          >
            Explore booths
          </button>
        </div>
      </section>

      {/* ================= QUICK DETAILS ================= */}
      <section aria-label="Event details" className="grid gap-4 sm:grid-cols-3">
        {details.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-4 rounded-2xl bg-white/70 p-5 shadow-sm">
            <span className="rounded-full bg-sage/50 p-3">
              <Icon className="h-5 w-5 text-pine" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm text-moss">{label}</p>
              <p className="font-medium">{value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ================= ABOUT ================= */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <ImagePlaceholder label="Event photo" className="aspect-[4/3] rounded-[2rem]" />
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">About the event</h2>
          <p className="mt-4 max-w-prose leading-relaxed text-moss">{EVENT_DESCRIPTION}</p>
        </div>
      </section>

      {/* ================= SPEAKERS ================= */}
      <section>
        <h2 className="font-display text-3xl sm:text-4xl">Speakers</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {SPEAKERS.map((speaker, index) => (
            <div key={index} className="text-center">
              <ImagePlaceholder label="Speaker photo" className="mx-auto aspect-square w-40 rounded-full" />
              <p className="mt-3 font-medium">{speaker.name}</p>
              <p className="text-sm text-moss">{speaker.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRIZES ================= */}
      <section>
        <h2 className="flex items-center gap-3 font-display text-3xl sm:text-4xl">
          <Trophy className="h-7 w-7 text-moss" aria-hidden="true" />
          Prizes
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {/* Each prize card gets a different soft colour from this list */}
          {PRIZES.map((prize, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 ${["bg-peach/70", "bg-lavender/70", "bg-lagoon/70"][index % 3]}`}
            >
              <p className="font-display text-2xl">{prize.place}</p>
              <p className="mt-2 text-moss">{prize.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="flex flex-col items-center gap-8 rounded-[2rem] bg-pine p-8 text-center text-mist sm:flex-row sm:p-12 sm:text-left">
        <div className="flex-1">
          <h2 className="font-display text-3xl sm:text-4xl">Ready to join us?</h2>
          <p className="mt-3 text-sage">[Short sign-up message, e.g. deadline or how to register]</p>
          <a
            href={REGISTER_URL}
            className="mt-6 inline-block rounded-full bg-mist px-8 py-3 text-pine transition hover:bg-peach focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-pine"
          >
            Register now
          </a>
        </div>

        {/* QR code placeholder: replace with an <Image> of the real QR code */}
        <div
          className="flex h-40 w-40 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl bg-mist text-pine"
          role="img"
          aria-label="Placeholder for registration QR code"
        >
          <QrCode className="h-14 w-14" aria-hidden="true" />
          <span className="text-xs">[QR code]</span>
        </div>
      </section>
    </div>
  );
}
