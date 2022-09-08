const lista = document.querySelector('#lista');

const li = document.createElement('li');
li.textContent = 'Elemento desde js';

/*Para agregar el contenido en el html, el nodo no puede estar en dos puntos del documento
lista.appendChild(li);*/

const paises = ['Chile','Bolivia','Peru'];

paises.forEach(pais=>{
    lista.innerHTML +=`<li>${pais}</li>`//Se coloca el +=, ya que si se deja el = se sobreescribira el valor y no saldran los 3 paises.
});