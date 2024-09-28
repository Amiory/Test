if (window.matchMedia("(min-width: 768px)").matches) {
} else {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

const productSwiper = new Swiper(".productSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  // simulateTouch: false,
  // touchEventsTarget: "container",
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
    },
  },
});
