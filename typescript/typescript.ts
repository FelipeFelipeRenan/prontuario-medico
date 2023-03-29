//1 LET, VAR E CONST
console.log('LET, VAR E CONST');
var a = 6;
var b = 15;
if(a === 6){
    let a = 5;
    var b = 3;
    console.log(a);
    console.log(b); 
}
console.log(a);
console.log(b);
console.log('--------------------------');

//TIPAGEM ESTÁTICA

console.log('NUMBER, STRING e BOOLEAN');
let idade: number =  25;
console.log(idade);
let nome: string = 'TreinaWeb';
console.log(nome);
let statusPublicacao: boolean = true;
console.log(statusPublicacao);
console.log('--------------------------');

console.log('Array');
let list1: number[] = [2,3,5,7]; //forma 1 de criar um array
var list2: Array<number> = [2,3,5,7,11]; //forma 2 de criar um array
console.log(list1);
console.log(list2);
console.log('--------------------------');

console.log('TUPLA')
//DEFININDO UMA TUPLA
let tuple: [number, boolean, string];
//INICIALIZANDO A TUPLA CORRETAMENTE
tuple = [5, false, 'Someone scream'];
console.log(tuple);
//FORMA INCORRETA (É NECESSÁRIO SEGUIR A ORDEM DOS TIPOS COLOCADOS)
//tuple = ['Someone scream', 5, false]; //QUANDO RODAR VAI DAR ERRO.
console.log('--------------------------');

console.log('ENUM')
console.log('EXEMPLO 1 ENUM');
enum Cor{
    preto,
    cinza,
    azul,
}
let cor: Cor = Cor.azul;

console.log('EXEMPLO 2 ENUM');
//DEFININDO O ENUM
enum Color {amarelo, laranja, rosa};
let c: Color = Color.rosa;
//INICIANDO ENUM COM VALOR DIFERENTE DE 0
enum Col {amarelo, laranja, rosa};
let cl: Col = Col.amarelo;
//PEGANDO O VALOR A PARTIR DA ENUMERAÇÃO
let colorName: string = Col[2];
console.log('--------------------------');

console.log('UNKNOWN');
let valorDesconhecido: unknown;
valorDesconhecido = true;
valorDesconhecido = 100.00;
valorDesconhecido = 5;
valorDesconhecido = "Ola Mundo!";
valorDesconhecido = null;
valorDesconhecido = undefined;
console.log('--------------------------');

console.log('VOID');
function func():
void{
    console.log("Funcao Void");
}
console.log('--------------------------');

//CLASSE
console.log('Declaracao de uma classe');
class Exemplo{
    //atribuitos
    //construtor
    //getter e setters
    //outros métodos
}    
console.log('--------------------------');

console.log('HERANÇA');
class ClasseBase {
	nome: string;
	constructor(nome: string) {
		this.nome = nome;
	}	
	print(msg: string = 'Classe Base') {
		console.log(msg);
	}
}
class ClasseHerdeira extends ClasseBase {
	constructor(nome: string) {
	 	super(nome);
	}
	print(msg: string = 'Classe: undefined Herdeira: undefined') {
		super.print(msg);
	}
}
console.log('--------------------------');

console.log('ENCAPSULAMENTO');
class ClasseExemplo {
	private _nome: string
	
	get nome(): string {
		return this._nome;
		}

	set nome(nome:string) { //ESSA PALAVRA nome TA DANDO ERRADO AQUI. RETIREI O VOID
		this._nome = nome;
		}
}
console.log('--------------------------');

console.log('CLASSES ABSTRATAS')
abstract class classeAbstrata {
	constructor(public nome: string){
		}
printNome(): void {
	console.log('Nome' + this.nome)
}

abstract otherPrint(): void; // deverá ser implementado nas classes filhas
}

abstract class ClasseAbstrata {
	
	constructor(public nome: string){
		}

printNome(): void {
	console.log('Nome' + this.nome)
}

abstract otherPrint(): void; // deverá ser implementado nas classes filhas
}

class ClasseFilhaAbs extends ClasseAbstrata {
	constructor() {
		super('Classe Filha Abs');
	}
	printNome(): void {
		console.log('Classe Filha Abs');
	}
	otherPrint(): void {
		console.log('Other print method');
	}
}
console.log('--------------------------');

console.log('INTERFACES');
interface ClasseInterface {
	atributo1: string;
	atriburo2?: number 
    print();
}

class ClasseFilha implements ClasseInterface {
	atributo1: string = 'Classe Filha';
	atriburo2?: number = 1;
	
	print() {
	console.log(this.atributo1);
	}
}
console.log('--------------------------');

//FUNÇÃO
console.log("FUNÇÕES");
// FUNÇÃO COM VALOR PRÉ-DEFINIDO
function buildPhrase(name: string, name2: string = "Mundo"){
	return name + " " + name2;
}

let result1 = buildPhrase("Olá"); //saída: Olá Mundo
result1 = buildPhrase("Olá" , "João"); // saída: Olá João
// A FUNCIONALIDADE REST POSSIBILITA UM NÚMERO ILIMITADO DE PARÂMETROS OPCIONAIS
function buildName(name: string, ...restOfName: string[]){
	return name + " " + restOfName.join(" ");
}

let nome1 = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");  // saída: "Joseph Samuel Lucas MacKinzie" 

// FUNÇÃO FLECHA
let soma = (x: number, y: number): number => {
    return x + y;
}
soma(10, 20); //retorna 30

// FUNÇÃO FLECHA SEM NENHUM PARÂMETRO
let printf = () => { console.log("Olá TypeScript")} ;
printf(); //Saída: Olá TypeScript

// OMISSÃO DAS CHAVES E RETURN
let soma1 = (x: number, y: number) => x + y;
soma1(3, 4); //retorna 7

console.log('--------------------------');
