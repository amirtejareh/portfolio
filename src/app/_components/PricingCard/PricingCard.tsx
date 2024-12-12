import React from "react";

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
    <div className="text-white border-[1px] rounded-[8px] border-statCardBorder pb-[20px] md:!pb-[0] border-solid w-[100%] max-w-[693px] h-auto min-h-[284px] px-[20px] md:!px-[40px]">
      <div className="flex justify-between flex-wrap mt-[40px]">
        <div className="text-[24px] md:!text-[28px] text-border ">{title}</div>
        <div className="text-primary text-[40px] font-bold">
          {sign}
          {price}
        </div>
      </div>
      <div className="mt-16 text-[18px] text-darkGray">{subtitle}</div>
      <div className="flex gap-[20px] mt-[32px] flex-wrap">
        {services?.map((service, index) => (
          <div key={index} className="flex gap-8 w-[290px]">
            <div>{servicesLogo}</div>
            <div className="text-border text-[18px]">{service}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
