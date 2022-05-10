const preguntas = [

    {
        pregunta: "Libertad sin vuelta atrás¡que mas da!No me importa ya gran tormenta habrá el frío es parte también de mi...'",
        respuestas: ["Frozen", "Tierra de Osos", "Enredados", "Anastasia"],
        correcta: 0
    },

    {
        pregunta: "Una y otra vez cada ruta que hay sendas que tome me regresarán al lugar aquel dónde anhelo estar y no hay que ir jamás...",
        respuestas: ["Pocahontas", "Mulan", "Moana", "Blanca Nieves"],
        correcta: 2
    },

    {
        pregunta: "Fabulosa visión sentimiento divinobaja y sube y vuela hacia celestial región...",
        respuestas: ["Toy Story", "Aladin", "Coco", "Hercules"],
        correcta: 1
    }

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