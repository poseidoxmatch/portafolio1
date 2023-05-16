
let textoEncriptado;
function  encriptarTexto(){
  document.getElementById("imagen").style.visibility = "hidden";
  const textoOriginal = document.getElementById("textoOriginal").value;
    const chars = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
       'o': 'ober',
      'u': 'ufat'
    };
    
    
    textoEncriptado= textoOriginal.replace(/[eiaou]/g, m => chars[m]);
    document.getElementById("textoEncriptado").value = textoEncriptado;
    console.log(textoOriginal);
    }
    
    
   

    function desencriptarTexto(){
      const textoEncriptado = document.getElementById("textoOriginal").value;
var mapObj = {
 enter: 'e',
 imes: 'i',
 ai: 'a',
 ober: 'o',
 ufat: 'u'

};
const textoDesencriptado = textoEncriptado.replace(/enter|imes|ai|ober|ufat/g, function(matched){
  return mapObj[matched];
});
document.getElementById("textoEncriptado").value = textoDesencriptado;

}


function copy(){
  document.getElementById("textoOriginal").value = "";
  const copiar =  document.getElementById("textoEncriptado").value;
  console.log(copiar);

  document.getElementById("textoOriginal").value = copiar;
}