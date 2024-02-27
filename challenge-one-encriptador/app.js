let mensaje = document.getElementById('mensaje');

let matriz=[
    ['e','enter'],
    ['i','imes'], 
    ['a','ai'], 
    ['o','ober'],
    ['u','ufat'],
];

function asignarTexto(elemento,texto){
    let elementoHtml= document.querySelector(elemento);
    elementoHtml.innerHTML= texto;
};
asignarTexto('h3','Ningun mensaje fue encontrado');
asignarTexto('h4','Ingresa el texto que desees encriptar o desencriptar');

function btnEncriptar(){
    let texto= mensaje.value;
    encriptar(texto);
    asignarTexto('h3',encriptar(texto));
    document.querySelector('h4').style.display = "none";
};

function encriptar(fraseEncriptada){
for (let i= 0; i<matriz.length; i++){
    if(fraseEncriptada.includes(matriz[i][0])){
        fraseEncriptada = fraseEncriptada.replaceAll(
            matriz[i][0],
            matriz[i][1]
        )
    }
}
return fraseEncriptada;
};


function btnDesencriptar(){
    let texto= mensaje.value;
    desencriptar(texto);
    asignarTexto('h3',desencriptar(texto));
    document.querySelector('h4').style.display = "none";
};

function desencriptar(fraseDesencriptada){
    for (let i= 0; i<matriz.length; i++){
        if(fraseDesencriptada.includes(matriz[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz[i][1],
                matriz[i][0]
            )
        }
    }
    return fraseDesencriptada;

} 