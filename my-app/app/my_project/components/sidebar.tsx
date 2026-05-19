"use client";

import Image from "next/image";
import { useState } from "react";

type SidebarProps = {
  open: boolean;
};

export default function Sidebar({ open }: SidebarProps){

  const [active, setActive] = useState("Dashboard");

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
    "Settings"
  ];

  return (
    <aside className={`sidebar ${!open ? "hide" : ""}`}>

      {/* Title */}
      <h2>Intern Hub</h2>

      {/* Profile */}
      <div className="profile">
        <Image
          src="/ritupic.jpeg"
          alt="user"
          width={70}
          height={70}
          
        />
        <p>Ritu Kasaudhan</p>
      </div>

      {/* Navigation */}
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

    </aside>
  );
}





// This is Test Comment