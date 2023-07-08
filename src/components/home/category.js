import { useEffect } from "@/lib";


const CategoryHome = ({ categories, onClick }) => {
  useEffect(() => {
    const btns = document.querySelectorAll(".btn");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        onClick(id);
      });
    }
  });
  return /*html*/`
    ${categories.map((cate) => /*html*/`
      <button class="btn text-black hover:text-red-400 " data-id="${cate.id}">${cate.name}</button>
    `).join("")}
  `;
};
export default CategoryHome;
