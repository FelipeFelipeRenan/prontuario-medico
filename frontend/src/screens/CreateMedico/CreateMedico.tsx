import {useState} from 'react';
import {Button, Text, View, TextInput, Switch} from 'react-native';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';
import TabNavigator from '../../components/TabNavigator';
import {Input, Stack} from 'native-base';

export default function CreateMedico({navigation}: any): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sex, setSex] = useState(false);
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
      <Text>Informe o sexo:</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={sex ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={() => setSex(previousSex => !previousSex)}
        value={sex}
      />
      {sex?<Text>Feminino</Text>: <Text>Masculino</Text>}
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
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
