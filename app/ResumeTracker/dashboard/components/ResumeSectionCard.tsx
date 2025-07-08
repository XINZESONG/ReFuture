"use client";

const ResumeSectionCard = () => {
  // Mock data
  const resumes = [
    { name: "Resume_2024.pdf", date: "2024-06-30" },
    { name: "Resume_Design.pdf", date: "2024-05-12" },
    { name: "Resume_2023.pdf", date: "2023-12-01" },
    { name: "Resume_2022.pdf", date: "2022-11-10" }
  ];
  const latestResumes = resumes.slice(0, 3);

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 border border-green-100 min-h-[350px] flex flex-col justify-between">
      <h2 className="text-xl font-bold text-green-600 mb-6">Resume Section</h2>
      <div className="space-y-4 flex-1">
        {latestResumes.map((resume, idx) => (
          <div key={idx} className="flex items-center justify-between bg-green-50 rounded-lg px-4 py-3">
            <div>
              <div className="font-semibold text-black">{resume.name}</div>
              <div className="text-xs text-black">Uploaded: {resume.date}</div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded bg-green-100 text-green-700 font-bold text-xs hover:bg-green-200 transition">Download</button>
              <button className="px-3 py-1 rounded bg-red-50 text-red-500 font-bold text-xs hover:bg-red-100 transition">Delete</button>
            </div>
          </div>
        ))}
        {latestResumes.length === 0 && (
          <div className="text-black text-center py-4">No resumes uploaded yet.</div>
        )}
      </div>
    </div>
  );
};

export default ResumeSectionCard; 