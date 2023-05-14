import React from 'react';
import { render, screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import Home from '../screens/Home/Home';

test('Renderização dos componentes da tela Home', async () => {
  //Renderiza o componente Login
  render(<Home />);       
  //Atribui o elemento que contém texto a uma constante
  const logoApp = screen.getByText('Logo do app');                        
  const nomeApp = screen.getByText('Nome do app');  
  const acessarSistema = screen.getByText('Acessar o sistema');    
  const copyRight = screen.getByText('Copyright 2023 - equipe');

 
  //Verifica se as messagens são definidas (ou seja, está presente na tela). Se os elementos não forem encontrados, o teste falhará.
  expect(logoApp).toBeDefined();
  expect(nomeApp).toBeDefined();
  expect(acessarSistema).toBeDefined();
  expect(copyRight).toBeDefined();
});
