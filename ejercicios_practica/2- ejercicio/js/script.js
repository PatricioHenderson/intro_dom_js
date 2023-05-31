"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"

*/
const btn1 = document.querySelector("#boton1")
const btn2 = document.querySelector("#boton2")
const btn3 = document.querySelector("#boton3")
btn1.textContent = `Copiar`
btn2.textContent = `Pegar`
btn3.textContent = `Cortar`

const buttons = document.querySelectorAll(".btn")
console.log(buttons)
buttons.forEach(button => {
    button.classList.add("electricidad");
  });
