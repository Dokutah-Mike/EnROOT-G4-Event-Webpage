"use client";
// components/SiteShell.tsx
// The "frame" of the website. It remembers which tab is open (state) and
// shows the matching tab content between the navbar and the footer.
//
// Tabs are switched with simple React state instead of separate URLs, which
// keeps this frontend-only project easy to understand.

//Import all the tabs and navbar
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomeTab from "@/components/tabs/HomeTab";
import BoothsTab from "@/components/tabs/BoothsTab";
import OrganisersTab from "@/components/tabs/OrganisersTab";
import ContactTab from "@/components/tabs/ContactTab";
import { EVENT_NAME, UNIVERSITY_NAME, type TabId } from "@/lib/eventData";

export default function SiteShell() {
  // `activeTab` is the current tab; `setActiveTab` changes it.
  const [activeTab, setActiveTab] = useState<TabId>("home");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* `key={activeTab}` makes React replay the fade-in each time the tab changes */}
      <main key={activeTab} className="tab-in mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        {activeTab === "home" && <HomeTab onNavigate={setActiveTab} />}
        {activeTab === "booths" && <BoothsTab />}
        {activeTab === "organisers" && <OrganisersTab />}
        {activeTab === "contact" && <ContactTab />}
      </main>

      <footer className="border-t border-sage/50 px-4 py-6 text-center text-sm text-moss">
        {EVENT_NAME} · {UNIVERSITY_NAME} · 2026
      </footer>
    </div>
  );
}
