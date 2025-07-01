"use client";
import Image from "next/image";
import refutureLogo from "../../../asset/RFLogo2.png";
import useWindowWidth from "../../hook/useWindowWidth";

const Header = () => {
  const windowWidth = useWindowWidth();
  return (
    <div className="flex flex-col lg:flex-row w-full px-3 sm:px-20 justify-between items-center bg-transparent max-w-[1200px] mt-3">
      <Image
        className="image"
        src={refutureLogo}
        alt="Refuture Logo"
        height={windowWidth < 640 ? 80 : 120}
      />
      <div className="flex justify-between gap-x-3 sm:gap-x-10 mt-2 sm:mt-0">
        {[
          { label: "Home"},
          { label: "Project"},
          { label: "About us"}
        ].map((item) => (
          <h1
            key={item.label}
            className="fontColor text-lg font-bold cursor-pointer px-4 py-1 rounded tracking-widest uppercase relative group transition-all duration-200 hover:text-[#e123be]"
          >
            {item.label}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#e123be] transition-all duration-300 group-hover:w-full"></span>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Header;
