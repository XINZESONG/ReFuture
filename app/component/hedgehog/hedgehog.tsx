"use client";

import { useEffect, useState } from "react";

const Hedgehog = ({ size = 400 }: { size?: number }) => {
  const [isPeeking, setIsPeeking] = useState(false);
  const [peekDirection, setPeekDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const peekInterval = setInterval(() => {
      setIsPeeking(true);
      setPeekDirection(prev => prev === 'left' ? 'right' : 'left');
      
      setTimeout(() => {
        setIsPeeking(false);
      }, 1500);
    }, 3000);

    return () => clearInterval(peekInterval);
  }, []);

  const scale = size / 400; // Base scale for responsive sizing

  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      {/* Hedgehog Body */}
      <div 
        className={`relative transition-all duration-1000 ease-in-out ${
          isPeeking ? 'scale-110' : 'scale-100'
        }`}
        style={{ width: size, height: size }}
      >
        {/* Main Body (Brown) */}
        <div 
          className="absolute bg-gradient-to-br from-amber-600 to-amber-800 rounded-full"
          style={{
            width: size * 0.7,
            height: size * 0.6,
            top: size * 0.2,
            left: size * 0.15,
            transform: `translateX(${isPeeking && peekDirection === 'right' ? size * 0.1 : 0}px)`
          }}
        >
          {/* Spikes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-gradient-to-b from-amber-700 to-amber-900 rounded-t-full ${
                isPeeking ? 'animate-pulse' : ''
              }`}
              style={{
                width: scale * 8,
                height: scale * 20,
                top: scale * (10 + i * 8),
                left: scale * (15 + i * 6),
                transform: `rotate(${i * 5 - 20}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>

        {/* Head */}
        <div 
          className={`absolute bg-gradient-to-br from-amber-500 to-amber-700 rounded-full transition-all duration-700 ease-in-out ${
            isPeeking ? 'scale-110' : 'scale-100'
          }`}
          style={{
            width: size * 0.4,
            height: size * 0.35,
            top: size * 0.25,
            left: size * 0.05,
            transform: `translateX(${isPeeking && peekDirection === 'right' ? size * 0.15 : 0}px)`
          }}
        >
          {/* Eyes */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-black rounded-full"></div>
          
          {/* Nose */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
          
          {/* Cheeks */}
          <div className="absolute top-2/3 left-1/6 w-3 h-2 bg-pink-300 rounded-full opacity-60"></div>
          <div className="absolute top-2/3 right-1/6 w-3 h-2 bg-pink-300 rounded-full opacity-60"></div>
        </div>

        {/* Ears */}
        <div 
          className={`absolute bg-amber-600 rounded-full transition-all duration-700 ${
            isPeeking ? 'scale-110' : 'scale-100'
          }`}
          style={{
            width: scale * 12,
            height: scale * 12,
            top: size * 0.15,
            left: size * 0.1,
            transform: `translateX(${isPeeking && peekDirection === 'right' ? size * 0.15 : 0}px)`
          }}
        ></div>
        <div 
          className={`absolute bg-amber-600 rounded-full transition-all duration-700 ${
            isPeeking ? 'scale-110' : 'scale-100'
          }`}
          style={{
            width: scale * 12,
            height: scale * 12,
            top: size * 0.15,
            right: size * 0.1,
            transform: `translateX(${isPeeking && peekDirection === 'right' ? size * 0.15 : 0}px)`
          }}
        ></div>

        {/* Legs */}
        <div 
          className="absolute bg-amber-700 rounded-full"
          style={{
            width: scale * 8,
            height: scale * 12,
            bottom: size * 0.1,
            left: size * 0.25,
            transform: `translateX(${isPeeking && peekDirection === 'right' ? size * 0.1 : 0}px)`
          }}
        ></div>
        <div 
          className="absolute bg-amber-700 rounded-full"
          style={{
            width: scale * 8,
            height: scale * 12,
            bottom: size * 0.1,
            right: size * 0.25,
            transform: `translateX(${isPeeking && peekDirection === 'right' ? size * 0.1 : 0}px)`
          }}
        ></div>

        {/* Tail */}
        <div 
          className={`absolute bg-gradient-to-br from-amber-600 to-amber-800 rounded-full transition-all duration-700 ${
            isPeeking ? 'animate-pulse' : ''
          }`}
          style={{
            width: scale * 6,
            height: scale * 6,
            bottom: size * 0.3,
            right: size * 0.1,
            transform: `translateX(${isPeeking && peekDirection === 'right' ? size * 0.1 : 0}px)`
          }}
        ></div>
      </div>

      {/* Peeking Animation Container */}
      <div 
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          isPeeking ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Curiosity Sparkles */}
        {isPeeking && (
          <>
            <div 
              className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping"
              style={{
                top: size * 0.2,
                left: peekDirection === 'right' ? size * 0.8 : size * 0.1,
                animationDelay: '0.2s'
              }}
            ></div>
            <div 
              className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-ping"
              style={{
                top: size * 0.3,
                left: peekDirection === 'right' ? size * 0.85 : size * 0.15,
                animationDelay: '0.4s'
              }}
            ></div>
            <div 
              className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping"
              style={{
                top: size * 0.15,
                left: peekDirection === 'right' ? size * 0.75 : size * 0.05,
                animationDelay: '0.6s'
              }}
            ></div>
          </>
        )}
      </div>

      {/* Ground/Shadow */}
      <div 
        className="absolute bottom-0 bg-gray-300 rounded-full opacity-30"
        style={{
          width: size * 0.8,
          height: scale * 8,
          left: size * 0.1
        }}
      ></div>
    </div>
  );
};

export default Hedgehog; 