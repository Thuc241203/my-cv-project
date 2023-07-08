import { getLogin, updateLogin } from "@/api/login";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import { router, useEffect, useState } from "@/lib";

const UserEdit = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getLogin().then((data) => setData(data));
  }, []);
  useEffect(() => {
    const form = document.getElementById("form-add");
    const Email = document.getElementById("email");
    const Password = document.getElementById("password");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = {
            email: Email.value,
            password: Password.value,
        };
        updateLogin(formData).then(() => router.navigate("/User"));
    });
  });
  return /*html*/ `
  <>
    <div class="sticky top-0">${Header()}</div>
    <div class="flex w-full">
      <div class="w-[15%] fixed top-0 h-[9in] bg-[#3DB142]">
        ${Nav()}
      </div>
      <div class="w-[75%] ml-[20%] mt-5"> 
        <h1>Sửa tài khoản</h1>
        <form action="" id="form-add">
          <div class="form-group mb-3">
            <label for="" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" value="${data.email}"/>
          </div>
          <div class="form-group mb-3">
            <label for="" class="form-label">Password</label>
            <input type="text" class="form-control" id="password" value="${data.password}"/>
          </div>
          <div class="form-group">
            <button class="btn btn-primary ">Lưu</button>
          </div>
        </form >
      </div>
    </div>
  </>
  `;
};
export default UserEdit;
