import { getContact, updateContact } from "@/api/contact";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import { router, useEffect, useState } from "@/lib";

const ContactEdit = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getContact().then((data) => setData(data));
  }, []);
  
  useEffect(() => {
    const form = document.getElementById("form-add");
    const contactPhone = document.getElementById("phone");
    const contactEmail = document.getElementById("email");
    const contactFacebook = document.getElementById("facebook");
    const contactInstagram = document.getElementById("instagram");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = {
            phone: contactPhone.value,
            email: contactEmail.value,
            facebook: contactFacebook.value,
            instagram: contactInstagram.value,
        };
        updateContact(formData).then(() => router.navigate("/Contact"));
    });
});

  return /*html*/`
  <>
    <div class="sticky top-0">${Header()}</div>
    <div class="flex w-full">
      <div class="w-[15%] fixed top-0 h-[9in] bg-[#3DB142]">
        ${Nav()}
      </div>
      <div class="w-[75%] ml-[20%] mt-5"> 
        <h1>Sửa Thông tin</h1>
        <form action="" id="form-add">
          <div class="form-group mb-3">
            <label for="" class="form-label">Phone</label>
            <input type="text" class="form-control" id="phone" value="${data.phone}"/>
          </div>
          <div class="form-group mb-3">
            <label for="" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" value="${data.email}"/>
          </div>
          <div class="form-group mb-3">
            <label for="" class="form-label">Facebook</label>
            <input type="text" class="form-control" id="facebook" value="${data.facebook}"/>
          </div>
          <div class="form-group mb-3">
            <label for="" class="form-label">Instagram</label>
            <input type="text" class="form-control" id="instagram" value="${data.instagram}"/>
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
          </div>
        </form >
      </div >
    </div >
  </>
  `;
};
export default ContactEdit;