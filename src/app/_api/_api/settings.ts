import { API_URL } from "@/utils/globals";

const getSettings = async () => {
  const result = await fetch(`${API_URL}/theme-settings`, {
    cache: "no-store",
  });

  return await result.json();
};

export { getSettings };
