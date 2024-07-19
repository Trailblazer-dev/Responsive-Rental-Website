// Header shadow

const headerShadow = ()=>{
    const header= document.getElementById('header');
    
    this.scrollY >= 58 ?header.classList.add('header-shadow') : header.classList.remove('header-shadow');

}

window.addEventListener('scroll', headerShadow);


// Swiper

const swiper = new Swiper(".services__content,.reviews__content", {
  // Optional parameters
  direction: "horizontal",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  //If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Navigations

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop-200 ,
      sectionId = current.getAttribute("id");
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight){
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.add("active");
    } else {
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.remove("active");
    }
  });
};
window.addEventListener("scroll", scrollActive);

