// 1 - variáveis
// var
var x = 10;
// let
let y = 20;
// const 
const pi = 3.1415;

// 2 - tipos
// string
var texto = 'um texto';
// number
let mil = 1000;
// boolean
const verdade = true
// bigInt
const z = BigInt(10000000);
// symbol
const mySymbol = Symbol('meu simbolo');
// object
const moto = {cor : 'azul', model: 'CG150'};

// 3 - conversão de tipos
// conversão de string
let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // string


// conversão de boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("hello")); //true
console.log(Boolean("")); //false

// conversão numérica
console.log("6" / "2"); // 3, string são convertidas para números

let str = "123";
console.log(typeof str); // string

let num = Number(str); // é convertido no número 123

console.log(typeof num);

// 4 - operadores de atribuição


// operadores de comparação
// igual ==
var var1 = 3;
console.log(3 == var1);
console.log("3" == var1);
console.log(3 == '3');

// diferente !=
const var2 = 2;
console.log(var1 != 4);
console.log(var2 != "3");

// estritamente igual ===
console.log(3 === var1);

// estritamente diferente
console.log(var1 !== "3");
console.log(3 !== '3');


// 5 - operadores aritméticos


// 6 - operadores condicionais


// 7 - estruturas condicionais

// 8 - estruturas de repetição

// 9 - funções

// 10 - arrays

