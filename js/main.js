// Operadores aritméticos

// Suma +
// Resta -
// Multiplicación *
// División /
// Incremento ++
// Decremento --
// Módulo %

var resultado = 2 + 4 * 10;  // 42

resultado = (2 + 4 ) * 10 // 60

var resultado2 = 100 / 'valor no númerico';
console.log(resultado2);

// Operadores de comparación
// (Nota: el operador = es de asignación)

// > Mayor que
// >= Mayor o igual que
// < Menor que
// <= Menor o igual que
// == igual
// === exactamente igual (valores iguales y del mismo tipo)
// != distinto
// !== exactamente distinto

var a = 10;
var b = 12;
console.log(a > b); // false

var c = 3;
var d = '3';

console.log(c == d); // true
console.log(c === d); // false

//Operadores lógicos

// && And

// || Or

// ! Negación

var valor1 = 12;
var valor2 = 14;
var valor3 = 12;

console.log(valor2 > valor1 && valor1 === valor3); // true

console.log(valor2 < valor1 || valor1 === valor3); // true

var logged = false;

console.log(!logged); // valor opuesto

logged = !logged;

console.log(logged); // true;

// Estructura condicional If - else

var aprobado = 6;

if (aprobado >= 5) {
    console.log('Enhorabuena, has aprobado');
} else {
    console.log('Lo sentimos, no has aprobado');
}

// Estructura condicional If - else if - ...

// var nombre = prompt("Hola, ¿Quien eres, Spiderman o Superman?");

// if (nombre === 'Spiderman') {
//     alert(`Buenas tardes ${nombre}`);  // Literal template ECMAScript 5
// } else if (nombre === 'Superman') {
//     alert(`Buenas tardes ${nombre}`);
// } else {
//     alert('Buenas tardes simple mortal');
// }

// Estructuras iterativas

// for (valor_inicial; condición; actualización) {
//     código a ejecutar en bucle
// }

for (i=0; i < 10; i++) {
    console.log('la variable i vale ' + i);
}

var frutas = ['pera', 'manzana', 'piña'];

for (i=0; i < frutas.length; i++ ) {
    console.log(frutas[i]);
}

// while(condicion){
//     código a ejecutar
// }

var password;

while (password !== '1234') {
    password = prompt('Escriba la contraseña');
}












