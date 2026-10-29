"use client";
// components/SplashIntro.tsx
// A full-screen intro. A calm "breathing" circle shows for a moment, then the
// screen splits in two halves that slide apart to reveal the website.
//
// "use client" (above) is needed because this component uses React hooks
// (useState / useEffect), which only run in the browser.

import { useEffect, useState } from "react";
import { EVENT_NAME, UNIVERSITY_NAME } from "@/lib/eventData";

// The three stages of the intro:
//   "intro"   -> breathing circle is visible
//   "opening" -> the two halves are sliding apart
//   "done"    -> intro is finished and removed from the page
type Phase = "intro" | "opening" | "done";

const SHOW_TIME_MS = 4000; // how long the circle shows before opening
const OPEN_TIME_MS = 1400; // how long the sliding animation takes

export default function SplashIntro() {
  const [phase, setPhase] = useState<Phase>("intro");

  // Move through the stages automatically using timers.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (phase === "intro") {
      timer = setTimeout(() => setPhase("opening"), SHOW_TIME_MS);
    } else if (phase === "opening") {
      timer = setTimeout(() => setPhase("done"), OPEN_TIME_MS);
    }

    // Cleanup: cancel the timer if the component disappears early.
    return () => clearTimeout(timer);
  }, [phase]);

  // When finished, render nothing so the intro no longer blocks the page.
  if (phase === "done") return null;

  const isOpening = phase === "opening";

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-label="Welcome intro">
      {/* LEFT HALF: slides off to the left when opening */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-pine transition-transform duration-[1200ms] ease-in-out ${
          isOpening ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      {/* RIGHT HALF: slides off to the right when opening */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-pine transition-transform duration-[1200ms] ease-in-out ${
          isOpening ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* CENTRE CONTENT: fades out as the halves open */}
      <div
        className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 text-center text-mist transition-opacity duration-500 ${
          isOpening ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* The breathing circle (animation defined in globals.css) */}
        <div className="breathe h-40 w-40 rounded-full bg-gradient-to-br from-sage via-lagoon to-lavender sm:h-52 sm:w-52" aria-hidden="true" />
        <div>
          <p className="font-display text-3xl sm:text-5xl">{EVENT_NAME}</p>
          <p className="mt-2 text-sm text-sage sm:text-base">{UNIVERSITY_NAME}</p>
        </div>
      </div>

      {/* Skip button for people who do not want to wait */}
      {!isOpening && (
        <button
          type="button"
          onClick={() => setPhase("opening")}
          className="absolute bottom-6 right-6 rounded-full border border-sage/60 px-4 py-2 text-sm text-mist transition hover:bg-mist hover:text-pine focus:outline-none focus-visible:ring-2 focus-visible:ring-sage"
        >
          Skip Intro
        </button>
      )}
    </div>
  );
}
