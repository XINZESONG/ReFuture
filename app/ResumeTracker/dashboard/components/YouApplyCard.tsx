"use client";

const YouApplyCard = () => {
  // Mock data
  const totalApplications = 12;
  const noResponse = 4;
  const rejected = 2;
  const lastApplied = "2024-07-08";

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 border border-green-100 min-h-[350px] flex flex-col justify-between">
      <h2 className="text-xl font-bold text-green-600 mb-6">You Apply</h2>
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-black">Total Applications</span>
          <span className="text-2xl font-bold text-black">{totalApplications}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-black">No Response</span>
          <span className="text-black">{noResponse}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-black">Rejected</span>
          <span className="text-black">{rejected}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-black">Last Applied</span>
          <span className="text-black">{lastApplied}</span>
        </div>
      </div>
    </div>
  );
};

export default YouApplyCard; 