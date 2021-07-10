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
    console.log("jugada dentro del random :", jugada);
  }

let mensajeganador = () => {

  let ganador = Math.floor(Math.random() * 10)

  if (ganador == 0) return 'Ganaste esta vez !!';
  if (ganador == 1) return 'Ganaste, tienes mucha suerte !!';
  if (ganador == 2) return 'Ganaste esta vez la proxima perderas!!';
  if (ganador == 3) return 'Ganaste, Hip, hip, ¡hurra!';
  if (ganador == 4) return 'Ganaste, Te sigues superando!! ';
  if (ganador == 5) return 'Ganaste, es solo suerte!!!';
  if (ganador == 6) return 'Ganaste, Sere un buen perdedor :(  !!! ';
  if (ganador == 7) return 'Ganaste, No me enojo la proxima ganare yo !!! ';
  if (ganador == 8) return 'Ganaste, Que felicidad ;) ';
  if (ganador == 9) return 'Ganaste, Ganaste, Ganaste !!!!!';
}

  let ganador = (jugador, cpu) => {

    if (jugador != cpu) {
      switch (jugador) {
        case "fas fa-hand-paper":
                 if (cpu == "fas fa-hand-scissors") return "Pierdes Contra Tijeras !!";
                 if (cpu == "fas fa-hand-rock") return mensajeganador();
          break;
            case "fas fa-hand-rock":
              if (cpu == "fas fa-hand-scissors") return mensajeganador();
              if (cpu == "fas fa-hand-paper") return "Pierdes Contra papel !!";
          break;
        case "fas fa-hand-scissors":
          if (cpu == "fas fa-hand-paper") return mensajeganador();
          if (cpu == "fas fa-hand-rock") return "Pierdes Contra roca !!";
          break
        case "fas fa-robot":
          return "No haga trampa, Robot Siempre gana";
          break
        default:
          // instrucciones
          break;
      }

    } else return "Resultado Empatado!!!"


    let papel = "fas fa-hand-paper";
    let piedra = "fas fa-hand-rock";
    let tijeras = "fas fa-hand-scissors";

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



    let jugador = this.className;


    let cpu = jugadacomputador();

    let contenidohtml = `<i class="${cpu}"></i>`;

    console.log(this.className + " " + cpu);

    document.getElementById("tiempo").innerHTML = contenidohtml;

    let resultado = ganador(jugador, cpu);

if (numero > 1) {
  --numero;
  resultado += `    ----- te quedan ${numero} juegos   ------`; 
} else {
  numero=prompt("te quedaste sin fichas de juego ingrese nueva cantidad para seguir jugando");

} 






    document.getElementById("resultado").innerHTML = resultado;
  });








})