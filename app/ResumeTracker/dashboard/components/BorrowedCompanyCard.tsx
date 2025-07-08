"use client";

const BorrowedCompanyCard = () => {
  // Mock data
  const companies = [
    { name: "GreenTech Inc.", date: "2024-07-01", status: "Interested" },
    { name: "EcoSoft", date: "2024-06-28", status: "Contacted" },
    { name: "ForestAI", date: "2024-06-25", status: "Interested" },
    { name: "BioSoft", date: "2024-06-20", status: "Contacted" }
  ];
  const latestCompanies = companies.slice(0, 3);

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 border border-green-100 min-h-[350px] flex flex-col justify-between">
      <h2 className="text-xl font-bold text-green-600 mb-6">Borrowed Company</h2>
      <div className="space-y-4 flex-1">
        {latestCompanies.map((company, idx) => (
          <div key={idx} className="flex items-center justify-between bg-green-50 rounded-lg px-4 py-3">
            <div>
              <div className="font-semibold text-black">{company.name}</div>
              <div className="text-xs text-black">Viewed: {company.date}</div>
            </div>
            <div className="flex gap-2 items-center">
              <span className={`px-2 py-1 rounded text-xs font-bold ${company.status === "Interested" ? "bg-green-100 text-green-700" : "bg-yellow-50 text-yellow-700"}`}>{company.status}</span>
              <button className="px-3 py-1 rounded bg-green-100 text-green-700 font-bold text-xs hover:bg-green-200 transition">Detail</button>
            </div>
          </div>
        ))}
        {latestCompanies.length === 0 && (
          <div className="text-black text-center py-4">No companies have viewed your resume yet.</div>
        )}
      </div>
    </div>
  );
};

export default BorrowedCompanyCard; 