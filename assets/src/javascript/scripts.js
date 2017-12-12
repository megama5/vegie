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

			// smooth scrolling
			$(".header__nav-list-link").click(function(event){
				event.preventDefault();
				if($(this).hasClass("header__nav-list-link--active")){
					return;
				}
				Utils.smoothScrollTo( $(this).attr("href") );
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


			// Animation
			$(document).on("scroll", function(){
				$(".animated").not('[class*="--finished"]').each( function(e){
					if( !Utils.isElementInView(this) ){ return; }
					if( $(this).hasClass('animated__top') ){
						$(this).removeClass("animated").addClass('animated__top--finished');
					}else if($(this).hasClass('animated__bottom')){
						$(this).addClass('animated__top--finished');
					}
				});
			});


    })
})(jQuery);