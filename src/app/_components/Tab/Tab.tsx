import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
      <div className="mt-[56px]">
        <div className="flex gap-16 w-auto h-[48px] rounded-[24px] justify-center flex-row-reverse">
          {data &&
            data?.map((tab: any, index) => {
              return (
                <div
                  ref={index == 0 ? projectRef : null}
                  onClick={() => {
                    printPosts(index);
                    setActive(index);
                  }}
                  className={`${
                    active == index
                      ? "  text-primary"
                      : "text-border hover:border-primary hover:text-primary"
                  } px-[21px] rounded-[24px] cursor-pointer  min-w-[143px] hover:border-primary hover:text-primary]  flex justify-center  items-center py-[8px] border-[1px] border-solid bordeer-border text-[20px]`}
                >
                  {tab?.title}
                </div>
              );
            })}
        </div>
      </div>

      <div className="flex mt-[56px] gap-[32px] flex-wrap">
        {posts?.length > 0 &&
          posts?.map((post) => (
            <div className="relative flex-shrink-0 flex-wrap flex w-[600px] h-[383px]">
              <Image
                src={`/images/gym.png`}
                loading="lazy"
                layout="fill"
                objectFit="cover"
                className="absolute"
                alt="gym Not Found"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tab;
