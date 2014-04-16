// loading while page loads
$(window).load(function() {
  $(".loader").fadeOut("slow");
  $('html').css('overflow', 'visible');
  	$('.site-name').addClass('animated');
})

// for top hidden box
$('.js-topBarOpen').click(function(e) {
	e.preventDefault();
	$(this).find('span').toggleClass('icon-arrow-up4', 'icon-arrow-down4')
		$('.top-hidden-box').slideToggle('400');
})

// carousel for popular items
$("#carouselNewProducts").carouFredSel({
	auto : false,
	width   : "100%",
	prev : "#carouselNewProductsPrev",
	next : "#carouselNewProductsNext"
});

// carousel for popular items
$("#carouselPopularProducts").carouFredSel({
	auto : false,
	width   : "100%",
	prev : "#carouselPopularProductsPrev",
	next : "#carouselPopularProductsNext"
});

// nivo slider
$(window).load(function() {
    $('#slider').nivoSlider();
});


// init for animation during scrolling
wow = new WOW(
{
boxClass: 'wow', // default
animateClass: 'animated', // default
offset: 0 // default
}
)

new WOW().init();

// quantity for product
$(document).ready(function() {
	
$(".but").on("click", function() {

  var $button = $(this);
  var oldValue = $button.parent().find("input").val();

  if ($button.hasClass('plus')) {
	  var newVal = parseFloat(oldValue) + 1;
	} else {
   // Don't allow decrementing below zero
    if (oldValue > 1) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 1;
    }
  }

  $button.parent().find("input").val(newVal);

});
});


