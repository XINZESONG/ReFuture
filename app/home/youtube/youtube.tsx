"use client";

import { SetStateAction, useEffect, useState } from "react";
import styles from "./youtube.module.css";
import axios from "axios";
import Loading from "../../component/loading/Loading";
import YoutubeCard from "./youtubeCard";
import useWindowWidth from "../../hook/useWindowWidth";
import leftArrow from "../../../asset/left.png";
import Image from "next/image";

const Youtube = () => {
  const [activeTab, setActiveTab] = useState("glitch");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const windowWidth = useWindowWidth();

  const glitchVideos: any[] = Array.from(
    { length: windowWidth < 800 ? 4 : windowWidth < 1650 ? 16 : 32 },
    (_, index) => ({
      name: `fake-video-${index + 1}`,
    })
  );

  const handleClick = (id: { id: string }) => {
    // window.open(`https://www.youtube.com/watch?v=${id}`, "_blank");
  };

  const handleClickTab = ({ name }: { name: string }) => {
    setActiveTab(`${name}`);
    setVideos([]);
    setError(false);
    setLoading(true);
    setCurrentPage(1);
  };

  const fetchYouTubeVideos = async () => {
    // try {
    //   const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${
    //     activeTab == "glitch" ? CHANNEL_ID_GLITCH : CHANNEL_ID_SMG4
    //   }&part=snippet,id&order=date&maxResults=${
    //     windowWidth < 800 ? 4 : windowWidth < 1650 ? 16 : 32
    //   }`;
    //   const response = await axios.get(url);
    //   return response.data.items;
    // } catch (error) {
    //   console.error("Error fetching YouTube videos", error);
    //   return [];
    // }
  };

  // useEffect(() => {
  //   const getVideos = async () => {
  //     const videos = await fetchYouTubeVideos();
  //     console.log(videos);
  //     if (videos.length < 1) setError(true);
  //     setVideos(videos);
  //     setLoading(false);
  //   };
  //   getVideos();
  // }, [activeTab]);

  const videosPerPage = windowWidth < 800 ? 1 : windowWidth < 1650 ? 4 : 8;

  const handlePageChange = (page: SetStateAction<number>) => {
    if (page != currentPage) setCurrentPage(page);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* <div className={`${styles.tabs} px-3 sm:px-0`}>
        <button
          onClick={() => handleClickTab({ name: "glitch" })}
          className={`${
            activeTab === "glitch" ? styles.active : "transparent"
          }  w-32 sm:w-64 text-3xl sm:text-4xl fontColor mt-8 py-6 px-4 sm:px-12 mx-3 sm:mx-12 rounded-lg font-bold cursor-pointer`}
        >
          Glitch
        </button>
        <button
          onClick={() => handleClickTab({ name: "smg4" })}
          className={`${
            activeTab === "smg4" ? styles.active : "transparent"
          }  w-32 sm:w-64 text-3xl sm:text-4xl fontColor mt-8 py-6 px-4 sm:px-12 mx-3 sm:mx-12 rounded-lg font-bold cursor-pointer`}
        >
          SMG4
        </button>
      </div> */}
      {loading && !error ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap gap-x-10 gap-y-20 justify-center my-20 max-w-[1920px] max-h-[512px] relative">
          {(videos.length > 1 ? videos : glitchVideos)
            .slice(
              (currentPage - 1) * videosPerPage,
              currentPage * videosPerPage
            )
            .map((video, index) => (
              <div
                key={index}
                className="w-96 aspect-video rounded-[1.5vh] overflow-hidden transition-transform duration-500 ease-in-out transform cursor-pointer"
                onClick={() => handleClick(video.id?.videoId)}
              >
                <YoutubeCard
                  src={video.snippet?.thumbnails?.high?.url}
                ></YoutubeCard>
                <div className="absolute w-full inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
                  <h1 className="fontColor text-lg text-center">
                    {video.snippet?.title ? video.snippet?.title : "Fake Video"}
                  </h1>
                </div>
              </div>
            ))}

          <Image
            className="image hidden sm:flex absolute left-[0%] top-[40%] hover:scale-125 cursor-pointer"
            src={leftArrow}
            alt="Left Arrow"
            height={windowWidth < 640 ? 80 : 120}
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)
            }
          />
          <Image
            className="image hidden sm:flex absolute right-[0%] top-[40%] rotate-180 hover:scale-125 cursor-pointer"
            src={leftArrow}
            alt="Right Arrow"
            height={windowWidth < 640 ? 80 : 120}
            onClick={() =>
              handlePageChange(currentPage < 4 ? currentPage + 1 : currentPage)
            }
          />
        </div>
      )}

      <div className={styles.navigation}>
        {[
          ...Array(
            Math.ceil(
              (windowWidth < 800 ? 4 : windowWidth < 1650 ? 16 : 32) /
                videosPerPage
            )
          ),
        ].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`w-4 h-4 mx-1 rounded-full ${
              currentPage === index + 1 ? "bg-[#e123be]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Youtube;
