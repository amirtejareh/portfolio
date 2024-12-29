import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import SvgHtsc from "../../icons/Htsc";
import SvgDaric from "../../icons/Daric";
import SvgShamsipour from "../../icons/Shamsipour";
import SvgGaj from "../../icons/Gaj";
import SvgAmirTejareh from "../../icons/AmirTejareh";

const SvgHafez = dynamic(() => import("@/app/_components/icons/Hafez"), {
  ssr: true,
});
const SvgAsa = dynamic(() => import("@/app/_components/icons/Asa"), {
  ssr: true,
});
const SvgHotelyar = dynamic(() => import("@/app/_components/icons/Hotelyar"), {
  ssr: true,
});

const Experties = () => {
  const items = [
    { id: 1, component: <SvgAsa /> },
    { id: 2, component: <SvgHtsc /> },
    { id: 3, component: <SvgHafez /> },
    { id: 4, component: <SvgDaric /> },
    { id: 5, component: <SvgHotelyar /> },
    { id: 6, component: <SvgShamsipour /> },
    { id: 7, component: <SvgGaj /> },
  ];
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const elements = Array.from(container.children) as HTMLElement[];

  //   const speed = 1;
  //   const gap = 50;

  //   const containerWidth = container.offsetWidth;
  //   const elementWidth = elements[0].offsetWidth;
  //   const totalWidth = elementWidth + gap;

  //   elements.forEach((el, index) => {
  //     let position = -index * totalWidth;

  //     const animate = () => {
  //       position += speed;

  //       el.style.transform = `translateX(${position}px)`;

  //       if (position > containerWidth) {
  //         position = -totalWidth * elements.length + totalWidth;
  //       }

  //       requestAnimationFrame(animate);
  //     };

  //     animate();
  //   });
  // }, []);
  return (
    <div>
      <div
        id="Expertise"
        ref={containerRef}
        className="relative overflow-auto flex-nowrap gap-[76.67px] justify-start md:!justify-center scrollbar-hide px-64 flex items-center border-statCardBorder border-t-[1px] border-b-[1px] border-solid mt-[40px] sm:!mt-[64px] md:!mt-[120px] h-auto min-h-[98px]"
      >
        {items.map((item) => (
          <div key={item.id} className="flex ">
            {item.component}
          </div>
        ))}
      </div>
      <div className="relative mt-[40px] sm:!mt-[64px] md:!mt-[101px] flex-wrap justify-start md:!justify-between flex px-[24px]  sm:!px-[64px]">
        <span className="hidden md:!flex absolute top-[130px]">
          <SvgAmirTejareh />
        </span>
        <div className="w-[100%] md:!w-auto ">
          <div className="!font-moul text-[24px] sm:!text-[28px]  md:!text-[40px] text-primary">
            My Experties
          </div>
          <div className="w-auto md:!w-[216px] text-darkGray text-[14px] md:!text-[20px]">
            I’m a full-stack developer and I work remotely from Iran
          </div>
        </div>
        <div className="w-[100%] mt-[40px] md:!mt-0 max-w-[711px]  text-white pl-[10px] sm:!pl-[41px] border-l-[1px] border-solid border-statCardBorder">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div className="w-[150px] md:!w-auto ">Asa Co</div>
              <div className="text-[12px] sm:!text-[16px] text-darkGray">
                Head of Frontend Development
              </div>
            </div>
            <div className="text-[12px] sm:!text-[18px] text-border">
              2024-present
            </div>
          </div>
          <div className="flex justify-between mt-[32px]">
            <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div className="w-[150px] md:!w-auto">Hafez Brokerage</div>
              <div className="text-[16px] text-darkGray">
                Senior Frontend Developer
              </div>
            </div>
            <div className="text-[12px] sm:!text-[18px] text-border">
              2022-2024
            </div>
          </div>
          <div className="flex justify-between mt-[32px]">
            <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div className="w-[150px] md:!w-auto">Gaj Market</div>
              <div className="text-[16px] text-darkGray">
                Frontend Developer
              </div>
            </div>
            <div className="text-[12px] sm:!text-[18px] text-border">
              2022-2022
            </div>
          </div>
          <div className="flex justify-between mt-[32px]">
            <div className=" flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div className="w-[150px] md:!w-auto">
                Novin Hi-Tech Solutions (Keshavarzi Bank)
              </div>
              <div className="text-[16px] text-darkGray">
                Frontend Developer
              </div>
            </div>
            <div className="text-[12px] sm:!text-[18px] text-border">
              2019-2022
            </div>
          </div>
          <div className="flex justify-between mt-[32px]">
            <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div className="w-[150px] md:!w-auto">
                Shamsipour Technical and Vocational University
              </div>
              <div className="text-[16px] text-darkGray">
                University Lecturer
              </div>
            </div>
            <div className="text-[12px] sm:!text-[18px] text-border">
              2017-2019
            </div>
          </div>
          <div className="flex justify-between mt-[32px]">
            <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div className="w-[150px] md:!w-auto">Hotelyar</div>
              <div className="text-[16px] text-darkGray">
                Full-Stack PHP Developer
              </div>
            </div>
            <div className="text-[12px] sm:!text-[18px] text-border">
              2015-2017
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
