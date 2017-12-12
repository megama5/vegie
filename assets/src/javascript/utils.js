function Utils(){};

Utils.prototype = {
	constructor: Utils,
	smoothScrollTo: function(id){
		var $obj = $(id);
 		var offset = $obj.offset().top;
 		$('html, body').animate({
		   scrollTop: offset
		 }, 1000);
	},
	isElementInView: function(htmlElement, fullyInView){
		var pageTop = $(window).scrollTop();
		var pageBottom = pageTop + $(window).height();
		var elementTop = $(htmlElement).offset().top;
		var elementBottom = elementTop + $(htmlElement).height();

		if(fullyInView === true){
			return ( (pageTop < elementTop) && (pageBottom > elementBottom) );
		}else{
			return ( (elementTop <= pageBottom) && (elementBottom >= pageTop) );
		}
	}
};

var Utils = new Utils();