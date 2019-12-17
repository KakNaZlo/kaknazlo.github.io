(function($){
  $(function() {
    $('.header-nav-icon').on('click', function() {
      $(this).closest('.header-nav-block').toggleClass('menu_state_open');
    });
      $('.header-nav-item').click(function(){
   $(this).closest('.header-nav-block').removeClass('menu_state_open');
});
  });
   
})(jQuery);

function yearCheck() {
            let select = document.querySelector(".selectYear");
            let options = [];
            for (i = 1925; i <= 2019; i++) {
               var opt = i;
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el); 
                select.value = ("1990");
            }
        }

 yearCheck();

 

 $( function() {
    $( "#slider" ).slider({
        max: 4,
        step:1,
        value: 2,
        range: "min",
      animate: true
    });
  } );

$(document).ready(function () {
            window.asd = $('.SlectBox').SumoSelect({ csvDispCount: 3, selectAll:true, captionFormatAllSelected: "Yeah, OK, so everything." });   });


