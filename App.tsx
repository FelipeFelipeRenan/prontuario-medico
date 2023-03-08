/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

function App(): JSX.Element {
  const [username, useUsername] = useState('');
  const [password, usePassword] = useState('');
  return (
    <View>
      <Text>Usuário</Text>
      <TextInput placeholder="Insira o seu usuário" />
      <Text>Senha</Text>
      <TextInput placeholder="Insira a sua senha" secureTextEntry={true} />
      <Button
        title="Autenticar"
        onPress={() => {
          if (username === '') {
            Alert.alert('Ei cara, insira o nome do usuario');
          }
          if (password === '') {
            Alert.alert('Ei cara, insira a senha');
          }
          if (username === '' && password === '') {
            Alert.alert('Insere as coisas ai, cara');
          } else {
            Alert.alert('Entrou pai');
          }
        }}
      />
    </View>
  );
}

export default App;
