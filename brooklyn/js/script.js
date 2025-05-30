// Строгий режим
'use strict'

window.addEventListener('load', windowLoad);
const html = document.documentElement;

function windowLoad() {
	document.addEventListener('click', documentActions);
	html.classList.add('loaded');
};
function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('.icon-menu')) {
		html.classList.toggle('menu-open');
	};
	targetElement.closest('.menu__link') && html.classList.contains('menu-open') ? html.classList.remove('menu-open') : null
};
//========================================================================================================================================================
const clientSwiper = new Swiper(".client__wrapper", {
  slidesPerView: 6,
  spaceBetween: 60,
  slidesOffsetAfter: 6,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },

    // when window width is >= 640px
    760: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});
//========================================================================================================================================================
const blogSwiper = new Swiper(".blog__swiper", {
  // Optional parameters
  slidesPerView: 'auto',

  //loop: true,
  breakpoints: {
    // when window width is >= 320px
    560: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    760: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  // If we need pagination
  pagination: {
    el: ".pagination",
    clickable: true,
  },
});
const responseSwiper = new Swiper(".response__swiper", {
	// Optional parameters
	
	slidesPerView: 1,
	
  
  loop: true,
 
  // If we need pagination
  pagination: {
    el: ".pagination",
    clickable: true,
  },
});