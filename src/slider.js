$('#recipeCarousel').carousel('pause');

$(window).on('scroll',()=>{
    var scroll = $(window).scrollTop();

    if (scroll >= 450) {
        $(".home-nav").addClass("home-nav-scroll");
    } else {
        $(".home-nav").removeClass("home-nav-scroll");
    }
})