
$( document ).on('load', function () {
    if($(".load_wrapper").is(":visible"))
    {
        $(".main_wrapper").css({"opacity":"0"});
        $(".load_wrapper").slideUp("800", function() {
            $(".main_wrapper").delay(100).animate({"opacity":"1.0"},800);
        });
    }


});
setTimeout(function () {
    $(".load_wrapper").css({"display":"none"});
    $(".contant_wrapper").css({"opacity":"1"});
}, 4000);
//popup

$('.form_btn').click( function() {
    $('.overlay').fadeIn();
});
$(document).mouseup( function (e) {
    var popup = $('.popup');
    if (e.target != popup[0] && popup.has(e.target).length === 0){
        $('.overlay').fadeOut();
    }
});

////

(function($) {

    var ready = true;

    $('.title_block__title').click(function(){

        if (ready) {

            ready = false;

            var textBlockClass = $(this).data('ref');
            var fourBlocks = $('.four-blocks');

            if (!$(this).hasClass('active')) { // showing

                $('.title_block__title.active').removeClass('active');
                $(this).addClass('active');

                if ($(this).hasClass('block-left')) { // moving right if left blocks are clicked
                    fourBlocks.removeClass('move_left').addClass('move_right');
                } else { // moving left
                    fourBlocks.removeClass('move_right').addClass('move_left');
                }

                // hiding currently visible text and showing needed text
                $('.block-text.active').not('.'+textBlockClass).removeClass('active');
                $('.block-text.'+textBlockClass).addClass('active');

            } else { // returning to base state

                $(this).removeClass('active');
                $('.block-text.active').removeClass('active');
                fourBlocks.removeClass('move_left').removeClass('move_right');

            }

            $('.close_btn').click(function(){
                $(this).removeClass('active');
                $('.block-text.active').removeClass('active');
                fourBlocks.removeClass('move_left').removeClass('move_right');
                $('.title_block__title.active').removeClass('active');
            })
            ready = true;
        }
    });

})(jQuery);