// ──────────────────────────────────────────────────────────────────
// DASHBOARD PAGE
// This is the main dashboard view — the first page users see.
// URL: /pages/dashboard
// ──────────────────────────────────────────────────────────────────

"use client";
// ☝️ "use client" is required here because we use useState (a React hook).
// Server Components (default in Next.js App Router) cannot use hooks.

import { useState } from "react";
// ✅ useState lets us track whether the sidebar is open or closed

import Header from "@/app/my_project/components/header";
import Sidebar from "@/app/my_project/components/sidebar";
import Welcome from "@/app/my_project/components/welcome";
// ✅ Good: Using the "@/" path alias for clean imports
// ⚠️ NOTE: The folder is named "my_project" — consider renaming to just "components"
// or "dashboard" for clarity. "my_project" is vague.

export default function DashboardPage() {
  // ✅ State to control sidebar visibility (true = open, false = closed)
  const [open, setOpen] = useState<boolean>(true);
  // 📝 TIP: <boolean> type annotation is optional here since TypeScript
  // can infer it from the initial value (true), but it's fine to be explicit.

  return (
    // ✅ "container" class from globals.css → display: flex (sidebar + main side by side)
    <div className="container">

      {/* Sidebar: shows navigation menu */}
      {/* ✅ Passing "open" prop so sidebar knows whether to show/hide */}
      <Sidebar open={open} />

      {/* Main content area (everything except sidebar) */}
      <main className="main">
        {/* ☝️ "main" class from globals.css → flex:1, padding:30px */}

        {/* Header: has hamburger menu + title + notification bell */}
        {/* ✅ Passing a toggle function so the header button can open/close sidebar */}
        <Header toggleSidebar={() => setOpen(!open)} />

        {/* Welcome section: greeting + motivational messages */}
        <Welcome />

        {/* ⚠️ MISSING CONTENT! A dashboard should show more than just a welcome message.
            
            TODO: Add these sections below <Welcome />:
            
            1. STATS CARDS — show key metrics:
               <div className="stats">
                 <div className="card"><h4>Tasks Completed</h4><p>12</p></div>
                 <div className="card"><h4>Projects Active</h4><p>3</p></div>
                 <div className="card"><h4>Learning Hours</h4><p>24</p></div>
                 <div className="card"><h4>Days Remaining</h4><p>45</p></div>
               </div>
            
            2. CONTENT GRID — show recent activity:
               <div className="content">
                 <div className="card">
                   <h4>Recent Tasks</h4>
                   <ul>
                     <li>Complete React tutorial</li>
                     <li>Submit weekly report</li>
                   </ul>
                 </div>
                 <div className="card">
                   <h4>Upcoming Deadlines</h4>
                   <ul>...</ul>
                 </div>
                 <div className="card">
                   <h4>Announcements</h4>
                   <ul>...</ul>
                 </div>
               </div>
            
            The CSS classes "stats", "card", and "content" are already defined
            in globals.css — you just need to use them!
        */}

      </main>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// 📝 SUMMARY OF ISSUES IN THIS FILE:
// 1. Dashboard only shows a welcome message — needs stats cards, content grid, etc.
// 2. The CSS classes for stats/cards/content exist but aren't being used
// 3. No loading state or error handling
// 4. Consider adding a layout component that wraps sidebar+header for ALL pages
//    (so you don't repeat this structure in every page file)
//
// 💡 PRO TIP: Create a shared layout for all dashboard pages:
//    app/pages/layout.tsx — this will automatically wrap all pages under /pages/
//    Put the sidebar + header there, so individual pages only define their content.
// ──────────────────────────────────────────────────────────────────
