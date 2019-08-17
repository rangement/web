//DESKTOP SCRIPT

// if($(window).width() > 500){

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



  	document.getElementById("para1").innerHTML = formatAMPM();

  	function formatAMPM() {
    let d = new Date(),
      minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
      hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
      ampm = d.getHours() >= 12 ? 'pm' : 'am',
      months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
      days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      at = "at";
      return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+', '+hours+':'+minutes+ampm;
  	}

// }

//MOBILE SCRIPT ____________________________________________________________


// if($(window).width() < 400){

// 	var show = 0;
// 	var timeset;
	
// 	$( window ).mousemove(function( event ) {
// 		window.clearTimeout(timeset);
// 		$('.item').mouseenter(function(){
// 			show = $(this).attr('alt').replace(/\D/g,''); 
// 			// /\D/g = global search for non-digit characters
// 		});
		
// 		var showDiv = 'item-image'+ show;

// 		$('.item-image').css('display','none');
// 		$('.item-image'+ show).css('display','flex');
// 		timeset = setTimeout(function(){ 
// 			$('.item-image').css('display','none'); 
// 		}, 1500);

// 	});



//   	document.getElementById("para1").innerHTML = formatAMPM();

//   	function formatAMPM() {
//     let d = new Date(),
//       minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
//       hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
//       ampm = d.getHours() >= 12 ? 'pm' : 'am',
//       months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
//       days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
//       at = "at";
//       return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+', '+hours+':'+minutes+ampm;
//   	}

// }