# CC0043 - PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS - UFCA

#### Escreva um arquivo em Markdown, com um resumo de como utilizar hooks e eventos. Coloque trechos de código que você treinou na prática.

## *HOOKS*

 Um Hook é uma função especial que permite utilizar recursos do React. Por exemplo, useState é um Hook que te permite adicionar o state do React a um componente de função. Hooks não funcionam dentro de classes — eles permitem que você use React sem classes. 

 ### - Usando State Hook
 
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

* Linha 1: Importamos o Hook useState do React. Ele nos permite manter o state local em um componente de função.
* Linha 4: Dentro do componente Example, declaramos uma nova variável de state chamando o Hook useState. Ele retorna um par de valores, no qual damos nomes. Estamos chamando nossa variável count porque ela mantém o número de cliques no botão. Inicializamos como zero passando 0 como o único argumento do useState. O segundo item retornado é a própria função. Ela nos permite atualizar o count então nomeamos para setCount.
* Linha 9: Quando o usuário clica, chamamos setCount com um novo valor. O React então vai re-renderizar o componente Example, passando o novo valor de count para ele.
