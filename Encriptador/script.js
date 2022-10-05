const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector("#mensaje");
const btnCopy = document.querySelector(".copiar");
// const translate = document.querySelector(".button");

//-------------------------------------Encriptar mensaje------------------------
function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    // inputTexto.value = ""
    // btnCopy.style.display = "block"
}
function encriptar(stringEncriptada) {
    let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    // let error=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","á","é","í","ó","ú"];
    // stringEncriptada = stringEncriptada.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++) {
        // if (stringEncriptada.includes(error[i])) {
        //    alert("Solo se permiten minúsculas sin tilde")
        //border-color:red
        // }
       if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

//--------------------------------------------Desencriptar mensaje-------------

 function btnDesencriptar() {
    const textoEncriptado = desencriptar(mensaje.value)
    inputTexto.value = textoEncriptado
    // inputTexto.value = ""
 }
 function desencriptar(stringDesencriptada) {
     let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    // stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
 }

 //---------------------------copiar texto-------------------------------------

 function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    inputTexto.value=""
    alert("Texto Copiado")
 }

 //---------hablar---------------------------------------
 
document.getElementById('button') .addEventListener("click",()=>{
    decir(document.getElementById("mensaje").value);
});

function decir(mensaje) {
     speechSynthesis.speak(new SpeechSynthesisUtterance(mensaje));
 }



