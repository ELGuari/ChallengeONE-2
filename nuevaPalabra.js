let botonAgregarPalabra = document.querySelector('#btnNuevaPalabra');

botonAgregarPalabra.addEventListener ('click', function (e){
    e.preventDefault();
    let p = document.querySelector('#inputNuevaPalabra').value;
    let nuevaPalabra = p.toUpperCase ();

    palabras.push(nuevaPalabra);
    console.log(palabras)

})