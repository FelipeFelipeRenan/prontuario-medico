
import { useState } from 'react';
import { Button, Text, View, TextInput, Switch } from 'react-native';
import {Radio} from 'native-base'

import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';
import TabNavigator from '../../components/TabNavigator';
import {Input, Stack} from 'native-base';

export default function CreateMedico({navigation}: any): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sex, setSex] = useState('false');
  const [CRM, setCRM] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleButton = async () => {
    // username mín 3 characters
    // email min 6 characters
    // password min 6 characters
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      phoneNumber === ''
    ) {
      console.log('Alguns dados não foram completados');
      return;
    }

    // register user
    const res: any = await axioS
      .post('/api/users', {
        username,
        email,
        password,
        role: 1,
        accessLevel: 1,
        sex,
        phoneNumber,
      })
      .then(async response => {
        // specific infos
        const medico = await strapi.create('medicos', {
          idUser: response.data.id,
          CRM,
          specialty,
        });
        if (medico) {
          console.log('Medico criado com sucesso');
        }
      });
  };

  return (
    <View>
      <Stack space={4} w="100%" alignItems="center" marginTop={30}>
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        value={username}
        placeholder="Nome de usuário"
        onChangeText={value => {
          setUsername(value);
        }}
      />
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        placeholder="Email"
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
        inputMode="email"
      />
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        placeholder="Senha"
        value={password}
        secureTextEntry
        onChangeText={value => {
          setPassword(value);
        }}
      />
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        placeholder="Telefone"
        value={phoneNumber}
        onChangeText={value => {
          setPhoneNumber(value);
        }}
        inputMode="numeric"
      />

      <Input
        w={{
          base: '75%',
          md: '25%',
        }}

      <Text>Sexo</Text>
      <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={sex} onChange={nextValue => { setSex(nextValue);}}>
        <Radio value="false" my={1}>
          <Text>Masculino</Text>
        </Radio>
        <Radio value="true" my={1}>
          <Text>Feminino</Text>
        </Radio>
      </Radio.Group>
        placeholder="CRM"
        value={CRM}
        onChangeText={value => {
          setCRM(value);
        }}
      />
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        placeholder="Especialidade"
        value={specialty}
        onChangeText={value => {
          setSpecialty(value);
        }}
      />
      <Button title="Cadastrar" onPress={() => handleButton()} />
      <TabNavigator />
      </Stack>
    </View>
  );
}
