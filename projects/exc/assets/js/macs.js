function setup(){
	$('#h').height(window.innerHeight+"px")
}

(function($) {
	// Handles the social badges
	$(".social-badge").on("mouseover", function(e){
		var elm = e.target;
		var cls = $(elm).attr("class").match(/ion-social-(.*)/)[1];
		$(elm).removeClass("ion-social-"+cls).addClass("ion-social-"+cls.split("-")[0])
	}).on("mouseout", function(e){
		var elm = e.target;
		var cls = $(elm).attr("class").match(/ion-social-(.*)/)[1];
		$(elm).removeClass("ion-social-"+cls).addClass("ion-social-"+cls+"-outline")
	})
	//
	// Handles the first section of the web page
	$(window).on('resize', function(){ 
    	$('#h').height(window.innerHeight+"px")          
	});
	//
	// Smooth scrolling when clicking hyperlinks
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	});
  //
	setup()
		
})(jQuery);