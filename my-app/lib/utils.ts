// ──────────────────────────────────────────────────────────────────
// UTILITY FUNCTIONS
// Shared helper functions used across the project.
// ──────────────────────────────────────────────────────────────────

import { clsx, type ClassValue } from "clsx"
// ☝️ clsx is a tiny library for conditionally joining class names.
// Example: clsx("btn", isActive && "active", isDisabled && "disabled")
// Result:  "btn active" (if isActive=true, isDisabled=false)

import { twMerge } from "tailwind-merge"
// ☝️ twMerge intelligently merges Tailwind classes, removing conflicts.
// Example: twMerge("p-4 p-2") → "p-2" (last one wins)
// Without twMerge: "p-4 p-2" → both applied, unpredictable result!

// ✅ cn() = "classnames" utility — combines clsx + twMerge
// This is the standard pattern used by shadcn/ui components.
// USE THIS whenever you need to merge Tailwind classes conditionally.
//
// Example usage:
//   cn("text-red-500", isLarge && "text-lg", className)
//   cn(buttonVariants({ variant, size }), className)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ──────────────────────────────────────────────────────────────────
// 📝 TIP: You can add more utility functions here as your project grows.
// Examples:
//   - formatDate(date: Date): string
//   - truncateText(text: string, maxLength: number): string
//   - generateId(): string
// ──────────────────────────────────────────────────────────────────
