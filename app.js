// EVENTOS DE VIDEO
let video = document.querySelector('.botonvideo');

video.addEventListener('play', function(){
    console.log('Di play al video');
});

video.addEventListener('seeking', function(){
    console.log('Se esta viendo una parte del video', this.currentTime);
});
video.addEventListener('ended', function(){
    console.log('Terminó el video');
    alert('Se terminó el video');
    let decision = confirm('¿Deseas ver de nuevo el video');
    console.log(decision);
    if (decision){
        video.play();
    }else{
        window.location = "http://www.youtube.com"
    }
});

video.addEventListener('pause', function(){
    console.log('Se pausó el video');
});

// TEMPORIZADORES O TIMERS
setInterval
setTimeout

let temporizador = setInterval(function() {
    ponerColorBody();
}, 2000);

function ponerColorBody(){
    let pantalla = document.body;
    pantalla.style.backgroundColor = pantalla.style.backgroundColor == "blue" ? "green" : "blue";
}

setTimeout
setTimeout(function(){
    ponerColorBody();
},3000);

function ponerColorBody(){
    let pantalla = document.body;
    pantalla.style.backgroundColor = pantalla.style.backgroundColor == "blue" ? "green" : "blue";
}

// ARREGLOS, VECTORES, ARRAYS
// LAS POSISCIONES SE CUENTAN DESDE CERO
                    // posiciones
// let array =  [ 'uno', 'dos', 'tres'];

// let array2 =  [ 'cuatro', 'cinco', 'seis'];

// array2[1];

// let multidimensional = [ array,array2];

// multidimensional[0][1];