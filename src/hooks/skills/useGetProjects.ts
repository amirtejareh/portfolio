import { getProjects } from "@/app/_api/_api/projects";
import { useQuery } from "@tanstack/react-query";

const useGetProjects = () => {
  return useQuery({
    queryKey: ["get-projects"],
    queryFn: getProjects,
    refetchOnWindowFocus: false,
  });
};

export default useGetProjects;
