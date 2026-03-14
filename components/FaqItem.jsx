"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const FaqItem = ({ question, answer, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 1)}
    className="flex flex-col gap-2 p-6 rounded-[24px] border-[1px] border-[#d1d5db] w-full relative z-10 bg-primary-text/5"
  >
    <h3 className="font-bold text-[20px] text-primary-text">{question}</h3>
    <p className="font-normal text-[16px] text-secondary-text mt-2">
      {answer}
    </p>
  </motion.div>
);

export default FaqItem;
