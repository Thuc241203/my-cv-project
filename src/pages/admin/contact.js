import { getContact } from "@/api/contact";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import { router, useEffect, useState } from "@/lib";

const ContactAdmin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getContact().then((data) => setData(data));
  }, []);

  useEffect(function () {
    const btnedit = document.querySelectorAll(".btn-edit");
    for (let btne of btnedit) {
      btne.addEventListener("click", function () {
        router.navigate("/Contact/Edit")
      });
    }
  });
  return /*html*/`
  <>
    <div class="sticky top-0">${Header()}</div>
    <div class="flex w-full">
      <div class="w-[15%] fixed top-0 h-[9in] bg-[#3DB142]">
        ${Nav()}
      </div>
      <div class="w-[75%] ml-[20%] mt-5"> 
        <h1>Quản lý Thông tin</h1>
        <button class="btn btn-danger btn-edit">
          Edit
        </button>
        <table class="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Phone</th>
              <th>Email</th>
              <th>Facebook</th>
              <th>Instagram</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${data.phone}</td>
              <td>${data.email}</td>
              <td>${data.facebook}</td>
              <td>${data.instagram}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
  `;
}
export default ContactAdmin;