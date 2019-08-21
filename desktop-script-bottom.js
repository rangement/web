// SCRIPTS PLACED AT BOTTOM OF HTML INSIDE BODY. 



if (screen.width >= 471) {  // MEDIA SIZE DESKTOP




  // Dates the page upon load (displayed in 'footer #para1'):
  document.getElementById("para1").innerHTML = formatAMPM();

    function formatAMPM() {
    let d = new Date(),
      // minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
      // hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
      // ampm = d.getHours() >= 12 ? 'pm' : 'am',
      months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
      days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      at = "at";
      return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear();
      // +', '+hours+':'+minutes+ampm
    }
      


  // When the user scrolls down 100px from the top of the document, show the button:
  function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
        document.getElementById("lang-2").style.display = "inline";
        document.getElementById("lang").style.display = "none";
      } else {
        document.getElementById("lang").style.display = "inline";
        document.getElementById("lang-2").style.display = "none";
      }
  }

  // Close section-2 when scroll back to top:
  function closeSection2(){
    var bod = document.body; 
      var doc = document.documentElement; 
      doc = (doc.clientHeight)? doc : bod;
      $('.item-image').css('display','none');
  
    if (doc.scrollTop == 0){
      if ($('#section-2').hasClass('active')){
        $('#section-2').removeClass('active');
        $('.item-carousel').removeClass('active');
      }  
    };      
  };

  // Launch both functions:
  window.onscroll = function() {scrollFunction();closeSection2()};


  // Scroll to bottom onclick of "Bottom":
  $(function () {
    $('#lang').click(function () {
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      $("#lang-2").css('display','inline');
      $("#lang").css('display','none');
      })
  })
  // Scroll to top onclick of "Top":
  $(function () {
    $('#lang-2').click(function () {
      $("html, body").animate({scrollTop: 0}, 500);
      $("#lang").css('display','inline');
      $("#lang-2").css('display','none');
      })
  })



  // Slidetoggle About menu:
  $(document).ready(function(){
    $("#name .about").click(function(){
      $("#about").slideToggle();
      $("#about").css('display','block');
    });
  });
 





  // Signals that this is script for Desktop media size:
  console.log("DESKTOP");

}





//MOBILE SCRIPT ____________________________________________________________



else if (screen.width <= 470) {   // MEDIA SIZE MOBILE


    $(window).load(function() {
    $('footer #para1').css('display','none'); 
    });


  // Signals that this is script for Mobile media size:
  console.log("MOBILE");

}

