import React from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import StatCard from "../../StatCard/StatCard";

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };
  return (
    <div className="about px-64">
      <h2 className="mt-[120px] !font-moul text-[40px] font-[400] leading-[60px] text-primary">
        About Me
      </h2>

      <div className="flex justify-start mt-[56px] gap-[80px]">
        <motion.div
          className="flex justify-start mt-[56px] gap-[80px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden w-[394px] h-[360px] rounded-se-[64px] border-solid border-[1px] border-border mb-[50px]"
          >
            <Image
              src={`/images/about.png`}
              loading="lazy"
              layout="fill"
              objectFit="cover"
              objectPosition={"center 25%"}
              alt="Senior Fullstack Developer"
              className="rounded-se-[64px] hover:scale-105 transition-transform duration-500 border-solid border-[1px] border-border"
            />
          </motion.div>

          <div className="flex flex-col">
            <motion.div
              variants={itemVariants}
              className="max-w-[709px] text-text leading-[32px] text-[18px] font-[400]"
            >
              I’m a full-stack developer with over 10 years of experience,
              specializing in frontend technologies like HTML, CSS, and
              JavaScript, along with frameworks such as React and Angular. I
              have a solid grasp of backend systems for seamless integration and
              stay updated on industry trends. I'm eager to connect with
              professionals to explore new opportunities and enhance the digital
              landscape.
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex mt-[104px] gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={statVariants}>
                <StatCard
                  shiningPosition="top"
                  count={10}
                  text="Years of Experience"
                />
              </motion.div>
              <motion.div variants={statVariants}>
                <StatCard
                  shiningPosition="right"
                  count={10}
                  text="Completed Projects"
                />
              </motion.div>
              <motion.div variants={statVariants}>
                <StatCard
                  shiningPosition="bottom"
                  count={100}
                  sign="%"
                  text="On Time Delivery"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
