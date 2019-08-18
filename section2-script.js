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