$(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('.my-navbar').addClass("navbar-hide");
    } else {
        $('.my-navbar').removeClass("navbar-hide");
    }
});
