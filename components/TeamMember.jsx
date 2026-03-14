"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const TeamMember = ({ name, role, desc, portfolioUrl, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-col items-center p-6 border-[1px] border-[#d1d5db] rounded-[32px] flex-1 min-w-[250px] relative z-10 group overflow-hidden"
  >
    {/* Overlay for portfolio link */}
    <div className="absolute inset-0 bg-[#000000]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
      <a 
        href={portfolioUrl || "#"} 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 bg-accent-blue text-white rounded-full font-bold hover:bg-blue-800 transition-colors scale-90 group-hover:scale-100 duration-300 shadow-lg"
      >
        Voir le portfolio
      </a>
    </div>

    {/* Placeholder for an Avatar - A circle gradient for now */}
    <div className="w-[120px] h-[120px] rounded-full gradient-04 mb-6 relative z-10" />
    
    <h3 className="font-bold text-[24px] text-primary-text mb-2 relative z-10">{name}</h3>
    <h4 className="font-semibold text-[16px] text-accent-blue mb-4 uppercase relative z-10">{role}</h4>
    <p className="font-normal text-[14px] text-secondary-text text-center relative z-10">
      {desc}
    </p>
  </motion.div>
);

export default TeamMember;
