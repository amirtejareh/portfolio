import React from "react";
import Button from "../Button/Button";
import { ArrowRight } from "../icons";

interface IPricingCard {
  title: string;
  subtitle: string;
  price: number;
  sign?: string;
  services: string[];
  servicesLogo: React.ReactElement;
}

const PricingCard: React.FC<IPricingCard> = ({
  title,
  subtitle,
  price,
  sign = "+",
  services,
  servicesLogo,
}) => {
  return (
    <div className="relative text-white border-[1px] rounded-[8px] border-statCardBorder pb-[20px] md:!pb-[0] border-solid w-[100%] max-w-[343px] sm:!max-w-[319px]  min-h-[404px]   md:!max-w-[395px] flex-wrap  h-auto md:!min-h-[496px] px-[20px] md:!px-[24px]">
      <div className="flex flex-col ">
        <div className="text-[18px] md:!text-[22px] mt-[24px] text-border leading-[24px] ">
          {title}
        </div>
        <div className=" mt-16 md:!mt-[12px] text-[14px] md:!text-[18px] text-darkGray leading-[20px]">
          {subtitle}
        </div>
        <div className="text-primary mt-24 md:!mt-16 ml-[3px] text-[24px] sm:!text-[28px]  md:!text-[40px] leading-[48px] font-bold">
          {sign}
          {price}
        </div>
      </div>
      <div className="flex gap-8 md:!gap-[12px] mt-[24px] md:!mt-[40px] flex-wrap">
        {services?.map((service, index) => (
          <div key={index} className="flex gap-8 w-[290px] leading-[20px]">
            <div>{servicesLogo}</div>
            <div className="text-border text-[14px] md:!text-[18px]">
              {service}
            </div>
          </div>
        ))}
      </div>
      <Button
        icon={<ArrowRight />}
        dimensions="small"
        className="mt-[40px] absolute bottom-24"
        variant="Outline"
      >
        <a href="tel:+989126903127">
          <span className="text-text font-semibold text-16"> Contact me</span>{" "}
        </a>
      </Button>
    </div>
  );
};

export default PricingCard;
