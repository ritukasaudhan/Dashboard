// ──────────────────────────────────────────────────────────────────
// WELCOME COMPONENT
// This shows a greeting message and motivational text to the user.
// ──────────────────────────────────────────────────────────────────

"use client";
// ☝️ "use client" — technically this component doesn't use any hooks or browser APIs,
// so it could be a Server Component (remove "use client").
// But it's fine to keep it if you plan to add interactivity later.

// ⚠️ MISSING IMPORT: If the "View my task" button should navigate somewhere,
// you need: import Link from "next/link";
// OR: import { useRouter } from "next/navigation";

export default function Welcome() {
  return (
    // ✅ Using the "Welcome" CSS class from globals.css for styling
    // ⚠️ NOTE: CSS class names should be lowercase by convention.
    // "Welcome" (capital W) works but is unusual. Better: "welcome" or "welcome-section"
    <section className="Welcome">
      <div>
        {/* ⚠️ MISTAKE: Name is hardcoded! Should come from props or user context */}
        {/* FIX: Accept a prop like: { userName: string } and use it:
            <h3>Welcome Back {userName}</h3> */}
        <h3>Welcome Back Ritu</h3>

        {/* ⚠️ MISTAKE: The "slider" class has no CSS defined!
            These messages just stack vertically — there's no actual sliding/animation.
            
            FIX OPTIONS:
            1. Add CSS animation to rotate through messages
            2. Use a carousel/slider library
            3. Or just show one random message at a time using useState:
            
            const messages = ["Keep learning!", "Keep growing🚀", "You're doing great 💪"];
            const [index, setIndex] = useState(0);
            // Then show: messages[index]
        */}
        <div className="slider">
          <p> Keep learning!</p>
          <p> keep growing🚀 </p>
          {/* ⚠️ MINOR: Inconsistent capitalization — "Keep" vs "keep" */}
          <p> You&apos;re doing great 💪</p>
          {/* ⚠️ MINOR: Use &apos; instead of ' in JSX to avoid potential issues */}
        </div>
      </div>

      {/* ⚠️ MISTAKE: This is a plain HTML <button>, not the shadcn <Button> component!
          It won't match the rest of your UI styling.
          
          FIX: Import and use the shadcn Button:
          import { Button } from "@/components/ui/button";
          <Button onClick={() => router.push("/pages/my-task")}>View my task</Button>
      */}
      {/* ⚠️ MISTAKE: The button doesn't DO anything when clicked!
          There's no onClick handler or Link wrapper.
          
          FIX: Make it navigate to the tasks page:
          <Link href="/pages/my-task">
            <Button>View my task</Button>
          </Link>
      */}
      <button>View my task</button>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// 📝 SUMMARY OF ISSUES IN THIS FILE:
// 1. User name is hardcoded — should be a prop or from context
// 2. "slider" class has no CSS — messages don't actually slide
// 3. Button doesn't navigate anywhere — needs onClick or Link
// 4. Using plain <button> instead of shadcn <Button> component
// 5. "use client" is unnecessary here (no hooks/interactivity used)
// 6. Inconsistent text capitalization
// ──────────────────────────────────────────────────────────────────
