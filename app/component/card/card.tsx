"use client";

import { useState } from "react";

interface CardProps {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Card = ({ 
  id, 
  title, 
  icon, 
  description, 
  features, 
  isActive = false,
  onMouseEnter,
  onMouseLeave 
}: CardProps) => {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isActive ? 'scale-105' : ''
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Card Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      
      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full">
        {/* Icon */}
        <div className="text-4xl mb-4 text-center">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white text-center mb-3">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
          {description}
        </p>
        
        {/* Features List */}
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300 text-xs">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default Card; 