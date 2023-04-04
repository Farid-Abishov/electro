//show department content
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
//show mobnav content
var OpenContent=document.querySelector(".openmobcontent");
var Mobnavcontent=document.querySelector(".mob_nav_content");
var Closecontent=document.querySelector(".closemobcontent");

OpenContent.addEventListener("click",()=>{
  Mobnavcontent.style.display="block";
})
Closecontent.addEventListener("click",()=>{
  Mobnavcontent.style.display="none";
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

//mark slider
var Mwiper = new Swiper(".markslider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    240: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

//increment and decrement number
const plus = document.querySelector('.plus_minus'),
  minus = document.querySelector('.minus_plus');

let number_el = document.querySelector('.number');

plus.addEventListener('click', () => {
  let val = parseInt(number_el.innerText);
  number_el.innerText = ++val;
});

minus.addEventListener('click', () => {
  let val = parseInt(number_el.innerText);
  number_el.innerText = --val;
});