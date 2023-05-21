import {useState} from 'react';
import {Button, Text, View, TextInput, Switch} from 'react-native';
import strapi from '../../strapi/strapi';
import axioS from '../../axios/axios';

export default function CreateUser({navigation}: any): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sex, setSex] = useState(false);
  

  const handleButton = async () => {
    if(username === '' || email === '' || password === '' || phoneNumber === ''){
      console.log('Alguns dados não foram completados');
      return;
    }

    // register user
    const res : any = await axioS.post('/api/users', {
      username,
      email,
      password,
      role : 1,
      accessLevel : 1,
      sex,
      phoneNumber,
    }).then(async (response) => {

      const user = await strapi.create('Usuario', {idUser : response.data.id})
      if(user) {
        console.log('Usuario criado com sucesso');
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
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={sex ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={() => setSex(previousSex => !previousSex)}
        value={sex}
      />
      <Button title="Cadastrar" onPress={() => handleButton()} />
    </View>
  );
}
