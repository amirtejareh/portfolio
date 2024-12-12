import React from "react";
import SkillCard from "../../../_components/SkillCard/SkillCard";
import SvgReact from "../../../_components/icons/React";
import SvgNode from "../../../_components/icons/Node";
import SvgAngular from "../../../_components/icons/Angular";
import SvgBootstrap from "../../../_components/icons/Bootstrap";
import SvgHtml from "../../../_components/icons/Html";
import SvgCss from "../../../_components/icons/Css";
import SvgDebugging from "../../../_components/icons/Debugging";
import SvgGit from "../../../_components/icons/Git";
import SvgRest from "../../../_components/icons/Rest";
import SvgMysql from "../../../_components/icons/Mysql";
import SvgMongodb from "../../../_components/icons/Mongodb";
import SvgSeo from "../../../_components/icons/Seo";
import SvgFlutter from "../../../_components/icons/Flutter";

const Skill = () => {
  const skillCardOptions = [
    { title: "React Js", logo: <SvgReact /> },
    { title: "Node Js", logo: <SvgNode /> },
    { title: "Angular", logo: <SvgAngular /> },
    { title: "Bootstrap ", logo: <SvgBootstrap /> },
    { title: "HTML5 ", logo: <SvgHtml /> },
    { title: "CSS3 ", logo: <SvgCss /> },
    { title: "Debugging ", logo: <SvgDebugging /> },
    { title: "Git ", logo: <SvgGit /> },
    { title: "Rest API ", logo: <SvgRest /> },
    { title: "MySQL ", logo: <SvgMysql /> },
    { title: "MongoDB ", logo: <SvgMongodb /> },
    { title: "SEO", logo: <SvgSeo /> },
    { title: "Flutter", logo: <SvgFlutter /> },
  ];
  return (
    <>
      <div className="mt-[120px]">
        <div className="text-primary !font-moul text-[40px] text-center">
          My Skills
        </div>
        <div className="flex px-64 gap-[40px] mt-[56px] flex-wrap">
          {skillCardOptions?.map((skill) => {
            return <SkillCard title={skill.title} logo={skill.logo} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Skill;
