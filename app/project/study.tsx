"use client";

import ProjectCard from "../component/card/projectCard";
import AnimatedIcon from "../component/icon/AnimatedIcon";

const StudySection = () => {
  const projects: any[] = [
    // Study projects will be added here
    // Example structure:
    // {
    //   id: "study-project-1",
    //   title: "Study Project",
    //   description: "Description of study project...",
    //   features: ["Feature 1", "Feature 2"],
    //   technologies: ["React", "Node.js"],
    //   status: "In Development",
    //   image: projectImage,
    //   githubUrl: "#",
    //   liveUrl: "#"
    // }
  ];

  return (
    <div className="space-y-12">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            features={project.features}
            technologies={project.technologies}
            status={project.status}
            image={project.image}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))
      ) : (
        <div className="min-h-[600px] text-center py-16">
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12">
            <div className="flex justify-center mb-4">
              <AnimatedIcon type="system" size={80} />
            </div>
            <h2 className="font-regina text-2xl md:text-3xl font-bold text-white mb-4">
              No Study Projects Yet
            </h2>
            <p className="font-regina text-gray-300 text-lg">
              We're working on exciting study projects. Stay tuned!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudySection; 