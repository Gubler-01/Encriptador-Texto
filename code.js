const inputMensaje = document.querySelector("#mensaje");        //se usa # porque es el id de la clase sino se coloca lo toma como una etiqueta
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
var mensaje;
var mensajeEncriptado;
inputMensaje.focus();
function validarMensaje(mensaje) {
    var permitido = "abcdefghijklmnñopqrstuvwxyz";
    for (var i = 0; i < mensaje.length; i++) {
      if (permitido.indexOf(mensaje[i]) === -1) {
        return false; // si encuentra un caracter no permitido, devuelve false
      }
    }
    return true; // si llega hasta aquí, el mensaje es válido
  }
  

function encriptar (){
    mensaje = inputMensaje.value;
    if(!validarMensaje(mensaje)){
        alert("El mensaje no debe contener letras mayusculas, numeros o caracteres especiales")
        inputMensaje.value = "";
        inputMensaje.focus();
    } else {
        mensajeEncriptado = mensaje
        .replaceAll("e", "enter")       //.replaceAll ("objeto a buscar", "remplazar con")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");
        inputResultado.value = mensajeEncriptado;
    }
    
}

function desencriptar (){
    mensajeEncriptado = inputMensaje.value;
    mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    inputResultado.value = mensaje;
}

function copiar(){
    mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado); // api que permite copiar el texto de la caja al portapapeles
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;