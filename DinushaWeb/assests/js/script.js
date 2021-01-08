$(document).ready(function () {
    $('.js--section-recentdevolopment').waypoint(function (direction) {
        if (direction == "down"){
            $('.h').addClass('sticky');
        }else {
            $('.h').removeClass('sticky');
        }
    },{
        offset: '60px;'
    });
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

});