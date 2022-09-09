const lista = document.querySelector('#lista');

/*const li = document.createElement('li');
li.textContent = 'Elemento desde js';*/

/*Para agregar el contenido en el html, el nodo no puede estar en dos puntos del documento
lista.appendChild(li);*/

const paises = ['Chile', 'Bolivia', 'Peru'];

/*paises.forEach((pais)=>{
    lista.innerHTML +=`<li>${pais}</li>`//Se coloca el +=, ya que si se deja el = se sobreescribira el valor y no saldran los 3 paises.
});*/


//Fragmento
//const fragment = document.createDocumentFragment();

/*paises.forEach((pais)=>{
    /*
    const li = document.createElement('li');
    li.textContent = pais;

    //Para mostrar paises de atras para adelante.
    const newNode = document.createElement('li');
    newNode.textContent = pais;

    const referenceNode = fragment.firstChild
    //Para insertar antes de etiqueta
    fragment.insertBefore(newNode,referenceNode);

    //fragment.appendChild(li);
});
lista.appendChild(fragment);*/

/*paises.forEach((pais) => {
    lista.innerHTML += `
    <li class="list">
    <b>Pais: </b>
    <span class="text-primary">${pais}</span>
</li>
    `;
});
lista.appendChild(fragment);*/

//Template: Mecanismo para mantener contenido html del lado del cliente que no se renderiza cuando se carga una pagina,
// pero posteriormente debe ser instanciado durante el tiempo de ejecucion empleando JS

const fragment = document.createDocumentFragment();
const liTemplate = document.getElementById('liTemplate');

paises.forEach((pais)=>{
    //Clonar elemento liTemplate
    const clone = liTemplate.content.cloneNode(true);

    clone.querySelector('.text-primary').textContent = pais;
    fragment.appendChild(clone);
});
//Para que viajen elementos al DOM
lista.appendChild(fragment);
