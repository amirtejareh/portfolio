import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useThemeStore } from "@/stores/darkmode.store";

type ProjectPost = {
  website: { title: string; link: string };
  attachment?: { source_url: string }[] | string;
  image: string;
  techSkills?: string[];
};

interface ITab {
  inView: any;
  data: {
    title: string;
    data: ProjectPost[];
  }[];
}

const Tab: React.FC<ITab> = ({ data, inView }) => {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    if (projectRef?.current) {
      projectRef.current.click();
    }
  }, [inView]);

  const [active, setActive] = useState(0);

  const [posts, setPosts] = useState<ProjectPost[]>([]);

  const printPosts = (index: number) => {
    setPosts(data[index]?.data);
  };

  return (
    <div className="mx-auto max-w-[1360px]">
      <div className="mt-[24px] sm:!mt-[56px]">
        <div className="flex  gap-16 w-auto h-[48px] rounded-[24px] justify-center flex-row-reverse">
          {data &&
            data?.map((tab: any, index) => {
              return (
                <div
                  key={index}
                  ref={index == data?.length - 1 ? projectRef : null}
                  onClick={() => {
                    printPosts(index);
                    setActive(index);
                  }}
                  className={`${
                    active == index
                      ? "  text-primary"
                      : `${
                          isDarkMode
                            ? "text-border border-[#efefef]"
                            : "!text-[#3D3B3B] hover:!text-primary border-[#e7e7e7]"
                        }  hover:border-primary hover:text-primary`
                  }
                   px-[21px]  rounded-[24px] cursor-pointer min-w-[95px]  md:!min-w-[143px]  flex justify-center  items-center py-[8px] border-[1px] border-solid text-[16px] md:!text-[20px]`}
                >
                  {tab?.title}
                </div>
              );
            })}
        </div>
      </div>

      <div className="relative flex mt-[24px] sm:!mt-[64px] md:!mt-[56px] gap-[12px] sm:!gap-[24px] md:!gap-[32px] flex-wrap justify-center ">
        {posts?.length > 0 &&
          posts?.map((post, index) => {
            return (
              <div
                key={index}
                className="relative flex h-[213px] w-[343px] flex-shrink-0 flex-col overflow-hidden rounded-[8px] border border-white/10 bg-[#141312] shadow-[0_18px_55px_rgba(0,0,0,0.22)] sm:!h-[483px] sm:!w-[664px] md:!h-[383px] md:!w-[600px]"
              >
                <div className="relative min-h-0 flex-1 overflow-hidden bg-[radial-gradient(circle_at_28%_36%,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_28%,transparent_58%),linear-gradient(120deg,#726e68_0%,#272421_45%,#10100f_100%)]">
                  <Image
                    src={`${post?.image}`}
                    loading="lazy"
                    layout="fill"
                    objectPosition="center bottom"
                    className="absolute"
                    alt={post?.website?.title}
                  />

                  <div className="absolute inset-0 bg-black/10" />

                  {post?.techSkills && post.techSkills.length > 0 && (
                    <div
                      className="absolute left-12 right-12 top-12 z-[20] flex max-h-[82px] flex-wrap items-start gap-[6px] overflow-hidden sm:!left-[20px] sm:!right-[20px] sm:!top-[20px] sm:!max-h-[104px]"
                      aria-label={`${post?.website?.title} tech stack`}
                    >
                      {post.techSkills.map((skill) => (
                        <span
                          key={`${post?.website?.title}-${skill}`}
                          className={`group inline-flex h-[26px] cursor-pointer items-center gap-[6px] rounded-[999px] border px-[9px] text-[10px] font-medium leading-none shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-[18px] transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-[#161514] hover:shadow-[0_0_0_1px_rgba(239,142,53,0.25),0_10px_24px_rgba(239,142,53,0.24)] sm:!h-[30px] sm:!gap-[7px] sm:!px-[11px] sm:!text-[12px] ${
                            isDarkMode
                              ? "border-white/10 bg-[#161514]/70 text-[#fff7ef]"
                              : "border-white/70 bg-white/80 text-[#33312F]"
                          }`}
                        >
                          <span
                            className={`h-[5px] w-[5px] flex-shrink-0 rounded-[50%] bg-primary transition-all duration-300 group-hover:bg-[#161514] ${
                              isDarkMode
                                ? "shadow-[0_0_10px_rgba(239,142,53,0.95)]"
                                : "shadow-[0_0_8px_rgba(239,142,53,0.65)]"
                            }`}
                          />
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className={`relative z-[30] ${
                    isDarkMode ? "backdrop-blur-[30px]" : "backdrop-blur-[30px]"
                  } flex h-[58px] w-full items-center justify-between gap-[12px] px-[18px] sm:!h-[88px] sm:!px-[28px] md:!h-[80px] ${
                    isDarkMode
                      ? "bg-[linear-gradient(90deg,_rgba(44,42,41,0.7)_0%,_rgba(44,42,41,0.2)_100%)]"
                      : "bg-[linear-gradient(90deg,_rgba(251,251,251,0.7)_0%,_rgba(251,251,251 ,0.2)_100%)]"
                  }`}
                >
                  <div className="flex min-w-0 flex-grow items-center gap-[10px] sm:!gap-[25px]">
                    <p
                      className={`${
                        isDarkMode ? "text-[#efefef]" : "text-[#33312F]"
                      } flex min-w-0 items-center truncate text-[18px] font-medium leading-[24px] text-border sm:!text-[24px] sm:!leading-[32px] md:!text-[20px]`}
                    >
                      {post?.website?.title}
                    </p>
                    <div className="flex gap-[2px] items-center text-border">
                      {Array.isArray(post?.attachment) &&
                        post.attachment.map((attach, index) => {
                          return (
                            <p
                              key={index}
                              className={`relative  w-[20px] h-[20px] sm:!w-[40px] sm:!h-[40px] border-[1px] ${
                                isDarkMode
                                  ? "border-[#434342]"
                                  : "border-[#c9c9c9] bg-[#e5e5e5]"
                              }  rounded-[50%]`}
                            >
                              <Image
                                src={`${attach?.source_url}`}
                                loading="lazy"
                                layout="fill"
                                objectFit="cover"
                                className="absolute w-[12px] !mx-auto top-0 px-[1px] py-[1px] sm:!px-0 sm:!py-0 sm:!top-[7px] h-[12px] sm:!w-[24px] sm:!h-[24px]"
                                alt=""
                              />
                            </p>
                          );
                        })}
                    </div>
                  </div>
                  <div className="h-[38px] flex-shrink-0 rounded-[24px] border-[1px] border-solid border-border sm:!h-[52px] md:!h-[48px]">
                    <a
                      href={post?.website?.link}
                      className="hidden h-full w-[150px] cursor-pointer items-center justify-center text-[16px] text-border sm:!flex md:!w-[142px]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="hidden sm:!flex">check this work</span>
                    </a>
                    <a
                      href={post?.website?.link}
                      className="flex h-full w-[72px] cursor-pointer items-center justify-center px-5 text-[12px] text-border sm:!hidden"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="flex text-[#efefef] sm:!hidden">
                        check
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tab;
