"use client";

import Image from "next/image";
import AnimatezNProm from "../../../asset/Animatez_N_Prom.png";
import AnimatezUzi from "../../../asset/Animatez_Uzi.png";
import NAnimatez from "../../../asset/N-Animatez.png";
import AnimatezV from "../../../asset/Animatez_V.png";

const Amiibo = () => {
  const figures = [
    {
      name: "N Animatez",
      image: NAnimatez,
      link: "https://glitchproductions.store/products/n-animatez",
    },
    {
      name: "Uzi Animatez",
      image: AnimatezUzi,
      link: "https://glitchproductions.store/products/uzi-animatez",
    },
    {
      name: "V Animatez",
      image: AnimatezV,
      link: "https://glitchproductions.store/products/v-animatez",
    },
    {
      name: "N Prom Animatez",
      image: AnimatezNProm,
      link: "https://glitchproductions.store/products/n-prom-animatez",
    },
  ];

  const handleClick = ({ link }: { link: string }) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold fontColor">
          Featured Murder Drones Figures
        </h1>
        <div className="flex flex-wrap justify-center gap-32 mt-32 mb-16">
          {figures.map((figure, index) => (
            <div key={index}>
              <div className="text-center flex flex-col items-center">
                <div className="bg-white w-64 h-64 flex justify-center items-center rounded-full bg-[#f7f5ff]">
                  <Image
                    src={figure.image}
                    alt="Glitch Logo"
                    height={500}
                    className="image absolute hover:scale-110 duration-300"
                    onClick={() =>
                      handleClick({
                        link: figure.link,
                      })
                    }
                  />
                </div>

                <p className="w-48 rounded-lg pt-10 px-4 mt-24 font-bold fontColor">
                  {figure.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="bg-[#e123be] text-[#f7f5ff] mt-8 py-2 px-6 rounded-lg font-bold hover:bg-[#5db4e4] fontColor"
          onClick={() =>
            handleClick({
              link: "https://glitchproductions.store/pages/theamazingdigitalcircus",
            })
          }
        >
          View Our Plushies
        </button>
      </div>
    </div>
  );
};

export default Amiibo;
