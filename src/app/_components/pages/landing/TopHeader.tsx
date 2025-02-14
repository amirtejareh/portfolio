"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useThemeStore } from "@/stores/darkmode.store";
import Button from "../../Button/Button";
import Switch from "../../Switch/Switch";
import SvgClose from "../../icons/Close";
import useGetSettings from "@/hooks/settings/useGetSettings";
import { useInView } from "react-intersection-observer";

const TopHeader = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window != "undefined") {
      const hash = window.location.hash;

      setCurrentPath(hash);
    }
  }, []);

  const divRef = useRef(null); // reference to the div
  const [margin, setMargin] = useState("auto"); // state to store calculated margin

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const parentWidth = divRef.current.parentElement.offsetWidth; // Parent container width
        const divWidth = divRef.current.offsetWidth; // Current width of the div

        // Calculate margin value dynamically (center alignment logic)
        const calculatedMargin = (parentWidth - divWidth) / 2;

        // Update the value or fall back to "auto" if calculation fails
        setMargin(calculatedMargin >= 0 ? `${calculatedMargin}px` : "auto");
      }
    };

    // Use ResizeObserver to watch size changes
    const resizeObserver = new ResizeObserver(() => handleResize());
    if (divRef.current) {
      resizeObserver.observe(divRef.current);
      resizeObserver.observe(divRef.current.parentElement); // Also listen to parent size changes
    }

    // Initial calculation
    handleResize();

    return () => {
      // Cleanup observer on unmount
      resizeObserver.disconnect();
    };
  }, []);

  const { isDarkMode, setDarkMode, setOrientationDevice } = useThemeStore();
  const getSettings: {
    refetch;
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

  useEffect(() => {
    if (inView) getSettings?.refetch();
  }, [inView]);

  return (
    <div className="z-[999999] relative" ref={ref}>
      <div
        style={{ maxWidth: `${1079 + Number(margin.replace("px", ""))}px` }}
        className={`${
          margin === "0px" ? "hidden" : "visible"
        } absolute top-0 right-0 bottom-0 w-full h-full z-[-1] rounded-es-[40px] ${
          isDarkMode
            ? "bg-[rgba(255,255,255,0.1)] backdrop-blur-[1px]"
            : "bg-white"
        }`}
      />
      {/* Sidebar Menu */}
      <motion.div
        ref={sidebarMenuRef}
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={` z-[9999999] fixed right-0 top-0 flex flex-col ${
          isDarkMode
            ? "text-[#EFEFEF]  bg-[rgba(22_21_20)] "
            : "text-[#3D3B3B] bg-[#f9f9f9]"
        }  p-[24px] w-[335px] h-[100vh]`}
      >
        <div className="flex justify-between mt-[75px]">
          <span
            className={`${
              isDarkMode ? "text-[#EFEFEF]" : "text-[#232222]"
            } text-[20px]  md:flex !font-lobster`}
          >
            {getSettings?.data?.text_logo}
          </span>
          <span
            className={`cursor-pointer ${
              isDarkMode ? "text-white" : "text-[#232222]"
            }`}
            onClick={toggleMenu}
          >
            <SvgClose />
          </span>
        </div>
        <div className="mt-[40px]">
          <ul className="flex flex-col gap-[16px] leading-[32px]">
            {["About", "Expertise", "Skills", "Services", "Work"].map(
              (item) => {
                return (
                  <li
                    onClick={() => setCurrentPath("#" + item)}
                    className={`  ${
                      "#" + item == currentPath
                        ? "!text-[rgba(239_142_53)]"
                        : `${
                            isDarkMode ? "!text-[#E0E0E0]" : "!text-[#4F4F4F]"
                          }`
                    }`}
                    key={item}
                  >
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      href={`#${item}`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className="flex flex-grow items-end mb-[156px] justify-center">
          <a
            className={`${isDarkMode ? "text-[#e0e0e0]" : "text-[#3D3B3B]"}`}
            href={`tel:+98${getSettings?.data?.phone}`}
          >
            <Button
              className={`${isDarkMode ? "text-[#e0e0e0]" : "text-[#3D3B3B]"}`}
            >
              Contact Me
            </Button>
          </a>
        </div>
      </motion.div>
      {/* Header Section */}
      <div
        ref={divRef}
        className={`max-w-[1360px] mx-auto ${
          isDarkMode ? "" : "bg-[#f9f9f9]"
        }  flex items-center justify-between `}
      >
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`${
            isDarkMode ? "text-[#EFEFEF]" : "text-[#232222]"
          } z-[999999] flex-shrink-0 md:flex !font-lobster text-[20px] sm:!text-[32px] px-16 sm:!px-64`}
        >
          Amir Tejareh
        </motion.span>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={` z-[9999] flex flex-wrap items-center gap-[16px] sm:!gap-[50px] w-full max-w-[220px] sm:!max-w-[373px] md:!w-full justify-end md:!justify-between md:!max-w-full  md:!gap-[160px] py-24 pr-16  ${
            isDarkMode
              ? `${
                  margin === "0px" ? "bg-[rgba(255,255,255,0.1)]" : "bg-inherit"
                }`
              : "bg-white"
          }  text-white rounded-[0] rounded-es-[40px] pl-16 sm:!pl-0 md:!pl-[50px] `}
        >
          <header className="hidden md:!flex">
            <nav>
              <ul className="flex gap-[24px] leading-[32px]">
                {["About", "Expertise", "Skills", "Services", "Work"].map(
                  (item) => (
                    <motion.li
                      key={item}
                      onClick={() => setCurrentPath("#" + item)}
                      className={`  ${
                        "#" + item == currentPath
                          ? "!text-[rgba(239_142_53)]"
                          : `${
                              isDarkMode ? "!text-[#E0E0E0]" : "!text-[#4F4F4F]"
                            }`
                      }`}
                      whileHover={{
                        scale: 1.1,
                        color: "rgba(239, 142, 53, 1)",
                      }}
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
                isDarkMode={isDarkMode}
              />
            </div>

            <div className="hidden md:!flex">
              <Button
                className={`${
                  isDarkMode ? "text-[#e0e0e0]" : "text-[#3D3B3B]"
                }`}
              >
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
                className={`flex md:hidden flex-col items-center justify-center gap-[5px] w-[40px] h-[40px] rounded-[12px] ${
                  isDarkMode ? "bg-[rgba(47,47,47)]" : "bg-[#eaeaea]"
                }  cursor-pointer`}
                onClick={toggleMenu}
              >
                <span
                  className={`w-[18px] h-[1.5px] rounded-[10px] ${
                    isDarkMode ? "bg-white" : "bg-[rgba(47,47,47)]"
                  } `}
                ></span>
                <span
                  className={`w-[18px] h-[1.5px] rounded-[10px] ${
                    isDarkMode ? "bg-white" : "bg-[rgba(47,47,47)]"
                  }`}
                ></span>
                <span
                  className={`w-[18px] h-[1.5px] rounded-[10px] ${
                    isDarkMode ? "bg-white" : "bg-[rgba(47,47,47)]"
                  }`}
                ></span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TopHeader;
