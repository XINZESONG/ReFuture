"use client";

import ProjectCard from "../component/card/projectCard";
import refutureLogo from "../../asset/RFLogo2.png";

const WorkSection = () => {
  const projects = [
    {
      id: "resume-tracker",
      title: "Resume Tracker",
      description: "A comprehensive resume tracking and management system that helps you organize and track your job applications, interviews, and career progress.",
      features: [
        "Application tracking and status management",
        "Resume version control and storage",
        "Interview scheduling and preparation",
        "Career goal setting and progress monitoring",
        "Analytics and insights dashboard",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      status: "In Development",
      image: refutureLogo,
      githubUrl: "#",
      liveUrl: "/ResumeTracker"
    }
  ];

  return (
    <div className="space-y-12">
      {projects.map((project) => (
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
      ))}
    </div>
  );
};

export default WorkSection; 