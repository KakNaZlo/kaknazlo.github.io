//menu  
$(".burge").on('click', function () {
    $(this).find(".burger_button").toggleClass("burger_button_active");
    $(this).find(".burger_nav").toggleClass("burger_active");
    $(this).find(".burger_overlay").toggleClass("burger_overlay_active");
    $("body").toggleClass("body_hidden");
    $(".log-in").toggleClass("log-in-menu-active");
});

$('.burger_button').on('click', (e) => {
    e.preventDefault();
});


//scroll
var rellax = new Rellax('.rellax');
