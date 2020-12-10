"use strict";

window.addEventListener("load", function() {
  new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    autoplay: {
      delay: 3000,
    },
  });
});
