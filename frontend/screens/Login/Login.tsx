import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import strapi from '../../strapi/strapi';
//import axios from 'axios';

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

  const handleButton = async () => {
    try {
      const {user, jwt} = await strapi.login({
        identifier: email,
        password: senha,
      });
      console.log(user);
      console.log(jwt);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={value => {
            setEmail(value);
          }}
          inputMode="email"
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          secureTextEntry
          onChangeText={value => {
            setSenha(value);
          }}
        />
        <Button title="Entrar" onPress={() => handleButton()} />
      </View>
    </View>
  );
}
