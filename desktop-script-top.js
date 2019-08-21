// SCRIPTS PLACED AND LOADED AT TOP OF HTML INSIDE BODY. 



if (screen.width >= 471) {  // MEDIA SIZE DESKTOP




	var show = 0;
	var timeset;
	
	$( window ).mousemove(function( event ) {
		window.clearTimeout(timeset);
		$('.item').mouseenter(function(){
			show = $(this).attr('alt').replace(/\D/g,''); 
			// /\D/g = global search for non-digit characters
		});
		
		var showDiv = 'item-image'+ show;

		$('.item-image').css('display','none');
		$('.item-image'+ show).css('display','flex');
		timeset = setTimeout(function(){ 
			$('.item-image').css('display','none'); 
		}, 4000);
		if ($('#section-2').hasClass('active')){
		  $('.item-image').css('display','none');
	  }

	});






// signals that this is script for Desktop media size
	console.log("DESKTOP");

}





//MOBILE SCRIPT ____________________________________________________________



else if (screen.width <= 470){   // MEDIA SIZE MOBILE

  
  	// Check that any code here actually works:
	// $(window).load(function() {
	// 	$('html a,.container a,header a,header .about,footer a,main a').css('color','red');
	// 	$('.cls-1').css('fill','red');		
	// });


// $('.item-image').css('display','none');

	console.log("MOBILE");

}


// ("position":"fixed","align-items":"center","display":"flex", "justify-content":"center","position":"fixed");


	