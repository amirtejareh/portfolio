import { motion } from "framer-motion";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";
import Button from "../../Button/Button";
import Switch from "../../Switch/Switch";
import SvgCv from "../../icons/Cv";

const ArrowRightIcon = dynamic(
  () => import("@/app/_components/icons/ArrowRight"),
  { ssr: true }
);

const Hero = () => {
  return (
    <div className="hero relative w-screen h-screen bg-black overflow-hidden flex flex-col">
      {/* Background with Zoom-Out Animation */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center z-0"
      ></motion.div>
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Header Section */}
      <div className="relative z-20 flex items-center justify-between flex-col-reverse md:!flex-row">
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white   md:flex !font-lobster text-[32px] pl-16 lg:!pl-64"
        >
          Amir Tejareh
        </motion.span>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-16 sm:!gap-[50px] w-full justify-center md:!w-auto  md:!gap-[160px] py-24 pr-16  md:!pr-64 bg-mirror text-white rounded-[0] md:!rounded-es-[40px] pl-16 sm:!pl-0 md:!pl-[50px] "
        >
          <header>
            <nav>
              <ul className="flex space-x-8 ext-[16px] leading-[32px]">
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
          <div className="flex gap-[24px] md:!gap-64 mr-[10px] md:!mr-[38px]">
            <div className="flex items-center gap-8">
              <span>light</span>
              <Switch isChecked={true} />
              <span>dark</span>
            </div>

            <div>
              <Button>
                <a href="tel:+989126903127">Contact Me</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Section */}
      <div className="flex-1 flex flex-col  items-start px-16 lg:px-64 z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="text-gray text-[24px] mt-[50px] sm:!mt-[140px] leading-[32px] font-[400]">
            Full-Stack Developer
          </div>
          <div className="mt-[40px] text-white text-[80px] leading-[88px] !font-moul">
            Amir Tejareh
          </div>
          <div className="mt-[24px] pl-[16px] border-l-2 border-primary text-darkGray  text-[20px] lleading-[32px] max-w-[400px]">
            I'm a full-stack developer and I work remotely from Iran
          </div>
          <div className="mt-[40px] text-white">
            <Button icon={<ArrowRightIcon />} dimensions="large">
              Hire Me
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Image with Animation */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 135, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[133px] right-[-50px] sm:!right-[100px] z-10 md:z-20 w-[700px] h-full"
      >
        <div className="absolute inset-0 md:hidden blur-[5px]">
          <Image
            src={`/images/AmirTejareh.png`}
            loading="lazy"
            layout="fill"
            objectFit="cover"
            alt="Senior Fullstack Developer"
            className="opacity-50"
          />
        </div>

        <div className="hidden md:block absolute bottom-[100px]">
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
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
