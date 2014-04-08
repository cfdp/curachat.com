// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){


// TOGGLE MENU
  $(".toggle_menu a").click(function(){
    $(".mobil").slideToggle("slow");
});


// READ MORE TOGGLE
$(".read_more").click(function(){
    $(".read_more_toggle").slideToggle("slow");  
});

// SLIDE TO DIV

  $("[id*='Btn']").stop(true).on('click', function (e) {e.preventDefault();$(this).scrolld();})


});






