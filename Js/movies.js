const preguntas = [
  {
    pregunta: "Todos los días, viajaremos a un lugar nuevo, y todas las noches, dormiremos debajo el pez. Nadie nos dirá qué hacer. Solo tú y yo ahí afuera. Libres",
    respuestas: ["Ratatouille", "Red", "Intensamente", "Luca"],
    correcta: 3
  },
  {
    pregunta: "Tu chispa no es tu propósito. La última casilla se llena cuando estás listo para vivir",
    respuestas: ["Zootopia", "La bella y la bestia", "Soul", "Up:una aventura de altura"],
    correcta: 2
  },
  {
    pregunta: "Hace mucho tiempo, el mundo estaba lleno de maravillas. Fue aventurero. Fue emocionante. Y, sobre todo, había magia.",
    respuestas: ["Unidos (Onward)", "Aladin", "Desendientes", "Narnia"],
    correcta: 0
  },
];

let indice_aleatorio = 0;
let pregunta_txt = "";
let interval;

window.onload = iniciar();

function iniciar() {
  loadQuestions();
  if (localStorage.getItem("SCORE") != null) {
    localStorage.removeItem("SCORE");
  }
}

function iniciarCronometro() {
  const contador = 15, cronometroDisplay = document.getElementById("cronometro")

  iniciarTiempo(contador, cronometroDisplay)
}

function iniciarTiempo(duracion, componente) {
  interval = setInterval(() => {
    if (duracion === 0) {

      componente.innerHTML = "Se acabó el tiempo";

      clearInterval(interval);

      loadQuestions()

    } else {

      duracion = duracion < 10 ? "0" + duracion : duracion;

      componente.textContent = "00:" + duracion;

      duracion--;
    }
  }, 1000)
}

function loadQuestions() {
  iniciarCronometro();

  if (preguntas.length > 0) {

    indice_aleatorio = Math.floor(Math.random() * preguntas.length);

    pregunta_txt = "";

    pregunta_txt += '<p class="pregunta">' + preguntas[indice_aleatorio].pregunta + '</p>';

    pregunta_txt += '<button id="opcion0" class="botonTrivias" onclick="verificarRespuestaCorrecta(0, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[0] + '</button>';

    pregunta_txt += '<button id="opcion1" class="botonTrivias" onclick="verificarRespuestaCorrecta(1, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[1] + '</button>';

    pregunta_txt += '<button id="opcion2" class="botonTrivias" onclick="verificarRespuestaCorrecta(2, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[2] + '</button>';

    pregunta_txt += '<button id="opcion3" class="botonTrivias" onclick="verificarRespuestaCorrecta(3, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[3] + '</button>';

    document.getElementById("pregunta").innerHTML = pregunta_txt;

    preguntas.splice(indice_aleatorio, 1);

  } else {
    window.location.href = "../display/result.php";
  }
}

let puntos = 0;

function verificarRespuestaCorrecta(indice, correcta) {
  if (correcta === indice) {
    puntos = puntos + 5;
  }

  localStorage.setItem("SCORE", puntos);

  document.getElementById("opcion0").disabled = true;
  document.getElementById("opcion1").disabled = true;
  document.getElementById("opcion2").disabled = true;
  document.getElementById("opcion3").disabled = true;
}

document.getElementById("siguienteTrivia").addEventListener("click", () => { clearInterval(interval), loadQuestions() });