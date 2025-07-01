"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Computer = ({ size = 400, daysRunning = 0 }: { size?: number; daysRunning?: number }) => {
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const glowInterval = setInterval(() => {
      setIsGlowing(true);
      setTimeout(() => {
        setIsGlowing(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(glowInterval);
  }, []);

  const scale = size / 400; // Base scale for responsive sizing

  return (
    <div className="relative flex items-center justify-center">

      {/* Power indicator */}
      <div 
        className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"
        style={{ top: size * 0.05, right: size * 0.05 }}
      ></div>
    </div>
  );
};

export default Computer; 