import React from "react";
import PricingCard from "../../PricingCard/PricingCard";
import { servicesData } from "@/data/portfolioData";
import { Web, App } from "@/app/_components/icons";

const getServiceIcon = (iconType: string) => {
  switch (iconType) {
    case "web":
      return <Web />;
    case "app":
      return <App />;
    default:
      return <Web />;
  }
};

const Services = () => {
  return (
    <div
      className="mt-[40px] sm:!mt-[64px] md:!mt-[120px] px-16 sm:!px-[40px] sm:!px-64"
      id="Services"
    >
      <div className="text-primary !font-moul text-[24px] sm:!text-[28px] md:!text-[40px] text-center">
        My Services
      </div>

      <div className="flex max-w-[1360px] mx-auto gap-[26px] md:!mt-[42px] mt-[24px] sm:!mt-[23px] md:!gap-[23px] flex-wrap md:!flex-nowrap justify-center">
        {servicesData.map((service, index) => (
          <div className="flex justify-center md:!justify-end" key={index}>
            <PricingCard
              title={service.title}
              subtitle={service.subtitle}
              price={service.price}
              services={service.content}
              servicesLogo={getServiceIcon(service.iconType)}
              sign=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
