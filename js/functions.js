$(window).load(function() {
  $(".loader").fadeOut("slow");
  $('html').css('overflow', 'visible');
})

$('.js-topBarOpen').click(function(e) {
	e.preventDefault();
	$(this).find('span').toggleClass('icon-arrow-up4', 'icon-arrow-down4')
		$('.top-hidden-box').slideToggle('400');
})


$("#carouselNewProducts").carouFredSel({
	auto : false,
	width   : "100%",
	prev : "#carouselNewProductsPrev",
	next : "#carouselNewProductsNext"
});


$("#carouselPopularProducts").carouFredSel({
	auto : false,
	width   : "100%",
	prev : "#carouselPopularProductsPrev",
	next : "#carouselPopularProductsNext"
});


new WOW().init();

