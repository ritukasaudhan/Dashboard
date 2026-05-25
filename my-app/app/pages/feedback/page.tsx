// ──────────────────────────────────────────────────────────────────
// FEEDBACK PAGE
// URL: /pages/feedback
// PURPOSE: Allow interns to give/receive feedback.
// ──────────────────────────────────────────────────────────────────

// ⚠️ THIS FILE IS EMPTY! You need to build this page.
//
// WHAT TO INCLUDE:
// - Feedback form (textarea, rating, submit button)
// - Past feedback received (from mentors)
// - Feedback given history
// - Anonymous option toggle
//
// EXAMPLE STRUCTURE:
// "use client";
// import { useState } from "react";
//
// export default function FeedbackPage() {
//   const [feedback, setFeedback] = useState("");
//   const [rating, setRating] = useState(0);
//
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // TODO: Send feedback to backend/API
//     alert("Feedback submitted!");
//     setFeedback("");
//     setRating(0);
//   };
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Submit Feedback</h2>
//       <textarea
//         value={feedback}
//         onChange={(e) => setFeedback(e.target.value)}
//         placeholder="Share your thoughts..."
//         required
//       />
//       <div>
//         Rating: {[1,2,3,4,5].map(star => (
//           <button key={star} type="button" onClick={() => setRating(star)}>
//             {star <= rating ? "⭐" : "☆"}
//           </button>
//         ))}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

export default function FeedbackPage() {
  return (
    <div>
      <h1>Feedback</h1>
      <p>TODO: Build this page</p>
    </div>
  );
}
