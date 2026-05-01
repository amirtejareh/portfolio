import { getSkills } from "@/app/_api/_api/skills";
import { useQuery } from "@tanstack/react-query";

const useGetSkills = () => {
  return useQuery({
    queryKey: ["get-skills"],
    queryFn: getSkills,
    refetchOnWindowFocus: false,
    enabled: false,
  });
};

export default useGetSkills;
