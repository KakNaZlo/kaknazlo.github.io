$('.slide-block').slick({
    dots: !0,
//    dotsClass: "slide-dots",
    appendDots:$('.slide-dots'),
    appendArrows: $('.slide-arrow-block'),
    prevArrow: '<button id="prev" type="button" class="btn btn-prev"> Туда</button>',
    nextArrow: '<button id="next" type="button" class="btn btn-next">Сюда </button>'
});

document.querySelector(".mob").onclick = function(){
    document.querySelector(".nav-block__content").classList.toggle("nav-block__mob");
}

 