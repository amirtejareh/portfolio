import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "../../Button/Button";
import SvgCv from "../../icons/Cv";
import SvgCvBlack from "../../icons/CvBlack";
import { useThemeStore } from "@/stores/darkmode.store";
import { settingsData } from "@/data/portfolioData";

const ArrowRightIcon = dynamic(
  () => import("@/app/_components/icons/ArrowRight"),
  { ssr: true },
);

const Hero = () => {
  const { isDarkMode } = useThemeStore();
  const heroImage = isDarkMode
    ? settingsData.image_dark
    : settingsData.image_light;

  return (
    <section
      className={`hero relative isolate overflow-hidden ${
        isDarkMode ? "bg-background" : "bg-[#f9f9f9]"
      }`}
    >
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className={`absolute inset-0 z-0 ${isDarkMode ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      >
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        className={`absolute inset-0 z-0 ${
          isDarkMode
            ? "bg-[linear-gradient(90deg,rgba(22,21,20,0.97)_0%,rgba(22,21,20,0.89)_48%,rgba(22,21,20,0.76)_100%)]"
            : "bg-[linear-gradient(115deg,rgba(255,255,255,0.95)_0%,rgba(249,249,249,0.88)_56%,rgba(239,142,53,0.1)_100%)]"
        }`}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-88px)] w-full max-w-[1360px] items-center gap-[28px] px-16 py-[36px] sm:!gap-[32px] sm:!px-64 sm:!py-[56px] [@media(min-width:980px)]:grid-cols-[minmax(0,1fr)_minmax(340px,0.8fr)] [@media(min-width:980px)]:gap-[32px] [@media(min-width:980px)]:py-[48px] md:!grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] md:!gap-[56px] md:!py-[52px] [@media(max-height:720px)]:md:!gap-[32px] [@media(max-height:720px)]:md:!py-[32px]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative z-20 max-w-[640px] [@media(min-width:980px)]:max-w-none"
        >
          <div
            className={`${
              isDarkMode ? "text-[#CECECE]" : "text-[#767575]"
            } text-[16px] sm:!text-[20px] md:!text-[24px] leading-[28px] sm:!leading-[32px] font-normal`}
          >
            {settingsData.hero_first}
          </div>

          <h1
            className={`${
              isDarkMode ? "text-[#EFEFEF]" : "text-[#2F2D2D]"
            } mt-[12px] sm:!mt-[24px] text-[40px] xs:!text-[48px] sm:!text-[64px] [@media(min-width:980px)]:!text-[48px] [@media(min-width:1120px)]:!text-[56px] md:!text-[80px] leading-[48px] xs:!leading-[58px] sm:!leading-[74px] [@media(min-width:980px)]:!leading-[58px] [@media(min-width:1120px)]:!leading-[66px] md:!leading-[88px] !font-moul`}
          >
            {settingsData.hero_second}
          </h1>

          <div className="relative group mt-[20px] sm:!mt-[24px]">
            <p
              className={`${
                isDarkMode ? "text-[#B2B2B2]" : "text-[#6F6D6D]"
              } border-l-2 border-primary pl-[16px] text-[14px] sm:!text-[18px] md:!text-[20px] leading-[26px] sm:!leading-[32px] md:!leading-[36px] max-w-[560px] [@media(min-width:980px)]:max-w-[440px] md:!max-w-[560px] cursor-help transition-colors duration-300 hover:text-primary/85`}
            >
              {settingsData.hero_about_me}
            </p>

            <div className="absolute left-0 bottom-full z-[60] mb-12 hidden pointer-events-none group-hover:block">
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`${
                  isDarkMode
                    ? "bg-black/70 text-white border-white/10"
                    : "bg-white/90 text-[#333] border-black/5 shadow-xl"
                } max-w-[300px] rounded-[12px] border p-16 text-[14px] backdrop-blur-xl`}
              >
                <p className="leading-relaxed">{settingsData.hero_about_me}</p>
                <div
                  className={`absolute left-6 top-full h-0 w-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent ${
                    isDarkMode ? "border-t-black/70" : "border-t-white/90"
                  }`}
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-[28px] sm:!mt-[36px] flex flex-wrap items-center gap-[12px] sm:!gap-[16px]">
            {settingsData.telegram && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={settingsData.telegram}
              >
                <Button
                  className={`${
                    isDarkMode
                      ? "bg-white text-[#272424]"
                      : "bg-[#232222] text-white"
                  } shadow-[0_16px_45px_rgba(239,142,53,0.18)]`}
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

        <motion.div
          initial={{ opacity: 0, x: 56 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="relative z-10 mx-auto mt-[-8px] flex w-full max-w-[420px] items-end justify-center xs:!max-w-[460px] sm:!mt-0 sm:!max-w-[520px] [@media(min-width:980px)]:!mt-0 [@media(min-width:980px)]:max-w-[430px] [@media(min-width:1120px)]:max-w-[500px] md:!max-w-[680px] md:!justify-end"
        >
          <div
            className={`relative h-[280px] w-full xs:!h-[330px] sm:!h-[360px] [@media(min-width:980px)]:!h-[clamp(320px,calc(100svh-190px),520px)] md:!h-[clamp(330px,calc(100svh-190px),650px)] ${
              isDarkMode ? "text-white" : "text-[#232222]"
            }`}
          >
            <Image
              src={heroImage}
              priority
              fill
              sizes="(min-width: 1280px) 650px, (min-width: 744px) 520px, 92vw"
              alt={settingsData.hero_second}
              className="object-contain object-bottom transition-transform duration-500 hover:scale-[1.025]"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={settingsData.resume}
              aria-label="Download CV"
              className="absolute bottom-[15%] left-[7%] z-20 block h-[74px] w-[74px] transition-transform duration-300 hover:scale-105 xs:!h-[86px] xs:!w-[86px] sm:!bottom-[13%] sm:!left-[5%] sm:!h-[104px] sm:!w-[104px] [@media(min-width:980px)]:!bottom-[14%] [@media(min-width:980px)]:!left-[0] md:!bottom-[16%] md:!left-[1%] md:!h-[130px] md:!w-[130px] [&>svg]:h-full [&>svg]:w-full"
            >
              {isDarkMode ? <SvgCv /> : <SvgCvBlack />}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
