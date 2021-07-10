$(document).ready(function () {
  console.log("entramos en js");


  // Funciones

  let jugarcachipun = (numero) => {
    for (let index = 1; index <= numero; index++) {
      console.log("siclo for");
    }
  }

  // jugada aleatoria computador
  let jugadacomputador = () => {

let jugada = Math.floor(Math.random() * 3)

if (jugada == 0) return 'fas fa-hand-paper';
if (jugada == 1) return 'fas fa-hand-rock'; 
if (jugada == 2) return 'fas fa-hand-scissors'; 
   console.log("jugada dentro del random :",jugada);
}




  // main

  var numero = prompt("Ingresar numero de veces que desea jugar")

  console.log(numero);





  jugarcachipun(numero);
  
  //   Cambiar color mouse pasa sobre y cuando sale de posicion buelve a color blanco
  $(".fas").mouseover(function () {
    $(this).css('background-color', 'red');
  });

  $(".fas").mouseleave(function () {
    $(this).css('background-color', 'white');
  });



  $(".fas").click(function () {
    var mano;

    $(this).css('background-color', 'green');

 

    

    let papel = "fas fa-hand-paper";
    let piedra = "fas fa-hand-rock";
    let tijeras = "fas fa-hand-scissors";
    let cpu = jugadacomputador();

    let contenidohtml = `<i class="${cpu}"></i>`;
    
    console.log(this.className + " " + cpu);
        
    document.getElementById("tiempo").innerHTML = contenidohtml;
     
   
  


  });








})