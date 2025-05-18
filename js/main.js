$(window).scroll(function(){
    if ( $(this).scrollTop() > 10) {
        $('.header').addClass("fixed")
    } else {
        $('.header').removeClass("fixed")
    }
});