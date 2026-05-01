import { API_URL } from "@/utils/globals";

const getProjects = async () => {
  const result = await fetch(`${API_URL}/projects?_embed`, {
    cache: "no-store",
  });

  return await result.json();
};

const getProjectCategories = async () => {
  const result = await fetch(`${API_URL}/project_category`, {
    cache: "no-store",
  });

  return await result.json();
};

export { getProjectCategories, getProjects };
