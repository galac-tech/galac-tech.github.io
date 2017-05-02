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
		
})(jQuery);