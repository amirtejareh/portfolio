import React from "react";
import Button from "../Button/Button";
import { ArrowRight } from "../icons";
import { useThemeStore } from "@/stores/darkmode.store";
import { settingsData } from "@/data/portfolioData";

interface IPricingCard {
  title: string;
  subtitle: string;
  price: string;
  sign?: string;
  services: string[];
  servicesLogo: React.ReactNode;
}

const PricingCard: React.FC<IPricingCard> = ({
  title,
  subtitle,
  price,
  sign = "+",
  services,
  servicesLogo,
}) => {
  const { isDarkMode } = useThemeStore();

  return (
    <div
      className={`relative text-white border-[1px] rounded-[8px] ${
        isDarkMode ? "border-statCardBorder " : "border-[#e7e7e7]"
      } pb-[20px] md:!pb-[0] border-solid w-[100%] max-w-[343px] sm:!max-w-[319px] min-h-[404px] md:!max-w-[395px] flex-wrap h-auto md:!min-h-[496px] px-[20px] md:!px-[24px]`}
    >
      <div className="flex flex-col ">
        <div
          className={`${
            isDarkMode ? "text-border" : "text-[#3D3B3B]"
          } text-[18px] md:!text-[22px] mt-[24px] leading-[24px] `}
        >
          {title}
        </div>
        <div
          className={`${
            isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
          } mt-16 md:!mt-[12px] text-[14px] md:!text-[18px] leading-[20px]`}
        >
          {subtitle}
        </div>
        <div className="mt-24 md:mt-16 ml-[3px] w-fit rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 px-6 py-4 shadow-sm backdrop-blur">
          <p className="text-xs sm:text-sm text-primary/60 mb-1">Starting at</p>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              {price}
            </span>
            <span className="text-sm sm:text-base text-primary/70">/hr</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:!gap-[12px] mt-[24px] md:!mt-[40px]">
        {services?.map((service: any, index) => (
          <div key={index} className="flex gap-8 items-center leading-[20px]">
            <div className="w-[24px] h-[24px] flex-shrink-0">
              {servicesLogo}
            </div>
            <div
              className={`${
                isDarkMode ? "text-[#EFEFEF]" : "text-[#767575]"
              } text-[14px] md:!text-[18px]`}
            >
              {typeof service === "string" ? service : service?.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[60px]"></div>
      <a href={`tel:${settingsData.phone}`}>
        <Button
          icon={<ArrowRight />}
          dimensions="small"
          className={`${
            isDarkMode ? "bg-white text-[#272424]" : ""
          } absolute bottom-24 `}
          variant="Outline"
          btnIconColor={`${isDarkMode ? "bg-inherit text-[#272424]" : ""}`}
          btnBorder={`!border-none`}
        >
          <span
            className={`${
              isDarkMode ? " text-[#272424] " : "text-white"
            } font-semibold text-16`}
          >
            Order Now
          </span>
        </Button>
      </a>
    </div>
  );
};

export default PricingCard;
