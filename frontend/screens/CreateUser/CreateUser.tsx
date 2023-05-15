import React from 'react';
import {Button, Text, View} from 'react-native';

export default function CreateUser({navigation}: any): JSX.Element {
  return (
    <View>
      <View>
        <Text>Logo do app</Text>
        <Text>Nome do app</Text>
      </View>
      <Button
        title="Acessar o sistema"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
