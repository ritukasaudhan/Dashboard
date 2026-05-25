// ──────────────────────────────────────────────────────────────────
// SHADCN BUTTON COMPONENT
// This is an auto-generated component from shadcn/ui.
// ✅ You generally should NOT modify this file manually.
// It was created by running: npx shadcn@latest add button
// ──────────────────────────────────────────────────────────────────

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
// ☝️ cva = "class variance authority" — a library for creating component variants
// It lets you define different visual styles (variants) for the same component.

import { Slot } from "radix-ui"
// ☝️ Slot is from Radix UI — it allows the Button to render as a different element
// when asChild={true} (e.g., render as an <a> tag instead of <button>)

import { cn } from "@/lib/utils"
// ☝️ cn() merges Tailwind classes intelligently (handles conflicts)
// Example: cn("p-4", "p-2") → "p-2" (last one wins, no duplicates)

// ✅ buttonVariants defines ALL possible visual styles for the Button.
// This is the "variant" pattern — one component, many looks.
const buttonVariants = cva(
  // Base classes applied to ALL buttons regardless of variant:
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      // VARIANT: Controls the visual style (color, background, border)
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        // ☝️ Solid dark button (used for primary actions like "Submit")

        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        // ☝️ Bordered button with transparent background (used in your header!)

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        // ☝️ Light gray button for secondary actions

        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        // ☝️ No background until hovered (invisible button)

        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        // ☝️ Red-tinted button for dangerous actions (delete, remove)

        link: "text-primary underline-offset-4 hover:underline",
        // ☝️ Looks like a text link
      },

      // SIZE: Controls the height and padding
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        // ☝️ "icon" size makes a square button — used in your header for Menu/Bell icons
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    // Default values if no variant/size is specified:
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// ✅ The actual Button component
function Button({
  className,        // Additional CSS classes to merge
  variant = "default",  // Which visual style to use
  size = "default",     // Which size to use
  asChild = false,      // If true, renders as child element (e.g., <a>) instead of <button>
  ...props              // All other HTML button props (onClick, disabled, etc.)
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  // If asChild is true, use Radix Slot (renders as the child element)
  // Otherwise, render a normal <button>
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"       // Used by parent components to detect buttons
      data-variant={variant}   // Exposes variant as a data attribute
      data-size={size}         // Exposes size as a data attribute
      className={cn(buttonVariants({ variant, size, className }))}
      // ☝️ cn() merges the variant classes with any custom className passed in
      {...props}
    />
  )
}

// ✅ Named exports — use like:
// import { Button } from "@/components/ui/button"
// <Button variant="outline" size="icon">Click me</Button>
export { Button, buttonVariants }

// ──────────────────────────────────────────────────────────────────
// 📝 HOW TO USE THIS COMPONENT:
//
// Basic:        <Button>Click me</Button>
// Outline:      <Button variant="outline">Cancel</Button>
// Icon button:  <Button variant="outline" size="icon"><Menu /></Button>
// As link:      <Button asChild><a href="/page">Go</a></Button>
// Destructive:  <Button variant="destructive">Delete</Button>
//
// This file is auto-generated by shadcn. If you need to customize,
// it's okay to edit — but understand what each class does first.
// ──────────────────────────────────────────────────────────────────
