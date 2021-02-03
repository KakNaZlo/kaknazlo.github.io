$(document).ready(function () {
    $('.important_block__item, .important_block__item_info').click(function(){

        var $td = $(this);

        if($(this).hasClass('important_block__item')){
            var target =  $(this).data('target');
            $td = $(".item_" + target);
        }

        $td.toggle()
            .siblings().hide();
    });
})

