import { getSettings } from "@/app/_api/_api/settings";
import { useQuery } from "@tanstack/react-query";

const useGetSettings = () => {
  return useQuery({
    queryKey: ["get-settings"],
    queryFn: getSettings,
    refetchOnWindowFocus: false,
  });
};

export default useGetSettings;
