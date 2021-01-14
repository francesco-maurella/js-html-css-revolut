$(document).ready(function (){

  // assegnazione classe "active", al click
  $('.nav-menu>li').click(function(){
    // dichiarazione sezione richiamata
    var thisSection = $(this).find('.section-menu');
    // addiziona classe
    thisSection.toggleClass('active');
    $(this).mouseleave(function(){
      // elimina classe quando lasci l'area cliccata
      thisSection.removeClass('active');
    });
  });

})
