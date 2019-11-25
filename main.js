// aggiungere le istruzioni jQuery necessarie e sufficienti per attivare l'hamburger menu.
// La struttura html e lo stile presente contengono già tutto l'occorrente per l'hamburger menu, ciò che dovete fare è capire com'è predisposto il tutto e incastrare le istruzioni js corrette per mostrare e nascondere l'hamburger menu su mobile.

$('.hamburger-menu').click(function() {
  $('ul li a').fadeIn();
});

$('.hamburger-menu').click(function() {
  $('ul li a').fadeOut();
});
