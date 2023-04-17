# CC0043 - PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS - UFCA

## Aborde os tópicos:

- Fundamentos de programação assíncrona
- Como usar em Javascript
- Qual a importância do assunto para o desenvolvimento do seu projeto em React Native

## FUNDAMENTOS DE PROGRAMAÇÃO ASSÍNCRONA 

A programação assíncrona é uma técnica que permite que seu programa  inicie uma tarefa potencialmente de longa
duração e ainda seja capaz de responder a outros eventos enquanto essa tarefa é executada, em vez de ter que
esperar até que essa tarefa seja concluída. Uma vez que essa tarefa tenha terminado, sua resposta é apresentada
como resultado. Muitas funções, especialmente as mais interessantes, podem levar muito tempo e, portanto, são 
assíncronas. 

Por exemplo:

Fazendo solicitações HTTP Acessar a câmera ou o microfone de um usuário Pedindo a um usuário para selecionar
arquivos

Portanto, mesmo que você não precise implementar suas próprias funções assíncronas com muita frequência, é muito
provável que você precise usá-las corretamente.

## COMO USAR EM JAVASCRIPT

As palavras-chave `async` e `await`, são uma sintaxe que simplifica a programação assíncrona, facilitando o
fluxo de escrita e leitura do código; assim é possível escrever código que funciona de forma assíncrona, porém é
lido e estruturado de forma síncrona. O `async/await` também trabalha com o código assíncrono baseado em
Promises, porém esconde as promessas para que a leitura e a escrita seja mais fluídas.

Definindo uma função como `async`, podemos utilizar a palavra-chave `await` antes de qualquer expressão que
retorne uma promessa. Dessa forma, a execução da função externa (a função async) será pausada até que a Promise
seja resolvida.

A palavra-chave `await` recebe uma Promise e a transforma em um valor de retorno. Quando utilizamos await, o
JavaScript vai aguardar até que a Promise finalize. Se for finalizada com sucesso, o valor obtido é retornado.
Se a Promise for rejeitada, é retornado o erro lançado pela exceção.

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

Uma função declarada como `async` significa que o valor de retorno da função será, "por baixo dos panos", uma
Promise. Se a Promise se resolver normalmente, o objeto-Promise retornará o valor. Caso lance uma exceção,
podemos usar o try/catch como usados em programas síncronos.

Para executar a função `getUser()`, já que ela retorna uma Promise, pode-se usar `await`:

```js
exibeDadosUser(await getUser(1))
```

Lembrando que await só funciona se estiver dentro de outra função async. Caso não esteja, você ainda pode usar .then() normalmente:

```js
getUser(1).then(exibeDadosUser).catch(reject)
```

## QUAL A IMPORTÂNCIA DO ASSUNTO PARA O DESENVOLVIMENTO DO SEU PROJETO EM REACT NATIVE


## REFERÊNCIAS

https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?gclid=CjwKCAjw8-OhBhB5EiwADyoY1Wwu8DSuHbwpE6Kn1yVCXkJwxl1034uA5LHKvoHl4ToFZt4EQ1EtbhoCCMwQAvD_BwE

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
