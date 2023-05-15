# CC0043 - PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS - UFCA

* ## Testes automatizados para React Native

## Aborde os tópicos:

#### - O que são testes automatizados
#### - Testes automatizados para React Native
#### - React Native Testing Library (instalação, exemplos)
#### - Como utilizar no seu projeto


## O que são testes automatizados?

Testes automatizados são programas que executam testes em softwares que estão em construção de uma forma padronizada, sem ser necessário a intervenção humana. Pois, tais testes possuem funcionalidades capazes de testar de forma automática todos os aspectos de uma plataforma, com o intuito de assegurar um desempenho adequado. 

Tal procedimento, gera muito mais eficácia e agilidade na etapa de testes, permitindo que o profissional encontre de uma maneira mais fácil as falhas de segurança, bugs e demais erros que possam comprometer o uso da aplicação.


## Testes automatizados para React Native

* Jest: biblioteca de testes JavaScript popular que é usada para testar componentes React e React Native.

* Enzyme: biblioteca de testes React que permite testar componentes em níveis mais granulares, como a lógica do componente.

* React Native Testing Library: biblioteca de testes que é específica para React Native e fornece uma API simples e intuitiva para testar aplicativos React Native.

* Detox: biblioteca de teste de integração para aplicativos móveis que permite testar a interação do usuário em aplicativos móveis iOS e Android.

* Appium: ferramenta de teste automatizados de aplicativos móveis de código aberto, permite que os desenvolvedores escrevam testes automatizados para aplicativos móveis nativos, híbridos e da web em várias plataformas, incluindo Android, iOS e Windows. Ele fornece uma API simples para escrever testes em várias linguagens de programação, como Java, Python, Ruby e JavaScript.


## React Native Testing Library (instalação, exemplos)

A React Native Testing Library (RNTL) é uma solução leve para testar componentes React Native. Ela fornece funções utilitárias leves, de forma a incentivar melhores práticas de teste.

### Instalação
Abra um terminal na pasta do seu projeto e execute o seguinte comando:

__Usando yarn__
```js
 yarn add --dev @testing-library/react-native
```

__Usando npm__
```js
 npm install --save-dev @testing-library/react-native
```

### Jest matchers adicionais
Para usar os jest matchers específicos do React Native uma biblioteca necessita ser instalada, para isso abra o terminal na pasta do projeto e execute o seguinte comando:

__Usando yarn__
```js
 yarn add --dev @testing-library/jest-native
```

__Usando npm__
```js
 npm install --save-dev @testing-library/jest-native
```

### Exemplo

```js
import { render, screen, fireEvent } from '@testing-library/react-native';
import { QuestionsBoard } from '../QuestionsBoard';

test('form submits two answers', () => {
  const allQuestions = ['q1', 'q2'];
  const mockFn = jest.fn();

  render(<QuestionsBoard questions={allQuestions} onSubmit={mockFn} />);

  const answerInputs = screen.getAllByLabelText('answer input');

  fireEvent.changeText(answerInputs[0], 'a1');
  fireEvent.changeText(answerInputs[1], 'a2');
  fireEvent.press(screen.getByText('Submit'));

  expect(mockFn).toBeCalledWith({
    1: { q: 'q1', a: 'a1' },
    2: { q: 'q2', a: 'a2' },
  });
});
```

## Como utilizar no seu projeto

A estruturação de testes segue a seguite lógica:
- Dado: Alguma pré-condição;
- Quando: Alguma ação executada pela função que você está testando;
- Então: O resultado esperado.

Conhecido como: AAA (Arrange, Act, Assert).

* Preparar (Arrange):
Prepara o ambiente para o teste. Envolve a criação de um objeto que representa o componente que será testado usando a função __*render*__, permitindo que você selecione e teste elementos específicos da interface do usuário usando outros métodos da biblioteca como getByPlaceholder, getByText, getAllByText.

* Ação (Act):
Interage com o componente de alguma forma, simulando uma ação do usuário ou alterando o estado do componente. Por exemplo, usando a função __*fireEvent*__, que simulam um usuário interagindo com o componente, usando outros métodos da biblioteca como changeText e press.

* Verificar (Assert):
Verifica se o resultado da ação realizada foi o esperado. Geralmente é feito usando a função __*expect*__ para comparar valores ou estados. Existem vários métodos de comparação disponíveis no expect, como toBe, toEqual, toMatch, toContain, toBeGreaterThan, toBeLessThan, dentre outros. Cada um desses métodos pode ser usado para testar diferentes tipos de valores e comportamentos de componentes.


## REFERÊNCIAS

https://kenzie.com.br/blog/testes-automatizados/
https://reactnative.dev/docs/testing-overview#component-tests
https://callstack.github.io/react-native-testing-library/docs/getting-started
