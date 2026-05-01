import React from "react";
import { useThemeStore } from "@/stores/darkmode.store";
import Image from "next/image";
import { companiesData, expertiesData } from "@/data/expertiesData";

const Experties = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <div>
      {/* Companies Logo Bar */}
      <div
        id="Expertise"
        className={`relative overflow-auto flex-nowrap gap-[76.67px] justify-start md:!justify-center scrollbar-hide px-16 sm:!px-64 flex items-center ${
          isDarkMode ? "border-statCardBorder" : "border-[#ececea]"
        } border-t-[1px] border-b-[1px] border-solid mt-[40px] sm:!mt-[64px] md:!mt-[120px] h-auto min-h-[98px]`}
      >
        <div className="max-w-[1360px] w-full overflow-auto flex-nowrap gap-[76.67px] justify-start md:!justify-center scrollbar-hide flex items-center h-auto min-h-[98px]">
          {companiesData.map((item) => {
            const SvgIcon = item.component;
            return (
              <a
                key={item.id}
                href={item.link}
                className="flex flex-shrink-0 items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgIcon />
              </a>
            );
          })}
        </div>
      </div>

      {/* Expertise Content */}
      <div className="relative min-h-[552px] max-w-[1360px] mx-auto mt-[40px] sm:!mt-[64px] md:!mt-[101px] flex-wrap justify-start md:!justify-between flex px-[24px] sm:!px-[64px]">
        {/* Decorative image — desktop only */}
        <span className="hidden md:!flex absolute top-[130px]">
          {isDarkMode ? (
            <Image
              loading="lazy"
              src={expertiesData.image_dark}
              alt="Amir Tejareh"
              width={320}
              height={320}
              objectFit="contain"
            />
          ) : (
            <Image
              loading="lazy"
              src={expertiesData.image_light}
              alt="Amir Tejareh"
              width={320}
              height={320}
              objectFit="contain"
            />
          )}
        </span>

        {/* Left: Title + about */}
        <div className="w-[100%] md:!w-auto">
          <div className="!font-moul text-[24px] sm:!text-[28px] md:!text-[40px] text-primary">
            My Experties
          </div>
          <div
            className={`${
              isDarkMode ? "text-darkGray" : "text-[#767575]"
            } w-auto md:!w-[216px] text-[14px] md:!text-[20px]`}
          >
            {expertiesData.about}
          </div>
        </div>

        {/* Right: Experience list */}
        <div
          className={`w-[100%] mt-[40px] md:!mt-0 max-w-[711px] text-white pl-[10px] sm:!pl-[41px] border-l-[1px] border-solid ${
            isDarkMode ? "border-statCardBorder" : "border-[#ececea]"
          } `}
        >
          {expertiesData.content.map((detail, index) => (
            <div
              key={index}
              className={`flex justify-between ${index !== 0 && "mt-[32px]"}`}
            >
              <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
                <div
                  className={`${
                    isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
                  } w-[150px] md:!w-auto`}
                >
                  {detail.company}
                </div>
                <div
                  className={`${
                    isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
                  } text-[12px] sm:!text-[16px]`}
                >
                  {detail.position}
                </div>
              </div>
              <div
                className={`${
                  isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
                } text-[12px] sm:!text-[18px]`}
              >
                {detail.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experties;
