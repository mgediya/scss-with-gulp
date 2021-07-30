var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$(document).ready(function () {
	//do jQuery stuff when DOM is ready

	/* Responsive Jquery Navigation */
	$('.hamburger').click(function () {
		$('.mbnav').toggleClass('is-open');
		$('body').toggleClass('nav-open');
	});

	$('.mbnav .mbnav__backdrop').click(function () {
		$('.mbnav').removeClass('is-open');
		$('body').removeClass('nav-open');
	});

	var clickable = $('.mbnav__state').attr('data-clickable');
	$('.mbnav li:has(ul)').addClass('has-sub');
	$('.mbnav .has-sub>a').after('<em class="mbnav__caret">');
	if (clickable == 'true') {
		$('.mbnav .has-sub>.mbnav__caret').addClass('trigger-caret');
	} else {
		$('.mbnav .has-sub>a').addClass('trigger-caret').attr('href', 'javascript:;');
	}

	/* menu open and close on single click */
	$('.mbnav .has-sub>.trigger-caret').click(function () {
		var element = $(this).parent('li');
		if (element.hasClass('is-open')) {
			element.removeClass('is-open');
			element.find('li').removeClass('is-open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('is-open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('is-open');
			element.siblings('li').find('li').removeClass('is-open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

	// image carousel
	$('.image-carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// highlights carousel
	$('.hc_large').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.hc_thumb'
	});
	$('.hc_thumb').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.hc_large',
	arrows: false,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
	]
	});

	// testimonial carousel
	$('.testimonial-carousel').slick({
		dots: true,
		fade:true
	});


});

/* Script on load
------------------------------------------------------------------------------*/
$(window).on('load', function () {
	// page is fully loaded, including all frames, objects and images
	
	// explore gallery
	if ($('.tabbed-gallery').length > 0) {
		$('.tg_grid').isotope({
			itemSelector: '.tg_grid-item'
		});
	
		$('.tg_tab-switch li').click(function () {
			$('.tg_tab-switch li.active').removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$('.tg_grid').isotope({
				filter: selector
			})
			return false;
		});
	
		var result;
		var filterValue;
		var $grid = $(".tg_grid").isotope({
			itemSelector: ".tg_grid-item",
			filter: function () {
				var $this = $(this);
				var searchResult = result ? $this.text().match(result) : true;
				var selectResult = filterValue ? $this.is(filterValue) : true;
				return searchResult && selectResult;
			}
		});
	
		$(".tg_tab-switch-select").on("change", function() {
			filterValue = $(this).val();
			console.log(filterValue);
			$grid.isotope();
		});
	}

});

/* Script on scroll
------------------------------------------------------------------------------*/
$(window).on('scroll', function () {

});

/* Script on resize
------------------------------------------------------------------------------*/
$(window).on('resize', function () {

});

/* Script all functions
------------------------------------------------------------------------------*/