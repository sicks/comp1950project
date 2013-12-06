$(document).ready(function() {
  var menuWidth;

  $(window).scroll(function(){
  	navWidth = determineNavWidth();

  	if ( $(window).scrollTop() >= 255 ) {
  		$("#lecture_nav").css({
  			position: 'fixed',
  			top: '10px',
  			width: navWidth
  		});
  	} else {
  		$("#lecture_nav").css({
  			position: 'static',
  			width: navWidth
  		});
  	}
  });

  $(window).resize(function(){
  	$(window).trigger('scroll');
  });

});

function determineNavWidth() {
	if ($(window).width() >= 992 && $(window).width() < 1200) {
		return '132px';
	} else if ($(window).width() >= 1200) {
		return '165px';
	}
};