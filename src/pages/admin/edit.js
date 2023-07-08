import { getIntroduce, updateIntroduce } from "@/api/introduce";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import uploadFiles from "@/components/admin/uploadimg";
import { router, useEffect, useState } from "@/lib";

const Edit = ({ id }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getIntroduce(id).then((data) => setData(data));
  }, []);
  useEffect(() => {
    const form = document.getElementById("form-add");
    const Name = document.getElementById("Name");
    const Date = document.getElementById("Date");
    const Job = document.getElementById("Job");
    const Describe = document.getElementById("Describe");
    const img = document.getElementById("img");
    const imgskill = document.getElementById("imgskill");
    const Content = document.getElementById("Content");
    const Interest = document.getElementById("Interest");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let urls = data.img;
      let urls1 = data.imgskills;
      if (imgskill.files) {
        let urls1 = await uploadFiles(imgskill.files);
      }
      if (img.files) {
        let urls = await uploadFiles(img.files);
      }
      const formData = {
        id,
        name: Name.value,
        date: Date.value,
        job: Job.value,
        describe: Describe.value,
        img: urls,
        imgskills: urls1,
        content: Content.value,
        interest: Interest.value,
        skills: [],
      };
      updateIntroduce(formData).then(() => {
        alert("Sửa thành công");
        router.navigate("/admin/home");
      });
    });
  });
  return /*html*/ `
  <div class="">
  <div class="sticky top-0">${Header()}</div>
  <div class="flex w-full">
    <div class="w-[15%] fixed top-0 h-[9in] bg-[#3DB142]">
      ${Nav()}
    </div>
    <div class="w-[75%] ml-[20%] mt-5"> 
      <h1>Sửa Thông tin</h1>
      <form action="" id="form-add">
        <h5>ID</h5>
          <p class="form-control">${data.id}</p>
        <h5>Name</h5>
          <input type="text" class="form-control" id="Name" placeholder="Name" value="${
            data.name
          }" />
        <h5>Date</h5>
          <input type="text" class="form-control" id="Date" placeholder="Date" value="${
            data.date
          }" />
        <h5>Job</h5>
          <input type="text" class="form-control" id="Job" placeholder="Job" value="${
            data.job
          }"/>
        <h5>Describe</h5>
          <input type="text" class="form-control" id="Describe" placeholder="Describe" value="${
            data.describe
          }"/>
        <h5>Image</h5>
          <input type="file" class="form-control" multiple id="img"/>
        <h5>Image skill</h5>
          <input type="file" class="form-control" id="imgskill" />
        <h5>Content</h5>
          <input type="text" class="form-control" id="Content" placeholder="Content" value="${
            data.content
          }" />
        <h5>Interest</h5>
          <input type="text" class="form-control" id="Interest" placeholder="Interest" value="${
            data.interest
          }" />
        <h5>skill</h5>
          
          <button class="btn btn-primary">Sửa thông tin</button>
      </form>
    </div>
  </div>
</div>
  `;
};
export default Edit;
