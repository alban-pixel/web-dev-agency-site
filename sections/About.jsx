"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import arrowDown from "../public/arrow-down.svg";

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Qui sommes-nous" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">Nous sommes</span> une
        équipe d'etudiants passionnée dans la recherche technologique et le développement web.
        Nous développons des sites web pour nous faire de l'experience professionelle et aider les commerces et les entreprises a atteindre <span className="font-extrabold text-white">plus de clients</span>.
        Que vous ayez besoin d'un
        simple site de présentation ou d'une{" "}
        <span className="font-extrabold text-white">
          {" "}
          application web sur mesure{" "}
        </span>
        {", "}
        nos services sont conçues pour{" "}
        <span className="font-extrabold text-white"> accélérer </span> votre
        croissance et transformer vos visiteurs en clients fidèles.{" "}
        <span className="font-extrabold text-white">Découvrez</span> comment
        nous pouvons donner vie à <span className="font-extrabold text-white">votre vision</span>.
      </motion.p>
      <a href="#team">
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src={arrowDown.src}
          alt="arrow-down"
          className="w-[18px] h-[28px] object-contain mt-[28px] "
        />
      </a>
    </motion.div>
  </section>
);

export default About;
