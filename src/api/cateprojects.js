import instance from "./config";

const getCateProjects = () => {
    return instance.get("/categoryProjects");
};
const getCateProject = (id) => {
    return instance.get(`/categoryProjects/${id}`);
};
const getCateProjectProjects = (id) => {
  return instance.get(`/categoryProjects/${id}?_embed=projects`);
};
const addCateProject = (categoryProjects) => {
    return instance.post("/categoryProjects", categoryProjects);
};
const deleteCateProject = (id) => {
    return instance.delete(`/categoryProjects/${id}`);
};
const updateCateProject = (categoryProjects) => {
    return instance.put(`/categoryProjects/${categoryProjects.id}`, categoryProjects);
};

export { getCateProjects, getCateProject, addCateProject, deleteCateProject, updateCateProject };