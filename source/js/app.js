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
  $(".toggle_menu a").click(function(){
    $(".drop_down").slideToggle("slow");
  });

  $("[id*='Btn']").stop(true).on('click', function (e) {e.preventDefault();$(this).scrolld();})
});




