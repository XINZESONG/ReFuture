"use client";

const CalendarCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-green-100">
      <h2 className="text-lg font-bold text-green-600 mb-4">Calendar</h2>
      <div className="flex flex-col items-center justify-center min-h-[180px] text-black">
        {/* Mock calendar placeholder */}
        <div className="w-full text-center text-gray-400">[ Calendar Here ]</div>
      </div>
    </div>
  );
};

export default CalendarCard; 