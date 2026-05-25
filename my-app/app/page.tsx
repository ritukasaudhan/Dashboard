// ⚠️ MAJOR MISTAKE: This file is the ROOT page (shows at "/" URL).
// Right now it's still the default Next.js boilerplate landing page!
//
// FIX: You should either:
// Option 1: Redirect users to your dashboard page automatically
// Option 2: Replace this content with your actual dashboard
//
// For now, let's redirect to the dashboard page:

import { redirect } from "next/navigation";

export default function Home() {
  // ✅ FIX: Redirect users from "/" to "/pages/dashboard"
  // This way when someone opens your app, they see the dashboard immediately.
  redirect("/pages/dashboard");
}

// ──────────────────────────────────────────────────────────────────
// 📝 LEARNING NOTE:
// In Next.js App Router, the file path determines the URL:
//   app/page.tsx           → "/"
//   app/pages/dashboard/page.tsx → "/pages/dashboard"
//
// ⚠️ BIGGER ISSUE: Your folder structure uses "app/pages/..." which creates
// URLs like "/pages/dashboard", "/pages/profile" etc.
// 
// BETTER STRUCTURE would be:
//   app/dashboard/page.tsx → "/dashboard"
//   app/profile/page.tsx   → "/profile"
//
// The "pages" folder name adds an unnecessary "/pages" in every URL.
// Consider renaming "app/pages/" to just put folders directly in "app/".
// ──────────────────────────────────────────────────────────────────
