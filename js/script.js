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
const clientWrapper = document.querySelectorAll(".client__items");

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	addAnimation();
};

function addAnimation() { 
	clientWrapper.forEach((clientWrapper) => {
    clientWrapper.setAttribute("data-animated", true);
  });
};
//========================================================================================================================================================
const blogSwiper = new Swiper(".blog__swiper", {
  // Optional parameters
  slidesPerView: 1,

  loop: true,
  breakpoints: {
    // when window width is >= 320px
    560: {
      slidesPerView: 1.2,
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