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
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          // var $target = $(target);
	          // $target.focus();
	          // if ($target.is(":focus")) { // Checking if the target was focused
	          //   return false;
	          // } else {
	          //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	          //   $target.focus(); // Set focus again
	          // };
	        });
	      }
	    }
	  });
  //
	setup()
		
})(jQuery);