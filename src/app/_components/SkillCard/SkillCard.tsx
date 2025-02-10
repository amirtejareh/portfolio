import React, { useState } from "react";
import Image from "next/image";
import { useThemeStore } from "@/stores/darkmode.store";

interface ISkill {
  title: string;
  logo: string;
}

const SkillCard: React.FC<ISkill> = ({ title, logo }) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });
  const { isDarkMode } = useThemeStore();
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setDimensions({ width: naturalWidth, height: naturalHeight });
  };

  return (
    <div
      className={`${
        isDarkMode
          ? " border-statCardBorder text-white bg-[linear-gradient(90deg,_rgba(33,33,30,0.1)_0%,_rgba(33,33,30,0.8)_100%)]"
          : "bg-transparent border-[#ececea]"
      } flex backdrop-blur-[10px] justify-center items-center sm:!w-[210.67px] w-[163.5px] md:!w-[214.4px] gap-[8px] h-[72px] border-solid border-[1px] rounded-[40px] `}
    >
      <div>
        {logo && (
          <Image
            loading="lazy"
            layout="responsive"
            src={logo}
            alt={title}
            width={dimensions.width}
            height={dimensions.height}
            onLoad={handleImageLoad}
          />
        )}
      </div>
      <div>{title}</div>
    </div>
  );
};

export default SkillCard;
