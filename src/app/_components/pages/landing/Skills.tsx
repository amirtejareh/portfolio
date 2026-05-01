import React from "react";
import SkillCard from "../../../_components/SkillCard/SkillCard";
import {
  React as SvgReact,
  Nextjs,
  Typescript,
  Node,
  Tailwind,
  Docker,
  Mongodb,
  Nestjs,
} from "@/app/_components/icons";

const skillsData = [
  { title: "React", icon: SvgReact },
  { title: "Next.js", icon: Nextjs },
  { title: "TypeScript", icon: Typescript },
  { title: "Node.js", icon: Node },
  { title: "Tailwind CSS", icon: Tailwind },
  { title: "Docker", icon: Docker },
  { title: "MongoDB", icon: Mongodb },
  { title: "Nest.js", icon: Nestjs },
];

const Skills = () => {
  return (
    <div>
      <div className="mt-[40px] sm:!mt-[64px] md:!mt-[120px]" id="Skills">
        <div className="text-primary !font-moul text-[24px] sm:!text-[28px] md:!text-[40px] text-center">
          My Skills
        </div>
        <div className="max-w-[1360px] mx-auto flex px-16 sm:!px-[40px] sm:!px-64 gap-16 md:!gap-[40px] mt-[16px] sm:!mt-[28px] md:!mt-[56px] flex-wrap justify-center">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <SkillCard
                key={index}
                title={skill.title}
                logo={<Icon />}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
