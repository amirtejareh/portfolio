import { getServices } from "@/app/_api/_api/services";
import { useQuery } from "@tanstack/react-query";

const useGetServices = () => {
  return useQuery({
    queryKey: ["get-services"],
    queryFn: getServices,
    refetchOnWindowFocus: false,
    enabled: false,
  });
};

export default useGetServices;
