import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "../../Button/Button";
import SvgCv from "../../icons/Cv";
import { useThemeStore } from "@/stores/darkmode.store";
import SvgCvBlack from "../../icons/CvBlack";
import useGetSettings from "@/hooks/settings/useGetSettings";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ArrowRightIcon = dynamic(
  () => import("@/app/_components/icons/ArrowRight"),
  { ssr: true }
);

const Hero = () => {
  const { isDarkMode, orientationDevice } = useThemeStore();
  const { ref, inView } = useInView({ triggerOnce: true });
  const getSettings: {
    refetch;
    data: {
      instagram: string;
      text_logo: string;
      linkedin: string;
      telegram: string;
      phone: string;
      resume: string;
      hero_first: string;
      hero_second: string;
      image_dark: string;
      image_light: string;
      github: string;
      hero_about_me: string;
    };
  } = useGetSettings();

  useEffect(() => {
    if (inView) {
      getSettings?.refetch();
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`hero relative w-screen h-screen ${
        isDarkMode ? "" : "bg-white"
      } overflow-hidden flex flex-col`}
    >
      {/* Background with Zoom-Out Animation */}

      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className={`absolute inset-0 z-0 ${isDarkMode ? "visible" : "hidden"} `}
      >
        <Image
          src="/images/hero.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <div
        className={`${
          isDarkMode ? "visible" : "hidden"
        } absolute inset-0 bg-black/85`}
      ></div>

      <div className="max-w-[1360px] mx-auto w-full">
        {/* Main Hero Section */}
        <div className="flex-1 flex flex-col  items-start px-16 lg:px-64 z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div
              className={`${
                isDarkMode ? "text-[#CECECE]" : "text-[#767575]"
              } relative text-[24px] mt-[50px] sm:!mt-[140px] leading-[32px] font-normal`}
            >
              {getSettings?.data?.hero_first}
            </div>
            <div
              className={`${
                isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
              } relative mt-[40px]  text-[32px]  sm:!text-[64px]  md:!text-[80px] leading-[88px] !font-moul`}
            >
              {getSettings?.data?.hero_second}
            </div>
            <div
              className={`${
                isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
              } relative mt-[24px] pl-[16px] border-l-2 border-primary  text-[20px] lleading-[32px] max-w-[170px] sm:!max-w-[400px]`}
            >
              {getSettings?.data?.hero_about_me}
            </div>
            <div className={`mt-[40px] `}>
              {getSettings?.data?.telegram && (
                <a target="_blank" href={getSettings?.data?.telegram}>
                  <Button
                    className={`${
                      isDarkMode
                        ? "text-white bg-background"
                        : "text-[#3D3B3B] bg-white"
                    } `}
                    icon={<ArrowRightIcon />}
                    dimensions="large"
                  >
                    Hire Me
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Image with Animation */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 135, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className=" absolute top-[133px] right-[-50px] sm:!right-[100px] z-[9999] md:z-20 w-[700px] h-full"
        >
          <div
            className={`absolute ${
              orientationDevice === "portrait"
                ? "w-[500px] h-[500px]  right-[20px] bottom-[140px]"
                : "w-[300px] h-[300px]  right-[150px] bottom-[100px]"
            } sm:!w-[450px] sm:!h-[400px] md:!w-[700px] md:!h-[640px]  sm:!right-[50px] md:!bottom-[130px]`}
          >
            <div className="absolute  bottom-[60px] sm:!bottom-[70px]  scale-50 md:!scale-100 md:!bottom-[200px] left-0 md:!left-[50px] z-20">
              <a target="_blank" href={getSettings?.data?.resume}>
                {isDarkMode ? <SvgCv /> : <SvgCvBlack />}
              </a>
            </div>

            {isDarkMode ? (
              <Image
                src={getSettings?.data?.image_dark ?? "/images/AmirTejareh.png"}
                blurDataURL={
                  getSettings?.data?.image_dark ?? "/images/AmirTejareh.png"
                }
                loading="lazy"
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt={getSettings?.data?.hero_about_me}
                className="hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <Image
                src={
                  getSettings?.data?.image_light ??
                  "/images/AmirTejarehLight.png"
                }
                blurDataURL={
                  getSettings?.data?.image_light ??
                  "/images/AmirTejarehLight.png"
                }
                loading="lazy"
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt={getSettings?.data?.hero_about_me}
                className="hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
