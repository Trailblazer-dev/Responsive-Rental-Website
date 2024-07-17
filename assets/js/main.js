// Header shadow

const headerShadow = ()=>{
    const header= document.getElementById('header');
    
    this.scrollY >= 58 ?header.classList.add('header-shadow') : header.classList.remove('header-shadow');

}

window.addEventListener('scroll', headerShadow);


// Swiper

const swiper = new Swiper(".services__content", {
  // Optional parameters
  direction: "horizontal",
  grabCursor: true,
  loop: true,
  //   centeredSlides: true,
  slidesPerView: "auto",
  //If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
