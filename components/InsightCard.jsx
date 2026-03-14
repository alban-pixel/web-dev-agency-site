"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";
import arrow from "../public/arrow.svg";

const InsightCard = ({ imgUrl, title, subtitle, url, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4 p-6 rounded-[32px] border-[1px] border-[#d1d5db] dark:border-[#6a6a6a] bg-white/50 dark:bg-white/5 backdrop-blur-[4px] hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 shadow-sm"
  >
    <div className="flex-shrink-0">
      <Image
        src={imgUrl}
        alt={title}
        className="md:w-[270px] w-full h-[250px] rounded-[24px] object-cover"
      />
    </div>

    <div className="flex md:flex-row flex-col justify-between items-center w-full">
      <div className="flex-1 md:ml-[40px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[32px] text-[22px] text-primary-text dark:text-white leading-[1.2]">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[18px] text-[14px] text-secondary-text dark:text-secondary-white">
          {subtitle}
        </p>
      </div>
      
      <a 
        href={url || "#"} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] rounded-full bg-transparent border-[1px] border-primary-text dark:border-white transition-transform hover:scale-110 mt-6 md:mt-0 flex-shrink-0"
      >
        <Image
          src={arrow}
          alt="arrow"
          className="w-[30%] h-[30%] object-contain dark:invert"
        />
      </a>
    </div>
  </motion.div>
);

export default InsightCard;
