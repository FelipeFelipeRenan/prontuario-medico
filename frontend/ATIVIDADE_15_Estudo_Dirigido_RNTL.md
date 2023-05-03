# CC0043 - PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS - UFCA

## Aborde os tópicos:
- O que são testes automatizados
- Testes automatizados para React Native
- React Native Testing Library (instalação, exemplos)
- Como utilizar no seu projeto

## O QUE SÃO TESTES AUTOMATIZADOS
Testes automatizados são programas que executam testes em softwares que estão em construção de uma forma padronizada, sem ser necessário a intervenção humana. Pois, tais testes possuem funcionalidades capazes de testar de forma automática todos os aspectos de uma plataforma, com o intuito de assegurar um desempenho adequado. 

Tal procedimento, gera muito mais eficácia e agilidade na etapa de testes, permitindo que o profissional encontre de uma maneira mais fácil as falhas de segurança, bugs e demais erros que possam comprometer o uso da aplicação.

## TESTES AUTOMATIZADOS PARA REACT NATIVE

## REACT NATIVE TESTING LIBRARY (INSTALAÇÃO, EXEMPLOS)
A React Native Testing Library (RNTL) é uma solução leve para testar componentes React Native. Ela fornece funções utilitárias leves, de forma a incentivar melhores práticas de teste.

### INSTALAÇÃO
Abra um terminal na pasta do seu projeto e execute o seguinte comando:

__Usando yarn__
```js
 yarn add --dev @testing-library/react-native
```

__Usando npm__
```js
 npm install --save-dev @testing-library/react-native
```

### JEST MATCHERS ADICIONAIS
Para usar os jest matchers específicos do React Native uma biblioteca necessita ser instalada, para isso abra o terminal na pasta do projeto e execute o seguinte comando:

__Usando yarn__
```js
 yarn add --dev @testing-library/jest-native
```

__Usando npm__
```js
 npm install --save-dev @testing-library/jest-native
```

### EXEMPLOS

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



## COMO UTILIZAR NO SEU PROJETO


## REFERÊNCIAS

https://kenzie.com.br/blog/testes-automatizados/
