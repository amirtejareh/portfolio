import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useThemeStore } from "@/stores/darkmode.store";
import Button from "../../Button/Button";
import Switch from "../../Switch/Switch";
import SvgClose from "../../icons/Close";
import useGetSettings from "@/hooks/settings/useGetSettings";
const TopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, setDarkMode, orientationDevice, setOrientationDevice } =
    useThemeStore();
  const getSettings: {
    data: {
      text_logo: string;
      phone: string;
    };
  } = useGetSettings();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const sidebarMenuRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const checkMenu = (event) => {
      if (sidebarMenuRef?.current) {
        if (!sidebarMenuRef?.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };

    if (window.matchMedia("(orientation: landscape)").matches) {
      setOrientationDevice("landscape");
    } else {
      setOrientationDevice("portrait");
    }
    window.document.addEventListener("mousedown", checkMenu);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(orientation: landscape)").matches) {
      setOrientationDevice("landscape");
    } else {
      setOrientationDevice("portrait");
    }
    if (isMenuOpen === true && dimensions.width <= 1279) {
      document.body.classList.add("overflow-hidden");
    } else if (isMenuOpen === false && dimensions.width <= 1279) {
      document.body.classList.remove("overflow-hidden");
    }
    if (isMenuOpen === true && dimensions.width > 1279) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen, dimensions]);

  useEffect(() => {
    const handleSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
  }, []);
  return (
    <>
      {/* Sidebar Menu */}
      <motion.div
        ref={sidebarMenuRef}
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={` z-[9999] fixed right-0 top-0 flex flex-col ${
          isDarkMode
            ? "text-[#EFEFEF]  bg-[rgba(22_21_20)] "
            : "text-[#3D3B3B] bg-white"
        }  p-[24px] w-[335px] h-[100vh]`}
      >
        <div className="flex justify-between">
          <span
            className={`${
              isDarkMode ? "text-[#EFEFEF]" : "text-[#232222]"
            } text-[20px]  md:flex !font-lobster`}
          >
            {getSettings?.data?.text_logo}
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
        <div className="flex flex-grow items-end mb-[156px] justify-center">
          <a href={`tel:+98${getSettings?.data?.phone}`}>
            <Button>Contact Me</Button>
          </a>
        </div>
      </motion.div>
      {/* Header Section */}
      <div
        className={`${
          isDarkMode ? "bg-[rgba(22_21_20)]" : "bg-white"
        } sticky top-0 z-[99999] flex items-center justify-between `}
      >
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`${
            isDarkMode ? "text-[#EFEFEF]" : "text-[#232222]"
          } md:flex !font-lobster text-[20px] sm:!text-[32px] pl-16 lg:!pl-64`}
        >
          Amir Tejareh
        </motion.span>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`flex flex-wrap items-center gap-16 sm:!gap-[50px] w-full max-w-[220px] sm:!max-w-[373px] md:!max-w-[100%] justify-end md:!justify-center md:!w-auto  md:!gap-[160px] py-24 pr-16  md:!pr-64 ${
            isDarkMode ? "bg-mirror" : "bg-[#21211E]"
          }  text-white rounded-[0] rounded-es-[40px] pl-16 sm:!pl-0 md:!pl-[50px] `}
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
              <Switch
                className="w-[69px]"
                onChange={(e) => setDarkMode(e.target.checked)}
                isChecked={true}
              />
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
              className="flex md:hidden items-center gap-16"
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
    </>
  );
};

export default TopHeader;
