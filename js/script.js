// funzione "uscita" dalla sezione, eliminando classe "active"
function exitSection(){
  $('.active').removeClass('active');
}

$(document).ready(function (){

  // assegnazione classe "active", al click
  $('.nav-menu li').click(function(){
    // dichiarazione sezione richiamata
    var thisSection = $(this).find('.section-menu');
    // rimuovi/addiziona classe
    exitSection();
    thisSection.addClass('active');
    $(this).mouseleave(function(){
      exitSection()
    })
  });

})
