// ──────────────────────────────────────────────────────────────────
// SETTINGS PAGE
// URL: /pages/settings
// PURPOSE: Allow users to customize their dashboard preferences.
// ──────────────────────────────────────────────────────────────────

// ⚠️ THIS FILE IS EMPTY! You need to build this page.
//
// WHAT TO INCLUDE:
// - Theme toggle (Light/Dark mode)
// - Notification preferences (email, push, in-app)
// - Profile edit form (name, email, password)
// - Language preference
// - Account deletion option
//
// EXAMPLE STRUCTURE:
// "use client";
// import { useState } from "react";
//
// export default function SettingsPage() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [notifications, setNotifications] = useState(true);
//
//   return (
//     <div>
//       <h2>Settings</h2>
//
//       <div className="card">
//         <h4>Appearance</h4>
//         <label>
//           <input
//             type="checkbox"
//             checked={darkMode}
//             onChange={() => setDarkMode(!darkMode)}
//           />
//           Dark Mode
//         </label>
//       </div>
//
//       <div className="card">
//         <h4>Notifications</h4>
//         <label>
//           <input
//             type="checkbox"
//             checked={notifications}
//             onChange={() => setNotifications(!notifications)}
//           />
//           Enable Notifications
//         </label>
//       </div>
//     </div>
//   );
// }
//
// 💡 TIP: To actually implement dark mode, you need to:
// 1. Add/remove "dark" class on the <html> element
// 2. The CSS variables in globals.css already handle dark colors!
// 3. Use: document.documentElement.classList.toggle("dark")

export default function SettingsPage() {
  return (
    <div>
      <h1>Settings</h1>
      <p>TODO: Build this page</p>
    </div>
  );
}
