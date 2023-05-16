const clave = "clave-secreta";
let textoEncriptado;
console.log(textoEncriptado)
// Función para encriptar texto
function encriptarTexto() {
  document.getElementById("imagen").style.visibility = "hidden";
  const textoOriginal = document.getElementById("textoOriginal").value;
  textoEncriptado = CryptoJS.AES.encrypt(textoOriginal, clave).toString();
  document.getElementById("textoEncriptado").value = textoEncriptado;

}
function copy(){
    document.getElementById("textoOriginal").value = "";
    const copiar =  document.getElementById("textoEncriptado").value;
    console.log(copiar);

    document.getElementById("textoOriginal").value = copiar;
}

// Función para desencriptar texto
function desencriptarTexto() {
  const textoEncriptado = document.getElementById("textoOriginal").value;
  const bytesDesencriptados = CryptoJS.AES.decrypt(textoEncriptado, clave);
  const textoDesencriptado = bytesDesencriptados.toString(CryptoJS.enc.Utf8);
  document.getElementById("textoEncriptado").value = textoDesencriptado;
  

}
