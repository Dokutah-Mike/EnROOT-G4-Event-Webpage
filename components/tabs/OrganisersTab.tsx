// components/tabs/OrganisersTab.tsx
// The "Organisers" tab: a responsive grid of organiser cards.
import { ORGANISERS, UNIVERSITY_NAME } from "@/lib/eventData";

//Display all the organisers in a grid format, import from eventData.ts
export default function OrganisersTab() {
  return (
    <section>
      <h1 className="font-display text-4xl sm:text-5xl">Organisers</h1>
      <p className="mt-3 max-w-prose text-moss">
        {UNIVERSITY_NAME} aims to provide a chill environment for students to relax after midterms.
      </p>

      {/* 1 column on phones, 2 on tablets, 4 on large screens */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ORGANISERS.map((person, index) => (
          <div key={index} className="rounded-3xl bg-white/70 p-6 text-center shadow-sm">
            {/* Image placeholder was removed */}
            <p className="mt-4 font-medium">{person.name}</p>
            <p className="text-sm text-moss">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
