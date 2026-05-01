import React from "react";
import dynamic from "next/dynamic";
import { getFormattedWorkData } from "@/data/portfolioData";

const Tab = dynamic(() => import("@/app/_components/Tab/Tab"), {
  ssr: true,
});

const Work = () => {
  const data = getFormattedWorkData();

  return (
    <div
      className="mt-[40px] sm:!mt-[64px] md:!mt-[120px] px-16 sm:!px-[40px] sm:!px-64"
      id="Work"
    >
      <div className="text-primary !font-moul text-[24px] sm:!text-[28px] md:!text-[40px] text-center">
        My Projects
      </div>

      <Tab inView={true} data={data} />
    </div>
  );
};

export default Work;
