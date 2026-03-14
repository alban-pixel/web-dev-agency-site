"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText, FaqItem } from "../components";
import { faqs } from "../constants";

const FAQ = () => (
  <section className={`${styles.paddings} relative z-10`} id="faq">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| FAQ" textStyles="text-center" />
      <TitleText
        title={<>Questions Fréquemment Posées</>}
        textStyles="text-center"
      />

      <div className="mt-[50px] flex flex-col gap-[20px] max-w-[800px] mx-auto w-full">
        {faqs.map((faq, index) => (
          <FaqItem key={index} {...faq} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default FAQ;
