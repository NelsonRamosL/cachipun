$(document).ready(function () {

console.log("entramos en js");



//   Cambiar color mouse pasa sobre y cuando sale de posicion buelve a color blanco
$(".fas").mouseover(function() {
    $(this).css('background-color','red');
  });

$(".fas").mouseleave(function() {
  $(this).css('background-color','white');
  });



  $(".fas").click(function() {
var mano;

    $(this).css('background-color','green');

    document.getElementById("tiempo").style.visibility = "visible";
    console.log("aparecer");
    // $("#tiempo").show();
    setTimeout(function(){
        $("#tiempo").css('visibility','hidden');
        console.log("desaparecer")
    },5000); 

    
    if (this.className == "fas fa-hand-paper") mano =1;
    if (this.className == "fas fa-hand-rock") mano =2;
    if (this.className == "fas fa-hand-scissors") mano =3;

    console.log(this.className+ " " + mano);


  });








})