import React, { useEffect } from "react";
import PricingCard from "../../PricingCard/PricingCard";
import SvgWeb from "../../icons/Web";
import useGetServices from "@/hooks/services/useGetServices";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const getServices = useGetServices();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      getServices?.refetch();
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="mt-[40px] sm:!mt-[64px] md:!mt-[120px] px-16 sm:!px-[40px] sm:!px-64  "
      id="Services"
    >
      <div className="text-primary !font-moul text-[24px] sm:!text-[28px]  md:!text-[40px] text-center">
        My Services
      </div>

      <div className="flex max-w-[1360px] mx-auto gap-[26px] md:!mt-[42px] mt-[24px] sm:!mt-[23px]  md:!gap-[23px] flex-wrap md:!flex-nowrap justify-center ">
        {getServices?.data?.map((service, index) => (
          <div className="flex justify-center md:!justify-end" key={index}>
            <PricingCard
              title={service?.acf?.title}
              subtitle={service?.acf?.subtitle}
              price={service?.acf?.price}
              services={service?.acf?.content}
              servicesLogo={
                service?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""
              }
              sign="$"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
