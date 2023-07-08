import { getCateProjectProjects } from "@/api/categoryProjects";
import { getCateProjects } from "@/api/cateprojects";
import CategoryHome from "@/components/home/category";
import ContactHome from "@/components/home/contact";
import FooterHome from "@/components/home/footer";
import HeaderHome from "@/components/home/header";
import Introduce from "@/components/home/introduce";
import ProjectList from "@/components/home/project";
import { useEffect, useState } from "@/lib";

const Project = () => {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getCateProjects().then((categories) => setCategories(categories));
  }, []);

  const onClick = (id) => {
    getCateProjectProjects(id).then((data) => setProjects(data.projects));
  };

  return /*html*/ `
    <div class="bg-[#B2D3C2]">
      ${HeaderHome()}
      ${Introduce()}
      <div class= "container text-center " >${CategoryHome({
        categories,
        onClick: onClick,
      })}</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 w-[70%] mx-auto">
      ${ProjectList({ projects })}
      </div>
      ${ContactHome()}
      ${FooterHome()}
    </div>
  `;
};
export default Project;
