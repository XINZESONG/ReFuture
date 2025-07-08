"use client";

const SchedulerTaskCard = () => {
  // Mock data
  const tasks = [
    { time: "09:00", task: "Update Resume" },
    { time: "11:00", task: "Apply to Google" },
    { time: "15:00", task: "Follow up with HR" }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-green-100">
      <h2 className="text-lg font-bold text-green-600 mb-4">Scheduler Task</h2>
      <ul className="space-y-2">
        {tasks.map((item, idx) => (
          <li key={idx} className="flex items-center justify-between text-black">
            <span className="text-xs text-gray-400">{item.time}</span>
            <span className="ml-2 font-medium">{item.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchedulerTaskCard; 