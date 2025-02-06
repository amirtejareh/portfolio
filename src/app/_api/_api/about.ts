import { API_URL } from "@/utils/globals";

const getAbout = async () => {
  const result = await fetch(`${API_URL}/about?_embed`, {
    cache: "no-store",
  });

  return await result.json();
};

export { getAbout };
