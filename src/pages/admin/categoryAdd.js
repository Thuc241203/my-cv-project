import { addCateProject } from "@/api/cateprojects";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import { router, useEffect } from "@/lib";

const CategoryAdd = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("CateProjects-name");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: projectName.value,
      };
      addCateProject(formData).then(() =>
        router.navigate("/Category")
      );
    });
  });

  return /*html*/`
    <>
      <div class="sticky top-0">${Header()}</div>
      <div class="flex w-full">
        <div class="w-[15%] fixed top-0 h-[9in] bg-[#3DB142]">
          ${Nav()}
        </div>
        <div class="w-[75%] ml-[20%] mt-5"> 
          <h1>Thêm loại dự án</h1>
          <form action="" id="form-add">
            <div class="form-group mb-3">
              <label for="" class="form-label">Tên danh mục</label>
              <input type="text" class="form-control" id="CateProjects-name" />
            </div>
            <div class="form-group">
              <button class="btn btn-primary">Thêm danh mục</button>
            </div>
          </form>
        </div>
      </div>
    </>
  `;
};

export default CategoryAdd;
