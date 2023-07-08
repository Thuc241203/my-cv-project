import { getCateProjects } from "@/api/cateprojects";
import { getProject, updateProject } from "@/api/project";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import uploadFiles from "@/components/admin/uploadimg";
import { router, useEffect, useState } from "@/lib";

const Edit = ({ id }) => {
  const [cate, setCate] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getProject(id).then((data) => setData(data));
  }, []);
  useEffect(() => {
    getCateProjects(id).then((cate) => setCate(cate));
  }, []);
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("project-Name");
    const projectDescribe = document.getElementById("project-describe");
    const projectContent = document.getElementById("project-Content");
    const projectLinkGithub = document.getElementById("project-linkGithub");
    const projectLinkPreview = document.getElementById("project-linkPreview");
    const projectCompletiontime = document.getElementById(
      "project-completiontime"
    );
    const projectFeedback = document.getElementById("project-feedback");
    const projectTechnology = document.getElementById("project-technology");
    const projectCategoryid = document.getElementById("project-categoryid");
    const projectAlbum = document.getElementById("project-album");
    const projectImg = document.getElementById("project-img");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let urls1 = [];
      let urls = [];
      if (projectAlbum.files.length > 0) {
          urls1 = await uploadFiles(projectAlbum.files);
      } else {
          urls1 = data.Album;
      };

      if (projectImg.files.length > 0) {
          urls = await uploadFiles(projectImg.files);
      } else {
          urls = data.feartedImage;
      };
      const dataNew = {
        id,
        name: projectName.value,
        describe: projectDescribe.value,
        content: projectContent.value,
        linkGithub: projectLinkGithub.value,
        linkPreview: projectLinkPreview.value,
        completiontime: projectCompletiontime.value,
        feedback: projectFeedback.value,
        technology: projectTechnology.value,
        feartedImage: urls,
        Album: urls1,
        categoryProjectId: projectCategoryid.value,
      };
      updateProject(dataNew).then(() => {
        alert("Sửa thành công");
        router.navigate("/Project");
      });
    });
  });
  return /*html*/ `
  <div class="">
  <div class="sticky top-0">${Header()}</div>
  <div class="flex w-full">
    <div class="w-[15%] fixed top-0 h-[9in] bg-[#3DB142]">
      ${Nav()}
    </div>
    <div class="w-[75%] ml-[20%] mt-5"> 
      <h1>Sửa dự án</h1>
      <form action="" id="form-add">
        <h5>ID</h5>
          <p class="form-control">${data.id}</p>
        <h5>Tên</h5>
          <input class="form-control" type="text" id="project-Name" placeholder="Tên dự án" value="${data.name}" />
        <h5>Mô tả</h5>
          <input type="text" class="form-control" id="project-describe" value="${data.describe}" />
        <h5>nội dung</h5>
          <input class="form-control" type="text" id="project-Content" placeholder="Nội dung" value="${data.content}" />
        <h5>Ảnh đại diện</h5>
          <input type="file" class="form-control"  id="project-img"/>
        <h5>Album</h5>
          <input type="file" class="form-control" multiple id="project-album"/>
        <h5>Link Gihub</h5>
          <input type="text" class="form-control" id="project-linkGithub" value="${data.linkGithub}" />
        <h5>Link Preview</h5>
          <input type="text" class="form-control" id="project-linkPreview" value="${data.linkPreview}" />
        <h5>Completion time</h5>
          <input type="text" class="form-control" id="project-completiontime" value="${data.completiontime}" />
        <h5>Feedback</h5>
        <input type="text" class="form-control" id="project-feedback" value="${data.feedback}" />
        <h5>Technology</h5>
        <input type="text" class="form-control" id="project-technology" value="${data.technology}" />
        <div class="form-group mb-3">
        <h5>Danh mục</h5>
                  <select name="" id="project-categoryid">
                  ${cate
                    .map((categoryProjects) => {
                      let s = "";
                      if (categoryProjects.id == data.categoryProjectId) {
                        s = "selected";
                      }
                      return `<option value="${categoryProjects.id}" ${s}>${categoryProjects.name}</option>`;
                    })
                    .join("")}
                  </select>
              </div>
        <div class="form-group">
            <button class="btn btn-primary">Sửa dự án</button>
        </div>
      </form>
    </div>
  </div>
</div>
  `;
};
export default Edit;
