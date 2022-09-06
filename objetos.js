//Objetos, es una coleccion de propiedades.
//Properties, nombre que da origen al valor, ejemplo 'nombre':'Rodrigo'

const gato = {
    'nombre':'Valiente',
    'duerme':true,
    'edad':10,
    'enemigo':['Agua','Perros'],
    'otros':{
        'amigos':['cobarde','timidp'],
        'favoritos':{
            'comida':{
                'frio':'Salmon',
                'caliente':'Pollo',
            }
        }
}
}

console.log(gato.otros.amigos);

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




