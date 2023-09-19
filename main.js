
/*--------------------navbar section-------------*/

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0);
})


/*------------------FAQS section---------------*/

const faq=document.querySelectorAll('.faq');

faq.forEach((faqs)=>{
    faqs.addEventListener('click',()=>{
        faqs.classList.toggle('open');

        /*------------------plus-minus sign------------------*/
        const icon=faqs.querySelector('.faq_icon i');
        if(icon.className === "bx bx-plus"){
            icon.className ='bx bx-minus' ;
        }
        else{
            icon.className ="bx bx-plus";
        }
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        600:{
            slidesPerView:2,
        }
    }
  });


  /*------------nav buttons----------*/

  const menu=document.querySelector('.nav_menu');
  const openbtn=document.querySelector('#open-menu-btn');
  const closebtn=document.querySelector('#close-menu-btn');

  openbtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closebtn.style.display="inline-block";
    openbtn.style.display="none";
  })


  closebtn.addEventListener('click',()=>{
    menu.style.display="none";
    closebtn.style.display="none";
    openbtn.style.display="inline-block";
  })