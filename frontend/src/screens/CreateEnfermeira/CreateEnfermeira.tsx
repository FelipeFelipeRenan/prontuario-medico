import { useState } from 'react';
import { Button, Text, View, TextInput, Switch } from 'react-native';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';
import TabNavigator from '../../components/TabNavigator';

export default function CreateEnfermeira({ navigation }: any): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sex, setSex] = useState(false);
  const [COREN, setCOREN] = useState('');
  const [specialty, setSpecialty] = useState('');



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
      accessLevel: 2,
      sex,
      phoneNumber,
    }).then(async (response) => {
      // specific infos
      const enfermeira = await strapi.create('enfermeiros', { idUser: response.data.id, COREN, specialty })
      if (enfermeira) {
        console.log('Enfermeira criado com sucesso');
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
      <Text>Informe o sexo: falso : homem, verdadeiro : mulher</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={sex ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={() => setSex(previousSex => !previousSex)}
        value={sex}
      />
      <TextInput
        placeholder="COREN"
        value={COREN}
        onChangeText={value => {
          setCOREN(value);
        }}
      />
      <TextInput
        placeholder="Especialidade"
        value={specialty}
        onChangeText={value => {
          setSpecialty(value);
        }}
      />
      <Button title="Cadastrar" onPress={() => handleButton()} />
      <TabNavigator/>
    </View>
  );
}
