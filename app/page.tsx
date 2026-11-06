// app/page.tsx
// This file is the home route ("/"). It stays tiny on purpose: all the real
// work happens in the components inside the /components folder.

import SplashIntro from "@/components/SplashIntro";
import SiteShell from "@/components/SiteShell";

// Defines the main homepage component and its overall structure.
// Displays the splash intro animation followed by the main website layout.
export default function Page() {
  return (
    <>
      {/* Full-screen intro animation. It removes itself after it "opens". */}
      <SplashIntro />

      {/* The actual website: navbar, tabs and footer. */}
      <SiteShell />
    </>
  );
}