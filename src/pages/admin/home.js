import { getIntroduce } from "@/api/introduce";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import { useEffect, useState } from "@/lib";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getIntroduce().then((data) => setData(data));
  }, []);
  return /*html*/ `
    <div class="">
      <div class="sticky top-0">${Header()}</div>
      <div class="flex w-full">
        <div class="w-[15%] fixed top-0 h-[9in] bg-[#3DB142]">
          ${Nav()}
        </div>
        <div class="w-[75%] ml-[20%] mt-5"> 
          <h1>Quản lý thông tin</h1>
          <table class="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Time date</th>
                <th>Job</th>
                <th>Describe</th>
                <th>Image</th>
                <th>interest</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${data.name}</td>
                <td>${data.date}</td>
                <td>${data.job}</td>
                <td>${data.describe}</td>
                <td class = "block"><img style="width:100px;display: grid; align-items: center;" class = "" src="${
                  data.img
                }" alt=""></td>
                <td>${data.interest}</td>
                <td width="150">
                    <a href="/admin/edit/${data.id}" class="btn btn-danger">Sửa</a>
                </td>
              </tr>
            </tbody>
          </table >
        </div >
      </div>
    </div>
    `;
};
export default HomePage;
