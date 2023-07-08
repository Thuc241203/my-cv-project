import { useEffect, useState } from "@/lib";

const Header = () => {
  const [openTranslate, setOpenTranslate] = useState(false);
  useEffect(() => {
    const obt = document.querySelectorAll(".openButton");
    for (let btn of obt) {
      btn.addEventListener("click", function () {
        if (openTranslate) {
          setOpenTranslate(false)
        } else {
          setOpenTranslate(true)
        }
      })
    }
  });
  return /*html*/`
    <div class="bg-[#FFFFFF] text-white drop-shadow-xl">
      <div class="container mx-auto flex justify-end items-center">
        <header class="flex justify-center items-center gap-x-10">
          
          <a href="/" class="no-underline text-black">
            Thoát
          <i class="fas fa-outdent"></i>
          </a>
          <div class="flex justify-center border-l-[1px] py-4 pl-3 items-center gap-x-2 text-black">
            <div class="">Xin Chào :</div> 
            <div class="">Admin</div>
          </div>
        </header>
      </div>
    </div>
    `;
};
export default Header;
