import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

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
  const items = [<SvgHafez />, <SvgAsa />, <SvgHotelyar />];
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
      {" "}
      <div
        id="Expertise"
        ref={containerRef}
        className="relative  gap-[62px] justify-center overflow-hidden flex items-center border-statCardBorder border-[1px] border-solid mt-[120px] h-[98px]"
      >
        {items.map((item, index) => (
          <div key={index} className="flex">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-[104px] flex-wrap justify-center md:!justify-between flex px-[24px]  sm:!px-[64px]">
        <div>
          <div className="!font-moul text-[40px] text-border">My Experties</div>
          <div className="w-[216px] text-darkGray text-[20px]">
            I’m a full-stack developer and I work remotely from Iran
          </div>
        </div>
        <div className="w-[711px] mt-[8px] sm:!mt-0 text-white pl-[10px] sm:!pl-[41px] border-l-[1px] border-solid border-statCardBorder">
          <div className="flex justify-between">
            <div className="text-[20px]">
              <div>Asa Co</div>
              <div className="text-[16px] text-darkGray">
                Head of Frontend Development
              </div>
            </div>
            <div className="text-[18px] text-border">2024-present</div>
          </div>
          <div className="flex justify-between">
            <div className="text-[20px]">
              <div>Hafez Brokerage</div>
              <div className="text-[16px] text-darkGray">
                Senior Frontend Developer
              </div>
            </div>
            <div className="text-[18px] text-border">2022-2024</div>
          </div>
          <div className="flex justify-between">
            <div className="text-[20px]">
              <div>Gaj Market</div>
              <div className="text-[16px] text-darkGray">
                Frontend Developer
              </div>
            </div>
            <div className="text-[18px] text-border">2022-2022</div>
          </div>
          <div className="flex justify-between">
            <div className="text-[20px]">
              <div>Novin Hi-Tech Solutions (Keshavarzi Bank)</div>
              <div className="text-[16px] text-darkGray">
                Frontend Developer
              </div>
            </div>
            <div className="text-[18px] text-border">2019-2022</div>
          </div>
          <div className="flex justify-between">
            <div className="text-[20px]">
              <div>Shamsipour Technical and Vocational University</div>
              <div className="text-[16px] text-darkGray">
                University Lecturer
              </div>
            </div>
            <div className="text-[18px] text-border">2017-2019</div>
          </div>
          <div className="flex justify-between">
            <div className="text-[20px]">
              <div>Hotelyar</div>
              <div className="text-[16px] text-darkGray">
                Full-Stack PHP Developer
              </div>
            </div>
            <div className="text-[18px] text-border">2015-2017</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
