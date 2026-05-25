"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Content() {
  return (
    <section className="content">
      {/* ================= MY TASK CARD ================= */}
      <Card className="!p-0">
        <CardHeader className="!p-0">
          <CardTitle className="!p-6 m-0">
            My Tasks
          </CardTitle>
        </CardHeader>

        <CardContent className="!px-6 !pb-6 space-y-4">
          {/* Input + Button */}
          <div className="add-task flex gap-2">
            <Input
              type="text"
              placeholder="Enter new task"
              className="flex-1"
            />
            <Button>Add Task</Button>
          </div>

          {/* Task List */}
          <ul className="space-y-3">
            <li className="points">
              Build Intern Dashboard UI - Due May 20
            </li>
            <li className="points">
              Fix Authentication Bug - Due May 18
            </li>
            <li className="points">
              Setup Project Structure - Completed
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* ================= ANNOUNCEMENTS CARD ================= */}
      <Card className=" !p-0">
        <CardHeader className="!p-0">
          <CardTitle className="!p-6 m-0">
            Announcements
          </CardTitle>
        </CardHeader>

        <CardContent className="!px-6 !pb-6">
          <ul className="space-y-3">
            <li className="points">
              Intern Meetup scheduled on May 25 at 3 PM
            </li>
            <li className="points">
              Project submission deadline is May 20
            </li>
            <li className="points">
              New React learning module has been released
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* ================= QUICK LINKS CARD ================= */}
      <Card className="!p-0">
        <CardHeader className="!p-0">
          <CardTitle className="!p-6 m-0">
            Quick Links
          </CardTitle>
        </CardHeader>

        <CardContent className="!px-6 !pb-6">
          <ul className="space-y-3">
            <li className="points-2">React Documentation</li>
            <li className="points-2">GitHub Project Repository</li>
            <li className="points-2">Apply for Leave</li>
            <li className="points-2">Submit Weekly Feedback</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}