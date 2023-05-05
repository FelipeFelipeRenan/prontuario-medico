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
        <Button title='Criar usuário'/>
      }
    </View>
  );
}
