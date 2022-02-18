let palabras = ['JUEGO', 'ALURA', 'ORACLE', 'INSTAGRAM', 'YOUTUBE', 'BANANA', 'AUTOMOVIL'];
let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

let cantidadErrores = 0;
let aciertos = 0;
let ingresos = "";
let letra = "";
let letrasPermitidas ="ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"
let letrasIncertadas =[]

canvasPoste();
canvasBarraSup();
canvasBase();
canvasMono();

//Funcionamiento Botones
let botonReglas = document.querySelector('#reglas');
botonReglas.addEventListener("click", mostrarReglas);

let botonIniciar = document.querySelector('#iniciarJuego');
botonIniciar.addEventListener("click", iniciarJuego);

function mostrarReglas (){
    alert('Descubra la palabra, solo puedes equivocarte 6 veces, para empezar a jugar toca el boton INICIAR ');
}

function iniciarJuego(){
    canvasTrazos();
    document.addEventListener("keyup", jugar);
}

function jugar(event){
    let l = event.key;
    let letra = l.toUpperCase();

if(letrasPermitidas.includes(letra)){
    if(!letrasIncertadas.includes(letra)){
        if(palabraSecreta.includes(letra)){
            for(let i =0; i<palabraSecreta.length; i++){
                var aPresenta = palabraSecreta[i];
                if(aPresenta == letra){
                    pincel.fillStyle = "black";
                    pincel.font = "45px Arial";
                    pincel.fillText(aPresenta, 155 + (70*i),175);

                    aciertos++;
                }
            }
        }else {
            ingresos = ingresos + letra;
            pincel.fillStyle = "black";
            pincel.font = "20px Arial";
            pincel.fillText("Ingresadas: " + ingresos, 20, 200);

            cantidadErrores++;
            letrasIncertadas.push(letra)
            
            canvasMono(cantidadErrores);
        }
        finDelJuego();
    }else {alert('usted ya ingreso esta letra')}
}else {alert('Utilice solo letras')}
}


function finDelJuego(){
    if(cantidadErrores >=6) {
        pincel.fillStyle = "red";
        pincel.font = "30px Arial";
        pincel.fillText("GAME OVER!", 170 ,70);
        pincel.fillText("A palavra era " + palabraSecreta, 200 ,100);

        document.removeEventListener("keyup", jugar);
    };

    if(aciertos == palabraSecreta.length) {
        pincel.fillStyle = "green";
        pincel.font = "30px Arial";
        pincel.fillText("YOU WIN!", 180 ,100);

        document.removeEventListener("keyup", jugar);
    };
};

function canvasMono(){
    switch(cantidadErrores){
        case 1:
            canvasCabeza();
            break;
        case 2:
            canvasCuerpo();
            break;
        case 3:
            canvasBrazoIzq();
            break;
        case 4:
            canvasBrazoDer();
            break;
        case 5:
            canvasPiernaIzq();
            break;
        case 6:
            canvasPiernaDer();
            break;
    }
}
