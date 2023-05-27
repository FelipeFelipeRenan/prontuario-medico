import React, { useEffect, useState } from 'react';
import {Button, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Menu({navigation}: any): JSX.Element {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const res = await AsyncStorage.getItem("user");
      

      if(res){
        setUser(JSON.parse(res))
      }
    }
    getUser();
  }, []);
  
  return (
    <View>
      <Text>Bem vindo ao menu</Text>
      {/* Administrador */}
      {user && user.accessLevel===0 &&
        <View>
          <View>
            <Button title='Cadastrar médico' onPress={() => navigation.navigate('CreateMedico')}/>
            <Button title='Cadastrar enfermeira(o)' onPress={() => navigation.navigate('CreateEnfermeira')}/>
            <Button title='Cadastrar paciente' onPress={() => navigation.navigate('CreatePaciente')}/>
          </View>
          <View>
            <Button title='Ver usuários do sistema' onPress={() => navigation.navigate('ShowUsers')}/>
          </View>
        </View>
      }
      {/* Médico e enfermeira*/}
      {user && (user.accessLevel === 1 || user.accessLevel === 2) &&
        <View>
          <View>
            <Button title='Cadastrar consulta' onPress={() => navigation.navigate('CreateConsulta')}/>
          </View>
          <View>
            <Button title='Editar consulta' onPress={() => navigation.navigate('')}/>
          </View>
        </View>
      }
      {/*Paciente*/}
      {user && user.accessLevel === 3 &&
        <View>
          <View>
            <Button title='Consultar prontuário' onPress={() => navigation.navigate('ReadProntuario')}/>
          </View>
        </View>
      }
    </View>
  );
}
