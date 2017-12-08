;'use strict';

(function($){
    $(document).ready(function(event){
    	$(document).foundation(); // foundation init

    	// hamburger cross animation
    	$('.hamburger').click( function(e){
				$(this).toggleClass('hamburger--active');
			})

    	// hero background slick slider
			$(".hero__sliders-wrap").slick({
			  infinite: false,
			  dots: false,
			  arrows: false,
			  speed: 2000,
			  fade: true,
			  cssEase: 'ease',
			  autoplay: true,
			  autoplaySpeed: 4000,
			  pauseOnHover: false,
			});

			//menu tabs
			$(".menu__tabs-title-link").click( function(event){
				event.preventDefault();
				var currentClass = "menu__tabs-title-link";
				var activeMenuClass = currentClass+"--active";
				var activeTabClass = "menu__tabs-content-element--active";

				
				if( !$(this).hasClass(activeMenuClass)){
					var $currentLink = $("."+currentClass+"."+activeMenuClass);
					var $currentTabDataId = $currentLink.attr("href");
					$currentLink.toggleClass(activeMenuClass);
					$($currentLink.parents('div')[0]).find('[data-id="'+$currentTabDataId+'"]').toggleClass(activeTabClass);

					$targetLink = $(this);
					$targetLink.toggleClass(activeMenuClass);
					$($targetLink.parents('div')[0]).find('[data-id="'+$targetLink.attr("href")+'"]').toggleClass(activeTabClass);
				}
				
			});
    })
})(jQuery);