import React, { useState } from "react";
import dynamic from "next/dynamic";

const Tab = dynamic(() => import("@/app/_components/Tab/Tab"), {
  ssr: true,
});

const Work = () => {
  const [data, setData] = useState<any>([
    {
      title: "Dashboard",
      data: [
        {
          website: { title: "Gym website", link: "#" },
          image: "",
        },
      ],
    },
    {
      title: "Website",
      data: [
        {
          website: { title: "Gym website", link: "#" },
          image: "",
        },
      ],
    },
    {
      title: "App",
      data: [
        {
          website: { title: "Gym website", link: "#" },
          image: "",
        },
      ],
    },
  ]);
  return (
    <div
      className="mt-[40px] sm:!mt-[64px] md:!mt-[120px] px-16 sm:!px-[40px] md:!px-64 "
      id="Work"
    >
      <div className="text-primary !font-moul text-[24px] sm:!text-[28px]  md:!text-[40px] text-center">
        My Project
      </div>

      <Tab data={data} />
    </div>
  );
};

export default Work;
