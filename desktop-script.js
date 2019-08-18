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
		}, 2000);

	});




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
		}, 2000);

	});


//opens up section-2 on item click:

	$(function () {
	  $('.item').click(function () {
        $('#section-2').toggleClass('active');
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        return true;
      })
    })


//close section-2 when scroll back to top:

	window.onscroll = function(e) {	
		var bod = document.body; 
    	var doc = document.documentElement; 
    	doc = (doc.clientHeight)? doc : bod;
	
		if (doc.scrollTop == 0){
			if ($('#section-2').hasClass('active')){
		 		$('#section-2').removeClass('active');
			}  
		};      
	};

//scroll to bottom onclick of "Bottom"
//scroll to top onclick of "Top"

	$(function () {
	  $('#lang').click(function () {
  		$("html, body").animate({ scrollTop: $(document).height() }, 1000);
  		$("#lang-2").css('display','inline');
  		$("#lang").css('display','none');
  	  })
	})

	$(function () {
	  $('#lang').click(function () {
	  	$("html, body").animate({scrollTop: 0}, 500);
  		$("#lang").css('display','inline');
  		$("#lang-2").css('display','none');
  	  })
	})


// When the user scrolls down 100px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
  		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
    		document.getElementById("lang-2").style.display = "inline";
    		document.getElementById("lang").style.display = "none";
  		} else {
    		document.getElementById("lang").style.display = "inline";
    		document.getElementById("lang-2").style.display = "none";
  		}
	}
	
// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
  		document.body.scrollTop = 0;
  		document.documentElement.scrollTop = 0;
	}	


// signals that this is script for Desktop media size
	console.log("DESKTOP");

}

//MOBILE SCRIPT ____________________________________________________________

else {

	$(window).load(function() {
		$('html,.container-fluid,header,footer,main').css('background-color','lightgrey');	
	});

	console.log("MOBILE");

}


// ("position":"fixed","align-items":"center","display":"flex", "justify-content":"center","position":"fixed");


	