# CC0043 - PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS - UFCA

## Aborde os tópicos:

- Fundamentos de programação assíncrona
- Como usar em Javascript
- Qual a importância do assunto para o desenvolvimento do seu projeto em React Native

## FUNDAMENTOS DE PROGRAMAÇÃO ASSÍNCRONA 

A programação assíncrona é uma técnica que permite que seu programa  inicie uma tarefa potencialmente de longa duração e ainda seja capaz de responder a
outros eventos enquanto essa tarefa é executada, em vez de ter que esperar até que essa tarefa seja concluída. Uma vez que essa tarefa tenha terminado,
sua resposta é apresentada como resultado. Muitas funções, especialmente as mais interessantes, podem levar muito tempo e, portanto, são assíncronas. 

Por exemplo:

* Fazendo solicitações HTTP 
* Acessar a câmera ou o microfone de um usuário 
* Pedindo a um usuário para selecionar arquivos

Portanto, mesmo que você não precise implementar suas próprias funções assíncronas com muita frequência, é muito provável que você precise usá-las
corretamente. Já na programação síncrona cada linha do programa é executado de cada vez na ordem em que foi escrito. Dessa forma, o programa espera que a
execução da linha seja terminada para seguir para a próxima. Isso ocorre porque cada linha depende do trabalho feito nas linhas anteriores.

## PROMISSES

Promises são a base da programação assíncrona moderna em JavaScript. Uma promise é um objeto retornado por uma função assíncrona, que representa o estado
atual da operação. No momento em que a promise é retornada para quem à chamou, a operação muitas vezes ainda não foi finalizada, mas o objeto da promise
oferece métodos para tratar o possível sucesso ou falha da operação.

Com uma API baseada em promises, a função assíncrona inicia a operação e retorna o objeto Promise. Você pode então anexar manipuladores nesse objeto, e
esses manipuladores vão ser executados quando a operação tiver sucesso ou falhar.

* ### Usando a API fetch()

De início, vamos fazer uma **Requisição HTTP** para o servidor. Em uma requisição HTTP, uma solicitação é enviada para o servidor e ele envia uma
resposta de volta. Neste caso, vamos enviar uma solicitação para obter um arquivo JSON do servidor. Para iso, usaremos a API ```fetch()```, que é a
substituição moderna baseada em promise para XMLHttpRequest.

Cole o seguinte código no console do seu navegador:

```js
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((resposta) => {
  console.log(`Resposta recebida: ${resposta.status}`);
});

console.log("Requisição iniciada…");
```
Neste código estamos:

1. chamando a API ```fetch()```, e atribuindo o valor de retorno a variável ```fetchPromise```.
2. imediatamente depois, exibimos no console a variável ```fetchPromise```. Você deve ver algo parecido com: ```Promise { <state>: "pending" }```, nos
dizendo que temos um objeto ```Promise```, ele tem uma propriedade ```state``` cujo valor no momento em que foi impresso é ```"pending"```
(```"pendente"```). O estado ```"pending"``` significa que a busca pela resposta ainda está ocorrendo.
3. passando uma função manipuladora dentro do método da Promise **```then()```**. Quando (e se) a operação de busca tiver êxito a Promise vai chamar a
função manipuladora, passando um objeto Response, que contém a resposta do servidor.
4. imprimindo um log dizendo que iniciamos a requisição.
 
A saída completa deve ser algo parecido com:

```
Promise { <state>: "pending" }
Requisição iniciada…
Resposta recebida: 200
```
Note que ```Requisição iniciada…``` foi exibido antes de recebermos a resposta. Diferente de uma função síncrona, ```fetch()``` retorna enquanto a
requisição ainda está ocorrendo, permitindo que nosso programa permaneça ágil. A resposta mostra o status code 200 (OK), que significa que nossa
requisição obteve sucesso.

## COMO USAR EM JAVASCRIPT

As palavras-chave `async` e `await`, são uma sintaxe que simplifica a programação assíncrona, facilitando o fluxo de escrita e leitura do código; assim é
possível escrever código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona. O `async/await` também trabalha com o código
assíncrono baseado em Promises, porém esconde as promessas para que a leitura e a escrita seja mais fluídas.

Definindo uma função como `async`, podemos utilizar a palavra-chave `await` antes de qualquer expressão que retorne uma promessa. Dessa forma, a execução
da função externa (a função async) será pausada até que a Promise seja resolvida.

A palavra-chave `await` recebe uma Promise e a transforma em um valor de retorno. Quando utilizamos await, o JavaScript vai aguardar até que a Promise
finalize. Se for finalizada com sucesso, o valor obtido é retornado. Se a Promise for rejeitada, é retornado o erro lançado pela exceção.

Exemplo:

```js
let response = await fetch(`https://api.com/api/user/${userId}`);
let userData = await response.json();
```

Só é possível usar `await` em funções declaradas com a palavra-chave `async`, adicionando-a:

```js
async function getUser(userId) {
 let response = await fetch(`https://api.com/api/user/${userId}`);
 let userData = await response.json();
 return userData.name; // nas linhas de return não é necessário usar await
}
```

Uma função declarada como `async` significa que o valor de retorno da função será, "por baixo dos panos", uma Promise. Se a Promise se resolver
normalmente, o objeto-Promise retornará o valor. Caso lance uma exceção, podemos usar o try/catch como usados em programas síncronos.

Para executar a função `getUser()`, já que ela retorna uma Promise, pode-se usar `await`:

```js
exibeDadosUser(await getUser(1))
```

Lembrando que await só funciona se estiver dentro de outra função async. Caso não esteja, você ainda pode usar .then() normalmente:

```js
getUser(1).then(exibeDadosUser).catch(reject)
```
***PS: Promises têm um método chamado .then(), que recebe uma função callback e retorna um "objeto-promessa". Não é um retorno dos dados, é a promessa do
retorno destes dados.***
***Assim, podemos escrever o código do que irá acontecer em seguida, com os dados recebidos pela Promise, e o JavaScript vai aguardar a resolução da Promise
sem pausar o fluxo do programa.***

## QUAL A IMPORTÂNCIA DO ASSUNTO PARA O DESENVOLVIMENTO DO SEU PROJETO EM REACT NATIVE

O assincronismo é de extrema importância para nosso projeto, pois requisições a API serão feitas e podem levar  muito tempo. Dessa forma, se as funções
assíncronas não forem usadas o aplicativo ficará paralizado impossibilitando o usuário de utilizar a aplicação. Entretanto, com as funções assíncronas as
requisições ficam executando em segundo plano permitindo a utilização do aplicativo. 

## REFERÊNCIAS

https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?gclid=CjwKCAjw8-OhBhB5EiwADyoY1Wwu8DSuHbwpE6Kn1yVCXkJwxl1034uA5LHKvoHl4ToFZt4EQ1EtbhoCCMwQAvD_BwE

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing
