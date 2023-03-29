/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Text, TextInput, View, Alert} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

function Tela1({navigation, route}): JSX.Element{
  return (
    <View>
      <Text>Usuário</Text>
      <TextInput placeholder="Seu nome de usuário" />
      <Text>Senha</Text>
      <TextInput
        placeholder="Sua senha"
        secureTextEntry={true}
        //onChangeText={novaSenha => setSenha(novaSenha)}
      />
      <Button
        title="Autenticar"
        onPress={() => {
          Alert.alert('Apertou!');
        }}
      />
    </View>
  );
}

function Home({navigation}): JSX.Element{
  return (
    <View>
      <Text>Tela principal</Text>
      <Button title="Next" onPress={() => navigation.navigate('Tela1')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  //const [senha, setSenha] = useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tela1" component={Tela1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
