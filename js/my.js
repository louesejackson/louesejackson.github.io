$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var navbar_height = $('.navbar').height() * 1.5;
   var offset = startchange.offset();

   if ( offset ) {
     $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top - navbar_height) {
            $(".navbar").css('background-color', 'magenta');
         } else {
            $('.navbar').css('background-color', 'transparent');
         }
     });
   }
   else {
     $('.navbar').css('background-color', 'transparent');
   }
});
