import { getCompanies } from "@/app/_api/_api/companies";
import { getSkills } from "@/app/_api/_api/skills";
import { useQuery } from "@tanstack/react-query";

const useGetCompanies = () => {
  return useQuery({
    queryKey: ["get-companies"],
    queryFn: getCompanies,
    refetchOnWindowFocus: false,
  });
};

export default useGetCompanies;
