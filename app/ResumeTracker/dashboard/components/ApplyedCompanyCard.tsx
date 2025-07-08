"use client";

const ApplyedCompanyCard = () => {
  // Mock data - expanded to 10 applications
  const applications = [
    { company: "GreenTech Inc.", position: "Frontend Developer", status: "Interview", date: "2024-07-01" },
    { company: "EcoSoft", position: "UI Designer", status: "Applied", date: "2024-06-28" },
    { company: "ForestAI", position: "ML Engineer", status: "Rejected", date: "2024-06-20" },
    { company: "BioSoft", position: "Backend Developer", status: "Applied", date: "2024-06-15" },
    { company: "TechGreen", position: "Full Stack Developer", status: "Interview", date: "2024-06-10" },
    { company: "EcoSolutions", position: "DevOps Engineer", status: "Rejected", date: "2024-06-05" },
    { company: "GreenData", position: "Data Scientist", status: "Applied", date: "2024-05-30" },
    { company: "ForestTech", position: "Product Manager", status: "Interview", date: "2024-05-25" },
    { company: "BioAI", position: "AI Engineer", status: "Applied", date: "2024-05-20" },
    { company: "EcoCloud", position: "Cloud Architect", status: "Rejected", date: "2024-05-15" }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 border border-green-100 min-h-[350px] flex flex-col">
      <h2 className="text-xl font-bold text-green-600 mb-6">Applyed Company</h2>
      <div className="overflow-x-auto flex-1">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-green-600 text-sm">
              <th className="py-2 px-2">Company</th>
              <th className="py-2 px-2">Position</th>
              <th className="py-2 px-2">Status</th>
              <th className="py-2 px-2">Date</th>
              <th className="py-2 px-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, idx) => (
              <tr key={idx} className="border-t border-green-100 hover:bg-green-50">
                <td className="py-2 px-2 font-semibold text-black">{app.company}</td>
                <td className="py-2 px-2 text-black">{app.position}</td>
                <td className="py-2 px-2">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    app.status === "Interview"
                      ? "bg-green-100 text-green-700"
                      : app.status === "Applied"
                      ? "bg-yellow-50 text-yellow-700"
                      : "bg-red-50 text-red-500"
                  }`}>{app.status}</span>
                </td>
                <td className="py-2 px-2 text-black">{app.date}</td>
                <td className="py-2 px-2">
                  <button className="px-3 py-1 rounded bg-green-100 text-green-700 font-bold text-xs hover:bg-green-200 transition">Detail</button>
                </td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr>
                <td colSpan={5} className="text-black text-center py-4">No applications yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplyedCompanyCard; 