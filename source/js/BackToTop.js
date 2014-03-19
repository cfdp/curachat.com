jQuery(document).ready(function() {
    var offset = 220;
    var duration = 800;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

jQuery(document).ready(function() {
    var offset = 100;
    var duration = 1000;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.fade_in_h1').fadeOut(duration);
        } else {
            jQuery('.fade_in_h1').fadeIn(duration);
        }
    });
});

jQuery(document).ready(function() {
    var offset = 80;
    var duration = 1000;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.fade_in_img').fadeOut(duration);
        } else {
            jQuery('.fade_in_img').fadeIn(duration);
        }
    });
});
