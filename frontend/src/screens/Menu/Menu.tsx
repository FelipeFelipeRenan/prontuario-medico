import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextArea} from 'native-base';
import TabNavigator from '../../components/TabNavigator';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Neumorphism from 'react-native-neumorphism';

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
        <View style={styles.container}>
          <Button
            onPress={() => navigation.navigate('CreateMedico')}
            size={120}
            borderRadius={4}>
            <Text style={styles.cardText}> Cadastrar médico </Text>
          </Button>
          <Button
            onPress={() => navigation.navigate('CreateEnfermeira')}
            size={120}
            borderRadius={4}>
            <Text style={styles.cardText}>Cadastrar enfermeira(o)</Text>
          </Button>
          <Button
            onPress={() => navigation.navigate('CreatePaciente')}
            size={120}
            borderRadius={4}>
            <Text style={styles.cardText}>Cadastrar paciente</Text>
          </Button>
          <Button
            onPress={() => navigation.navigate('ShowUsers')}
            size={120}
            borderRadius={4}>
            <Text style={styles.cardText}>Ver usuários do sistema</Text>
          </Button>
          {/* Logout */}
          <Button size={120} borderRadius={4} onPress={() => logout()}>Sair</Button>
        </View>
      )}
      {/* Médico e enfermeira*/}
      {user && (user.accessLevel === 1 || user.accessLevel === 2) && (
        <View style={styles.container}>

            <Button onPress={() => navigation.navigate('CreateConsulta')}>
              Cadastrar consulta
            </Button>

            <Button onPress={() => navigation.navigate('ShowConsultas')}>
              Ver consultas
            </Button>

          {/* Logout */}
          <Button onPress={() => logout()}>Sair</Button>
        </View>
      )}
      {/*Paciente*/}
      {user && user.accessLevel === 3 && (
        <View style={styles.container}>

            <Button onPress={() => navigation.navigate('ShowProntuario')}>
              Consultar prontuário
            </Button>

          {/* Logout */}
          <Button size={120} borderRadius={4} onPress={() => logout()} alignSelf="center">
            Sair
          </Button>
        </View>
      )}
    </View>
  );
}
