"use client";

import Link from "next/link";
import YouApplyCard from "./components/YouApplyCard";
import ResumeSectionCard from "./components/ResumeSectionCard";
import BorrowedCompanyCard from "./components/BorrowedCompanyCard";
import ApplyedCompanyCard from "./components/ApplyedCompanyCard";
import CalendarCard from "./components/CalendarCard";
import SchedulerTaskCard from "./components/SchedulerTaskCard";

const DashboardPage = () => {
  return (
    <div className="relative min-h-screen bg-white py-16 px-2 overflow-x-hidden">
      {/* Decorative blurred background shape */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-100 rounded-full blur-2xl opacity-30 -z-10"></div>
      <div className="max-w-[1400px] mx-auto animate-fade-in">
        {/* Header with title and navigation */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 font-regina tracking-tight">Resume Tracker Dashboard</h1>
          <div className="flex gap-6">
            <Link href="/ResumeTracker">
              <button className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition-colors">
                Home
              </button>
            </Link>
            <button className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition-colors">
              Chart
            </button>
            <button className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition-colors">
              Resume
            </button>
          </div>
        </div>
        {/* 第一行：三卡片等宽 */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="flex-1"><YouApplyCard /></div>
          <div className="flex-1"><ResumeSectionCard /></div>
          <div className="flex-1"><BorrowedCompanyCard /></div>
        </div>
        {/* 第二行：左80%右20% */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/5 w-full"><ApplyedCompanyCard /></div>
          <div className="md:w-2/5 w-full flex flex-col gap-6">
            <CalendarCard />
            <SchedulerTaskCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 