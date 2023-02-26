// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
/*  Debe funcionar solo con letras minúsculas
    No deben ser utilizados letras con acentos ni caracteres especiales

    Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
    Por ejemplo:
    "gato" => "gaitober"
    gaitober" => "gato"

    La página debe tener campos para
    inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
    El resultado debe ser mostrado en la pantalla.
*/


//DOM

const output =  document.querySelector(".salida");

const encriptarBoton = document.querySelector(".botonEncriptar"); //encriptar

const desencriptarBoton = document.querySelector(".boton-desencriptar"); //desencriptar 

const copiarBoton = document.querySelector(".boton-copiar"); //copiar 


const letrasPorEncriptar =["e","i","o","a","u"];
const letrasYaEncriptadas =["enter","imes","ober","ai","ufat"]

//Recibir y encriptar texto

encriptarBoton.addEventListener("click",
() => {

     let input = document.getElementById("input").value; //entrada de texto
     let text = input.replaceAll(" ","");
    
      // Expresión regular para verificar si solo hay letras minúsculas
      let regex = /^[a-z]+$/;

      if (!text.match(regex)) {
        alert('El texto debe contener solo letras minúsculas.');
        return;
      }

      for(let i = 0; i <= letrasPorEncriptar.length; i++){
        input = input.replaceAll(letrasPorEncriptar[i],letrasYaEncriptadas[i]);
      }
      output.innerHTML = input;
  
    }      
);
//Recibir y desencriptar texto
  
desencriptarBoton.addEventListener("click",
() => {

    let input = document.getElementById("input").value;//entrada de texto

        for(let i = 0; i <= letrasYaEncriptadas.length; i++){
            input = input.replaceAll(letrasYaEncriptadas[i],letrasPorEncriptar[i]); 
        }
      console.log(input);
      output.innerHTML = input;
    }
);

//Copiar texto 

function copiarTexto (){
  let texto = document.getElementById("output");
  texto.select();
  texto.setSelectionRange(0,99999);
  document.execCommand('copy');
}