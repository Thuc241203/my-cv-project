import { getProject } from "@/api/project";
import { useEffect, useState } from "@/lib";w
import ContactHome from "./contact";
import FooterHome from "./footer";
import HeaderHome from "./header";

const ProjectDetail = ({ id }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProject(id).then((data) => setData(data));
  }, []);
  console.log(data);
  return /*html*/ `
  <div class="bg-black text-white">
    ${HeaderHome()}
    <h1 class="text-center py-10">${data.name}</h1>
    <div class="flex justify-center items-center gap-x-14 w-[80%] mx-auto">
      <div class="w-[50%]">
        <img class="w-full" src=${data.feartedImage} alt="" />
      </div>
      <div class="w-[50%]">
        <h4 class="text-green-500 text-xl">${data.describe}</h4>
        <p>Thời gian: ${data.completiontime}</p>
        <p>nội dung: ${data.content}</p>
        <p>Công nghệ sử dụng: ${data.technology}</p>
        <a href=${
          data.linkGithub
        }><button class="text-white px-12 py-2 rounded-3xl bg-green-500 my-9 text-base hover:bg-green-800">Link gihub</button></a>
      </div>
    </div>
    ${ContactHome()}
  </div>
  ${FooterHome()}
  `;
};
export default ProjectDetail;
