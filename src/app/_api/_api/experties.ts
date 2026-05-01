import { API_URL } from "@/utils/globals";

const getExperties = async () => {
  const result = await fetch(`${API_URL}/experties?_embed`, {
    cache: "no-store",
  });

  return await result.json();
};

export { getExperties };
