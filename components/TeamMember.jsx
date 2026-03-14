"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const TeamMember = ({ name, role, desc, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-col items-center p-6 border-[1px] border-[#6a6a6a] rounded-[32px] flex-1 min-w-[250px] relative z-10"
  >
    {/* Placeholder for an Avatar - A circle gradient for now */}
    <div className="w-[120px] h-[120px] rounded-full gradient-04 mb-6" />
    
    <h3 className="font-bold text-[24px] text-white mb-2">{name}</h3>
    <h4 className="font-semibold text-[16px] text-[#25618b] mb-4 uppercase">{role}</h4>
    <p className="font-normal text-[14px] text-secondary-white text-center">
      {desc}
    </p>
  </motion.div>
);

export default TeamMember;
