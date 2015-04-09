$(function(){
 
	var halfHeight = $(window).height() / 2;
 	var positions = {
 		footer: $('#footer').offset().top,
 		portfolio: $('#portfolio').offset().top,
 		logo: $('#logo').offset().top
 	};

	$(window).on('scroll', onScroll);

	function onScroll(){
		var currentScroll = $(window).scrollTop();
		var active;

		for(var i in positions)
		{
			if(positions[i] - currentScroll <  halfHeight && positions[i] - currentScroll > 0)
			{
				active = i;
				
			}
		}

		if(active){
			$('.scroll-point').removeClass('active');
			$('.scroll-point[data-num="'+active+'"]').addClass('active');
		}

	}

	onScroll();
 
});