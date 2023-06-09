import {Box, Container, Flex, Image} from 'native-base';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  logo: {
    width: "100%",
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 25,
  },

  applogo: {
    alignSelf:"flex-start",
    marginBottom: 15,
    color: "red",
  },

  footer: {
    marginBottom: 0,
  },
});

export default function Home({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Box>
        <Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" size="xl" />
        </Box>
        <Text>Prontuario medico</Text>
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
