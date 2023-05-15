# CC0043 - PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS - UFCA

#### Escreva um arquivo em Markdown, com um resumo de como utilizar hooks e eventos. Coloque trechos de código que você treinou na prática.

## *HOOKS*

 Um Hook é uma função especial que permite utilizar recursos do React. Por exemplo, useState é um Hook que te permite adicionar o state do React a um componente de função. Hooks não funcionam dentro de classes — eles permitem que você use React sem classes. 

 ### - USANDO STATE HOOK
 
 * ### *Declarando uma variável state*

Em um componente de função, foi declarado uma variável state chamada count e definida ela para 0, e então, chamamos o Hook useState dentro do component. O React vai lembrar o valor atual entre cada re-renderização e fornecer o valor mais recente para a função. Se quisermos atualizar o count atual, podemos chamar setCount, como é mostrado no exemplo abaixo:
```js
import React, { useState } from 'react';

function Example() {
  // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [count, setCount] = useState(0);
}
```
Mas afinal, ***o que faz o useState?***  

Ele declara um variável state. A variável é chamada de count, mas poderia chamada de qualquer coisa, como banana. Esta é uma maneira de “preservar” alguns valores entre as chamadas de funções, pois normalmente, variáveis “desaparecem” quando a função sai mas variáveis de state são preservadas pelo React.


***E o que o mesmo retorna?*** 

Ele retorna um par de valores: o state atual e uma função que atualiza o state. É por isso que é escrito `const [count, setCount] = useState()`.

* ### *Lendo o State*

Quando queremos mostrar o count atual em uma função, podemos usar count diretamente:
```js
  <p>Você clicou {count} vezes</p>
```
* ### *Atualizando o State*

Em uma função, podemos chamar setCount e count (são variáveis) para atualizar o state count:
```js
  <button onClick={() => setCount(count + 1)}>
    Clique aqui
  </button>
  ```
 
* ### *Análise do Código Completo*
  
Analisando o código abaixo linha por linha, temos:
```js
01:  import React, { useState } from 'react';
02:
03:  function Example() {
04:    const [count, setCount] = useState(0);
05:
06:    return (
07:      <div>
08:        <p>Você clicou {count} vezes</p>
09:        <button onClick={() => setCount(count + 1)}>
10:         Clique aqui
11:        </button>
12:      </div>
13:    );
14:  }
```

* Linha 1: Importamos o Hook useState do React. Ele permite manter o state local em um componente de função.
* Linha 4: Dentro do componente Example, é declarada uma nova variável de state chamando o Hook useState. Ele retorna um par de valores, no qual é dado nomes. Estamos chamando nossa variável count porque ela mantém o número de cliques no botão. Inicializamos como zero passando 0 como o único argumento do useState. O segundo item retornado é a própria função. Ela nos permite atualizar o count então nomeamos para setCount.
* Linha 9: Quando o usuário clica, setCount é chamado com um novo valor. O React então vai re-renderizar o componente Example, passando o novo valor de count para ele.

 * ### *Declarando múltiplas variáveis state*

Declarar variáveis de state como par de `[something, setSomething]` também é útil porque nos permite dar diferentes nomes para diferentes variáveis de state se quiséssemos usar mais de uma:
```js
function ExampleWithManyStates() {
// Declarar múltiplas variáveis de state!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Aprender Hooks' }]);
```
No componente acima, temos age, fruit e todos como variáveis locais e podemos atualizá-las individualmente:
```js
function handleOrangeClick() {
    // Similar ao this.setState({ fruit: 'orange' })
    setFruit('orange');
  }
```
### - USANDO EFFECT HOOK

O Hook de Efeito, `useEffect`, adiciona a funcionalidade de executar efeitos colaterais (ou somente “efeitos”) através de um componente funcional. Segue a mesma finalidade do `componentDidMount`, `componentDidUpdate`, e `componentWillUnmount` em classes React, mas unificado em uma mesma API. Existem dois tipos comuns de efeitos colaterais nos componentes React: aqueles que não precisam de limpeza, e aqueles que precisam.

