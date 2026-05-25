// ──────────────────────────────────────────────────────────────────
// SIDEBAR COMPONENT
// This is the left navigation panel of the dashboard.
// ──────────────────────────────────────────────────────────────────

"use client";
// ☝️ "use client" is needed because we use useState (React hooks only work in Client Components)

import Image from "next/image";
import { useState } from "react";
// ⚠️ MISSING IMPORT: You need Link from next/link for navigation!
// FIX: Uncomment the line below when you add navigation:
// import Link from "next/link";

// ✅ Good: Using TypeScript types for props (helps catch errors early)
type SidebarProps = {
  open: boolean;
  // 📝 TIP: You could also add an "onNavigate" callback prop here
  // so the parent knows which page was clicked.
};

export default function Sidebar({ open }: SidebarProps) {
  // ✅ useState tracks which menu item is currently active (highlighted)
  const [active, setActive] = useState("Dashboard");

  // ✅ Good: Menu items defined as an array (easy to add/remove items)
  const menuItems = [
    "Dashboard",
    "My Tasks",
    "Projects",
    "Learning",
    "Mentors",
    "Announcements",
    "Calendar",
    "Resources",
    "Feedback",
    "Profile",
    "Settings",
  ];

  // ⚠️ MISTAKE: These menu items don't have matching URLs/routes!
  // FIX: Create a mapping of item names to their route paths:
  // const menuRoutes: Record<string, string> = {
  //   "Dashboard": "/pages/dashboard",
  //   "My Tasks": "/pages/my-task",
  //   "Projects": "/pages/projects",
  //   "Learning": "/pages/learning",
  //   "Mentors": "/pages/mentors",
  //   "Announcements": "/pages/announcements",
  //   "Calendar": "/pages/calendar",
  //   "Resources": "/pages/resources",
  //   "Feedback": "/pages/feedback",
  //   "Profile": "/pages/profile",
  //   "Settings": "/pages/settings",
  // };

  return (
    // ⚠️ MISTAKE: The class "hide" is used when sidebar is closed,
    // but there is NO ".hide" CSS rule in globals.css!
    // FIX: Add this to globals.css:
    //   .sidebar.hide { display: none; }
    // OR better, use Tailwind:
    //   className={`sidebar ${!open ? "hidden" : ""}`}
    <aside className={`sidebar ${!open ? "hide" : ""}`}>

      {/* ✅ Title of the sidebar */}
      <h2>Intern Hub</h2>

      {/* ✅ Profile section showing user avatar and name */}
      <div className="profile">
        <Image
          src="/ritupic.jpeg"
          alt="user" // ⚠️ MINOR: Use a more descriptive alt text like "Ritu Kasaudhan profile photo"
          width={70}
          height={70}
          // 📝 TIP: Add style={{ borderRadius: "50%" }} or use className for round image
        />
        {/* ⚠️ MISTAKE: Name is hardcoded. In a real app, this should come from props or a user context */}
        <p>Ritu Kasaudhan</p>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item} // ✅ Good: Using unique key for list items
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
              // ⚠️ MAJOR MISTAKE: onClick only changes the highlight color!
              // It does NOT navigate to a different page!
              //
              // FIX: Wrap each item in a <Link> component:
              // <Link href={menuRoutes[item]}>
              //   <li className={active === item ? "active" : ""}>
              //     {item}
              //   </li>
              // </Link>
              //
              // OR use useRouter:
              // import { useRouter } from "next/navigation";
              // const router = useRouter();
              // onClick={() => { setActive(item); router.push(menuRoutes[item]); }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

// ──────────────────────────────────────────────────────────────────
// 📝 SUMMARY OF ISSUES IN THIS FILE:
// 1. No actual navigation — clicking items only changes highlight, doesn't go to new page
// 2. ".hide" class doesn't exist in CSS — sidebar toggle is broken
// 3. User name/image is hardcoded — should be dynamic
// 4. No accessibility: add aria-label, role="navigation", etc.
// ──────────────────────────────────────────────────────────────────
