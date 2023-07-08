import { router, useEffect, useState } from "@/lib";

const NavHome = () => {
  const [openButton, setOpenButton] = useState(false);
  useEffect(() => {
    const obt = document.querySelectorAll(".openButton");
    const menu = document.getElementById("menu");
    for (let btn of obt) {
      btn.addEventListener("click", function () {
        if (openButton == false) {
          menu.classList.add("hidden");
          setOpenButton(false);
        } else {
          menu.classList.remove("hidden");
          setOpenButton(true);
        }
      });
    }
  });
  return /*html*/`
    <ul id="menu"
      class="fixed top-0 left-0 flex flex-col justify-center items-center  bg-green-500 w-full h-screen md:bg-transparent md:relative md:h-auto md:flex-row md:justify-end md:flex hidden"}>
      <li class="pt-3"><a class="no-underline" href="/Login"><button class="block text-white bg-[#3DED98] px-12 py-2 rounded-3xl btnlogin">Đăng Nhập</button></a></li>
    </ul>
    <button class=" z-10 md:hidden openButton">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
    `;
};
export default NavHome;
