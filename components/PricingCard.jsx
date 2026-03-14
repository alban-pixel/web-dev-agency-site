"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const PricingCard = ({ id, title, price, features, buttonText, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex-1 flex flex-col justify-between p-8 rounded-[32px] border-[1px] border-[#d1d5db] bg-transparent relative z-10"
  >
    <div>
      <h3 className="font-bold text-[32px] text-primary-text mb-4">{title}</h3>
      <div className="flex items-baseline gap-2 mb-8">
        <span className="font-extrabold text-[48px] text-primary-text">{price}</span>
        {price == "800$" && (
          <span className="font-normal text-[16px] text-secondary-text">/site</span>
        )}
        {price == "1500$" && (
          <span className="font-normal text-[16px] text-secondary-text">/projet</span>
        )}
      </div>

      <ul className="flex flex-col gap-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div className="w-[12px] h-[12px] rounded-full bg-accent-blue" />
            <span className="font-normal text-[16px] text-secondary-text">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <button
      type="button"
      className="w-full py-4 px-6 bg-accent-blue rounded-[32px] font-bold text-[16px] text-white hover:bg-opacity-80 transition-all duration-300"
    >
      {buttonText}
    </button>
  </motion.div>
);

export default PricingCard;
