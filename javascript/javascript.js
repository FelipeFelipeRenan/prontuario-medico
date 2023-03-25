// 1 - variáveis
console.log('Variáveis');
// var
var x = 10;
// let
let y = 20;
// const 
const pi = 3.1415;

// 2 - tipos
console.log('Tipos');
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
console.log('Conversão de tipos');
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

// 4 - operadores aritméticos
console.log('Operadores aritméticos');
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
let minus = 3;
console.log(-minus);

// adição +
let plus = "3";
console.log(typeof plus);
plus = +plus;
console.log(typeof plus);

let truE = true;
console.log(typeof truE);
truE = +truE;
console.log(typeof truE);

// operador de exponenciação **
console.log(2 ** 3);
console.log(10 ** -1);

// 5 - operadores condicionais e 6 - estruturas condicionais
console.log('Operadores e estruturas condicionais');
// if
let ano = 2023;
if (ano == 2023){
  console.log('Estamos em 2023');
}

// else
ano = 2024
if (ano == 2023) {
  console.log('Estamos em 2023');
} else {
  console.log('Você tem razão?');
}

// else if
ano = 2023;

if (ano < 2023) {
  console.log('Mais');
} else if (ano > 2023) {
  console.log('Menos');
} else {
  console.log('Exatamente');
}

// operador ternário
let resultado = (ano === 2023) ? 'Verdade' : 'Falso';
console.log(resultado);

// switch
let dia = 'segunda';
switch(dia){
  case 'domingo':
    console.log('Domingo');
    break;
  case 'segunda':
    console.log('Segunda-feira');
    break;
  case 'terça':
    console.log('Terça-feira');
    break;
  case 'quarta':
    console.log('Quarta-feira');
    break;
  case 'quinta':
    console.log('Quinta-feira');
    break;
  case 'sexta':
    console.log('Sexta-feira');
    break;
  case 'sábado':
    console.log('Sábado');
    break;
  default:
    console.log('Dia inválido');
    break;
}

// 7 - estruturas de repetição
console.log('Estruturas de repetição');
// for
for(let i = 0; i < 10; i++){
  console.log(i);
}

// do-while
let i = 1;
do {
  i += 1;
  console.log(i);
} while (i < 5);

// while
i = 0;
while (i < 10){
  console.log(i);
  i++;
}

// for in
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

// for of
for (let i of arr) {
  console.log(i); // logs "3", "5", "7"
}

// 8 - funções
console.log('Funções');
// funcão convencional
function showMessage(de, texto) {
  console.log(de + ': ' + texto);
}

showMessage('Wesley', 'Oi');
showMessage('Lilia', "Como vai?");

// função é um valor
let func = showMessage;
func('Felipe', 'Iai');

let digaOiAdriana = function(){
  return 'Oi';
}
console.log(digaOiAdriana());

// função flecha ->
let soma = (a1, b1) => {
  return a1 + b1;
};

console.log(soma(10, 20));

// 9 - arrays
console.log('Arrays');
