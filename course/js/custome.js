new Swiper('.swiper', {
	spaceBetween: 24,
	navigation: {
	  nextEl: '.arrow-next',
	  prevEl: '.arrow-pre',
	},
	slidesPerView: 1,
	breakpoints: {
	  768: {
		slidesPerView: 2,
		grid: {
		  rows: 1
		},
		spaceBetween: 24
	  },
	  992: {
		slidesPerView: 3,
		grid: {
		  rows: 1
		},
		spaceBetween: 24
	  }
	}
})
