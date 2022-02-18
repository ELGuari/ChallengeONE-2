//AREA DE DISEÑO

let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'antiquewhite';
pincel.fillRect(0,0,900,1200);

function canvasPoste (){
    pincel.moveTo (30,10);
    pincel.lineTo (30,100);
}

function canvasBarraSup(){
    pincel.moveTo(30,10);
    pincel.lineTo(110, 10);
}

function canvasBase(){
    pincel.moveTo(110,10);
    pincel.lineTo(110,30);
}

function canvasCabeza(){
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.arc(110,45,15,0,2 *Math.PI,true);
    pincel.fill();
}

function canvasCuerpo(){
    pincel.fillStyle = 'black';
    pincel.fillRect(107,55,5,50);
}

function canvasBrazoIzq() {
    pincel.fillStyle= "black";
    pincel.moveTo(110, 60);
    pincel.lineTo(110, 65);
    pincel.lineTo(135, 80);
    pincel.lineTo(135, 75);
    pincel.fill();
}

function canvasBrazoDer() {
    pincel.fillStyle= "black";
    pincel.moveTo(110, 60);
    pincel.lineTo(110, 65);
    pincel.lineTo(85, 80);
    pincel.lineTo(85, 75);
    pincel.fill();
}

function canvasPiernaIzq() {
    pincel.fillStyle= "black";
    pincel.moveTo(110, 100);
    pincel.lineTo(110, 105);
    pincel.lineTo(85, 120);
    pincel.lineTo(85, 115);
    pincel.fill();
}

function canvasPiernaDer() {
    pincel.fillStyle= "black";
    pincel.moveTo(110, 100);
    pincel.lineTo(110, 105);
    pincel.lineTo(135, 120);
    pincel.lineTo(135, 115);
    pincel.fill();
}

function canvasTrazos() {
    for (var i=0; i<palabraSecreta.length; i++){
        pincel.fillStyle= "black";
        pincel.moveTo(150 + (70*i), 180);
        pincel.lineTo(200 + (70*i), 180);
        pincel.stroke();
    }
}
