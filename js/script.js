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

// -- VERSTIONE CON FUNCTION (Non funziona, perchè?) --
// function dropDown(menu){
//   // dichiarazione sezione richiamata
//   var thisSection = $(this).find(menu);
//   // addiziona/rimuovi classe
//   $('.active').removeClass('active');
//   thisSection.addClass('active');
//   $('.active').mouseleave(function(){
//     // rimuovi classe quando lasci l'area cliccata
//     thisSection.removeClass('active');
//   });
// }
//
// $(document).ready(function (){
//
//   // assegnazione classe "active", al click
//   $('.menu-links>li').click(function(){
//     dropDown('.section-menu');
//   });
//
// })
