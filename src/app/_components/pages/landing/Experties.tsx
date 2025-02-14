import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useThemeStore } from "@/stores/darkmode.store";
import useGetCompanies from "@/hooks/company/useGetCompanies";
import Image from "next/image";
import useGetExperties from "@/hooks/experties/useGetExperties";
import { useInView } from "react-intersection-observer";

const Experties = () => {
  const containerRef = useRef(null);
  const { isDarkMode } = useThemeStore();
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });
  const { ref, inView } = useInView({ triggerOnce: true });

  interface ICompany {
    title: { rendered: string };
    _embedded: string;
  }

  const getCompanies = useGetCompanies();
  const getExperts = useGetExperties();

  useEffect(() => {
    if (inView) {
      getCompanies?.refetch();
      getExperts?.refetch();
    }
  }, [inView]);

  const [companies, setCompanies] = useState([]);
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setDimensions({ width: naturalWidth, height: naturalHeight });
  };
  useEffect(() => {
    const formattedCompanies = getCompanies?.data?.map((company: ICompany) => ({
      title: company?.title?.rendered,

      image: company?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    }));
    setCompanies(formattedCompanies);
  }, [getCompanies?.data]);

  const [experts, setExperts]: any = useState();

  useEffect(() => {
    const formattedExperts = getExperts?.data?.map((expert: any) => ({
      title: expert?.title?.rendered,
      about: expert?.acf?.about,
      content: expert?.acf?.content,
      image_dark: expert?.acf?.image_dark?.[0],
      image_light: expert?.acf?.image_light?.[0],
    }));
    setExperts(formattedExperts?.[0]);
  }, [getExperts?.data]);

  return (
    <div ref={ref}>
      <div
        id="Expertise"
        ref={containerRef}
        className={`relative overflow-auto flex-nowrap gap-[76.67px] justify-start md:!justify-center scrollbar-hide px-16 sm:!px-64 flex items-center ${
          isDarkMode ? "border-statCardBorder" : "border-[#ececea]"
        } border-t-[1px] border-b-[1px] border-solid mt-[40px] sm:!mt-[64px] md:!mt-[120px] h-auto min-h-[98px]`}
      >
        <div
          className={`max-w-[1360px]  overflow-auto flex-nowrap gap-[76.67px] justify-start md:!justify-center scrollbar-hide flex items-center h-auto min-h-[98px]`}
        >
          {" "}
          {companies?.map((item) => (
            <div key={item.id} className="flex flex-shrink-0">
              <Image
                loading="lazy"
                layout="responsive"
                src={item?.image}
                alt={item?.title ?? ""}
                width={dimensions.width}
                height={dimensions.height}
                onLoad={handleImageLoad}
              />{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="relative min-h-[552px] max-w-[1360px] mx-auto mt-[40px] sm:!mt-[64px] md:!mt-[101px] flex-wrap justify-start md:!justify-between flex px-[24px]  sm:!px-[64px]">
        <span className="hidden md:!flex absolute top-[130px]">
          {isDarkMode ? (
            <Image
              loading="lazy"
              layout="responsive"
              src={experts?.image_dark}
              alt={experts?.title ?? ""}
              width={dimensions.width}
              height={dimensions.height}
              onLoad={handleImageLoad}
            />
          ) : (
            <Image
              loading="lazy"
              layout="responsive"
              src={experts?.image_light}
              alt={experts?.title ?? ""}
              width={dimensions.width}
              height={dimensions.height}
              onLoad={handleImageLoad}
            />
          )}
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
            {experts?.about}{" "}
          </div>
        </div>
        <div
          className={`w-[100%] mt-[40px] md:!mt-0 max-w-[711px]  text-white pl-[10px] sm:!pl-[41px] border-l-[1px] border-solid ${
            isDarkMode ? "border-statCardBorder" : "border-[#ececea]"
          } `}
        >
          {experts?.content?.map((detail, index) => (
            <div
              key={index}
              className={`flex justify-between ${index != 0 && "mt-[32px]"}`}
            >
              <div className="flex flex-col gap-[8px] text-[16px] sm:!text-[20px]">
                <div
                  className={`${
                    isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
                  } w-[150px] md:!w-auto `}
                >
                  {detail?.company}
                </div>
                <div
                  className={`${
                    isDarkMode ? "text-[#B2B2B2]" : "text-[#767575]"
                  } text-[12px] sm:!text-[16px] `}
                >
                  {detail?.position}
                </div>
              </div>
              <div
                className={`                 ${
                  isDarkMode ? "text-[#EFEFEF]" : "text-[#3D3B3B]"
                }
text-[12px] sm:!text-[18px]`}
              >
                {detail?.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experties;
