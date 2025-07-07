"use client";

import ProjectCard from "../component/card/projectCard";
import AnimatedIcon from "../component/icon/AnimatedIcon";

const LifeSection = () => {
  const projects: any[] = [
    // Life projects will be added here
    // Example structure:
    // {
    //   id: "life-project-1",
    //   title: "Life Project",
    //   description: "Description of life project...",
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
        <div className="text-center py-16">
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12">
            <div className="flex justify-center mb-4">
              <AnimatedIcon type="astronaut" size={80} />
            </div>
            <h2 className="font-regina text-2xl md:text-3xl font-bold text-white mb-4">
              No Life Projects Yet
            </h2>
            <p className="font-regina text-gray-300 text-lg">
              We&apos;re working on exciting life projects. Stay tuned!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LifeSection; 