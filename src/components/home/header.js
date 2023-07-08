import imgUrl from "@/public/vite.svg"
import NavHome from "./nav";

const HeaderHome = () => {
  return /*html*/ `
  <div class="container md:mx-auto flex items-center justify-between px-12 bg-[#3DB142]  ">
  <img src=${imgUrl} alt="error">
  ${NavHome()}
</div>
  `;
};
export default HeaderHome;
