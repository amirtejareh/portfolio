import React from "react";
import Button from "../Button/Button";
import { ArrowRight } from "../icons";
import { useThemeStore } from "@/stores/darkmode.store";
import Image from "next/image";
import useGetSettings from "@/hooks/settings/useGetSettings";

interface IPricingCard {
  title: string;
  subtitle: string;
  price: number;
  sign?: string;
  services: string[];
  servicesLogo: string;
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
  const getSetttings: { data: { phone: string } } = useGetSettings();

  return (
    <div className="relative text-white border-[1px] rounded-[8px] border-statCardBorder pb-[20px] md:!pb-[0] border-solid w-[100%] max-w-[343px] sm:!max-w-[319px]  min-h-[404px]   md:!max-w-[395px] flex-wrap  h-auto md:!min-h-[496px] px-[20px] md:!px-[24px]">
      <div className="flex flex-col ">
        <div
          className={`${
            isDarkMode ? "text-border" : "text-[#3D3B3B]"
          } text-[18px] md:!text-[22px] mt-[24px]  leading-[24px] `}
        >
          {title}
        </div>
        <div
          className={`${
            isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
          } mt-16 md:!mt-[12px] text-[14px] md:!text-[18px]  leading-[20px]`}
        >
          {subtitle}
        </div>
        <div
          className={` text-primary mt-24 md:!mt-16 ml-[3px] text-[24px] sm:!text-[28px]  md:!text-[40px] leading-[48px] font-bold`}
        >
          {sign}
          {price}
        </div>
      </div>
      <div className="flex gap-8 md:!gap-[12px] mt-[24px] md:!mt-[40px] flex-wrap">
        {services?.map((service: any, index) => (
          <div key={index} className="flex gap-8 w-[290px] leading-[20px]">
            <div>
              <Image
                loading="lazy"
                layout="responsive"
                src={servicesLogo ?? ""}
                alt={title}
                width={24}
                height={24}
              />
            </div>
            <div
              className={`${
                isDarkMode ? "text-[#EFEFEF]" : "text-[#767575]"
              } text-[14px] md:!text-[18px]`}
            >
              {service?.text}
            </div>
          </div>
        ))}
      </div>
      <a href={`tel:+98${getSetttings?.data?.phone}`}>
        <Button
          icon={<ArrowRight />}
          dimensions="small"
          className="mt-[40px] absolute bottom-24"
          variant="Outline"
        >
          <span
            className={`${
              isDarkMode ? "text-text " : "text-white"
            } font-semibold text-16`}
          >
            {" "}
            Contact me
          </span>{" "}
        </Button>
      </a>
    </div>
  );
};

export default PricingCard;
