import {Box} from 'native-base';
import React from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import logo from '../../props/download.jpeg'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  logo: {
    marginTop: 100,
    marginLeft: 10,
    MarginRight: 10,
  },

  applogo: {
    marginBottom: 15,
    color: 'red',
  },
  appName: {
    alignSelf: 'center',
    fontFamily: 'roboto',
    fontSize: 25,
    marginLeft: 10,
    marginRight:10,
    marginTop:5,
    textAlign: "center"
  },

  footer: {
    marginBottom: 10,
  },
});

export default function Home({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Box alignSelf="center">
          {/* <Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" size="xl" /> */}
    <Image source={logo} />
        </Box>
        <Text style={styles.appName}>Sistema de Gerenciamento Médico</Text>
      </View>
      <View>
        <Box>
          <Button
            title="Acessar o sistema"
            onPress={() => navigation.navigate('Login')}
          />
        </Box>
      </View>
      <View style={styles.footer}>
        <Text>Copyright 2023 - equipe</Text>
      </View>
    </View>
  );
}
