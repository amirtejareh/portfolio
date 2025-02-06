import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useThemeStore } from "@/stores/darkmode.store";

interface ITab {
  data: {
    title: string;
    data: { website: { title: string; link: string } }[];
  }[];
}

const Tab: React.FC<ITab> = ({ data }) => {
  const projectRef = useRef(null);
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    if (projectRef?.current) {
      projectRef.current.click();
    }
  }, []);

  const [active, setActive] = useState(0);

  const [posts, setPosts] = useState([]);

  const printPosts = (index: number) => {
    setPosts(data[index]?.data);
  };
  return (
    <div>
      <div className="mt-[24px] sm:!mt-[56px]">
        <div className="flex gap-16 w-auto h-[48px] rounded-[24px] justify-center flex-row-reverse">
          {data &&
            data?.map((tab: any, index) => {
              return (
                <div
                  key={index}
                  ref={index == 0 ? projectRef : null}
                  onClick={() => {
                    printPosts(index);
                    setActive(index);
                  }}
                  className={`${
                    active == index
                      ? "  text-primary"
                      : `${
                          isDarkMode
                            ? "text-border"
                            : "!text-[#3D3B3B] hover:!text-primary"
                        }  hover:border-primary hover:text-primary`
                  }
                  } px-[21px] rounded-[24px] cursor-pointer min-w-[95px]  md:!min-w-[143px] hover:border-primary hover:text-primary]  flex justify-center  items-center py-[8px] border-[1px] border-solid bordeer-border text-[16px] md:!text-[20px]`}
                >
                  {tab?.title}
                </div>
              );
            })}
        </div>
      </div>

      <div className="relative flex mt-[24px] sm:!mt-[64px] md:!mt-[56px] gap-[12px] sm:!gap-[24px] md:!gap-[32px] flex-wrap justify-center md:!justify-normal">
        {posts?.length > 0 &&
          posts?.map((post, index) => {
            return (
              <>
                <div
                  key={index}
                  className="relative flex-shrink-0 flex-wrap flex w-[343px] h-[213px]  sm:!w-[664px] sm:!h-[483px]  md:!w-[600px]  md:!h-[383px]"
                >
                  <Image
                    src={`${post?.image}`}
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                    alt={post?.website?.title}
                  />

                  <div className=" backdrop-blur-[4px] gap-[5px]   w-full bg-[linear-gradient(90deg,_rgba(44,42,41,0.7)_0%,_rgba(44,42,41,0.2)_100%)] flex absolute bottom-0 h-64 px-[20px] justify-between items-center">
                    <div className="flex gap-[10px] sm:!gap-[25px] flex-grow">
                      <p className="text-border min-w-[95px]">
                        {post?.website?.title}
                      </p>
                      <div className="flex gap-[2px] items-center text-border">
                        {post?.attachment?.map((attach, index) => {
                          return (
                            <p
                              key={index}
                              className="relative  w-[20px] h-[20px] sm:!w-[40px] sm:!h-[40px] border-[1px] border-[#434342] rounded-[50%]"
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
                    <div className=" h-[40px] rounded-[24px] border-[1px] border-solid border-border">
                      <a
                        href={post?.website?.link}
                        className="h-[40px] hidden sm:!flex cursor-pointer  text-border text-[12px] sm:!text-16  items-center justify-center w-[70px] sm:!w-[121px] md:!w-[150px]"
                        target="_blank"
                      >
                        <span className="hidden sm:!flex">check this work</span>
                      </a>
                      <a
                        href={post?.website?.link}
                        className="h-[40px]  sm:!hidden cursor-pointer flex px-5 text-border text-[12px] sm:!text-16  items-center justify-center w-[70px] sm:!w-[121px] md:!w-[150px]"
                        target="_blank"
                      >
                        <span className="flex sm:!hidden">check</span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Tab;
