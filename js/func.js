$(document).ready(function() {
  var menuWidth;

  $(window).scroll(function(){
  	navWidth = determineNavWidth();
    
    if ($("#lecture_list ul").is(":visible") && $("#other_links ul").is(":visible")) {
      fixedPoint = 877;
    } else if($("#lecture_list ul").is(":hidden") && $("#other_links ul").is(":visible")) {
      fixedPoint = 469;
    } else if ($("#lecture_list ul").is(":visible") && $("#other_links ul").is(":hidden")) {
      fixedPoint = 671;
    } else {
      fixedPoint = 263;
    }
    
  	if ( $(window).scrollTop() >= fixedPoint ) {
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

  $("a[href='#other_links']").click(function(){
    $("#other_links ul").toggle(0);
    return false;
  });
  $("a[href='#lecture_list']").click(function(){
    $("#lecture_list ul").toggle(0);
    return false;
  });
});

function determineNavWidth() {
	if ($(window).width() >= 992 && $(window).width() < 1184) {
		return '132px';
	} else if ($(window).width() >= 1184) {
		return '165px';
	}
};