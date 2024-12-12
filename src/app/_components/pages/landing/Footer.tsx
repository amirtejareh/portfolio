import React, { useState } from "react";
import dynamic from "next/dynamic";
import Button from "../../Button/Button";
import SvgTelegram from "../../icons/Telegram";
import SvgGit from "../../icons/Git";
import SvgInstagram from "../../icons/Instagram";
import SvgLinkedin from "../../icons/Linkedin";
import SvgGithub from "../../icons/Github";

const Footer = () => {
  const ArrowRightIcon = dynamic(
    () => import("@/app/_components/icons/ArrowRight"),
    { ssr: true }
  );
  return (
    <div className="px-64 mb-[100px]">
      <div className="mt-[110px]   h-[1px] bg-[rgb(135,135,135,1)]"></div>
      <div className="mt-[33px] flex flex-wrap md:!flex-nowrap justify-around">
        <div className="flex flex-col">
          <span className="text-[40px] text-center md:!text-left text-border">
            Do You have a project?
          </span>
          <span className="text-[40px] text-border text-center md:!text-left">
            Let's Talk
          </span>
        </div>
        <div className="text-white ">
          <Button icon={<ArrowRightIcon />} dimensions="large">
            <a className="text-16 text-text" href="tel:+989126903127">
              Available for projects
            </a>
          </Button>
        </div>
      </div>
      <div className="mt-[33px]   h-[1px] bg-[rgb(135,135,135,1)]"></div>
      <div className="flex justify-around flex-wrap flex-col-reverse md:!flex-nowrap md:!flex-row">
        <div className="mt-[44px] text-border text-16 text-center md:!text-left">
          © Amir Tejareh All Rights Reserved
        </div>
        <div className="flex mt-[18px] gap-[9px]">
          <div className="flex w-[44px] h-[44px] rounded-8 items-center justify-center bg-[rgba(47, 47, 47, 1)]">
            <a
              href="https://t.me/amirtejareh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgTelegram />
            </a>
          </div>
          <div className="flex w-[44px] h-[44px] rounded-8 items-center justify-center bg-[rgba(47, 47, 47, 1)]">
            <a href="https://github.com/amirtejareh" target="_blank">
              <SvgGithub />
            </a>
          </div>
          <div className="flex w-[44px] h-[44px] rounded-8 items-center justify-center bg-[rgba(47, 47, 47, 1)]">
            <a href="https://instagram.com/bluedev.agency" target="_blank">
              <SvgInstagram />
            </a>
          </div>
          <div className="flex w-[44px] h-[44px] rounded-8 items-center justify-center bg-[rgba(47, 47, 47, 1)]">
            <a href="https://linkedin.com/in/amirtejareh" target="_blank">
              <SvgLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
