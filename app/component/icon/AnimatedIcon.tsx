"use client";

interface AnimatedIconProps {
  type: "rocket" | "astronaut" | "satellite" | "system" | "earth" | "moon" | "telescope" | "droid" | "space-station" | "constellation" | "saturn" | "meteor" | "orbit" | "signal-dish";
  size?: number;
  className?: string;
  useSVG?: boolean;
  color?: "blue" | "purple" | "green" | "cyan" | "pink" | "white" | "none";
}

const AnimatedIcon = ({ type, size = 48, className = "", useSVG = false, color = "none" }: AnimatedIconProps) => {
  const getIconPath = (iconType: string, isSVG: boolean = false) => {
    const extension = isSVG ? "svg" : "gif";
    const iconMap: { [key: string]: string } = {
      rocket: `/Space Icon UI8/Exports/Rocket/Rocket.${extension}`,
      astronaut: `/Space Icon UI8/Exports/Astronaut/Astronaut.${extension}`,
      satellite: `/Space Icon UI8/Exports/Satellite/Satellite.${extension}`,
      system: `/Space Icon UI8/Exports/System/System.${extension}`,
      earth: `/Space Icon UI8/Exports/Earth/Earth.${extension}`,
      moon: `/Space Icon UI8/Exports/Moon/Moon.${extension}`,
      telescope: `/Space Icon UI8/Exports/Telescope/Telescope.${extension}`,
      droid: `/Space Icon UI8/Exports/Droid/Droid.${extension}`,
      "space-station": `/Space Icon UI8/Exports/Space station/Space-station.${extension}`,
      constellation: `/Space Icon UI8/Exports/Constellation/Constellation.${extension}`,
      saturn: `/Space Icon UI8/Exports/Saturn/Saturn.${extension}`,
      meteor: `/Space Icon UI8/Exports/Meteor/Meteor.${extension}`,
      orbit: `/Space Icon UI8/Exports/Orbit/Orbit.${extension}`,
      "signal-dish": `/Space Icon UI8/Exports/Signal Dish/Signal-Dish.${extension}`
    };
    return iconMap[iconType] || iconMap.rocket;
  };

  const getColorFilter = (colorType: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(119%)",
      purple: "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(246deg) brightness(104%) contrast(107%)",
      green: "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)",
      cyan: "brightness(0) saturate(100%) invert(84%) sepia(11%) saturate(6382%) hue-rotate(183deg) brightness(101%) contrast(101%)",
      pink: "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(300deg) brightness(104%) contrast(107%)",
      white: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
      none: "none"
    };
    return colorMap[colorType] || colorMap.none;
  };

  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={getIconPath(type, useSVG)}
        alt={`${type} icon`}
        className="w-full h-full object-contain"
        style={{ 
          width: size, 
          height: size,
          filter: color !== "none" ? getColorFilter(color) : "none"
        }}
      />
    </div>
  );
};

export default AnimatedIcon; 