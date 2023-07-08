import { deleteProject, getProjects } from "@/api/project";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import { router, useEffect, useState } from "@/lib";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectAdmin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProjects().then((data) => setData(data));
  }, []);
  useEffect(function () {
    const btnr = document.querySelectorAll(".btn-remove");
    const btnadd = document.querySelectorAll(".btn-add");
    for (let btna of btnadd) {
      btna.addEventListener("click", function () {
        router.navigate("/Add")
      });
    }
    for (let btn of btnr) {
      const id = btn.dataset.id;
      btn.addEventListener("click", function () {
          deleteProject(id).then(() => {
              const newData = data.filter((project) => project.id != id);
              alert("bạn muốn xoá dự án " + data[id - 1].name)
              setData(newData); 
          });
      })
    }
  });
  return /*html*/`
    <div class="">
    <div class="sticky top-0">${Header()}</div>
    <div class="flex w-full">
      <div class="w-[15%] fixed top-0 h-[9in] bg-[#3DB142]">
        ${Nav()}
      </div>
      <div class="w-[75%] ml-[20%] mt-5"> 
          <h1>Quản lý dự án</h1>
          <button class="btn btn-danger btn-add ">
              Thêm
          </button>
          <table class="table table-bordered mt-3">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Tên dự án</th>
                      <th>Ảnh</th>
                      <th>Mô tả</th>
                      <th>Công nghệ</th>
                      <th>Thời gian</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
              ${data
      .map((project, index) => {
        return `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${project.name}</td>
                    <td><img class="w-28" src="${project.feartedImage}" alt=""></td>
                    <td>${project.content}</td>
                    <td>${project.technology}</td>
                    <td>${project.completiontime}</td>
                    <td width="150">
                        <button data-id="${project.id}" class="btn btn-danger btn-remove">
                            Xóa
                        </button>
                        <a href="/Edit/${project.id}" class="btn btn-danger btn-edit">Sửa</a>
                    </td>
                  </tr>
                `;
      })
      .join("")}
              </tbody >
          </table >
        </div >
      </div>
    </div>
    `;
};
export default ProjectAdmin;
