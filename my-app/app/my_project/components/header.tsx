// ──────────────────────────────────────────────────────────────────
// HEADER COMPONENT
// This is the top bar of the dashboard with menu toggle and notifications.
// ──────────────────────────────────────────────────────────────────

"use client";
// ☝️ "use client" is needed because this component receives event handler props (onClick)

import { Menu, Bell } from "lucide-react";
// ✅ Good: Using lucide-react for consistent, lightweight icons

import { Button } from "@/components/ui/button";
// ✅ Good: Using the shadcn Button component for consistent styling
// The "@/" path alias is configured in tsconfig.json → paths → "@/*": ["./*"]

// ✅ Good: TypeScript type for the props this component expects
type HeaderProps = {
  toggleSidebar: () => void;
  // ☝️ This is a function passed from the parent that toggles sidebar open/close
};

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    // ✅ The header uses flexbox to space items apart
    // ⚠️ NOTE: You're using both the CSS class "header" (from globals.css)
    // AND Tailwind classes here. This can cause conflicts!
    // The .header class in globals.css already sets display:flex and justify-content:space-between
    // So the Tailwind "flex items-center justify-between" is redundant.
    //
    // FIX: Pick ONE approach — either use the CSS class OR Tailwind, not both.
    // Recommended: Remove the .header CSS class and use only Tailwind:
    //   className="flex items-center justify-between p-4 bg-[#e9edff] mb-5 relative"
    <header className="header flex items-center justify-between relative">

      {/* LEFT SIDE: Hamburger menu button to toggle sidebar */}
      <Button
        variant="outline" // ✅ outline variant gives a bordered button style
        size="icon" // ✅ icon size makes it a square button (good for icon-only buttons)
        onClick={toggleSidebar}
        // ⚠️ MISSING: aria-label for accessibility!
        // FIX: Add aria-label="Toggle sidebar menu"
        // Screen readers can't see the icon, they need a text description.
      >
        <Menu className="h-4 w-4" />
        {/* ☝️ The Menu icon (☰ hamburger) from lucide-react */}
      </Button>

      {/* CENTER: Page title */}
      {/* ✅ Using absolute positioning + transform to perfectly center the title */}
      <h2 className="absolute left-1/2 transform -translate-x-1/2">
        Intern Dashboard
      </h2>
      {/* 📝 TIP: This title could be dynamic based on the current page.
          You could pass it as a prop: title={currentPageName} */}

      {/* RIGHT SIDE: Notification bell */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => alert("Notification")}
        // ⚠️ MISTAKE: alert() is just a placeholder! In a real app you'd:
        // 1. Open a dropdown showing notifications
        // 2. Or navigate to a notifications page
        //
        // ⚠️ MISSING: aria-label="View notifications"
      >
        <Bell className="h-4 w-4" />
        {/* ☝️ The Bell icon (🔔) from lucide-react */}
      </Button>
    </header>
  );
}

// ──────────────────────────────────────────────────────────────────
// 📝 SUMMARY OF ISSUES IN THIS FILE:
// 1. Missing aria-labels on buttons (accessibility problem)
// 2. alert("Notification") is a placeholder — needs real notification logic
// 3. Mixing CSS classes with Tailwind classes (pick one approach)
// 4. Title is hardcoded — could be dynamic based on current route
// ──────────────────────────────────────────────────────────────────
