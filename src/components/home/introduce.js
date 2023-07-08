import { getIntroduce } from "@/api/introduce";
import { useEffect, useState } from "@/lib";
const Introduce = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getIntroduce().then((data) => setData(data));
  }, []);

  const myFunction = () => {
    console.log("Hello")
  }
  
  return /*html*/`
  <div class="grid grid-cols-1 md:grid-cols-2 gap-14 mt-24 items-center w-[90%] mx-auto mb-10 ">
  <div class="">
    <div class="text-black text-base">Xin Chào Tôi là:</div>
    <h1 class="text-black text-5xl md:text-5xl">${data.name}</h1>
    <div class="text-green-500 py-2.5 text-xl">${data.job}</div>
    <div class="text-black text-base">Ngày Sinh: ${data.date}</div>
    <div class="text-black text-base">${data.describe}</div>
    <a href="#contact"><button class="text-black px-12 py-2 rounded-3xl bg-green-500 my-9 text-base hover:bg-green-800">Contact</button></a>
  </div>
  <div class="">
  <img id="anh" class="w-full transition-opacity rounded-2xl" src="${data.imgskills}" alt="#">
  </div>
</div>
<hr class="text-black border-4 w-[85%] mx-auto"/>
<div class="grid grid-cols-1 md:grid-cols-2 gap-14 mt-10 items-center w-[90%] mx-auto">
  <div>
    <img id="anh" class="w-full transition-opacity rounded-2xl" src="${data.img}" alt="#">
  </div>
  <div>
    <h2 class="text-2xl text-black  border-b-2 inline">Về Bản Thân Tôi</h2>
    <div class="py-4 text-lg text-black leading-5 break-words ">${data.content} </div>
    <div class="text-green-500 text-lg">các ngôn ngữ lập trình đã học qua:</div>
  </div>
</div>
<hr class="text-black border-4 w-[85%] mx-auto"/>
  `
};
export default Introduce;
