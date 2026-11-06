"use client";
// components/Navbar.tsx
// Top navigation bar. Shows tab buttons on wide screens and a hamburger
// menu on phones. It does not decide which tab is active; it receives that
// from SiteShell and tells SiteShell when a tab is clicked.

// Imports React state management and icons for the navigation menu.
// Also imports tab information, the event name, and the TabId TypeScript type.
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { TABS, EVENT_NAME, type TabId } from "@/lib/eventData";

type NavbarProps = {
  activeTab: TabId;                 // which tab is currently open
  onTabChange: (tab: TabId) => void; // called when the user picks a tab
};

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  // Is the mobile dropdown menu open?
  const [menuOpen, setMenuOpen] = useState(false);

  // Switch tab, close the mobile menu and jump back to the top of the page.
  const handleSelect = (tab: TabId) => {
    onTabChange(tab);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Shared look for a tab button; the active one gets a filled style.
  const tabClass = (id: TabId) =>
    `rounded-full px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-moss ${
      activeTab === id ? "bg-pine text-mist" : "text-pine hover:bg-sage/40"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-sage/50 bg-mist/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Main navigation">
        {/* Logo / event name: clicking returns to the main page */}
        <button
          type="button"
          onClick={() => handleSelect("home")}
          className="flex items-center gap-2 font-display text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-moss"
        >
          <Leaf className="h-5 w-5 text-moss" aria-hidden="true" />
          {EVENT_NAME}
        </button>

        {/* DESKTOP tabs: hidden below the "md" breakpoint */}
        <ul className="hidden items-center gap-1 md:flex">
          {TABS.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                onClick={() => handleSelect(tab.id)}
                aria-current={activeTab === tab.id ? "page" : undefined}
                className={tabClass(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE hamburger button: hidden from "md" upwards */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-full p-2 hover:bg-sage/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-moss md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* MOBILE dropdown list (only rendered while open) */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-sage/50 px-4 py-3 md:hidden">
          {TABS.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                onClick={() => handleSelect(tab.id)}
                aria-current={activeTab === tab.id ? "page" : undefined}
                className={`w-full text-left ${tabClass(tab.id)}`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
