$(document).ready(function() {
	$('.p-reviews-slider').owlCarousel({
		nav:true,
		responsive:{
			0:{
				items:1
			},
			992:{
				items:2
			}
		}
	});

	$('.p-recommend-slider').owlCarousel({
		nav:true,
		responsive:{
			0:{
				items:2
			},
			767:{
				items:3
			},
			992:{
				items:6
			}
		}
	});

	$('.fb-button').fancybox();

	$('.p-indexdes__more').on('click', function() {
		$(this).parent().children('.p-indexdes__more-block').slideToggle(400);
		$(this).remove();
		return false;
	});

	if ($(window).width() > 991) {
		$('.nav-menu li').hover(function() {
			$(this).children('.nav-submenu').stop(true, false).slideDown();
		}, function() {
			$(this).children('.nav-submenu').stop(true, false).slideUp();
		});
	}
	if ($(window).width() < 991) {
		$('.nav-menu__mob').on('click', function() {
			$(this).parent().children('.nav-menu').slideToggle();
			return false;
		});

		$('.nav-menu li a').on('click', function() {
			$(this).parent().children('.nav-submenu').slideToggle();
			return false;
		});
	}

	

	$(window).scroll(function() {
		if($(this).scrollTop() != 0)
			$('.scroll-top').fadeIn(300);
		else
		$('.scroll-top').fadeOut(300);
	});
	$('.scroll-top').on("click", function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false
	});
});