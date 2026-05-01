import React from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import StatCard from "../../StatCard/StatCard";
import { useThemeStore } from "@/stores/darkmode.store";
import { aboutData } from "@/data/portfolioData";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const { isDarkMode } = useThemeStore();

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };

  return (
    <div id="About" className="px-16 sm:!px-64 max-w-[1360px] mx-auto">
      <h2 className="mt-[40px] sm:!mt-[64px] md:!mt-[120px] !font-moul text-[24px] sm:!text-[28px] md:!text-[40px] font-normal leading-[60px] text-primary">
        About Me
      </h2>

      <div className="flex justify-center md:!justify-start gap-[20px] md:!gap-[40px]">
        <motion.div
          className="flex flex-col-reverse md:!flex-row justify-center md:!justify-start mt-16 md:!mt-[56px] flex-wrap md:!flex-nowrap gap-[20px] md:!gap-[40px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="relative !flex-shrink-0 mt-[32px] overflow-hidden w-full max-w-[360px] md:!w-[394px] md:!max-w-[394px] h-[360px] rounded-se-[64px] rounded-[8px] border-solid border-[1px] border-border mb-[50px] sm:!mb-0"
          >
            <Image
              src={aboutData.image}
              blurDataURL={aboutData.image}
              loading="lazy"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              objectPosition={"center 25%"}
              alt="About Amir Tejareh"
              className={`${
                isDarkMode ? "grayscale" : "grayscale-0"
              } rounded-se-[64px] rounded-[8px] hover:scale-105 transition-transform duration-500 border-solid border-[1px] border-border`}
            />
          </motion.div>

          <div className="flex flex-col">
            <motion.div
              variants={itemVariants}
              className={`${
                isDarkMode ? "text-text " : "text-[#767575]"
              } text-justify mt-[40px] leading-[32px] text-[14px] sm:!text-[16px] md:!text-[18px] font-normal`}
            >
              {aboutData.content}
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex justify-center sm:!justify-start flex-wrap mt-[16px] sm:!mt-[80px] md:!mt-[93px] gap-16"
              initial="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {aboutData.card?.map((detail, index) => {
                return (
                  <motion.div key={index} variants={statVariants}>
                    <StatCard count={detail.value} text={detail.title} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
