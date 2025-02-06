import { API_URL } from "@/utils/globals";

const getServices = async () => {
  const result = await fetch(`${API_URL}/service?_embed`, {
    cache: "no-store",
  });

  return await result.json();
};

export { getServices };
