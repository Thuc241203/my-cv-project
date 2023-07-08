import { getLogin } from "@/api/login";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import { router, useEffect, useState } from "@/lib";

const UserAdmin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getLogin().then((data) => setData(data));
  }, []);
  useEffect(function () {
    const btnedit = document.querySelectorAll(".btn-edit");
    for (let btne of btnedit) {
      btne.addEventListener("click", function () {
        router.navigate("/User/Edit")
      });
    }
  });
  return/*html*/`
  <div class="">
    <div class="sticky top-0">${Header()}</div>
    <div class="flex w-full">
      <div class="w-[15%] fixed top-0 h-[9in] bg-[#3DB142]">
        ${Nav()}
      </div>
      <div class="w-[75%] ml-[20%] mt-5"> 
        <h1>Quản lý tài khoản</h1>
        <button class="btn btn-danger btn-edit ">
          Edit
        </button>
        <table class="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${data.email}</td>
              <td>${data.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `;
};
export default UserAdmin;