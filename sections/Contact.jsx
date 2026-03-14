"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TypingText, TitleText } from "../components";

const Contact = () => {
  return (
    <section className={`${styles.paddings} relative z-10`} id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Contactez-nous" textStyles="text-center" />
        <TitleText
          title={<>Prêt à collaborer ?</>}
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col gap-8">
          {/* Contact Info */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-1 flex flex-col gap-6 justify-center bg-white/5 p-8 rounded-[32px] border-[1px] border-[#6a6a6a]"
          >
            <div>
              <h4 className="font-bold sm:text-[24px] text-[20px] text-white">
                Adresse
              </h4>
              <p className="mt-[8px] font-normal sm:text-[16px] text-[14px] text-secondary-white">
                123 Avenue des Champs-Élysées, 75008 Paris
              </p>
            </div>
            <div>
              <h4 className="font-bold sm:text-[24px] text-[20px] text-white">
                Email
              </h4>
              <p className="mt-[8px] font-normal sm:text-[16px] text-[14px] text-secondary-white">
                contact@webagency.fr
              </p>
            </div>
            <div>
              <h4 className="font-bold sm:text-[24px] text-[20px] text-white">
                Téléphone
              </h4>
              <p className="mt-[8px] font-normal sm:text-[16px] text-[14px] text-secondary-white">
                +33 1 23 45 67 89
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-[1.5] bg-white/5 p-8 rounded-[32px] border-[1px] border-[#6a6a6a]"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex sm:flex-row flex-col gap-6">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="flex-1 bg-transparent border-b-[1px] border-[#6a6a6a] text-white p-4 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 bg-transparent border-b-[1px] border-[#6a6a6a] text-white p-4 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Sujet de votre message"
                className="bg-transparent border-b-[1px] border-[#6a6a6a] text-white p-4 focus:outline-none focus:border-white transition-colors"
              />
              <textarea
                placeholder="Votre message"
                rows="4"
                className="bg-transparent border-b-[1px] border-[#6a6a6a] text-white p-4 focus:outline-none focus:border-white transition-colors resize-none"
              />
              <button
                type="submit"
                className="mt-4 py-4 px-8 bg-[#25618B] rounded-[32px] w-fit font-bold text-[16px] text-white hover:bg-opacity-80 transition-all duration-300 self-end"
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
