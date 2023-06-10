import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import strapi from '../../utils/strapi/strapi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  Icon,
  Input,
  Pressable,
  Stack,
} from 'native-base';

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

  const [clicked, setClicked] = useState(false);

  const handleButton = async () => {
    setClicked(true);
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
      <View style={styles.container}>
        <Stack space={4} w="100%" alignItems="center">
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            InputLeftElement={<Text>Email</Text>}
            placeholder="exemplo@email.com.br"
            onChangeText={value => {
              setEmail(value);
            }}
            fontSize={18}
          />
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            type={show ? 'text' : 'password'}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Text>revelar</Text>
              </Pressable>
            }
            placeholder="Password"
            onChangeText={value => {
              setSenha(value);
            }}
            fontSize={18}
          />
          {error && <Text>{error}</Text>}
        </Stack>
        {clicked && !error ? (
          <Button isLoading>Button</Button>
        ) : (
          <Button onPress={() => handleButton()}> Entrar </Button>
        )}
      </View>
    </View>
  );
}
