var Depart_title=document.querySelector(".depart_title");
var Department_cntnt=document.querySelector(".department_cntnt");

Depart_title&&Depart_title.addEventListener("click",()=>{
    Department_cntnt.classList.toggle("passive_cntnt");
})
var swiper = new Swiper(".slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//totop and fixed navbar
const Totop=document.querySelector(".to-top");
var navfix=document.querySelector("#header_mid");
Totop&&Totop.addEventListener("click", () =>{
   window.scrollTo({ top: 0, behavior: "smooth" });
})

window.addEventListener("scroll",()=>{
   if(window.scrollY>500){
      Totop.style.display="flex";
      navfix.classList.add("active_nav")
   }
   else{
      Totop.style.display="none";
      navfix.classList.remove("active_nav")
   }
})
//beastseal slider js
var swiper = new Swiper(".mySwiper", {
   spaceBetween: 10,
   slidesPerView: 4,
   freeMode: true,
   watchSlidesProgress: true,
 });
 var swiper2 = new Swiper(".mySwiper2", {
   spaceBetween: 10,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   thumbs: {
     swiper: swiper,
   },
 });
