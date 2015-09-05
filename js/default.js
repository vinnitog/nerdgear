$(function() {
    $('.page-scroll').click(function(event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.page-scroll').click(function() {
    $('.navbar-toggle:visible').click();


});