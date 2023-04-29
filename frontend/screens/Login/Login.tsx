import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import strapi from '../../strapi/strapi';
import axios from 'axios';

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
      // const {user, jwt} = await strapi.login({identifier : email, password : senha});
      // console.log(user)
      // console.log(jwt)
      const res = axios.post("http://192.168.1.17:1337/api/auth/local", {
        identifier : email,
        password : senha,
      })
      .then((res) => {
        console.log(res.data.user)
        console.log(res.data.token)
      }).catch(error => console.log(error))
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  }



  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={value => {
            setEmail(value);
          }}
          inputMode='email'
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          secureTextEntry
          onChangeText={value => {
            setSenha(value);
          }}
        />
        <Button
          title="Entrar"
          onPress={() => handleButton()}
        />
      </View>
    </View>
  );
}
