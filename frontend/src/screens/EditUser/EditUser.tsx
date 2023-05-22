import { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, Switch } from 'react-native';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';

export default function EditUser({route, navigation }: any): JSX.Element {
  const {id} = route.params;
  console.log(id)


  // procurar usuário pelo id e permitir a edição de dados
  return (
    <View>
      {id && <Text>{id}</Text>}
    </View>
  );
}
