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

