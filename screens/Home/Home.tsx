import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Home({navigation}: any): JSX.Element {
  return (
    <View>
      <Text>Logo do app</Text>
      <Text>Nome do app</Text>
      <Button
        title="Acessar o sistema"
        onPress={() => navigation.navigate('Login')}
      />
      <Text>Copyright 2023 - equipe</Text>
    </View>
  );
}
