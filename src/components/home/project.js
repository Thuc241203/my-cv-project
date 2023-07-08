const ProjectList = ({ projects }) => {
  return /*html*/`
  ${projects.map((project) => {
    return /*html*/`
      <a class="no-underline" href="/ProjectDetail/${project.id}">
        <div class="text-white border border-[$] rounded-lg bg-[#2B2B2B] flex flex-col px-4 ">
          <div class="flex justify-between pt-4">
              <div>
                  <img src="https://res.cloudinary.com/dqqfnp0hk/image/upload/v1676726634/122_xeewab.png" alt="">
              </div>
              <div>
                  <img src="../img/111232.png" alt="">
              </div>

          </div>
          <div class=" w-full h-full pt-10">
              <div>${project.name}</div>
              <div class="pt-4">${project.describe}</div>
          </div>
          <div class="flex  mt-4 mb-4">
              <div class="pr-4 text-sm">${project.technology}</div>
          </div>
        </div>
      </a>
    `})
    .join("")}
  `;
};
export default ProjectList;
