"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import refutureLogo from "../../../asset/RFLogo2.png";
import useWindowWidth from "../../hook/useWindowWidth";

const Header = () => {
  const windowWidth = useWindowWidth();
  const router = useRouter();
  const pathname = usePathname();

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Project", path: "/project" },
    { label: "About us", path: "/about" }
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full px-3 sm:px-20 justify-between items-center bg-transparent max-w-[1200px] mt-3">
      <Image
        className="image cursor-pointer"
        src={refutureLogo}
        alt="Refuture Logo"
        height={windowWidth < 640 ? 80 : 120}
        onClick={() => handleNavigation("/")}
      />
      <div className="flex justify-between gap-x-3 sm:gap-x-10 mt-2 sm:mt-0">
        {navigationItems.map((item) => (
          <h1
            key={item.label}
            className={`fontColor text-lg font-bold cursor-pointer px-4 py-1 rounded tracking-widest uppercase relative group transition-all duration-200 hover:text-[#e123be] ${
              pathname === item.path ? "text-[#e123be]" : ""
            }`}
            onClick={() => handleNavigation(item.path)}
          >
            {item.label}
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-[#e123be] transition-all duration-300 ${
              pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Header;
