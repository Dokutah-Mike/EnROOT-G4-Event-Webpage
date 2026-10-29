// app/page.tsx
// This file is the home route ("/"). It stays tiny on purpose: all the real
// work happens in the components inside the /components folder.

import SplashIntro from "@/components/SplashIntro";
import SiteShell from "@/components/SiteShell";

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