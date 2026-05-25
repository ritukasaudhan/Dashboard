// ──────────────────────────────────────────────────────────────────
// HEADER BUTTONS COMPONENT
// Reusable button group for the header (menu + notifications).
// ──────────────────────────────────────────────────────────────────

// ⚠️⚠️ MAJOR ISSUE: This component is NEVER USED anywhere in the project!
// You already have the same buttons directly inside header.tsx.
// This file is DUPLICATE/DEAD CODE.
//
// FIX OPTIONS:
// Option 1: DELETE this file entirely (since header.tsx already has these buttons)
// Option 2: Use this component INSIDE header.tsx to avoid duplication:
//   import { HeaderButtons } from "./button";
//   <HeaderButtons onMenuClick={toggleSidebar} onBellClick={() => {}} />
//
// RECOMMENDATION: Delete this file. Keep the buttons in header.tsx.
// Having the same code in two places is confusing and error-prone.
// ──────────────────────────────────────────────────────────────────

"use client";

import { Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ Good: TypeScript types for the callback props
type HeaderButtonsProps = {
  onMenuClick: () => void;
  onBellClick: () => void;
};

// ✅ Good: Named export (not default) — allows importing by exact name
export function HeaderButtons({ onMenuClick, onBellClick }: HeaderButtonsProps) {
  return (
    <div className="flex items-center gap-2">

      {/* Menu/Hamburger button */}
      <Button
        variant="outline"
        size="icon"
        aria-label="Open menu" // ✅ Good: Has aria-label (unlike header.tsx!)
        onClick={onMenuClick}
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Notification bell button */}
      <Button
        variant="outline"
        size="icon"
        aria-label="Notifications" // ✅ Good: Has aria-label
        onClick={onBellClick}
      >
        <Bell className="h-4 w-4" />
      </Button>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// 📝 SUMMARY:
// This file is UNUSED duplicate code. Either delete it or integrate
// it into header.tsx. Don't keep dead code in your project.
// ──────────────────────────────────────────────────────────────────
