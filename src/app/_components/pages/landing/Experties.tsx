import React, { useEffect, useState } from "react";
import { useRef } from "react";
import SvgAmirTejareh from "../../icons/AmirTejareh";
import SvgAmirTejarehLight from "../../icons/AmirTejarehLight";
import { useThemeStore } from "@/stores/darkmode.store";
import useGetCompanies from "@/hooks/company/useGetCompanies";
import Image from "next/image";

const Experties = () => {
  const containerRef = useRef(null);
  const { isDarkMode } = useThemeStore();
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });

  interface ICompany {
    title: { rendered: string };
    _embedded: string;
  }

  const getCompanies = useGetCompanies();

  const [companies, setCompanies] = useState([]);
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setDimensions({ width: naturalWidth, height: naturalHeight });
  };
  useEffect(() => {
    const formattedCompanies = getCompanies?.data?.map((company: ICompany) => ({
      title: company.title.rendered,

      image: company._embedded["wp:featuredmedia"]?.[0]?.source_url || "",
    }));
    setCompanies(formattedCompanies);
  }, [getCompanies?.data]);

  return (
    <div>
      <div
        id="Expertise"
        ref={containerRef}
        className="relative overflow-auto flex-nowrap gap-[76.67px] justify-start md:!justify-center scrollbar-hide px-64 flex items-center border-statCardBorder border-t-[1px] border-b-[1px] border-solid mt-[40px] sm:!mt-[64px] md:!mt-[120px] h-auto min-h-[98px]"
      >
        {companies?.map((item) => (
          <div key={item.id} className="flex flex-shrink-0">
            <Image
              loading="lazy"
              layout="responsive"
              src={item?.image}
              alt={item?.title}
              width={dimensions.width}
              height={dimensions.height}
              onLoad={handleImageLoad}
            />{" "}
          </div>
        ))}
      </div>
      <div className="relative mt-[40px] sm:!mt-[64px] md:!mt-[101px] flex-wrap justify-start md:!justify-between flex px-[24px]  sm:!px-[64px]">
        <span className="hidden md:!flex absolute top-[130px]">
          {isDarkMode ? <SvgAmirTejareh /> : <SvgAmirTejarehLight />}
        </span>
        <div className="w-[100%] md:!w-auto ">
          <div className="!font-moul text-[24px] sm:!text-[28px]  md:!text-[40px] text-primary">
            My Experties
          </div>
          <div
            className={`${
              isDarkMode ? "text-darkGray" : "text-[#767575]"
            } w-auto md:!w-[216px] text-[14px] md:!text-[20px]`}
          >
            I’m a full-stack developer and I work remotely from Iran
          </div>
        </div>
        <div className="w-[100%] mt-[40px] md:!mt-0 max-w-[711px]  text-white pl-[10px] sm:!pl-[41px] border-l-[1px] border-solid border-statCardBorder">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div
                className={`${
                  isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
                } w-[150px] md:!w-auto `}
              >
                Asa Co
              </div>
              <div
                className={`${
                  isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
                } text-[12px] sm:!text-[16px] `}
              >
                Head of Frontend Development
              </div>
            </div>
            <div
              className={`                 ${
                isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
              }
text-[12px] sm:!text-[18px]`}
            >
              2024-present
            </div>
          </div>
          <div className="flex justify-between mt-[32px]">
            <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div
                className={`${
                  isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
                } w-[150px] md:!w-auto`}
              >
                Hafez Brokerage
              </div>
              <div
                className={`${
                  isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
                } text-[16px] `}
              >
                Senior Frontend Developer
              </div>
            </div>
            <div
              className={`                 ${
                isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
              }
 text-[12px] sm:!text-[18px]`}
            >
              2022-2024
            </div>
          </div>
          <div className="flex justify-between mt-[32px]">
            <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div
                className={`${
                  isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
                } `}
              >
                Gaj Market
              </div>
              <div
                className={`${
                  isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
                } text-[16px] `}
              >
                Frontend Developer
              </div>
            </div>
            <div
              className={`${
                isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
              } text-[12px] sm:!text-[18px]`}
            >
              2022-2022
            </div>
          </div>
          <div
            className={`flex justify-between mt-[32px] ${
              isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
            } `}
          >
            <div className=" flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div className="w-[150px] md:!w-auto">
                Novin Hi-Tech Solutions (Keshavarzi Bank)
              </div>
              <div
                className={`${
                  isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
                } text-[16px] `}
              >
                Frontend Developer
              </div>
            </div>
            <div
              className={`${
                isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
              } text-[12px] sm:!text-[18px]`}
            >
              2019-2022
            </div>
          </div>
          <div className="flex justify-between mt-[32px]">
            <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div
                className={`${
                  isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
                } `}
              >
                Shamsipour Technical and Vocational University
              </div>
              <div
                className={`${
                  isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
                } text-[16px]`}
              >
                University Lecturer
              </div>
            </div>
            <div
              className={`${
                isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
              } text-[12px] sm:!text-[18px]`}
            >
              2017-2019
            </div>
          </div>
          <div className="flex justify-between mt-[32px]">
            <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
              <div
                className={`${
                  isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
                } `}
              >
                Hotelyar
              </div>
              <div
                className={`${
                  isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
                } text-[16px] `}
              >
                Full-Stack PHP Developer
              </div>
            </div>
            <div
              className={`${
                isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
              } text-[12px] sm:!text-[18px] `}
            >
              2015-2017
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
