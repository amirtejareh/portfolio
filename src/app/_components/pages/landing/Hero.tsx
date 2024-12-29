import { motion } from "framer-motion";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";
import Button from "../../Button/Button";
import Switch from "../../Switch/Switch";
import SvgCv from "../../icons/Cv";
import { useEffect, useRef, useState } from "react";
import SvgClose from "../../icons/Close";
import Link from "next/link";

const ArrowRightIcon = dynamic(
  () => import("@/app/_components/icons/ArrowRight"),
  { ssr: true }
);

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarMenuRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const checkMenu = (event) => {
      if (sidebarMenuRef?.current) {
        if (!sidebarMenuRef?.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };
    window.document.addEventListener("mousedown", checkMenu);
  }, []);

  useEffect(() => {
    const handleSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (isMenuOpen === true && dimensions.width <= 1279) {
      document.body.classList.add("overflow-hidden");
    } else if (isMenuOpen === false && dimensions.width <= 1279) {
      document.body.classList.remove("overflow-hidden");
    }
    if (isMenuOpen === true && dimensions.width > 1279) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen, dimensions]);

  return (
    <div className="hero relative w-screen h-screen bg-black overflow-hidden flex flex-col">
      {/* Background with Zoom-Out Animation */}

      {/* Sidebar Menu */}
      <motion.div
        ref={sidebarMenuRef}
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`z-[9999] fixed right-0 top-0 flex flex-col text-white p-[24px] bg-[rgba(22_21_20)] w-[335px] h-[100vh]`}
      >
        <div className="flex justify-between">
          <span className="text-[20px] text-white md:flex !font-lobster">
            Amir Tejareh
          </span>
          <span className="cursor-pointer" onClick={toggleMenu}>
            <SvgClose />
          </span>
        </div>
        <div className="mt-[40px]">
          <ul className="flex flex-col gap-[16px] leading-[32px]">
            {["About", "Expertise", "Skills", "Services", "Work"].map(
              (item) => (
                <li key={item}>
                  <Link onClick={() => setIsMenuOpen(false)} href={`#${item}`}>
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-grow items-end mb-[56px] justify-center">
          <Button>
            <a href="tel:+989126903127">Contact Me</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center z-0"
      ></motion.div>
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Header Section */}
      <div className="relative z-20 flex items-center justify-between ">
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white   md:flex !font-lobster text-[20px] sm:!text-[32px] pl-16 lg:!pl-64"
        >
          Amir Tejareh
        </motion.span>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-16 sm:!gap-[50px] w-full max-w-[220px] sm:!max-w-[373px] md:!max-w-[100%] justify-end md:!justify-center md:!w-auto  md:!gap-[160px] py-24 pr-16  md:!pr-64 bg-mirror text-white rounded-[0] rounded-es-[40px] pl-16 sm:!pl-0 md:!pl-[50px] "
        >
          <header className="hidden md:!flex">
            <nav>
              <ul className="flex gap-[24px] leading-[32px]">
                {["About", "Expertise", "Skills", "Services", "Work"].map(
                  (item) => (
                    <motion.li
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a href={`#${item}`}>{item}</a>
                    </motion.li>
                  )
                )}
              </ul>
            </nav>
          </header>
          <div className="flex gap-[24px] md:!gap-64 mr-[10px] md:!mr-[38px]">
            <div className="flex items-center gap-8">
              <span>light </span>
              <Switch className="w-[32px] md:!w-[47px]" isChecked={true} />
              <span>dark </span>
            </div>

            <div className="hidden md:!flex">
              <Button>
                <a href="tel:+989126903127">Contact Me</a>
              </Button>
            </div>

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center gap-16"
            >
              <div
                className="flex md:hidden flex-col items-center justify-center gap-[5px] w-[40px] h-[40px] rounded-[12px] bg-[rgba(47,47,47)] cursor-pointer"
                onClick={toggleMenu}
              >
                <span className="w-[18px] h-[1.5px] rounded-[10px] bg-white"></span>
                <span className="w-[18px] h-[1.5px] rounded-[10px] bg-white"></span>
                <span className="w-[18px] h-[1.5px] rounded-[10px] bg-white"></span>
              </div>
            </motion.div>
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
          <div className="text-gray text-[24px] mt-[50px] sm:!mt-[140px] leading-[32px] font-normal">
            Full-Stack Developer
          </div>
          <div className="mt-[40px] text-white  text-[32px]  sm:!text-[64px]  md:!text-[80px] leading-[88px] !font-moul">
            Amir Tejareh
          </div>
          <div className="mt-[24px] pl-[16px] border-l-2 border-primary text-darkGray  text-[20px] lleading-[32px] max-w-[170px] sm:!max-w-[400px]">
            I&rsquo;m a full-stack developer and I work remotely from Iran
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
        <div className=" absolute w-[255px] h-[235px] sm:!w-[400px] right-[150px] sm:!right-[50px] bottom-[130px] md:!bottom-[130px] sm:!h-[362px] md:!w-[700px] md:!h-[640px]">
          <div className="absolute  bottom-[5px] sm:!bottom-[70px]  scale-50 md:!scale-100 md:!bottom-[200px] left-0 md:!left-[50px] z-20">
            <SvgCv className="" />
          </div>
          <Image
            src={`/images/AmirTejareh.png`}
            loading="lazy"
            layout="fill"
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
