const name = 'armando';
const name1 = 'moy';


//console.log(`Mi nombre es ${name}`)
//console.log(`Largo de la palabra es: ${name1.length}`)

// 2 = 2 => asignacion de variable
// 2 == '2' => true
// 2 === '2' => false
//
if(name.length === name1.length){
    console.log(`${name1} y ${name} tienen el mismo largo`)
}else if(name1.length > name.length){
    console.log(`la palabra mas larga es ${name}`)
}else {
    console.log(`la palabra mas larga es ${name1}`)
}


//const Arrname = 'Armando Medina';
//console.log(Arrname.split(''));
//console.log(Arrname.reverse());



//otro ejemplo por pasos
const normalName = 'Luisito Santiago';
const nameToArray = normalName.split('');
const nameToReverse = nameToArray.reverse();
const FinalName = nameToReverse.join('');

//console.log(`${normalName}, ${nameToArray}, ${nameToReverse}, ${FinalName}`);
//console.log(normalName.split('').reverse().join(''));


///////////////////////
//metodo Sort
//ordena de mayor a menor numeros
//si son letras ordena alfabeticamente

const n1 = 'Marquito', n2 = 'Armandito';
const nombres = [n1,n2];

//console.log(nombres.sort());


const paragraph = 'Anita lava la tina dentro de su casa con su mama que le ayuda a enjuagar las cosas para que esten limpias ';
//intentar retornar cuantas veces aparece la letra a
// usar acum
// splittear la frase
// usar un for

const spliteado = paragraph.split('');
let acum = 0;
for (i=0; i<= spliteado.length; i++){
    if (spliteado[i] === 'a' || spliteado[i] === 'A'){
        acum = acum + 1;
    }
}
//console.log(`numero de letras a es: ${acum}`);



// checar si una frase es un palindromo
// anita lava la tina
// usar split, reverse, join, trim, replace

let ora = 'anita lava la tina';
let spora = ora.split('').reverse().join('');
//console.log(`${spora}`)

if (ora.replace(/ /g, "") === spora.replace(/ /g, "")){
    //console.log('es un palindromo')
}else{
    //console.log('no es un palindromo')
}



//Map
const array = ['Esteban', 'Armandito', 'Luisito', 'Moy6', 'Monche', 'Jackie', 'Rayito'];
array.map(el => console.log(el));
 
//Includes
//revisa en todo el arreglo si esta presente los caracteres que nosotros especifiquemos
console.log(array.includes('Armandito'));