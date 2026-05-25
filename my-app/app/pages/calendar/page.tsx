// ──────────────────────────────────────────────────────────────────
// CALENDAR PAGE
// URL: /pages/calendar
// PURPOSE: Show schedule, meetings, deadlines in a calendar view.
// ──────────────────────────────────────────────────────────────────

// ⚠️ THIS FILE IS EMPTY! You need to build this page.
//
// WHAT TO INCLUDE:
// - Monthly/weekly calendar view
// - Events with color coding (meetings=blue, deadlines=red, etc.)
// - Click on a day to see events
// - Add new event functionality
// - Upcoming events list on the side
//
// 💡 TIP: For a calendar component, you could:
// 1. Build a simple grid yourself (good learning exercise!)
// 2. Use a library like: react-big-calendar, @fullcalendar/react
// 3. Use shadcn's calendar component: npx shadcn@latest add calendar
//
// SIMPLE CALENDAR GRID EXAMPLE:
// const daysInMonth = new Date(2025, 5, 0).getDate(); // 31 for May
// const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
//
// return (
//   <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}>
//     {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => <div key={d}>{d}</div>)}
//     {days.map(day => <div key={day} className="card">{day}</div>)}
//   </div>
// );

export default function CalendarPage() {
  return (
    <div>
      <h1>Calendar</h1>
      <p>TODO: Build this page</p>
    </div>
  );
}
