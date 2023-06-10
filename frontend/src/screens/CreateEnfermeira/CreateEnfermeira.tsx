import {useState} from 'react';
import {Button, Text, View, TextInput, Switch} from 'react-native';
import {Input, Radio, Stack} from 'native-base';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';
import TabNavigator from '../../components/TabNavigator';

export default function CreateEnfermeira({navigation}: any): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sex, setSex] = useState('false');
  const [COREN, setCOREN] = useState('');
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
        accessLevel: 2,
        sex,
        phoneNumber,
      })
      .then(async response => {
        // specific infos
        const enfermeira = await strapi.create('enfermeiros', {
          idUser: response.data.id,
          COREN,
          specialty,
        });
        if (enfermeira) {
          console.log('Enfermeira criado com sucesso');
          navigation.navigate('Menu')
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
          placeholder="Nome de usuário"
          value={username}
          onChangeText={value => {
            setUsername(value);
          }}
          fontSize={15}
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
          fontSize={15}
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
          fontSize={15}
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
          fontSize={15}
        />

        <Text>Sexo</Text>
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          value={sex}
          onChange={nextValue => {
            setSex(nextValue);
          }}>
          <Radio value="false" my={1}>
            <Text>Masculino</Text>
          </Radio>
          <Radio value="true" my={1}>
            <Text>Feminino</Text>
          </Radio>
        </Radio.Group>

        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          placeholder="COREN"
          value={COREN}
          onChangeText={value => {
            setCOREN(value);
          }}
          fontSize={15}
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
          fontSize={15}
        />
        <Button title="Cadastrar" onPress={() => handleButton()} />
        <TabNavigator />
      </Stack>
    </View>
  );
}
