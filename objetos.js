//Objetos, es una coleccion de propiedades.
//Properties, nombre que da origen al valor, ejemplo 'nombre':'Rodrigo'

// const gato = {
//     'nombre':'Valiente',
//     'duerme':true,
//     'edad':10,
//     'enemigo':['Agua','Perros'],
//     'otros':{
//         'amigos':['cobarde','timidp'],
//         'favoritos':{
//             'comida':{
//                 'frio':'Salmon',
//                 'caliente':'Pollo',
//             }
//         }
// }
// }

//console.log(gato.otros.amigos);

// gato.color = 'Azul';
// gato.edad = 5;
// delete gato.duerme;
//

//Propiedad hasOwnProperty, si existe respondera true o false

// if(gato.hasOwnProperty("nombre")){
//     gato.nombre = 'hasOwn';
// }
//
// console.log(gato);

//Objetos anidados.

// const gato = {
//     'nombre': 'Valiente',
//     'duerme': true,
//     'edad': 10,
//     'otros':{
//         'enemigos': ['Agua', 'Perros'],
//         'amigos':['Cobarde','Timido','Pegajoso']
//     }
    /*comer(alimento){
        console.log(this)//Al ocupar this llama a todo el scope para imprimir, no se puede ocupar en arrow function
    },
    //Listar enemigos con forEach
    listarEnemigos(){
        this.enemigos.forEach((item)=>console.log(item))
    }*/

    //Impresion con for in, itera sobre todas las propiedades enumerables de un objeto que codificado en cadenas.
//}
/*for (let propiedad in gato) {
    console.log(gato[propiedad]);
}*/

//Object.values() (opens new window): devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
/*console.log(Object.values(gato));
Object.values(gato).forEach((item) => console.log(item))*/

// gato.comer('Pez');
// gato.listarEnemigos();

//Desestructuracion de objetos, se puede pasar nuevo valor con : ejemplo const {nombre:primerNombre}
//const {amigos:amigosArray} = gato.otros;
//console.log(edad);

// const [amigoUno,amigoDos] = amigosArray;
// console.log(amigoUno,amigoDos)

//Getter y Setter

const gato = {
    'nombre': 'Valiente',
    'duerme': true,
    'edad': 10,
    'enemigos': ['Agua', 'Perros'],
    get nombreMayuscula(){
        return this.nombre.toUpperCase();
    },
    set agregarEnemigo(nuevoEnemigo){
        this.enemigos.push(nuevoEnemigo);
    }
};
//Llamar get
//console.log(gato.nombreMayuscula);

//Llamar set
gato.agregarEnemigo = 'Juan';
console.log(gato.enemigos);
