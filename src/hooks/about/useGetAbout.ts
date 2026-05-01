import { getAbout } from "@/app/_api/_api/about";
import { useQuery } from "@tanstack/react-query";

const useGetAbout = () => {
  return useQuery({
    queryKey: ["get-about"],
    queryFn: getAbout,
    refetchOnWindowFocus: false,
    enabled: false,
  });
};

export default useGetAbout;
