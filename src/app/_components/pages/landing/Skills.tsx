import React, { useEffect, useState } from "react";
import SkillCard from "../../../_components/SkillCard/SkillCard";

import useGetSkills from "@/hooks/skills/useGetSkills";

const Skills = () => {
  interface ISkill {
    title: { rendered: string };
    _embedded: string;
  }

  const getSkills = useGetSkills();

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const formattedSkills = getSkills?.data?.map((skill: ISkill) => ({
      title: skill.title.rendered,
      image: skill._embedded["wp:featuredmedia"]?.[0]?.source_url || "",
    }));
    setSkills(formattedSkills);
  }, [getSkills?.data]);

  return (
    <>
      <div className="mt-[40px] sm:!mt-[64px] md:!mt-[120px]" id="Skills">
        <div className="text-primary !font-moul text-[24px] sm:!text-[28px]  md:!text-[40px] text-center">
          My Skills
        </div>
        <div className="flex px-16 sm:!px-[40px] md:!px-64 gap-16 md:!gap-[40px] mt-[16px] sm:!mt-[28px]  md:!mt-[56px] flex-wrap justify-center ">
          {skills?.map((skill, index) => {
            return (
              <SkillCard key={index} title={skill.title} logo={skill.image} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
