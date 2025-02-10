import { getCompanies } from "@/app/_api/_api/companies";
import { useQuery } from "@tanstack/react-query";

const useGetCompanies = () => {
  return useQuery({
    queryKey: ["get-companies"],
    queryFn: getCompanies,
    refetchOnWindowFocus: false,
    enabled: false,
  });
};

export default useGetCompanies;
