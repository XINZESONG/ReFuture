"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "./asset/Animation.json";

const features = [
  "Resume and Company Tracking",
  "Real-time Email Notifications",
  "Interview Question Bank & Guidance",
  "Interview Scheduling",
  "Interview Result Tracking",
  "Interview Result Analysis",
];

export default function ResumeTrackerHome() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#46C346] via-[#46C346] via-[40%] to-white flex flex-col">
      <header className="flex items-center px-10 py-8">
        <div className="text-2xl font-bold text-green-900 bg-white rounded-full px-6 py-2 shadow font-regina">Resume Tracker</div>
      </header>
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between w-full px-32 gap-8">
        {/* Left: Title & Features */}
        <div className="flex-1 flex flex-col items-start justify-center gap-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-6">Resume Tracker Dashboard</h1>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-center text-lg md:text-xl text-white font-medium">
                  <span className="inline-block w-6 h-6 mr-3 bg-white/80 rounded-full flex items-center justify-center text-green-600 font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <Link href="/ResumeTracker/dashboard">
            <button className="mt-8 px-8 py-4 rounded-xl bg-white text-green-700 font-bold text-xl shadow hover:bg-green-50 transition">Dashboard</button>
          </Link>
        </div>
        {/* Right: Lottie Animation */}
        <div className="flex-1 flex items-center justify-center">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ width: 560, height: 500 }}
          />
        </div>
      </main>
    </div>
  );
} 