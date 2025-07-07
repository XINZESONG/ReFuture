"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./banner.module.css";
import useWindowWidth from "../../hook/useWindowWidth";

const Banner = ({
  refutureLogo,
}: {
  refutureLogo: string | StaticImageData;
}) => {
  const [showDays, setShowDays] = useState(false);
  const [daysRunning, setDaysRunning] = useState(0);
  const [lastDigit, setLastDigit] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = useWindowWidth();

  const fullText = "Since July 1, 2025";

  // Calculate days since July 1, 2025
  const calculateDaysRunning = () => {
    const startDate = new Date('2025-07-01');
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    return Math.max(0, daysDiff); // Ensure non-negative
  };

  useEffect(() => {
    // Set initial days
    setDaysRunning(calculateDaysRunning());
    
    const timer = setTimeout(() => {
      setShowDays(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDays = calculateDaysRunning();
      setDaysRunning(currentDays);
      setLastDigit((currentDays % 10) + 1);
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for "DAYS RUNNING"
  useEffect(() => {
    if (showDays && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150); // Speed of typing

      return () => clearTimeout(timeout);
    }
  }, [showDays, currentIndex, fullText.length]);

  const digits = daysRunning.toString().split("");

  return (
    <div className="relative w-full min-h-[300px] sm:min-h-[700px] mt-16">
      {showDays ? (
        <div className="w-full h-full flex justify-center mt-40">
            {/* Enhanced Days Display with Typewriter Effect */}
            <div className="text-center">
              <div className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-6">
                {digits.map((digit, index) => (
                  <span 
                    key={index} 
                    className={`inline-block mx-1 ${
                      index === digits.length - 1 
                        ? "animate-bounce text-green-400" 
                        : "text-blue-400"
                    }`}
                    style={{
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {digit}
                  </span>
                ))}
                <span className="ml-6 text-purple-400 animate-pulse">Days</span>
              </div>
              {/* Typewriter Effect for "DAYS RUNNING" */}
              <div className="font-kira text-2xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 mb-4">
                {displayText}
                <span className="animate-pulse text-white">|</span>
              </div>
            </div>
        </div>
      ) : (
        <div className={styles.refutureSection}>
          <div className={styles.refutureContent}>
            <Image
              className="image"
              src={refutureLogo}
              alt="refuture Logo"
              height={470}
            />
            <h1 className="font-kira text-6xl sm:text-8xl lg:text-9xl mt-0 sm:mt-20 font-bold animate-pulse text-[#f7f5ff]">
              WELCOME GUYS
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
