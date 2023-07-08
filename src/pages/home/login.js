import { getLogin } from "@/api/login";
import FooterHome from "@/components/home/footer";
import HeaderHome from "@/components/home/header";
import { router, useEffect, useState } from "@/lib";

const LoginHome = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getLogin().then((data) => setData(data));
  },[]);
  useEffect(() => {
    const form = document.getElementById("form-add");
    const loginEmail = document.getElementById("email")
    const loginPassword = document.getElementById("password")

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (data.email == loginEmail.value && data.password == loginPassword.value){
        router.navigate("/admin/home")
      }
      else{
        alert("Nhập sai tài khoản")
      }
    });
  });
  return /*html*/ `
    <div class="bg-[#B2D3C2]">
      ${HeaderHome()}
      <div class="w-[50%] mx-auto text-white">
        <h1 class="text-black" >Đăng Nhập</h1>
        <form action="" class="h-[100vh]" id="form-add">
            <div class="form-group mb-3 mt-5">
                <label for="" class="text-black form-label">Email</label>
                <input type="text" class="form-control" id="email"/>
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label text-black">Password</label>
                <input type="password" class="form-control" id="password"/>
            </div>
            <div class="form-group">
                <button class="px-2 py-2 rounded-xl hover:opacity-[0.9] bg-green-500 text-white">Đăng nhập</button>
            </div>
        </form>
      </div>
      ${FooterHome()}
    </div>
  `;
};
export default LoginHome;
