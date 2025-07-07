"use client";

import { useState } from "react";
import Layout from "../layout/layout";
import WorkSection from "./work";
import LifeSection from "./life";
import StudySection from "./study";
import AnimatedIcon from "../component/icon/AnimatedIcon";

const ProjectPage = () => {
  const [activeSection, setActiveSection] = useState("work");

  const sections = [
    { id: "work", label: "Work", icon: "rocket" },
    { id: "life", label: "Life", icon: "astronaut" },
    { id: "study", label: "Study", icon: "system" }
  ];

  return (
    <div className="h-full min-h-screen flex flex-col justify-between items-center bg-black scrollbar-hide">
      <Layout>
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="font-kira text-5xl md:text-6xl font-bold text-white mb-12">
              PROJECTS
            </h1>
            <p className="font-regina text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Explore our innovative projects that showcase cutting-edge technology and creative solutions
            </p>
          </div>

          {/* Section Navigation */}
          
            <div className="flex flex-row justify-center gap-8 backdrop-blur-sm rounded-2xl p-2 mb-12">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-4 px-8 py-4 rounded-xl font-regina font-semibold transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  <AnimatedIcon 
                    type={section.icon as any} 
                    size={72} 
                    className={activeSection === section.id ? "opacity-100" : "opacity-70"}
                  />
                  <span className="text-xl font-bold">{section.label}</span>
                </button>
              ))}
            </div>


          {/* Projects Grid */}
          <div className="space-y-12">
            {activeSection === "work" && <WorkSection />}
            {activeSection === "life" && <LifeSection />}
            {activeSection === "study" && <StudySection />}
          </div>

          {/* Coming Soon Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h2 className="font-regina text-2xl md:text-3xl font-bold text-white mb-4">
                More Projects Coming Soon
              </h2>
              <p className="font-regina text-gray-300 text-lg">
                We're constantly working on new innovative projects. Stay tuned for more exciting developments!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProjectPage; 