"use client";

import { Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  toggleSidebar: () => void;
};

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="header flex items-center justify-between relative">

      {/* LEFT → MENU */}
      <Button
        variant="outline"
        size="icon"
        onClick={toggleSidebar}
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* CENTER → TITLE */}
      <h2 className="absolute left-1/2 transform -translate-x-1/2">
        Intern Dashboard
      </h2>

      {/* RIGHT → BELL */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => alert("Notification")}
      >
        <Bell className="h-4 w-4" />
      </Button>

    </header>
  );
}