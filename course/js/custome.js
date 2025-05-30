new Swiper('.swiper', {
    slidesPerView: 3,
	spaceBetween: 24,
	breakpoints: {
		767: {
			slidesPerView: 1
		},
		992: {
			slidesPerView: 3
		},
	},
	navigation: {
		nextEl: '.arrow-next',
		prevEl: '.arrow-pre',
	},
	slidesPerView: 3,
});