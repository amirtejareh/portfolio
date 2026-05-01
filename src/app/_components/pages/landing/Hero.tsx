import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "../../Button/Button";
import SvgCv from "../../icons/Cv";
import { useThemeStore } from "@/stores/darkmode.store";
import SvgCvBlack from "../../icons/CvBlack";
import { settingsData } from "@/data/portfolioData";

const ArrowRightIcon = dynamic(
  () => import("@/app/_components/icons/ArrowRight"),
  { ssr: true },
);

const Hero = () => {
  const { isDarkMode, orientationDevice } = useThemeStore();

  return (
    <div
      className={`hero h-screen ${
        isDarkMode ? "" : "bg-[#f9f9f9]"
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

      {/* Main Hero Section */}
      <div className="max-w-[1360px] relative w-full mx-auto px-16 sm:!px-64">
        <div className="flex-1 flex flex-col items-start z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div
              className={`${
                isDarkMode ? "text-[#CECECE]" : "text-[#767575]"
              } relative text-[18px] md:!text-[24px] mt-[50px] sm:!mt-[140px] leading-[32px] font-normal`}
            >
              {settingsData.hero_first}
            </div>
            <div
              className={`${
                isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
              } relative sm:!mt-[40px] text-[32px] sm:!text-[64px] md:!text-[80px] leading-[88px] !font-moul`}
            >
              {settingsData.hero_second}
            </div>
            <div className="relative group">
              <div
                className={`${
                  isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
                } relative sm:!mt-[24px] pl-[16px] border-l-2 border-primary sm:!text-[20px] leading-[28px] sm:!leading-[36px] max-w-[200px] sm:!max-w-[450px] text-[14px] md:!max-w-[400px] overflow-hidden line-clamp-2 sm:line-clamp-none cursor-help transition-colors duration-300 hover:text-primary/80`}
              >
                {settingsData.hero_about_me}
              </div>

              {/* Tooltip - Modern Glassmorphism */}
              <div className="absolute left-0 bottom-full mb-12 hidden group-hover:block z-[9999] pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`${
                    isDarkMode
                      ? "bg-black/60 text-white border-white/10"
                      : "bg-white/80 text-[#333] border-black/5 shadow-xl"
                  } p-16 rounded-12 text-[14px] max-w-[280px] border backdrop-blur-xl`}
                >
                  <p className="leading-relaxed">
                    {settingsData.hero_about_me}
                  </p>
                  <div
                    className={`absolute left-6 top-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent ${
                      isDarkMode
                        ? "border-t-[8px] border-t-black/60"
                        : "border-t-[8px] border-t-white/80"
                    }`}
                  ></div>
                </motion.div>
              </div>
            </div>
            <div className={`mt-[40px]`}>
              {settingsData.telegram && (
                <a target="_blank" href={settingsData.telegram}>
                  <Button
                    className={`z-[9999] ${
                      isDarkMode
                        ? "text-white bg-background"
                        : "text-[#3D3B3B] bg-[#f9f9f9]"
                    } `}
                    icon={<ArrowRightIcon />}
                    dimensions="large"
                    btnIconColor="text-white"
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
          initial={{ x: "100%", y: "0", opacity: 0 }}
          animate={{ x: 135, y: "0", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" absolute right-[-50px] sm:!right-[100px] z-[9999] md:z-20 w-[700px] h-full"
        >
          <div
            className={`absolute ${
              orientationDevice === "portrait"
                ? "w-[300px] h-[300px] right-[155px] bottom-[100px] xs:!w-[450px] xs:!h-[450px] xs:!right-[155px] xs:!bottom-[-16px]"
                : "w-[220px] h-[220px] right-[40px] bottom-[40px]"
            } sm:!w-[550px] sm:!h-[550px] md:!w-[870px] md:!h-[870px] sm:!right-[50px] sm:!bottom-[125px] md:!bottom-[79px] [@media(max-height:600px)]:!w-[250px] [@media(max-height:600px)]:!h-[250px] [@media(max-height:600px)]:!right-[20px] [@media(max-height:600px)]:!bottom-[20px]`}
          >
            <div className="absolute bottom-[110px] scale-50 md:!scale-100 md:!bottom-[200px] left-0 md:!left-[50px] z-20">
              <a target="_blank" href={settingsData.resume}>
                {isDarkMode ? <SvgCv /> : <SvgCvBlack />}
              </a>
            </div>

            {isDarkMode ? (
              <Image
                src={settingsData.image_dark}
                blurDataURL={settingsData.image_dark}
                loading="lazy"
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt={settingsData.hero_about_me}
                className="hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <Image
                src={settingsData.image_light}
                blurDataURL={settingsData.image_light}
                loading="lazy"
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                alt={settingsData.hero_about_me}
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
