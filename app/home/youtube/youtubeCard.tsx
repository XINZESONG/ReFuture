"use client";

import Image from "next/image";
import glitchLogo from "../../../asset/logo.png";
import { useState } from "react";

const YoutubeCard = ({ src }: { src: any }) => {
  const [err, setErr] = useState(false);

  const handleError = () => setErr(true);

  return (
    <>
      {!err ? (
        <Image
          src={src}
          alt="Glitch Logo"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 ease-in-out"
          onError={handleError}
        />
      ) : (
        <Image
          src={glitchLogo}
          alt="Glitch Logo"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 ease-in-out"
          onError={handleError}
        />
      )}
    </>
  );
};

export default YoutubeCard;
