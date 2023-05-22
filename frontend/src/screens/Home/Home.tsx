import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  footer: {
    marginBottom: 0,
  },
});

export default function Home({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text>Logo do app</Text>
        <Text>Nome do app</Text>
      </View>
      <Button
        title="Acessar o sistema"
        onPress={() => navigation.navigate('Login')}
      />
      <View style={styles.footer}>
        <Text>Copyright 2023 - equipe</Text>
      </View>
    </View>
  );
}
