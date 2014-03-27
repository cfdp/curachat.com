// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).foundation('magellan',{
  // specify the class used for active sections
  activeClass: 'active',
  // how many pixels until the magellan bar sticks, 0 = auto
  threshold: 0
});

$(document).foundation({
  // specify the class used for active dropdowns
  active_class: 'open'
});

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

