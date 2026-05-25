// ──────────────────────────────────────────────────────────────────
// MY TASKS PAGE
// URL: /pages/my-task
// PURPOSE: Show the intern's assigned tasks with status tracking.
// ──────────────────────────────────────────────────────────────────

// ⚠️ THIS FILE IS EMPTY! You need to build this page.
//
// WHAT TO INCLUDE:
// - List of tasks (title, description, due date, status)
// - Status badges: "To Do", "In Progress", "Completed"
// - Filter/sort options (by status, by due date)
// - Progress bar showing % of tasks completed
// - "Mark as complete" button on each task
//
// EXAMPLE STRUCTURE:
// "use client";
// import { useState } from "react";
//
// type Task = {
//   id: number;
//   title: string;
//   status: "todo" | "in-progress" | "completed";
//   dueDate: string;
// };
//
// export default function MyTaskPage() {
//   const [tasks, setTasks] = useState<Task[]>([
//     { id: 1, title: "Complete React tutorial", status: "in-progress", dueDate: "2025-06-01" },
//     { id: 2, title: "Submit weekly report", status: "todo", dueDate: "2025-05-30" },
//     { id: 3, title: "Code review PR #42", status: "completed", dueDate: "2025-05-25" },
//   ]);
//
//   return (
//     <div className="container">
//       <Sidebar open={true} />
//       <main className="main">
//         <Header toggleSidebar={() => {}} />
//         <h2>My Tasks</h2>
//         <div className="stats">
//           <div className="card"><h4>Total</h4><p>{tasks.length}</p></div>
//           <div className="card"><h4>Completed</h4><p>{tasks.filter(t => t.status === "completed").length}</p></div>
//         </div>
//         {tasks.map(task => (
//           <div key={task.id} className="card">
//             <h4>{task.title}</h4>
//             <span className="points">{task.status}</span>
//             <p>Due: {task.dueDate}</p>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// }

export default function MyTaskPage() {
  return (
    <div>
      <h1>My Tasks</h1>
      <p>TODO: Build this page</p>
    </div>
  );
}
