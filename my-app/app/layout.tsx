// ✅ This is the ROOT LAYOUT - it wraps every page in your app.
// Think of it as the <html> and <body> skeleton that never changes.

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Loading Google Fonts using next/font (good practice - avoids layout shift)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ⚠️ MISTAKE: You forgot to update the metadata!
// This still says "Create Next App" — change it to your project name.
// FIX: Update title and description to match your Intern Hub Dashboard.
export const metadata: Metadata = {
  title: "Intern Hub Dashboard", // ← Changed from "Create Next App"
  description: "A dashboard for interns to track tasks, learning, and projects",
};

// ✅ RootLayout is a Server Component (no "use client" needed here)
// It receives {children} which is whatever page you're currently viewing.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ✅ Good: lang="en" helps screen readers and SEO
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* ✅ min-h-full ensures the body fills the screen height */}
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
