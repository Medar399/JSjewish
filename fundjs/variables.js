
const name1 = 'Armando'
const nolestanentendiendnada = 'hola'

console.log('hola mi nombre es: ' + name1)
//mejor de la sig manera
console.log(`Mi nombre es ${nolestanentendiendnada}`)



const name2 = 'hueee'

console.log(name2)
console.log("hello world")


//nunca meter un const por que no puede cambiar de valor a diferencia de un let
// let i;
// for(let i=0; i<=10; i++){
//      console.log(i);
// }

// console.log(i);


/////////////////////////////////////////////////////

//objetos

const moy6 = {
    //llave - valor
    name: 'moy6',
    age: 22,
    sabeProgramar: false,
    olor: 'huele a culo'
}

let nombre = moy6.name
console.log('soy ' + nombre)

//desestructuracion de un objeto(desarmarlo para extraer propiedades)
const { name, age, olor } = moy6;

//concatenacion simple(no utilizar)
console.log( name, age, olor)

//template strings/Concatenacion
console.log(`hola me llamo ${name} y ${olor}`)



//funciones
function suma(num1, num2){
    return num1+num2;
}

//mandar a llamar
console.log(suma(2,5));


//arrow function, esto es JS chido enmascript 6 (ES6)
const suma2 = (num1, num2) => {
    return `el resultado de la suma es ${num1+ num2}`;
}
console.log(suma2(5,6))

//arrays
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr)

for (let i=0; i<=arr.length; i++){
    console.log(i)
}

//con strings(traer los valores dentro del arreglo)
const arr1 = ['moy', 'luisito','esteban', 'oscar'];

console.log(arr)

for (let i=0; i<=arr1.length - 1; i++){
    console.log(arr1[i])
    console.log(arr1[i=3])
}

///////////////////////////////////////////////////////
//array.protoypes

//para agregar al final del arreglo
arr1.push('armandito');

//para borrar el ultimo elemento de un arreglo
//arr1.pop();

//unshift siempre agrega un elemento al principio del arreglo
arr1.unshift('pepega');

//shift borra el primer elemento de del arreglo
//arr1.shift();

console.log(arr1);


///////////////////////////////////////////////



//tarea


//arr.map() crea un nuevo array con los resultados de la llamada
//a la función indicada aplicados a cada uno de sus elementos.

const num = [1, 5, 10, 15];
const mult = num.map(function(x) {
   return x * 2;
});



//crea un nuevo array con todos los elementos que cumplan 
//la condición implementada por la función dada.
//arr.filter()

const frutas = ['papa', 'fresa', 'platano', 'naranja', 'chirimoya', 'lichi'];

const resultado = frutas.filter(frutas => frutas.length > 6); //filtre las palabras que tuvieran un mayor largo de caracteres

console.log(resultado);






//

//arr.splice



//devuelve una copia de una parte del array dentro de un nuevo array
//empezando por inicio hasta fin (fin no incluido). 
//El array original no se modificará.
//arr.slice()

