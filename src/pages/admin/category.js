import { deleteCateProject, getCateProjects } from "@/api/cateprojects";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import { router, useEffect, useState } from "@/lib";

const CategoryAdmin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCateProjects().then((data) => setData(data));
  }, []);
  useEffect(function () {
    const btnadd = document.querySelectorAll(".btn-add");
    for (let btna of btnadd) {
      btna.addEventListener("click", function () {
        router.navigate("/Category/Add")
      });
    }
  });
  return /*html*/`
    <>
      <div class="sticky top-0">${Header()}</div>
      <div class="flex w-full">
        <div class="w-[15%] fixed top-0 h-[9in] bg-[#3DB142]">
          ${Nav()}
        </div>
        <div class="w-[75%] ml-[20%] mt-5"> 
          <h1>Quản lý loại dự án</h1>
          <button class="btn btn-danger btn-add">
              Thêm
          </button>
          <table class="table table-bordered mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Tên danh mục</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${data
                .map((cateProject, index) => {
                  return /*html*/`
                    <tr>
                      <td>${index + 1}</td>
                      <td>${cateProject.name}</td>
                      <td width="150">
                        <button data-id="${cateProject.id}" class="btn btn-danger btn-remove">Xóa</button>
                        <a class="btn btn-danger" href="/Category/edit/${cateProject.id}">Sửa</a>
                      </td>
                    </tr>
                  `;
                })
                .join("")}
            </tbody>
          </table>
        </div>
      </div> 
    </>
  `;
};

export default CategoryAdmin;
