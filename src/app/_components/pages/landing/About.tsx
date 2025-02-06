import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import StatCard from "../../StatCard/StatCard";
import { useThemeStore } from "@/stores/darkmode.store";

import useGetAbout from "@/hooks/about/useGetAbout";

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
  const getAbout = useGetAbout();

  const [aboutData, setAbout] = useState<any>();

  useEffect(() => {
    const formattedAbouts = getAbout?.data?.map((about: any) => ({
      content: about.content.rendered,
      card: about?.acf?.card || "",
      image: about._embedded["wp:featuredmedia"]?.[0]?.source_url || "",
    }));
    setAbout(formattedAbouts?.[0]);
  }, [getAbout?.data]);

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
    <div id="About" className="px-64">
      <h2 className="mt-[40px] sm:!mt-[64px] md:!mt-[120px]!font-moul text-[24px] sm:!text-[28px]  md:!text-[40px] font-normal leading-[60px] text-primary">
        About Me
      </h2>

      <div className="flex justify-center  md:!justify-start  gap-[20px] md:!gap-[80px]">
        <motion.div
          className="flex flex-col-reverse md:!flex-row justify-center md:!justify-start mt-16 md:!mt-[56px] flex-wrap md:!flex-nowrap gap-[20px] md:!gap-[80px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="relative mt-[24px] md:!mt-0 overflow-hidden w-[360px] md:!w-[394px] h-[360px] rounded-se-[64px] border-solid border-[1px] border-border mb-[50px]"
          >
            <Image
              src={aboutData?.image ?? "/images/about.png"}
              blurDataURL="/images/about.png"
              loading="lazy"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              objectPosition={"center 25%"}
              alt="Senior Fullstack Developer"
              className=" rounded-se-[64px] hover:scale-105 transition-transform duration-500 border-solid border-[1px] border-border"
            />
          </motion.div>

          <div className="flex flex-col">
            <motion.div
              variants={itemVariants}
              className={`${
                isDarkMode ? "text-text " : "text-[#767575]"
              } max-w-[709px] px-32 leading-[32px] text-[14px] sm:!text-[16px] md:!text-[18px] font-normal`}
              dangerouslySetInnerHTML={{ __html: aboutData?.content }}
            />

            <motion.div
              variants={containerVariants}
              className="flex justify-start flex-wrap mt-[16px] sm:!mt-[80px] md:!mt-[104px] gap-16"
              initial="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {aboutData?.card?.map((detail) => {
                return (
                  <>
                    <motion.div variants={statVariants}>
                      <StatCard
                        shiningPosition={detail?.position}
                        count={detail?.number}
                        text={detail?.text}
                      />
                    </motion.div>
                  </>
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
