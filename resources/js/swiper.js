

  // const swiper = new Swiper(".swiper", {
  //   // Optional parameters
  //   direction: "horizontal",
  //   loop: true,
  //   spaceBetween: 50,

  //   // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });


const productSwiper = new Swiper(".productSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },
});