import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import App from '../App';

test('Navegação de tela: Home para login', () => {
  const {getByText, getByPlaceholderText} = render(<App />); //Renderiza o componente App e importa o método getByText
  const acessarSistemaButton = getByText('Acessar o sistema'); //Atribui o elemento que contém texto "Acessar o sistema" encontrado. (no caso é um botão)

  fireEvent.press(acessarSistemaButton); //simula clique do botão

  const emailInput = getByPlaceholderText('Email'); //Atribui o elemento de entrada que contém o placeholder(texto de ajuda exibido dentro do campo) "Email" presente na tela

  expect(emailInput).toBeDefined(); //Verifica se o elemento emailInput é definido (ou seja, está presente na tela). Se o elemento não for encontrado, o teste falhará.
});

test('Navegação de tela: logar para menu', async () => {
  const {getByPlaceholderText, getByText} = render(<App />); //Renderiza o componente App e importa o método getByPlaceholderText, getByText

  const emailInput = getByPlaceholderText('Email'); //Atribui o elemento de entrada que contém o placeholder "Email" presente na tela
  const passwordInput = getByPlaceholderText('Senha'); //Atribui o elemento de entrada que contém o placeholder "Senha" presente na tela
  const loginButton = getByText('Entrar'); //Atribui o elemento que contém texto "Entrar" encontrado. (no caso é um botão)

  fireEvent.changeText(emailInput, 'user@email.com'); //simula entrada no input email
  fireEvent.changeText(passwordInput, '12345'); //simula entrada no input senha
  fireEvent.press(loginButton); //simula clique no botão entrar

  const welcomeMessage = await waitFor(() => getByText('Bem vindo ao menu')); //Aguarda até que o texto "Bem vindo ao menu" seja exibido na tela, e armazena o resultado

  expect(welcomeMessage).toBeDefined(); //Verifica se o elemento emailInput é definido (ou seja, está presente na tela). Se o elemento não for encontrado, o teste falhará.
});
