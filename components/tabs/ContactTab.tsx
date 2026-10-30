// components/tabs/ContactTab.tsx
// The "Contact / Help" tab: contact details plus an FAQ accordion.
//
// The accordion uses the browser's built-in <details>/<summary> elements,
// so it opens and closes with no JavaScript or React state at all.

import { Mail, Phone, AtSign, ChevronDown } from "lucide-react";
import { CONTACT, FAQS } from "@/lib/eventData";

export default function ContactTab() {
  // The three contact cards.
  const contactItems = [
    { icon: Mail, label: "Email", value: CONTACT.email },
    { icon: Phone, label: "Telegram", value: CONTACT.tele },
  ];

  return (
    <section>
      <h1 className="font-display text-4xl sm:text-5xl">Contact / Help</h1>
      <p className="mt-3 max-w-prose text-moss">
        If you have any questions or need assistance, feel free to reach out to us via email or Telegram.
      </p>

      {/* CONTACT CARDS */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {contactItems.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-4 rounded-2xl bg-white/70 p-5 shadow-sm">
            <span className="rounded-full bg-lagoon p-3">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm text-moss">{label}</p>
              <p className="break-words font-medium">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ ACCORDION */}
      <h2 className="mt-14 font-display text-3xl">Frequently asked questions</h2>
      <div className="mt-6 max-w-3xl space-y-3">
        {FAQS.map((faq, index) => (
          // `group` lets the arrow icon react when this <details> is open.
          <details key={index} className="group rounded-2xl bg-white/70 p-5 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-moss">
              {faq.question}
              <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="mt-3 text-moss">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
