"use client";
// components/Countdown.tsx
// Shows "days / hours / minutes / seconds" until the event.
// If no date has been set yet (EVENT_DATE_ISO is ""), it shows dashes instead.

import { useEffect, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

// Turn a target time (in milliseconds) into days/hours/minutes/seconds left.
function calculateTimeLeft(targetMs: number): TimeLeft {
  const diff = Math.max(0, targetMs - Date.now()); // never go below zero
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// Make single digits look like "05" instead of "5".
const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ targetDate }: { targetDate: string }) {
  // Convert the date text into a number. An empty/invalid date gives NaN.
  const targetMs = targetDate ? new Date(targetDate).getTime() : NaN;
  const hasDate = !Number.isNaN(targetMs);

  // null = "not calculated yet". We start with null so the server-rendered
  // HTML and the first browser render match (avoids Next.js hydration errors).
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    if (!hasDate) return; // nothing to count down to

    // Recalculate once per second.
    const id = setInterval(() => setTimeLeft(calculateTimeLeft(targetMs)), 1000);

    // Cleanup: stop the timer when the component is removed.
    return () => clearInterval(id);
  }, [hasDate, targetMs]);

  // The four boxes. "--" is shown until real numbers are available.
  const units = [
    { label: "Days", value: timeLeft ? pad(timeLeft.days) : "--" },
    { label: "Hours", value: timeLeft ? pad(timeLeft.hours) : "--" },
    { label: "Minutes", value: timeLeft ? pad(timeLeft.minutes) : "--" },
    { label: "Seconds", value: timeLeft ? pad(timeLeft.seconds) : "--" },
  ];

// Displays a responsive event countdown showing the remaining time in each unit.
// Shows a reminder message if the event date has not yet been configured.
  return (
    <div>
      <div className="flex items-start justify-center gap-3 sm:gap-6" role="timer" aria-label="Countdown to the event">
        {units.map((unit) => (
          <div key={unit.label} className="flex min-w-[4.25rem] flex-col items-center sm:min-w-[6rem]">
            <span className="font-display text-4xl tabular-nums sm:text-6xl">{unit.value}</span>
            <span className="mt-1 text-xs text-moss sm:text-sm">{unit.label}</span>
          </div>
        ))}
      </div>

      
      {!hasDate && (
        <p className="mt-3 text-center text-xs text-moss">
          [Event date to be confirmed. Set EVENT_DATE_ISO in lib/eventData.ts]
        </p>
      )}
    </div>
  );
}
