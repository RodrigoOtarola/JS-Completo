/*let nombreUsuario = 'Rodrigo';

let estado = true;

console.log(`Bienvenido: ${nombreUsuario.toUpperCase()}`);//operador ternario

console.log(`${estado ? 'En linea' : 'offline'}`);*/

/*Diferencias entre let y const

    1) Si se ocupa let y se repite la variable arroja error, en var reemplaza el valor.
    2) Permite reemplazar el valor

 */

//Array

/*const miArray = []
miArray[0]='Sandia'
miArray.push ('Pera');//Inserta al final.
miArray.unshift('Melon');//Inserta al comienzo.

console.log(miArray);

let eliminado = miArray.pop();//Elimina el ultimo del arreglo
console.log(miArray);
console.log(`Eliminada : ${eliminado}`);*/

//Ejercicio

// const frutas = []
// const fruta = prompt('Que fruta desea comprar?');
//
// frutas.push(fruta);
//
// while (confirm('¿Desea agregar otro producto?')){
//     const fruta = prompt('¿Que fruta desea comprar?');
//     frutas.push(fruta);
// }
// console.log('Usted compro: \n');
// for (let fruta of frutas){
//     console.log(fruta);
// }

//Funcion declarativa, siempre podran ser llamadas hoisting
// function numeroAleatorio(min,max){
//     return Math.floor(Math.random() * (max-min)) + min;//random para numero aleatorio
// }
//
// console.log(numeroAleatorio(10,20));

//Función expresiva, orden logico.
// const numAzar = function (min, max){
//     return Math.floor(Math.random() * (max-min)) + min;//random para numero aleatorio
// }
//
// console.log(numAzar(100,200));

//Funciones de flecha, posterior a la flecha mayor sera retornado ejemplo => Math.floor(Math.random() * (max-min)) + min;.

// const azarFlecha =  (min,max) =>
//     Math.floor(Math.random() * (max-min)) + min;
//
// console.log(azarFlecha(20,30));

//Arrow y foreach, con index por defecto traera los numeros iterados
// let frutas = ["Sandia","Melon","Manzana"];
//
// frutas.forEach((fruta,index)=>{
//     console.log(`${index+1} ${fruta}`);
// });
// console.log(frutas);