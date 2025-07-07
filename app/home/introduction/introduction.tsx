"use client";

import { useState } from "react";
import Card from "../../component/card/card";

const Introduction = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const cards = [
    {
      id: "learning",
      title: "Learning",
      icon: "📚",
      description: "AI-powered personalized learning paths, study assistance, and knowledge enhancement tools to accelerate your educational journey.",
      features: [
        "Personalized study plans",
        "Interactive learning modules",
        "Progress tracking & analytics",
        "24/7 learning support"
      ]
    },
    {
      id: "life",
      title: "Life",
      icon: "🌟",
      description: "Comprehensive life coaching and personal development guidance to help you achieve balance and fulfillment in all aspects of life.",
      features: [
        "Personal goal setting",
        "Habit formation support",
        "Wellness & mindfulness guidance",
        "Life balance optimization"
      ]
    },
    {
      id: "work",
      title: "Work",
      icon: "💼",
      description: "Professional development tools, productivity enhancement, and career guidance to help you excel in your professional endeavors.",
      features: [
        "Career path planning",
        "Productivity optimization",
        "Skill development tracking",
        "Professional networking guidance"
      ]
    },
    {
      id: "project",
      title: "Project",
      icon: "🚀",
      description: "AI-driven project generation and development assistance that automatically builds projects based on your specific requirements and goals.",
      features: [
        "Auto-project generation",
        "Requirement analysis",
        "Code scaffolding",
        "Project management tools"
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Main Introduction */}
      <div className="text-center mb-16">
        <h2 className="font-regina text-4xl md:text-5xl font-bold text-white mb-6">
          Your AI-Powered Growth Companion
        </h2>
        <p className="font-regina text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-justify">
          ReFuture is your comprehensive platform that integrates all the tools and resources you need for personal growth. 
          Our AI virtual assistant provides intelligent guidance across learning, life, and work to help you achieve your full potential.
        </p>
      </div>

      {/* Cards Section - Using loops for better maintainability */}
      <div className="space-y-8 mb-16">
        {/* First Row: 2 cards + 1 image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.slice(0, 2).map((card) => (
            <div key={card.id} className="lg:col-span-1">
              <Card
                id={card.id}
                title={card.title}
                icon={card.icon}
                description={card.description}
                features={card.features}
                isActive={activeCard === card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
              />
            </div>
          ))}
          
          {/* AI Image */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="relative w-full h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-gray-700/50 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🤖</div>
                <p className="text-white text-lg font-semibold">AI Assistant</p>
                <p className="text-gray-300 text-sm mt-2">Your intelligent companion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: 1 image + 2 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Image */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="relative w-full h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-gray-700/50 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🧠</div>
                <p className="text-white text-lg font-semibold">Smart Learning</p>
                <p className="text-gray-300 text-sm mt-2">Adaptive & personalized</p>
              </div>
            </div>
          </div>

          {cards.slice(2, 4).map((card) => (
            <div key={card.id} className="lg:col-span-1">
              <Card
                id={card.id}
                title={card.title}
                icon={card.icon}
                description={card.description}
                features={card.features}
                isActive={activeCard === card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <button className="font-regina bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Start Your Growth Journey
        </button>
        <p className="font-regina text-gray-400 mt-4 text-sm text-xl">
          Join thousands of users already transforming their lives with AI assistance
        </p>
      </div>
    </div>
  );
};

export default Introduction; 