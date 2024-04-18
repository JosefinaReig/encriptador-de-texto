let mensaje = document.getElementById('mensaje');
let mensajeEncriptado= document.getElementById('mensajeEncriptado');

let matriz=[
    ['e','enter'],
    ['i','imes'], 
    ['a','ai'], 
    ['o','ober'],
    ['u','ufat'],
];

function btnEncriptar(){
    let texto= mensaje.value;
    mensajeEncriptado.value =  encriptar(texto);
    /*document.getElementById('').style.display = "none";*/
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
    mensajeEncriptado.value = desencriptar(texto);

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

let btnCopiar = document.getElementById('copiar')
let mensajeCopiado= document.getElementById('mensajeCopiado')

btnCopiar.addEventListener('click', function(){
    mensajeEncriptado.focus()
    document.execCommand('selectAll'); 
    document.execCommand('copy');
    mensajeCopiado.innerHTML= 'Copiado al portapapeles'; 

    setTimeout(()=>mensajeCopiado.innerHTML ="", 1000)

})
