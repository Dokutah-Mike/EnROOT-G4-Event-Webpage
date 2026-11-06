"use client";
// components/tabs/BoothsTab.tsx
// The "Event booths" tab. A list of 5 booths; clicking one shows
// its details in a panel. Uses useState to remember the selected booth.

// Imports React state management, map pin icons, booth data.
import { useState } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { BOOTHS } from "@/lib/eventData";

export default function BoothsTab() {
  // Id of the booth currently selected (starts with the first one).
  const [selectedId, setSelectedId] = useState(BOOTHS[0].id);

  // Find the full booth object that matches the selected id.
  const booth = BOOTHS.find((b) => b.id === selectedId) ?? BOOTHS[0];

  return (
    <section>
      <h1 className="font-display text-4xl sm:text-5xl">Event booths</h1>
      <p className="mt-3 max-w-prose text-moss">
        Explore the event booths below. Click on a booth to see its details
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-[16rem_1fr]">
        {/* BOOTH LIST: a column on desktop, scrolls sideways on phones */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible" role="tablist" aria-label="Booths">
          {BOOTHS.map((b) => (
            <button
              key={b.id}
              type="button"
              role="tab"
              aria-selected={b.id === selectedId}
              onClick={() => setSelectedId(b.id)}
              className={`shrink-0 rounded-2xl px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-moss ${
                b.id === selectedId ? "bg-pine text-mist" : "bg-white/70 hover:bg-sage/40"
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* DETAIL PANEL for the selected booth */}
        <article className="overflow-hidden rounded-[2rem] bg-white/70 shadow-sm" role="tabpanel">
          <div className="relative aspect-[16/7] w-full">
            <Image
              src={booth.image}
              alt={`${booth.name} photo`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>
          <div className="p-6 sm:p-8">
            <h2 className="font-display text-3xl">{booth.name}</h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-moss">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {booth.location}
            </p>
            <p className="mt-4 max-w-prose leading-relaxed">{booth.description}</p>
            
          </div>
        </article>
      </div>
    </section>
  );
}
