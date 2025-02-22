import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Button from "../../Button/Button";
import SvgTelegram from "../../icons/Telegram";
import SvgInstagram from "../../icons/Instagram";
import SvgLinkedin from "../../icons/Linkedin";
import SvgGithub from "../../icons/Github";
import { useThemeStore } from "@/stores/darkmode.store";
import SvgGithubOrange from "../../icons/GithubOrange";
import SvgTelegramOrange from "../../icons/TelegramOrange";
import SvgInstagramOrange from "../../icons/InstagramOrange";
import SvgLinkedinOrange from "../../icons/LinkedinOrange";
import useGetSettings from "@/hooks/settings/useGetSettings";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const ArrowRightIcon = dynamic(
    () => import("@/app/_components/icons/ArrowRight"),
    { ssr: true }
  );
  const { isDarkMode } = useThemeStore();

  const { ref, inView } = useInView({ triggerOnce: true });

  const getSettings: {
    refetch;
    data: {
      instagram: string;
      linkedin: string;
      telegram: string;
      github: string;
      phone: string;
    };
  } = useGetSettings();

  useEffect(() => {
    if (inView) {
      getSettings?.refetch();
    }
  }, [inView]);

  return (
    <div ref={ref} className="mb-[100px] ">
      <div
        className={`mt-[49px] sm:!mt-[40px] md:!mt-[120px] ${
          isDarkMode ? "bg-[#434342]" : "bg-[#e7e7e7]"
        } h-[1px] `}
      ></div>
      <div className="px-16 sm:!pl-[56px] sm:!pr-[40px]  max-w-[1360px] mx-auto mt-[33px] md:!items-center flex-col justify-between   sm:!flex-row flex flex-wrap md:!flex-nowrap ">
        <div className="flex  flex-col">
          <span
            className={`${
              isDarkMode ? "text-[#Ef9f9f9]" : "!text-[#3D3B3B]"
            } text-[24px] sm:!text-[28px]  md:!text-[40px]  text-left text-border`}
          >
            Do You have a project?
          </span>
          <span
            className={`${
              isDarkMode ? "text-[#Ef9f9f9]" : "!text-[#3D3B3B]"
            } text-[24px] sm:!text-[28px] md:!text-[40px] text-border  text-left`}
          >
            Let&rsquo;s Talk
          </span>
        </div>
        <div className="text-white mt-24 sm:!mt-[0] flex md:!justify-center">
          <a
            className={`text-[14px] md:!text-16 ${
              isDarkMode ? "text-text" : "!text-[#3D3B3B]"
            } text-text`}
            href={`tel:+98${getSettings?.data?.phone}`}
          >
            <Button
              btnIconColor="text-white"
              icon={<ArrowRightIcon />}
              dimensions="large"
            >
              Available for projects
            </Button>
          </a>
        </div>
      </div>

      <div
        className={`mt-[33px]   h-[1px] ${
          isDarkMode ? "bg-[#434342]" : "bg-[#e7e7e7]"
        }  `}
      ></div>
      <div className="flex px-16 sm:!pl-[56px] sm:!pr-[40px]  max-w-[1360px] mx-auto mt-[40px] gap-[16px] justify-between flex-wrap flex-col-reverse md:!flex-nowrap md:!flex-row">
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
          <a
            href={getSettings?.data?.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex w-[44px] h-[44px] rounded-8 items-center justify-center ${
                isDarkMode
                  ? "bg-[rgba(47_47_47)]"
                  : "bg-[#ef9f9f9] border-[1px] border-solid border-[#E9E9E9]"
              } rounded-[8px]`}
            >
              {isDarkMode ? <SvgTelegram /> : <SvgTelegramOrange />}
            </div>
          </a>

          <a href={getSettings?.data?.github} target="_blank">
            <div
              className={`flex w-[44px] h-[44px] rounded-8 items-center justify-center ${
                isDarkMode
                  ? "bg-[rgba(47_47_47)]"
                  : "bg-[#ef9f9f9]  border-[1px] border-solid border-[#E9E9E9]"
              } rounded-[8px]`}
            >
              {isDarkMode ? <SvgGithub /> : <SvgGithubOrange />}
            </div>
          </a>

          <a href={getSettings?.data?.instagram} target="_blank">
            <div
              className={`flex w-[44px] h-[44px] rounded-8 items-center justify-center ${
                isDarkMode
                  ? "bg-[rgba(47_47_47)]"
                  : "bg-[#ef9f9f9]  border-[1px] border-solid border-[#E9E9E9]"
              }             } rounded-[8px]`}
            >
              {isDarkMode ? <SvgInstagram /> : <SvgInstagramOrange />}{" "}
            </div>
          </a>

          <a href={getSettings?.data?.linkedin} target="_blank">
            <div
              className={`flex w-[44px] h-[44px] rounded-8 items-center justify-center ${
                isDarkMode
                  ? "bg-[rgba(47_47_47)]"
                  : "bg-[#ef9f9f9]  border-[1px] border-solid border-[#E9E9E9]"
              }             } rounded-[8px]`}
            >
              {isDarkMode ? <SvgLinkedin /> : <SvgLinkedinOrange />}{" "}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
