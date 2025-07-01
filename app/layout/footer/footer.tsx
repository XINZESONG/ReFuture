import Image from "next/image";
import refutureLogo from "../../../asset/RFLogo2.png";
import youtubeBg from "../../../asset/youtube.png";
import twitter from "../../../asset/twitter.png";
import tiktok from "../../../asset/tiktok.png";
import instagram from "../../../asset/instagram.png";

const footer = () => {
  const handleClick = ({ link }: { link: string }) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full flex flex-col justify-between items-center max-w-[1200px]">
      <div className="max-w-[1200px] w-full flex flex-col min-h-48 justify-between items-center lg:flex-row">
        <Image
          className="image"
          src={refutureLogo}
          alt="refuture Logo"
          height={240}
        />
        <div className="image flex flex-col w-full lg:w-fit pl-10 my-5 lg:my-0">
          <div className="flex flex-col my-5 lg:flex-row">
            <Image
              className="pl-1 sm:pl-0 image cursor-pointer pt-1"
              src={youtubeBg}
              alt="Youtube Logo"
              height={25}
              // onClick={() =>
              //   handleClick({
              //     link: "https://www.youtube.com/glitchprod",
              //   })
              // }
            />
            <Image
              className="lg:ml-10 py-1 cursor-pointer"
              src={instagram}
              alt="Instagram Logo"
              height={30}
              // onClick={() =>
              //   handleClick({
              //     link: "https://www.instagram.com/glitch_prod/",
              //   })
              // }
            />
            <Image
              className="lg:ml-10 cursor-pointer"
              src={twitter}
              alt="Twitter Logo"
              height={30}
              // onClick={() =>
              //   handleClick({
              //     link: "https://x.com/glitch_prod",
              //   })
              // }
            />
            <Image
              className="lg:ml-10 py-1 cursor-pointer"
              src={tiktok}
              alt="TikTok Logo"
              height={30}
              // onClick={() =>
              //   handleClick({
              //     link: "https://www.tiktok.com/@glitch_productions?lang=en",
              //   })
              // }
            />
          </div>

          <div className="flex flex-col gap-y-3 lg:flex-row sm:mb-0">
            <h1 className="fontColor pl-0 text-lg cursor-pointer hover:text-[#e123be] font-bold">
              Join Us
            </h1>
            <h1 className="fontColor text-lg lg:pl-10 cursor-pointer hover:text-[#e123be] font-bold">
              About Us
            </h1>
            <h1 className="fontColor text-lg lg:pl-10 cursor-pointer hover:text-[#e123be] font-bold">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <h1 className="fontColor mb-6">
        &copy; 2024 by Otis Song. All rights reserved.
      </h1>
    </div>
  );
};
export default footer;
