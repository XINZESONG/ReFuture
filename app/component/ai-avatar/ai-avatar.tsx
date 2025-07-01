"use client";

import { useEffect, useState } from "react";

const AIAvatar = ({ size = 400 }: { size?: number }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setCurrentAnimation((prev) => (prev + 1) % 3);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    }, 4000);

    return () => clearInterval(animationInterval);
  }, []);

  const animations = [
    "animate-bounce",
    "animate-pulse",
    "animate-spin"
  ];

  return (
    <div className="relative flex items-center justify-center">
      {/* Main Avatar Circle */}
      <div 
        className={`relative bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center transition-all duration-1000 ${
          isAnimating ? 'scale-110' : 'scale-100'
        }`}
        style={{ width: size, height: size }}
      >
        {/* Animated Rings */}
        <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping"></div>
        <div className="absolute inset-4 rounded-full border-2 border-white/30 animate-pulse"></div>
        
        {/* AI Face */}
        <div className="relative z-10 text-center">
          {/* Eyes */}
          <div className="flex justify-center space-x-8 mb-4">
            <div className={`w-4 h-4 bg-white rounded-full ${isAnimating ? 'animate-bounce' : ''}`}></div>
            <div className={`w-4 h-4 bg-white rounded-full ${isAnimating ? 'animate-bounce' : ''}`}></div>
          </div>
          
          {/* Mouth */}
          <div className={`w-8 h-2 bg-white rounded-full mx-auto ${isAnimating ? 'animate-pulse' : ''}`}></div>
          
          {/* AI Brain Pattern */}
          <div className="mt-6">
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-1 bg-white/60 rounded-full ${
                    isAnimating ? 'animate-pulse' : ''
                  }`}
                  style={{
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/40 rounded-full ${
              isAnimating ? 'animate-ping' : ''
            }`}
            style={{
              top: `${20 + (i * 10)}%`,
              left: `${15 + (i * 15)}%`,
              animationDelay: `${i * 0.3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Glow Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        style={{ width: size, height: size }}
      ></div>

      {/* Data Stream Effect */}
      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full ${
                isAnimating ? 'animate-pulse' : ''
              }`}
              style={{
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Connection Lines */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M 20% 20% Q 50% 10% 80% 20%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className={isAnimating ? 'animate-pulse' : ''}
          />
          <path
            d="M 20% 80% Q 50% 90% 80% 80%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className={isAnimating ? 'animate-pulse' : ''}
          />
        </svg>
      </div>
    </div>
  );
};

export default AIAvatar; 