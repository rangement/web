//DESKTOP SCRIPT

if (screen.width >= 450) {

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
		}, 1500);

	});

	console.log("DESKTOP");

}

//MOBILE SCRIPT ____________________________________________________________

else {

	$(window).load(function() {

		$('html,.container-fluid,header,footer,main').css('background-color','lightgrey');
		$('a.item').click(function(e) {
    		e.preventDefault();
    		//do other stuff when a click happens
		});
		
		$(document).ready(function () {
    		$("a.item").click(function () {
        	$(this).next('div.item-image').slideToggle("slow");
    		});

		});

		
	});


	console.log("MOBILE");


}


// ("position":"fixed","align-items":"center","display":"flex", "justify-content":"center","position":"fixed");


	