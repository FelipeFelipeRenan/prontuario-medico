import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Stack} from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'roboto',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  container: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
    flexWrap: 'wrap',
  },
  cardText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
  },

  buttons: {
    textShadowColor: 'red',
  },
});

export default function Menu({navigation}: any): JSX.Element {
  const [user, setUser] = useState<any>(null);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await AsyncStorage.getItem('user');

      if (res) {
        setUser(JSON.parse(res));
      }
    };
    getUser();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Bem vindo ao menu</Text>
      
        
        {/* Administrador */}
        {user && user.accessLevel === 0 && (
          <Stack direction="column" space={4} w="100%" alignItems="center" marginTop={30}>
            <Button
              onPress={() => navigation.navigate('Cadastrar Médico')}
              size={120}
              borderRadius={4}>
              <Text style={styles.cardText}> Cadastrar médico </Text>
            </Button>
            <Button
              onPress={() => navigation.navigate('Cadastrar Enfermeira')}
              size={120}
              borderRadius={4}>
              <Text style={styles.cardText}>Cadastrar enfermeira(o)</Text>
            </Button>
            <Button
              onPress={() => navigation.navigate('Cadastrar Paciente')}
              size={120}
              borderRadius={4}>
              <Text style={styles.cardText}>Cadastrar paciente</Text>
            </Button>
            <Button
              onPress={() => navigation.navigate('Mostrar Usuários')}
              size={120}
              borderRadius={4}>
              <Text style={styles.cardText}>Ver usuários do sistema</Text>
            </Button>
            {/* Logout */}
            <Button size={120} borderRadius={4} onPress={() => logout()}>
              Sair
            </Button>
          </Stack>
        )}
        {/* Médico e enfermeira*/}
        {user && (user.accessLevel === 1 || user.accessLevel === 2) && (
          <Stack direction="column" space={4} w="100%" alignItems="center" marginTop={30}>
            <Button
              onPress={() => navigation.navigate('Cadastrar Consulta')}
              size={120}
              borderRadius={4}>
              <Text style={styles.cardText}>Cadastrar consulta</Text>
            </Button>

            <Button
              onPress={() => navigation.navigate('Mostrar Consultas')}
              size={120}
              borderRadius={4}>
              <Text style={styles.cardText}>Ver consultas</Text>
            </Button>

            {/* Logout */}
            <Button onPress={() => logout()} size={120} borderRadius={4}>
              <Text style={styles.cardText}>Sair</Text>
            </Button>
          </Stack>
        )}
        {/*Paciente*/}
        {user && user.accessLevel === 3 && (
          <Stack direction="column" space={4} w="100%" alignItems="center" marginTop={30}> 
            <Button
              size={120}
              borderRadius={4}
              onPress={() => navigation.navigate('Mostrar Prontuario')}>
              <Text style={styles.cardText}>Consultar prontuário</Text>
            </Button>

            {/* Logout */}
            <Button
              size={120}
              borderRadius={4}
              onPress={() => logout()}
              alignSelf="center">
              <Text style={styles.cardText}>Sair</Text>
            </Button>
          </Stack>
        )}
    </View>
  );
}
