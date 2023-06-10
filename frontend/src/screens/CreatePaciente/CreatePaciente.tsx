import { useState } from 'react';
import { Button, Text, View, TextInput} from 'react-native';
import {Radio} from 'native-base'

import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';
import TabNavigator from '../../components/TabNavigator';

export default function CreatePaciente({ navigation }: any): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sex, setSex] = useState('false');
  const [address, setAddress] = useState('');



  const handleButton = async () => {
    // username mín 3 characters
    // email min 6 characters
    // password min 6 characters
    if (username === '' || email === '' || password === '' || phoneNumber === '') {
      console.log('Alguns dados não foram completados');
      return;
    }

    // register user
    const res: any = await axioS.post('/api/users', {
      username,
      email,
      password,
      role: 1,
      accessLevel: 3,
      sex,
      phoneNumber,
    }).then(async (response) => {
      // specific infos
      const paciente = await strapi.create('pacientes', { idUser: response.data.id, address })
      if (paciente) {
        console.log('Paciente criado com sucesso');
      }
    });

  }

  return (
    <View>
      <TextInput
        placeholder="Nome de usuário"
        value={username}
        onChangeText={value => {
          setUsername(value);
        }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
        inputMode="email"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        secureTextEntry
        onChangeText={value => {
          setPassword(value);
        }}
      />
      <TextInput
        placeholder="Telefone"
        value={phoneNumber}
        onChangeText={value => {
          setPhoneNumber(value);
        }}
        inputMode="numeric"
      />

      <Text>Sexo</Text>
      <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={sex} onChange={nextValue => { setSex(nextValue);}}>
        <Radio value="false" my={1}>
          <Text>Masculino</Text>
        </Radio>
        <Radio value="true" my={1}>
          <Text>Feminino</Text>
        </Radio>
      </Radio.Group>

      <TextInput
        placeholder="Endereço"
        value={address}
        onChangeText={value => {
          setAddress(value);
        }}
      />
      <Button title="Cadastrar" onPress={() => handleButton()} />
      <TabNavigator/>
    </View>
  );
}
