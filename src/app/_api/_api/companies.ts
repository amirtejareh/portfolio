import { API_URL } from "@/utils/globals";

const getCompanies = async () => {
  const result = await fetch(`${API_URL}/companies?_embed`, {
    cache: "no-store",
  });

  return await result.json();
};

export { getCompanies };
