import React from "react";
import PricingCard from "../../PricingCard/PricingCard";
import SvgWeb from "../../icons/Web";
import SvgApp from "../../icons/App";

const Services = () => {
  const services = [
    {
      title: "Web Design and Development",
      subtitle: "Website Responsive",
      services: [
        "Responsive Website Design",
        "Single Page Applications (SPA)",
        "Full-Stack Development",
        "SEO Web Development",
      ],
      logo: <SvgWeb />,
    },
    {
      title: "App Design and Development",
      subtitle: "App Responsive",
      services: [
        "Progressive Web Apps (PWA)",
        "App Prototyping",
        "Maintenance and Updates",
        "App Performance Optimization",
      ],
      logo: <SvgApp />,
    },
    {
      title: "WP Theme Implementation",
      subtitle: "WordPress Responsive",
      services: [
        "Custom WordPress Design",
        "Theme Installation",
        "Responsive Theme",
      ],
      logo: <SvgApp />,
    },
  ];
  return (
    <div
      className="mt-[40px] sm:!mt-[64px] md:!mt-[120px] px-16 sm:!px-[40px] md:!px-64  "
      id="Services"
    >
      <div className="text-primary !font-moul text-[24px] sm:!text-[28px]  md:!text-[40px] text-center">
        My Services
      </div>

      <div className="flex gap-[26px] md:!mt-[42px] mt-[24px] sm:!mt-[23px]  md:!gap-[23px] flex-wrap md:!flex-nowrap justify-center ">
        {services.map((service, index) => (
          <div className="flex  justify-center   md:!justify-end" key={index}>
            <PricingCard
              title={service.title}
              subtitle={service.subtitle}
              price={5000}
              services={service.services}
              servicesLogo={service.logo}
              sign="$"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
