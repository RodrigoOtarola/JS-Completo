
//console.log(document);Para imprimir todo el documento.

//console.log(document.title); Para imprimir el title del documento.

/*document.getElementById: Para obtener referencia desde id de html.
    .textContent: muestra el el texto del tag referenciado.
    .innerHTML: Para enviar contenido desde el js al html.
 */

//console.log(document.getElementById('tituloWeb').textContent);

/* DOMContentLoaded:Carga todo el dom y despues ejecuta script, cuando se deja tag script en el title


document.addEventListener("DOMContentLoaded",()=>{
    console.log(document.title);
    console.log(document.getElementById('tituloWeb').textContent);
})

console.log(document.title);
console.log(document.getElementById('tituloWeb').textContent);*/

/*querySelector: Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
 querySelectorAll: para seleccionar todos los elementos

console.log(document.querySelectorAll(".container .text-danger"));*/

const h1 = document.getElementById("tituloWeb");



/* Eventos: interaccion con el usuario se consigue mediante la captura de los eventos que este produce. Un evento es una acción
del usuario ante la cual puede realizarse algún proceso.
*/

/* addEventListener: Registra un evento a un objeto en especifico.

    sintaxis target.addEventListener(tipo 'click', listener ´funcion´);
 */

const boton = document.querySelector('.btn');
boton.addEventListener("click", ()=>{
    h1.textContent = 'Nuevo texto desde JS';
    h1.style.backgroundColor = 'red';
    h1.style.color= 'white';
})

