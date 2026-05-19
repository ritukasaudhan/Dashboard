"use client";

import { Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeaderButtonsProps = {
  onMenuClick: () => void;
  onBellClick: () => void;
};

export function HeaderButtons({ onMenuClick, onBellClick }: HeaderButtonsProps) {
  return (
    <div className="flex items-center gap-2">

      <Button
        variant="outline"
        size="icon"
        aria-label="Open menu"
        onClick={onMenuClick}
      >
        <Menu className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        aria-label="Notifications"
        onClick={onBellClick}
      >
        <Bell className="h-4 w-4" />
      </Button>

    </div>
  );
}