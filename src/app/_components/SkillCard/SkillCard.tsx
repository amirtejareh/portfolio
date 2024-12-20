import React from "react";

interface ISkill {
  title: string;
  logo: React.ReactElement;
}

const SkillCard: React.FC<ISkill> = ({ title, logo }) => {
  return (
    <div className="flex backdrop-blur-[10px] justify-center items-center sm:!w-[210.67px] w-[163.5px] md:!w-[214.4px] gap-[8px] h-[72px] border-solid border-[1px] border-statCardBorder text-white rounded-[40px] bg-[linear-gradient(90deg,_rgba(33,33,30,0.1)_0%,_rgba(33,33,30,0.8)_100%)]">
      <div>{logo}</div>
      <div> {title}</div>
    </div>
  );
};

export default SkillCard;
