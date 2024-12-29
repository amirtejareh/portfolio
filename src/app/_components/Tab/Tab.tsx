import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SvgFigma from "../icons/Figma";
import SvgHtml5 from "../icons/Html5";
import SvgCss3 from "../icons/Css3";
import SvgReact from "../icons/React";

interface ITab {
  data: {
    title: string;
    data: { website: { title: string; link: string } }[];
  }[];
}

const Tab: React.FC<ITab> = ({ data }) => {
  const projectRef = useRef(null);

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
                      : "text-border hover:border-primary hover:text-primary"
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
          posts?.map((post, index) => (
            <>
              <div
                key={index}
                className="relative flex-shrink-0 flex-wrap flex w-[300px] md:!w-[600px] h-[200px] md:!h-[383px]"
              >
                <Image
                  src={`/images/gym.png`}
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                  alt="gym Not Found"
                />
                <div className=" backdrop-filter-[30px]  w-full bg-[linear-gradient(90deg,_rgba(44,42,41,0.7)_0%,_rgba(44,42,41,0.2)_100%)] flex absolute bottom-0 h-64 px-[20px] justify-between items-center">
                  <div className="flex gap-[25px] flex-grow">
                    <p className="text-border">Gym website</p>
                    <div className="flex gap-[2px] text-border">
                      <p>
                        <SvgFigma />
                      </p>
                      <p>
                        <SvgHtml5 />
                      </p>
                      <p>
                        <SvgCss3 />
                      </p>
                      <p>
                        <SvgReact />
                      </p>
                    </div>
                  </div>
                  <div className=" h-[40px] rounded-[24px] border-[1px] border-solid border-border">
                    <a
                      href="#"
                      className="h-[40px] flex text-border text-16  items-center justify-center w-[150px]"
                    >
                      Check this work
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Tab;
