import { getCateProject, updateCateProject } from "@/api/cateprojects";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import { router, useEffect, useState } from "@/lib";

const CategoryEdit = ({ id }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getCateProject(id).then((data) => setData(data));
    }, []);

    useEffect(() => {
        const form = document.getElementById("form-add");
        const cateProjectname = document.getElementById("cateProject-name");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                id,
                name: cateProjectname.value,

            };
            updateCateProject(formData).then(() => router.navigate("/Category"));
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
          <h1>Sửa loại dự án</h1>
          <form action="" id="form-add">
            <div class="form-group mb-3">
              <label for="" class="form-label">Tên dự án</label>
              <input type="text" class="form-control" id="cateProject-name" value="${data.name}"/>
            </div>
            <div class="form-group">
              <button class="btn btn-primary">Lưu</button>
            </div>
          </form >
        </div >
      </div >
    </>
    `;
};

export default CategoryEdit;
