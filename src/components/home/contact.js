import { getContact } from "@/api/contact";
import { useEffect, useState } from "@/lib";



const ContactHome = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    getContact().then((contact) => setContact(contact));
  }, []);

  useEffect(()=>{
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    let isValid = true;
    
    if (email == "") {
      document.getElementById("emailError").textContent = "Email không được đển trống";
      isValid = false;
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      document.getElementById("emailError").textContent = "Email không đúng định dạng";
      isValid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }
    
    if (message == "") {
      document.getElementById("messageError").textContent = "Không được đển trống";
      isValid = false;
    } else {
      document.getElementById("messageError").textContent = "";
    }
    
    if (isValid) {
      form.submit();
    }
  });});
  
  return /*html*/ `
    <div class="text-center">
      <h1 class="text-black  text-4xl mt-12" id="contact">Liện Hệ đến tôi</h1>
      <p class="text-black mb-12">nếu bạn muốn liên hệ với tôi hãy gửi tin nhắn vô email hoặc số điện thoại ở bên dưới.</p>
      <div class="flex flex-col md:flex-row justify-center items-center">
        <button class="bg-green-500 rounded-xl w-[30%] h-20 m-2 flex flex-col md:flex-row justify-center items-center hover:bg-green-800 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <a class="no-underline text-[20px] text-black" href="mailto:${contact.email}">${contact.email}</a>
        </button class=>
        <button class="bg-green-500 rounded-xl w-[30%] h-20 m-2  flex flex-col gap-2 md:flex-row justify-center items-center hover:bg-green-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <a class="no-underline text-[20px] text-black" href="tel:${contact.phone}">(+84)${contact.phone}</a>
        </button>
      </div>
    </div>
    <div class="text-center mt-32">
      <h2 class="text-black text-xl">Có thể liên lạc với tôi qua mẫu sau</h2>
      <form id="myForm" class="flex flex-col justify-center items-center">
        <div>
          <input name="email" id="email" class="text-black bg-black rounded-xl border-white border px-4 py-1 w-80 md:w-96" type="email" placeholder="Email">
          <div id="emailError" class="h-10 pt-[10px] text-red-600 text-left"></div>
        </div>
        <div>
          <textarea class="px-4 bg-black text-black border-white border w-80 md:w-96 rounded-xl" name="message" placeholder="Message" id="message" cols="30" rows="10"></textarea>
          <div id="messageError" class="h-10 pt-[10px] text-red-600 text-left"></div>
        </div>
        <button type="submit" class="text-black px-12 py-2 rounded-3xl bg-green-500 my-9 text-base hover:bg-green-800">GỬI</button>
      </form>
    </div>
    `;
};
export default ContactHome;
