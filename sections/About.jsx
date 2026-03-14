"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Us" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">We are</span> a passionate
        team dedicated to helping small businesses succeed online. We build
        websites that don't just look good, but also drive results. Whether
        you need a simple layout or a complex{" "}
        <span className="font-extrabold text-white">
          {" "}
          custom web application{" "}
        </span>{", "}
        our tailored solutions are designed to{" "}
        <span className="font-extrabold text-white"> accelerate </span> your
        growth and turn visitors into loyal customers. Let's{" "}
        <span className="font-extrabold text-white">explore</span> how we can
        bring your vision to life by scrolling down.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;
