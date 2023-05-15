import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Login from '../screens/Login/Login';

test('should render login screen', async () => {
  render(<Login />);

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Senha');
  const submitButton = screen.getByText('Entrar');

  expect(emailInput).toBeDefined();
  expect(passwordInput).toBeDefined();
  expect(submitButton).toBeDefined();
});
