import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';
import TabNavigator from '../../components/TabNavigator';

import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'roboto',
    fontSize: 20,
    alignSelf: 'center',
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
    flexWrap: 'wrap',
  },
});

export default function Menu({navigation}: any): JSX.Element {
  const [user, setUser] = useState<any>(null);


  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
    }


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
            size={79}
            borderRadius={4}>
            Cadastrar médico
          </Button>
          <Button
            onPress={() => navigation.navigate('CreateEnfermeira')}
            size={79}>
            Cadastrar enfermeira(o)
          </Button>
          <Button
            onPress={() => navigation.navigate('CreatePaciente')}
            size={79}>
            Cadastrar paciente
          </Button>

          <Button onPress={() => navigation.navigate('ShowUsers')} size={79}>
            Ver usuários do sistema
          </Button>
        </View>
      )}
      {/* Médico e enfermeira*/}
      {user && (user.accessLevel === 1 || user.accessLevel === 2) && (
        <View>
          <View>
            <Button onPress={() => navigation.navigate('CreateConsulta')}>
              Cadastrar consulta
            </Button>
          </View>
          <View>
            <Button onPress={() => navigation.navigate('ShowConsultas')}>
              Ver consultas
            </Button>
          </View>
        </View>
      )}
      {/*Paciente*/}
      {user && user.accessLevel === 3 && (
        <View>
          <View>
            <Button onPress={() => navigation.navigate('ShowProntuario')}>
              Consultar prontuário
            </Button>
          </View>
        </View>
      )}

      {/* Logout */}
      <Button onPress={() => logout()}>Sair</Button>


    </View>
  );
}
