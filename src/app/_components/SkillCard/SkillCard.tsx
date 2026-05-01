import React from "react";
import { useThemeStore } from "@/stores/darkmode.store";

interface ISkill {
  title: string;
  logo: React.ReactNode;
}

const SkillCard: React.FC<ISkill> = ({ title, logo }) => {
  const { isDarkMode } = useThemeStore();

  return (
    <div
      className={`${
        isDarkMode
          ? "border-statCardBorder text-white bg-[linear-gradient(90deg,_rgba(33,33,30,0.1)_0%,_rgba(33,33,30,0.8)_100%)]"
          : "bg-transparent border-[#ececea]"
      } flex backdrop-blur-[10px] justify-center items-center sm:!w-[210.67px] w-[163.5px] md:!w-[214.4px] gap-[8px] h-[72px] border-solid border-[1px] rounded-[40px]`}
    >
      <div className="flex items-center justify-center w-[32px] h-[32px] flex-shrink-0">
        {logo}
      </div>
      <div
        className={`${
          isDarkMode ? "text-white" : "text-[#3D3B3B]"
        } text-[14px] sm:!text-[16px]`}
      >
        {title}
      </div>
    </div>
  );
};

export default SkillCard;
