import { getExperties } from "@/app/_api/_api/experties";
import { useQuery } from "@tanstack/react-query";

const useGetExperties = () => {
  return useQuery({
    queryKey: ["get-experties"],
    queryFn: getExperties,
    refetchOnWindowFocus: false,
  });
};

export default useGetExperties;
