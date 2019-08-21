// SCRIPTS PLACED AND LOADED AT TOP OF HTML INSIDE BODY. 



if (screen.width >= 450) {  // MEDIA SIZE DESKTOP




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


// SLIDE TOGGLE

$(".initial").click(function () {
    var effect = 'slide';
    var options = { direction: $('.more').val() };
    var duration = 100;
    $('.initial').hide();
    $('.content').toggle(effect, options, duration);
});

$(".content").click(function () {
    var duration = 0;
    $('.content').toggle(duration);
    $('.initial').show();
});







// signals that this is script for Desktop media size
	console.log("DESKTOP");

}





//MOBILE SCRIPT ____________________________________________________________



else {   // MEDIA SIZE MOBILE

  
  	// Check that any code here actually works:
	$(window).load(function() {
		$('html a,.container a,header a,footer a,main a').css('color','red');
		$('.cls-1').css('fill','red');	
	});

	console.log("MOBILE");

}


// ("position":"fixed","align-items":"center","display":"flex", "justify-content":"center","position":"fixed");


	