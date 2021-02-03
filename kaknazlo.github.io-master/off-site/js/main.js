$('.slide-block').slick({
    dots: !0, 
    appendDots:$('.slide-dots'),
    appendArrows: $('.slide-arrow-block'),
    prevArrow: '<button id="prev" type="button" class="btn btn-prev"> </button>',
    nextArrow: '<button id="next" type="button" class="btn btn-next"> </button>'
});

document.querySelector(".mob").onclick = function(){
    document.querySelector(".nav-block").classList.toggle("nav-block__mob");
}