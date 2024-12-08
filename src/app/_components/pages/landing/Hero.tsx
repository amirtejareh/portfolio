import { motion } from "framer-motion";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";
import Button from "../../Button/Button";
import Switch from "../../Switch/Switch";
import SvgCv from "../../icons/Cv";

const ArrowRightIcon = dynamic(
  () => import("@/app/_components/icons/ArrowRight"),
  {
    ssr: true,
  }
);

const Hero = () => {
  return (
    <div className="hero relative w-screen h-screen bg-black overflow-hidden">
      {/* Background with Zoom-Out Animation */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center z-0"
      ></motion.div>
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Header Section */}
      <div className="relative z-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-between"
        >
          <span className="text-white !font-lobster text-[32px] font-[400] pt-24 px-64">
            Amir Tejareh
          </span>
          <div className="relative z-30 text-white flex justify-end items-center gap-[160px] rounded-es-[40px] px-64">
            <header>
              <nav>
                <ul className="flex space-x-16 text-16 font-[400] leading-[32px]">
                  {[
                    "About",
                    "Expertise",
                    "Skills",
                    "Service",
                    "Work",
                    "Award",
                  ].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a href="#">{item}</a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </header>
            <div className="flex gap-64 mr-[38px]">
              <div className="flex items-center gap-8 ml-[25px]">
                <span>light</span>
                <Switch isChecked={true} />
                <span>dark</span>
              </div>
              <Button>
                <a href="tel:+989126903127">Contact Me</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute px-64 top-[196px]"
      >
        <div className="text-gray text-[24px] leading-[40px] font-[400]">
          Full-Stack Developer
        </div>
        <div className="mt-[20px] text-white text-[80px] leading-[88px] !font-moul">
          Amir Tejareh
        </div>
        <div className="mt-[24px] pl-16 border-l-[1px] border-solid border-primary w-[196px] text-darkGray text-[20px] leading-[32px]">
          I'm a full-stack developer and I work remotely from Iran
        </div>
        <div className="mt-[40px] text-white w-[233px]">
          <Button icon={<ArrowRightIcon />} dimensions="large">
            Hire Me
          </Button>
        </div>
      </motion.div>

      {/* Image with Animation */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[133px] right-0 z-20"
      >
        <div className="absolute bottom-[200px] left-[50px] z-20">
          <SvgCv />
        </div>
        <Image
          src={`/images/AmirTejareh.png`}
          loading="lazy"
          width={775}
          height={715}
          objectFit="contain"
          alt="Senior Fullstack Developer"
          className="hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
