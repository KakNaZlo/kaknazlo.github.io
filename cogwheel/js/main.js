function rotateTo(deg) {

    var bplate = [
    "translate(-50%,-50%) rotate(", -90, "deg) translateY(-100px) rotate(", 190, "deg)"
  ];
    bplate[1] = deg;
    bplate[3] = deg;

    let roundSmall = [
        " rotate(", 190, "deg)"
    ];
    roundSmall[1] = deg;
    let roundMain = [
        "rotate(", -720, "deg)"
    ];
    roundMain[1] = deg;
    $(".big").css({
        "transform": bplate.join("")
    });
    $(".small ").css({
        "transform": roundSmall.join("")
    });
    $(".main-circle ").css({
        "transform": roundSmall.join("")
    });


}
$(".circle-block").click(function (e) {

    var deg = $(e.target).html()


    deg = deg === "1" ? 36 :
        deg === "2014" ? 90 :
        deg === "2015" ? 135 :
        deg === "2016" ? 180 :
        deg === "2017" ? 230 :
        deg === "2018" ? 268 :
        deg === "2019" ? 308 : -30;
    rotateTo(deg);
});


//popup
// form

$('.mess-item').click(function () {
    $('.overlay-form').fadeIn();

});

// Закрытие окна
$(document).mouseup(function (e) {
    var pop = $('.pop_form');
    if (e.target != pop[0] && pop.has(e.target).length === 0) {
        $('.overlay-form').fadeOut();

    }
});

// year-2014

$('.year-2014').click(function () {
    $('.overlay4').fadeIn();
    $('.year-2014').addClass("year-right-active");
});

// Закрытие окна
$(document).mouseup(function (e) {
    var pop = $('.pop_2014');
    if (e.target != pop[0] && pop.has(e.target).length === 0) {
        $('.overlay4').fadeOut();
        $('.year-2014').removeClass("year-right-active");
    }
});

// year-2015

$('.year-2015').click(function () {
    $('.overlay5').fadeIn();
    $('.year-2015').addClass("year-right-active");
});

// Закрытие окна
$(document).mouseup(function (e) {
    var pop = $('.pop_2015');
    if (e.target != pop[0] && pop.has(e.target).length === 0) {
        $('.overlay5').fadeOut();
        $('.year-2015').removeClass("year-right-active");
    }
});

// year-2016

$('.year-2016').click(function () {
    $('.overlay6').fadeIn();
    $('.year-2016').addClass("year-2016-active");
});

// Закрытие окна
$(document).mouseup(function (e) {
    var pop = $('.pop_2016');
    if (e.target != pop[0] && pop.has(e.target).length === 0) {
        $('.overlay6').fadeOut();
        $('.year-2016').removeClass("year-2016-active");
    }
});

// year-2017

$('.year-2017').click(function () {
    $('.overlay7').fadeIn();
    $('.year-2017').addClass("year-2017-active");

});

// Закрытие окна
$(document).mouseup(function (e) {
    var pop = $('.pop_2017');
    if (e.target != pop[0] && pop.has(e.target).length === 0) {
        $('.overlay7').fadeOut();
        $('.year-2017').removeClass("year-2017-active");
    }
});


// year-2018

$('.year-2018').click(function () {
    $('.overlay8').fadeIn();
    $('.year-2018').addClass("year-left-active");
});

// Закрытие окна
$(document).mouseup(function (e) {
    var pop = $('.pop_2018');
    if (e.target != pop[0] && pop.has(e.target).length === 0) {
        $('.overlay8').fadeOut();
        $('.year-2018').removeClass("year-left-active");
    }
});

// year-2019

$('.year-2019').click(function () {
    $('.overlay9').fadeIn();
    $('.year-2019').addClass("year-left-active");

});

// Закрытие окна
$(document).mouseup(function (e) {
    var pop = $('.pop_2019');
    if (e.target != pop[0] && pop.has(e.target).length === 0) {
        $('.overlay9').fadeOut();
        $('.year-2019').removeClass("year-left-active");
    }
});