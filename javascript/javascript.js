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

// 4 - operadores de aritméticos

// 5 - operadores condicionais
// módulo %
console.log(12 % 5);

// incremento (++)
// prefixado
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// pósfixado
let u = 3;
const k = u++;

console.log(`u:${u}, k:${k}`);
// Expected output: "u:4, k:3"

// decremento (--)
// prefixado
let p = 3;
const q = --p;

console.log(`p:${p}, b:${q}`);
// Expected output: "p:2, q:2"

// pósfixado
let f = 3;
const c = f--;

console.log(`f:${f}, c:${c}`);
// Expected output: "f:2, c:3"

// negação -





// 6 - estruturas condicionais

// 7 - estruturas de repetição

// 8 - funções

// 9 - arrays

