import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import strapi from '../../utils/strapi/strapi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Input, InputGroup, InputLeftAddon, Stack} from 'native-base';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default function Login({navigation}: any): JSX.Element {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [error, setError] = useState('');

  const [show, setShow] = useState(false);

  const handleButton = async () => {
    try {
      // const res = await axios.get('https://www.google.com')
      // console.log(res)
      if (email === '' || senha === '') {
        setError('Email e/ou senha não inseridos');
        return;
      }

      const {user, jwt} = await strapi.login({
        identifier: email,
        password: senha,
      });
      if (user) {
        // console.log(user.id)
        await AsyncStorage.setItem('user', JSON.stringify(user));
        // console.log(await AsyncStorage.getItem("user"))
        navigation.navigate('Menu');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {error && <Text>{error}</Text>}
      <View style={styles.container}>
        <Stack space={4} w="100%" alignItems="center">
          <InputLeftAddon children={'https://'} />
          <Input
            w={{
              base: '70%',
              md: '100%',
            }}
            placeholder="Email"
            value={email}
            onChangeText={value => {
              setEmail(value);
            }}
            inputMode="email"
          />
          <Input
            placeholder="Senha"
            value={senha}
            secureTextEntry
            onChangeText={value => {
              setSenha(value);
            }}
          />
        </Stack>

        <Button title="Entrar" onPress={() => handleButton()} />
      </View>
    </View>
  );
}
