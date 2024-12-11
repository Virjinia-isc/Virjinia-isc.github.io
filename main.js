var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ingeniera en Sistemas Computacionales')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar lo puedes crear!')
    .pauseFor(2500)
    //número de caracteres que se va a borrar
    .deleteChars(6)
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();