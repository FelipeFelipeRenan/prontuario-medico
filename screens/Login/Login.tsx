import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Dropdown from 'react-native-input-select';
export default function Login(): JSX.Element {
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');
  return (
    <View>
      <Dropdown
        label="Tipo de usuario"
        placeholder="Selecione o seu tipo de usuario"
        options={[
          {name: 'Médico', code: 'ME'},
          {name: 'Enfermeiro', code: 'EN'},
          {name: 'Paciente', code: 'PA'},
        ]}
        optionLabel={'name'}
        optionValue={'code'}
        selectedValue={user}
        onValueChange={(value: React.SetStateAction<string>) => setUser(value)}
        primaryColor={'green'}
      />
      <Text>{user}</Text>
      <TextInput
        placeholder="Senha"
        value={senha}
        secureTextEntry
        onChangeText={value => {
          setSenha(value);
        }}
      />
      <Button title="Entrar" onPress={() => {}} />
    </View>
  );
}
