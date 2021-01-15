$(document).ready(function (){

  // assegnazione classe "active", al click
  $('.menu-links>li').click(function(){
    // dichiarazione sezione richiamata
    var thisSection = $(this).find('.section-menu');
    // addiziona/rimuovi classe
    $('.active').removeClass('active');
    thisSection.addClass('active');
    $('.active').mouseleave(function(){
      // rimuovi classe quando lasci l'area cliccata
      thisSection.removeClass('active');
    });
  });

})
