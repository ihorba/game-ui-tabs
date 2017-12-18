;(function($) {
	"use strict";

	$('.ba-tab').on('click', function(e){
		e.preventDefault();
		$('.ba-tab').removeClass('active');
		$(this).addClass('active');

		var id = $(this).find('a').attr('href');

		$('.ba-game__body').removeClass('active');
		$(id).addClass('active');
	});


})(jQuery);

