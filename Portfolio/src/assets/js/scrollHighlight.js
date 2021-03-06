$(document).ready(function () {
    var aboutPosition = $('#about').offset().top;
    var workPosition = $('#portfolio').offset().top;
    var contactPosition = $('#contact').offset().top;

    $(window).scroll(function () {

        // currentScroll is the number of pixels from the top
        var currentScroll = $(this).scrollTop();

        if (contactPosition - 1 < currentScroll) {
            $('.nav-btn').removeClass('active');
            $("#contact-link").addClass('active');
        } else if (workPosition - 1 < currentScroll) {
            $('.nav-btn').removeClass('active');
            $("#work-link").addClass('active');
        } else if (aboutPosition - 1 < currentScroll) {
            $('.nav-btn').removeClass('active');
            $("#about-link").addClass('active');
        } else {
            $('.nav-btn').removeClass('active');
        }
    });
});