* ### *Efeitos sem limpeza*
De vez em quando, queremos executar algum código adicional depois que o React atualizou a DOM. Requisições, mutações manuais do DOM e log são exemplos comuns de efeitos que não precisam de limpeza. Dizemos isso porque podemos executa-los e imediatamente esquecer deles. Abaixo é possél ver como Hooks nos permitem expressar tais efeitos colaterais.

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar a componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento utilizando a API do navegador
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
```

O state count é declarado, então dizemos ao React que precisamos usar um efeito. Passamos uma função para o Hook useEffect. A função passada é o efeito. Dentro do  efeito, é definido o título do documento usando document.title da API do navegador. É possível ler o último count dentro do nosso efeito por que ele está dentro do escopo da função. Quando o React renderizar o componente, ele ira se lembrar do efeito usado, e então executar os efeitos depois de atualizar o DOM. Isso acontece para cada renderização, incluindo a primeira.

***O que o useEffect faz?*** Usando esse Hook, é dito ao React que o componente precisa fazer algo apenas depois da renderização. O React ira se lembrar da função passada (é feito referência a ele como “efeito”), e chamá-la depois que realizar as atualizações do DOM. Nesse efeito, o título do documento é alterado, mas também é possível realizar busca de dados ou chamar alguma API imperativa.

***Por que useEffect é chamado dentro de um componente?*** Colocando `useEffect` dentro do componente é permitido acessar o state count (ou qualquer outra prop) direto do efeito. Não é preciso de uma API especial para lê-los — já está no escopo da função. Hooks adotam as closures do JavaScript e evitam APIs especificas do React onde o JavaScript já provê uma solução.

***useEffect executa depois de toda renderização?*** Sim! Por padrão, ele roda depois da primeira renderização e depois de toda atualização.

* ### *Efeitos com limpeza*

Anteriormente, foi visto como expressar efeitos colaterais que não precisam de limpeza. Contudo, alguns efeitos precisam. Por exemplo, podemos querer configurar uma subscription para alguma origem de dados externa. Nesse caso, é importante limpar para que não causemos um vazamento de memória!.

Você pode pensar que precisamos de um efeito separado para executarmos a limpeza. Mas o código para adicionar e remover uma subscription é tão relacionado um com o outro que o useEffect foi desenhado para mantê-los juntos. Se o seu efeito retornar uma função, o React irá executá-la quando for a hora de limpar:
```js
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Especifique como limpar depois desse efeito:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```
***Por que precisamos retornar uma função dos nossos efeitos?*** Isso é um mecanismo opcional de limpeza para efeitos. Cada efeito pode retornar uma função que irá limpar depois dela. Isso permite manter a lógica para adicionar e remover subscriptions perto uma da outra. Elas são parte do mesmo efeito!

***Quando exatamente o React limpa um efeito?*** O React executa a limpeza quando o componente desmonta. Contudo, como aprendemos anteriormente, efeitos rodam em todas as renderizações e não apenas uma vez. É por isso que o React também limpa os efeitos da renderização anterior antes de rodar os efeitos da próxima vez.

## *EVENTOS*
Um evento é basicamente uma ação feita a partir de uma função. Alguns componentes acionam eventos/callbacks em resposta à entrada do usuário. Para adicionar um manipulador de eventos, passe uma função como prop para um elemento React:
```js
import React from 'react'
import { Button } from 'react-native'

export default function App() {
  return (
    <Button
      title="Press me"
      onPress={() => {
        console.log('Pressed!')
      }}
    />
  )
}
```
Neste código foi criado apenas um botão intitulado "Press me" para interação com o usuário.

* ### *Eventos personalizados e interação do usuário*
Em React, geralmente capturamos eventos de interação passando manipuladores de eventos para props específicos, como `onClick` e `onPress`. Em React Native, você pode fazer o mesmo, de forma semelhante. Suponha que queremos criar um componente `CounterButton` personalizado com um retorno de chamada `onIncrement`. Podemos passar este prop para o `onPress` de um Button.
```js
import React, { useState } from 'react'
import { Button } from 'react-native'

function CounterButton({ title, onIncrement }) {
  return <Button title={title} onPress={onIncrement} />
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <CounterButton
      title={`Click HERE to increment: ${count}`}
      onIncrement={() => setCount(count + 1)}
    />
  )
}
```
Neste código é feita uma contagem de quantas vezes o usuário clicou no botão "Click HERE to increment" 

## *REFERÊNCIAS*
https://pt-br.reactjs.org/docs/hooks-intro.html

https://www.alura.com.br/artigos/react-hooks

https://www.reactnative.express/react/events

https://imasters.com.br/desenvolvimento/react-native-para-desenvolvedores-react
