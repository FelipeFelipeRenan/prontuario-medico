/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

function App(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  return (
    <View>
      <Text>Usuário</Text>
      <TextInput
        placeholder="Insira o seu usuário"
        onChangeText={username => setUsername(username)}
      />
      <Text>Senha</Text>
      <TextInput
        placeholder="Insira a sua senha"
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
      />
      <Button
        title="Autenticar"
        onPress={() => {
          if (username === 'lovelove' && password === 'felipe') {
            setStatus('Boa, campeao');
          } else {
            setStatus('Deu errado ein');
          }
        }}
      />
      <Text>{status}</Text>
    </View>
  );
}

export default App;
