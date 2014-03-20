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
    $(".drop_down").slideToggle("slow");
});


// READ MORE TOGGLE
$(".read_more").click(function(){
    $(".read_more_toggle").slideToggle("slow");  
});

// SLIDE TO DIV

  $("[id*='Btn']").stop(true).on('click', function (e) {e.preventDefault();$(this).scrolld();})
});

// jQuery(document).ready(function() {
//     var offset = 220;
//     var duration = 800;
//     jQuery(window).scroll(function() {
//         if (jQuery(this).scrollTop() > offset) {
//             jQuery('.back-to-top').fadeIn(duration);
//         } else {
//             jQuery('.back-to-top').fadeOut(duration);
//         }
//     });
    
//     jQuery('.back-to-top').click(function(event) {
//         event.preventDefault();
//         jQuery('html, body').animate({scrollTop: 0}, duration);
//         return false;
//     })
// });

// jQuery(document).ready(function() {
//     var offset = 100;
//     var duration = 1000;
//     jQuery(window).scroll(function() {
//         if (jQuery(this).scrollTop() > offset) {
//             jQuery('.fade_in_h1').fadeOut(duration);
//         } else {
//             jQuery('.fade_in_h1').fadeIn(duration);
//         }
//     });
// });

// jQuery(document).ready(function() {
//     var offset = 80;
//     var duration = 1000;
//     jQuery(window).scroll(function() {
//         if (jQuery(this).scrollTop() > offset) {
//             jQuery('.fade_in_img').fadeOut(duration);
//         } else {
//             jQuery('.fade_in_img').fadeIn(duration);
//         }
//     });
// });


