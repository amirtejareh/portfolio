import React, { useState } from "react";
import dynamic from "next/dynamic";
import Button from "../../Button/Button";
import SvgTelegram from "../../icons/Telegram";
import SvgInstagram from "../../icons/Instagram";
import SvgLinkedin from "../../icons/Linkedin";
import SvgGithub from "../../icons/Github";
import SvgCopyRight from "../../icons/CopyRight";
import { useThemeStore } from "@/stores/darkmode.store";
import SvgGithubOrange from "../../icons/GithubOrange";
import SvgTelegramOrange from "../../icons/TelegramOrange";
import SvgInstagramOrange from "../../icons/InstagramOrange";
import SvgLinkedinOrange from "../../icons/LinkedinOrange";

const Footer = () => {
  const ArrowRightIcon = dynamic(
    () => import("@/app/_components/icons/ArrowRight"),
    { ssr: true }
  );
  const { isDarkMode, setDarkMode } = useThemeStore();

  return (
    <div className="px-64 mb-[100px] ">
      <div className="mt-[49px] sm:!mt-[40px] md:!mt-[120px]  h-[1px] bg-[rgb(135,135,135,1)]"></div>
      <div className="mt-[33px] items-center flex-col justify-center   sm:!flex-row flex flex-wrap md:!flex-nowrap sm:!justify-around">
        <div className="flex  flex-col">
          <span
            className={`${
              isDarkMode ? "text-[#EFEFEF]" : "!text-[#3D3B3B]"
            } text-[24px] sm:!text-[28px]  md:!text-[40px]  text-left text-border`}
          >
            Do You have a project?
          </span>
          <span
            className={`${
              isDarkMode ? "text-[#EFEFEF]" : "!text-[#3D3B3B]"
            } text-[24px] sm:!text-[28px] md:!text-[40px] text-border  text-left`}
          >
            Let&rsquo;s Talk
          </span>
        </div>
        <div className="text-white mt-24 sm:!mt-[0] flex justify-center">
          <Button icon={<ArrowRightIcon />} dimensions="large">
            <a
              className={`text-[14px] md:!text-16 ${
                isDarkMode ? "text-text" : "!text-[#3D3B3B]"
              } text-text`}
              href="tel:+989126903127"
            >
              Available for projects
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-[33px]   h-[1px] bg-[rgb(135,135,135,1)]"></div>
      <div className="flex mt-[40px] gap-[16px] justify-around flex-wrap flex-col-reverse md:!flex-nowrap md:!flex-row">
        <div className="flex justify-center items-center gap-[8px] text-border text-16 text-center md:!text-left">
          <span
            className={`${
              isDarkMode
                ? " border-[#B2B2B2] text-[#B2B2B2]"
                : "border-[#767575] text-[#767575]"
            } w-[28px] h-[28px] border-solid border-[1px] rounded-[50%] text-16 flex items-center justify-center`}
          >
            C
          </span>
          <span
            className={`${
              isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
            }  text-[12px] md:!text-[16px]`}
          >
            Amir Tejareh All Rights Reserved
          </span>
        </div>
        <div className="flex items-center justify-center gap-[9px]">
          <div
            className={`flex w-[44px] h-[44px] rounded-8 items-center justify-center ${
              isDarkMode
                ? "bg-[rgba(47_47_47)]"
                : "bg-white border-[1px] border-solid border-[#E9E9E9]"
            } rounded-[8px]`}
          >
            <a
              href="https://t.me/amirtejareh"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isDarkMode ? <SvgTelegram /> : <SvgTelegramOrange />}
            </a>
          </div>
          <div
            className={`flex w-[44px] h-[44px] rounded-8 items-center justify-center ${
              isDarkMode
                ? "bg-[rgba(47_47_47)]"
                : "bg-white border-[1px] border-solid border-[#E9E9E9]"
            } rounded-[8px]`}
          >
            <a href="https://github.com/amirtejareh" target="_blank">
              {isDarkMode ? <SvgGithub /> : <SvgGithubOrange />}
            </a>
          </div>
          <div
            className={`flex w-[44px] h-[44px] rounded-8 items-center justify-center ${
              isDarkMode
                ? "bg-[rgba(47_47_47)]"
                : "bg-white border-[1px] border-solid border-[#E9E9E9]"
            }             } rounded-[8px]`}
          >
            <a href="https://instagram.com/bluedev.agency" target="_blank">
              {isDarkMode ? <SvgInstagram /> : <SvgInstagramOrange />}{" "}
            </a>
          </div>
          <div
            className={`flex w-[44px] h-[44px] rounded-8 items-center justify-center ${
              isDarkMode
                ? "bg-[rgba(47_47_47)]"
                : "bg-white border-[1px] border-solid border-[#E9E9E9]"
            }             } rounded-[8px]`}
          >
            <a href="https://linkedin.com/in/amirtejareh" target="_blank">
              {isDarkMode ? <SvgLinkedin /> : <SvgLinkedinOrange />}{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
