$(document).ready(function () {

console.log("entramos en js");



//   Cambiar color mouse pasa sobre y cuando sale de posicion buelve a color blanco
$( ".fas" ).mouseover(function() {
    $(this).css('background-color','red');
  });

$( ".fas" ).mouseleave(function() {
  $(this).css('background-color','white');
  });



  $( ".fas" ).click(function() {
    $(this).css('background-color','green');
  });








})