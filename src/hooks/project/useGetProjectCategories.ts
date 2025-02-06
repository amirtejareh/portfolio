import { getProjectCategories } from "@/app/_api/_api/projects";
import { useQuery } from "@tanstack/react-query";

const useGetProjectCategories = () => {
  return useQuery({
    queryKey: ["get-project-categories"],
    queryFn: getProjectCategories,
    refetchOnWindowFocus: false,
  });
};

export default useGetProjectCategories;
