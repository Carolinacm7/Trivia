const preguntas = [

    {
        pregunta: "Libertad sin vuelta atrás¡que mas da!No me importa yaGran tormenta habrá El frío es parte también de mi...'",
        respuestas: ["Frozen", "Tierra de Osos", "Enredados", "Anastasia"],
        correcta: 0
    },

    {
        pregunta: "Que significa 'The elephant in the room",
        respuestas: ["un objeto de gran tamano en un espacio muy pequeño", "una habitación grande donde caben todos", "Un problema que todos ven pero evitan", "no significa nada"],
        correcta: 2
    },

    {
        pregunta: "'One-Trick pony'es una persona",
        respuestas: ["hermosa", "con una sola cualidad", "que sabe de magia", "que le gustan los ponis"],
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