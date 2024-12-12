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
      title: "WordPress Theme Implementation",
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
    <div className="mt-[120px] px-64 " id="Services">
      <div className="text-primary !font-moul text-[40px] text-center">
        My Services
      </div>

      {services.map((service, index) => (
        <div className="mt-[56px] flex justify-end" key={index}>
          <PricingCard
            title={service.title}
            subtitle={service.subtitle}
            price={100}
            services={service.services}
            servicesLogo={service.logo}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
