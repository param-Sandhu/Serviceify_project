$(function () {
    $('#scrollToTop').bind("click", function () { // Scroll to top
        $('html, body').animate({ scrollTop: 0 }, 1200);
        return false;
    });
});