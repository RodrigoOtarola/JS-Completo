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

const frutas = []
const fruta = prompt('Que fruta desea comprar?');

frutas.push(fruta);

while (confirm('¿Desea agregar otro producto?')){
    const fruta = prompt('¿Que fruta desea comprar?');
    frutas.push(fruta);
}
console.log('Usted compro: \n');
for (let fruta of frutas){
    console.log(fruta);
}