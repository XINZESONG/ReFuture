"use client";

import { ReactNode } from "react";
import styles from "./layout.module.css";
import Header from "./header/header";
import Footer from "./footer/footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${styles.layout} h-[100vh] w-full`}>
      <div className="absolute h-full w-full flex flex-col items-center">
        <Header></Header>
        <div
          className=" h-full w-full flex flex-col items-center justify-between gap-y-[10rem] sm:gap-y-[20rem]"
          style={{
            height: "100vh",
            background: `linear-gradient(180deg, transparent, #28243c 65% 20% )`,
          }}
        >
          {children}
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default layout;
