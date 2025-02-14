import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useGetProjects from "@/hooks/project/useGetProjects";
import useGetProjectCategories from "@/hooks/project/useGetProjectCategories";
import { useInView } from "react-intersection-observer";

const Tab = dynamic(() => import("@/app/_components/Tab/Tab"), {
  ssr: true,
});

const Work = () => {
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      refetch();
      categoryProjectRefetch();
    }
  }, [inView]);
  const {
    data: projectsData,
    isLoading: loadingProjects,
    refetch,
    error: errorProjects,
  } = useGetProjects();
  const {
    refetch: categoryProjectRefetch,
    data: categoriesData,
    isLoading: loadingCategories,
    error: errorCategories,
  } = useGetProjectCategories();

  const [projects, setProjects] = useState(null);
  const [categories, setCategories] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (projectsData) {
      setProjects(projectsData);
    }
  }, [projectsData]);

  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData);
    }
  }, [categoriesData]);

  useEffect(() => {
    if (!categories || !projects) return;

    const formattedData = categories.map((category) => {
      const categoryProjects = projects
        .filter((project) => project.project_category.includes(category.id))
        .map((project) => {
          return {
            website: {
              title: project.title.rendered,
              link: project?.acf?.project_link?.url,
            },
            attachment: project?._embedded?.["acf:attachment"],

            image:
              project?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          };
        });

      return {
        title: category.name,
        data: categoryProjects,
      };
    });

    setData(formattedData || []);
  }, [categories, projects]);

  if (loadingProjects || loadingCategories) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (errorProjects || errorCategories) {
    return (
      <div className="text-center text-red-500">
        خطایی رخ داده است. لطفاً دوباره تلاش کنید.
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="mt-[40px] sm:!mt-[64px] md:!mt-[120px] px-16 sm:!px-[40px] sm:!px-64 "
      id="Work"
    >
      <div className="text-primary !font-moul text-[24px] sm:!text-[28px] md:!text-[40px] text-center">
        My Project
      </div>

      <Tab inView={inView} data={data} />
    </div>
  );
};

export default Work;
