"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText, PricingCard } from "../components";
import { pricingPlans } from "../constants";

const Pricing = () => (
  <section className={`${styles.paddings} relative z-10`} id="pricing">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Tarifs" textStyles="text-center" />
      <TitleText
        title={<>Des forfaits adaptés à vos besoins</>}
        textStyles="text-center"
      />

      <div className="mt-[50px] flex lg:flex-row flex-col gap-[30px] justify-center">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={plan.id} {...plan} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Pricing;
