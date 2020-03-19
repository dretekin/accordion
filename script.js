$(document).ready(function() {
	$('.title').click(function() {
		var easing = 'spring(1, 90, 30, 5)', height;

		var contentWrapper = $(this).next();
		var content = contentWrapper.find('.content');
		var contentHeight = contentWrapper.find('.content').outerHeight();

			if(contentWrapper.hasClass('active')) {
				contentWrapper.removeClass('active')
				height = 0;
			} else {
				contentWrapper.addClass('active')
				height = contentHeight;
			}

		anime({
  			targets: contentWrapper[0],
			  height: height,
			  duration: 800,
			  easing: easing
		});
		anime({
  			targets: content[0],
			  translateY: height,
			  duration: 800,
			  easing: easing
		});

	})
});
	
