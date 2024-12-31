import { API_URL } from "@/utils/globals";

const getSkills = async () => {
  const result = await fetch(`${API_URL}skills?_embed`, {
    cache: "no-store",
  });

  return await result.json();
};

export { getSkills };
