 "use client";

import { useState } from "react";

import Header from "@/app/my_project/components/header";
import Sidebar from "@/app/my_project/components/sidebar";
import Welcome from "@/app/my_project/components/welcome";

export default function DashboardPage() {

  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="container">

      {/* Sidebar */}
      <Sidebar open={open} />

      {/* Main */}
      <main className="main">

        {/* Header */}
        <Header toggleSidebar={() => setOpen(!open)} />

        {/* Welcome */}
        <Welcome />

      </main>

    </div>
  );
}
 
 
