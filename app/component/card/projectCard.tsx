"use client";

import Image from "next/image";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  status: string;
  image: any; // StaticImageData or string
  githubUrl: string;
  liveUrl: string;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  features, 
  technologies,
  status,
  image,
  githubUrl,
  liveUrl,
  isActive = false,
  onMouseEnter,
  onMouseLeave 
}: ProjectCardProps) => {
  return (
    <div
      className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 ${
        isActive ? 'scale-105' : ''
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-row gap-4 items-center">
        {/* Project Image */}
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-md h-64 rounded-xl border border-gray-700/50 flex items-center justify-center overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="flex-1 space-y-8">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-regina text-3xl md:text-4xl font-bold text-white mb-2">
              {title}
            </h2>
            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              {status}
            </span>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-600/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => window.open(githubUrl, '_blank')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-regina font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View on GitHub
            </button>
            <button
              onClick={() => window.open(liveUrl, '_blank')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-regina font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 