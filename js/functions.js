$(window).load(function() {
  $(".loader").fadeOut("slow");
  $('html').css('overflow', 'visible');
})

$('.js-topBarOpen').click(function(e) {
	e.preventDefault();
	$(this).find('span').toggleClass('icon-arrow-up4', 'icon-arrow-down4')
		$('.top-hidden-box').slideToggle('400');
})

$(window).load(function() {
    $('#slider').nivoSlider();
});
