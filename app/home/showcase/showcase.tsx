"use client";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import pic1 from "../../../asset/download1.png";
// import pic2 from "../../../asset/download2.png";
// import pic3 from "../../../asset/download3.png";
// import pic4 from "../../../asset/download4.png";
// import pic5 from "../../../asset/download5.png";
// import pic6 from "../../../asset/download6.png";
// import pic7 from "../../../asset/download7.png";
// import pic8 from "../../../asset/download8.png";
// import pic9 from "../../../asset/download9.png";
// import pic10 from "../../../asset/download10.png";
// import pic11 from "../../../asset/download11.png";
// import pic12 from "../../../asset/download12.png";
// import pic13 from "../../../asset/download13.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./showcase.module.css";
import useWindowWidth from "../../hook/useWindowWidth";

// const collaborationList1: any[] = [
//   { name: "pic1", img: pic1 },
//   { name: "pic2", img: pic2 },
//   { name: "pic3", img: pic3 },
//   { name: "pic4", img: pic4 },
//   { name: "pic5", img: pic5 },
//   { name: "pic6", img: pic6 },
//   { name: "pic7", img: pic7 },
//   { name: "pic8", img: pic8 },
//   { name: "pic9", img: pic9 },
//   { name: "pic10", img: pic10 },
//   { name: "pic11", img: pic11 },
//   { name: "pic12", img: pic12 },
//   { name: "pic13", img: pic13 },
// ];

const Showcase = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className="w-full h-full flex flex-col gap-y-10 items-center">
      <h1 className="text-4xl font-bold mb-16 text-[#f7f5ff] font-['Helvetica']">
        Plushies Showcase
      </h1>
      <Swiper
        slidesPerView={windowWidth < 640 ? 2 : 10}
        loop
        autoplay={{ delay: 1 }}
        speed={5000}
        modules={[Autoplay]}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-full min-h-40"
        wrapperClass={styles.swiperWrapper}
      >
        {/* {collaborationList1
          .concat(collaborationList1)
          .map((collaboration, index) => (
            <SwiperSlide key={collaboration.name + index}>
              <Image src={collaboration.img} alt="refuture pic" />
            </SwiperSlide>
          ))} */}
      </Swiper>
      <Swiper
        dir="rtl"
        slidesPerView={windowWidth < 640 ? 2 : 10}
        loop
        autoplay={{ delay: 1 }}
        speed={5000}
        modules={[Autoplay]}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-full min-h-40"
        wrapperClass={styles.swiperWrapper}
      >
        {/* {collaborationList1
          .concat(collaborationList1)
          .map((collaboration, index) => (
            <SwiperSlide key={collaboration.name + index}>
              <Image src={collaboration.img} alt="reFuture pic" />
            </SwiperSlide>
          ))} */}
      </Swiper>
    </div>
  );
};

export default Showcase;
