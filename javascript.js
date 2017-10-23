$('.btn-recept').click(function(){
    var $this = $(this).toggleClass('.btn-recept');
       if($(this).hasClass('.btn-recept'))
               {
             $(this).text('sakrijte recept');

           } else {
             $(this).text('pogledajte recept');
               }
});