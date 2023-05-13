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
  }, [])

  return (
    <View>
      <Text>Bem vindo ao menu</Text>
      {user && user.accessLevel===0 &&
        <View>
          <View>
            <Button title='Cadastrar médico'/>
            <Button title='Cadastrar enfermeira(o)'/>
            <Button title='Cadastrar paciente'/>
          </View>
          <View>
            <Button title='Editar médico'/>
            <Button title='Editar enfermeira(o)'/>
            <Button title='Editar paciente'/>
          </View>
          <View>
            <Button title='Ver usuários do sistema'/>
          </View>
        </View>
      }
    </View>
  );
}
